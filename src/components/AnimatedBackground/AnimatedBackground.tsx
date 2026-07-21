import React, { useRef, useEffect } from 'react';

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animId: number;
    let W: number, H: number;
    const MOUSE = { x: 0, y: 0 };
    const PARTICLE_COUNT = 80;
    const CONNECTION_DIST = 140;

    const onMouseMove = (e: MouseEvent) => { 
      MOUSE.x = e.clientX; 
      MOUSE.y = e.clientY; 
    };
    window.addEventListener('mousemove', onMouseMove);

    function resize() {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      z: Math.random() * 400 + 100,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      vz: (Math.random() - 0.5) * 0.4,
      hue: Math.random() * 80 + 210,
    }));

    function project(p: any) {
      const fov = 400;
      const scale = fov / (fov + p.z);
      return {
        sx: p.x * scale + (W / 2) * (1 - scale),
        sy: p.y * scale + (H / 2) * (1 - scale),
        scale,
      };
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      const gx = MOUSE.x || W / 2;
      const gy = MOUSE.y || H / 2;
      const grad = ctx!.createRadialGradient(gx, gy, 0, gx, gy, Math.max(W, H) * 0.85);
      grad.addColorStop(0, 'rgba(99,102,241,0.05)');
      grad.addColorStop(0.5, 'rgba(34,211,238,0.02)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, W, H);

      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.z += p.vz;

        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        if (p.z < 50) p.z = 500; if (p.z > 500) p.z = 50;

        const { sx, sy, scale } = project(p);
        const dx = MOUSE.x - sx, dy = MOUSE.y - sy;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 200) { p.vx += dx * 0.00004; p.vy += dy * 0.00004; }

        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 1.0) { p.vx /= spd; p.vy /= spd; }

        const r = scale * 2.5;
        const alpha = scale * 0.85;
        const glow = ctx!.createRadialGradient(sx, sy, 0, sx, sy, r * 8);
        glow.addColorStop(0, `hsla(${p.hue},90%,70%,${alpha})`);
        glow.addColorStop(1, `hsla(${p.hue},90%,70%,0)`);

        ctx!.beginPath();
        ctx!.arc(sx, sy, r * 8, 0, Math.PI * 2);
        ctx!.fillStyle = glow;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(sx, sy, r, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${p.hue},90%,80%,${alpha})`;
        ctx!.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        const a = project(particles[i]);
        for (let j = i + 1; j < particles.length; j++) {
          const b = project(particles[j]);
          const dx = a.sx - b.sx, dy = a.sy - b.sy;
          const dst = Math.sqrt(dx * dx + dy * dy);
          if (dst < CONNECTION_DIST) {
            const opacity = (1 - dst / CONNECTION_DIST) * 0.28 * Math.min(a.scale, b.scale);
            const hue = (particles[i].hue + particles[j].hue) / 2;
            ctx!.beginPath();
            ctx!.moveTo(a.sx, a.sy);
            ctx!.lineTo(b.sx, b.sy);
            ctx!.strokeStyle = `hsla(${hue},80%,65%,${opacity})`;
            ctx!.lineWidth = 0.7 * Math.min(a.scale, b.scale);
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]" 
      aria-hidden="true" 
    />
  );
}

export default AnimatedBackground;
