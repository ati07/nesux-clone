"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ─── Helpers ─── */
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/* ─── Component ─── */
export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* ──── Scene setup ──── */
    const scene = new THREE.Scene();

    // Subtle fog for depth perception
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.008);

    const w = container.clientWidth;
    const h = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    /* ──── Nodes ──── */
    const NODE_COUNT = 380;
    const positions = new Float32Array(NODE_COUNT * 3);
    const colors = new Float32Array(NODE_COUNT * 3);
    const nodeSizes = new Float32Array(NODE_COUNT);
    const nodeVelocities: { x: number; y: number; z: number }[] = [];

    // Spread: flattened disc
    const spreadX = 42;
    const spreadY = 24;
    const spreadZ = 18;

    // Hub nodes (brighter, bigger, more central)
    const hubCount = 12;
    const hubIndices = new Set<number>();
    while (hubIndices.size < hubCount) {
      hubIndices.add(Math.floor(Math.random() * NODE_COUNT));
    }

    for (let i = 0; i < NODE_COUNT; i++) {
      const i3 = i * 3;
      const isHub = hubIndices.has(i);

      // Clustered toward center with density falloff
      const r = Math.random();
      const radiusFactor = isHub
        ? Math.pow(r, 1.8) * 0.35
        : Math.pow(r, 0.65);

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = Math.sin(phi) * Math.cos(theta) * spreadX * radiusFactor;
      positions[i3 + 1] = Math.sin(phi) * Math.sin(theta) * spreadY * radiusFactor;
      positions[i3 + 2] = Math.cos(phi) * spreadZ * radiusFactor;

      // Color: teal → cyan → hint of emerald
      const hue = isHub
        ? 0.42 + Math.random() * 0.08
        : 0.44 + Math.random() * 0.14;
      const sat = isHub ? 0.15 + Math.random() * 0.15 : 0.2 + Math.random() * 0.3;
      const light = isHub
        ? 0.2 + Math.random() * 0.15
        : 0.15 + Math.random() * 0.25;
      const color = new THREE.Color().setHSL(hue, sat, light);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      nodeSizes[i] = isHub
        ? 0.12 + Math.random() * 0.15
        : 0.06 + Math.random() * 0.1;

      // Floating velocity (very gentle)
      nodeVelocities.push({
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.003,
        z: (Math.random() - 0.5) * 0.002,
      });
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    nodeGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    nodeGeometry.setAttribute("size", new THREE.BufferAttribute(nodeSizes, 1));

    /* ──── Mouse ──── */
    let mouseX = 0;
    let mouseY = 0;
    let mouseActivated = false;
    const currentRot = { x: 0, y: 0 };

    const handleMouse = (e: MouseEvent) => {
      const mx = (e.clientX / window.innerWidth) * 2 - 1;
      const my = -(e.clientY / window.innerHeight) * 2 + 1;
      // On first mouse move, snap the uniform directly so glow works immediately
      if (!mouseActivated) {
        mouseActivated = true;
        const mv = nodeMaterial.uniforms.uMouse.value as THREE.Vector2;
        mv.set(mx, my);
      }
      mouseX = mx;
      mouseY = my;
    };
    window.addEventListener("mousemove", handleMouse);

    // Custom shader — soft glowing sprites with size attenuation + mouse glow
    const nodeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uMouse: { value: new THREE.Vector2(99, 99) },
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vGlow;
        uniform float uTime;
        uniform float uPixelRatio;
        uniform vec2 uMouse;

        void main() {
          vColor = color;
          vec3 pos = position;

          // Subtle floating
          float wave = sin(uTime * 0.25 + position.x * 1.8 + position.y * 1.8) * 0.4;
          pos.y += wave * 0.03;
          pos.x += cos(uTime * 0.2 + position.z * 1.5) * 0.02;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          float baseSize = size * uPixelRatio * (160.0 / -mvPosition.z);

          // Project to screen-space NDC to compare with mouse position
          vec4 projected = projectionMatrix * mvPosition;
          vec2 ndc = projected.xy / projected.w;

          // Distance from this node's screen position to the cursor
          float dist = distance(ndc, uMouse);

          // Glow + zoom factor
          float influence = 1.0 - smoothstep(0.0, 0.6, dist);
          vGlow = influence;

          // Zoom effect: push node toward camera so it bulges out
          pos.z += influence * 8.0;

          // Recompute position with the zoom offset
          vec4 zoomedMv = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = baseSize * (1.0 + influence * 5.0);
          gl_PointSize = clamp(gl_PointSize, 1.0, 200.0);
          gl_Position = projectionMatrix * zoomedMv;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vGlow;

        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;

          // Bright core with soft glow falloff
          float core = 1.0 - smoothstep(0.0, 0.35, d);
          float glow = exp(-d * 5.5) * 0.55;

          float alpha = core * 0.9 + glow;

          // Dramatic glow boost near mouse cursor
          vec3 finalColor = vColor + vGlow * vec3(0.3, 0.5, 0.7); // subtle cyan-white tint
          float glowBoost = 1.0 + vGlow * 0.4;
          alpha *= glowBoost;

          // Extra outer glow ring when near cursor
          float halo = exp(-d * 3.0) * vGlow * 0.2;
          alpha += halo;

          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    /* ──── Connection Lines ──── */
    const MAX_DIST = 9.0;
    const linePositions: number[] = [];
    const lineColors: number[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const i3 = i * 3;
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const j3 = j * 3;
        const dx = positions[i3] - positions[j3];
        const dy = positions[i3 + 1] - positions[j3 + 1];
        const dz = positions[i3 + 2] - positions[j3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < MAX_DIST) {
          const t = 1 - dist / MAX_DIST;
          const fade = t * t * t; // cubic for more natural falloff

          linePositions.push(positions[i3], positions[i3 + 1], positions[i3 + 2]);
          linePositions.push(positions[j3], positions[j3 + 1], positions[j3 + 2]);

          const hue = 0.44 + fade * 0.1;
          const sat = 0.3 + fade * 0.5;
          const light = 0.05 + fade * 0.18;
          const baseColor = new THREE.Color().setHSL(hue, sat, light);
          lineColors.push(baseColor.r, baseColor.g, baseColor.b);
          lineColors.push(baseColor.r, baseColor.g, baseColor.b);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.30,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    /* ──── Visibility detection — pause when off-screen ──── */
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    visibilityObserver.observe(container);

    /* ──── Animation ──── */
    let rafId: number;
    let time = 0;

    const animate = () => {
      if (!isVisible || document.hidden) {
        rafId = requestAnimationFrame(animate);
        return;
      }
      time += 0.008;
      nodeMaterial.uniforms.uTime.value = time;

      // Directly update mouse uniform every frame
      const mv = nodeMaterial.uniforms.uMouse.value as THREE.Vector2;
      // Lerp smoothly toward current mouse position for trailing effect
      mv.x += (mouseX - mv.x) * 0.15;
      mv.y += (mouseY - mv.y) * 0.15;

      // Mouse-follow tilt: whole structure rotates toward cursor (zoom feel)
      const targetRotX = mouseY * 0.08;
      const targetRotY = mouseX * 0.08;
      currentRot.x = lerp(currentRot.x, targetRotX, 0.03);
      currentRot.y = lerp(currentRot.y, targetRotY, 0.03);

      // Auto-rotation on top of mouse tilt
      const autoRotY = Math.sin(time * 0.25) * 0.15;
      const autoRotX = Math.cos(time * 0.3) * 0.08;
      nodePoints.rotation.x = autoRotX + currentRot.x;
      nodePoints.rotation.y = autoRotY + currentRot.y;
      lineSegments.rotation.x = autoRotX + currentRot.x;
      lineSegments.rotation.y = autoRotY + currentRot.y;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    /* ──── Resize ──── */
    const handleResize = () => {
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      camera.aspect = cw / ch;
      camera.updateProjectionMatrix();
      renderer.setSize(cw, ch);
    };
    window.addEventListener("resize", handleResize);

    /* ──── Tab visibility ──── */
    const handleVisChange = () => { isVisible = !document.hidden; };
    document.addEventListener("visibilitychange", handleVisChange);

    /* ──── Cleanup ──── */
    return () => {
      cancelAnimationFrame(rafId);
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisChange);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
    />
  );
}
