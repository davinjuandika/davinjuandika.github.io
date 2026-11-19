<template>
  <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#070913]">
    <!-- Subtle Pixel Dot Grid -->
    <div class="absolute inset-0 pixel-grid opacity-30"></div>

    <!-- Ambient Nebula Glows -->
    <div
      class="absolute top-1/4 left-1/3 w-[440px] h-[440px] rounded-full opacity-15 blur-3xl"
      style="background: radial-gradient(circle, #7c3aed 0%, transparent 70%)"
    ></div>
    <div
      class="absolute bottom-1/3 left-1/4 w-[380px] h-[380px] rounded-full opacity-10 blur-3xl"
      style="background: radial-gradient(circle, #06d6a0 0%, transparent 70%)"
    ></div>

    <!-- Twinkling Pixel Stars (115 stars) -->
    <span
      v-for="star in stars"
      :key="star.id"
      class="absolute block animate-twinkle"
      :style="{
        left: star.x + '%',
        top: star.y + '%',
        width: star.size + 'px',
        height: star.size + 'px',
        backgroundColor: star.color,
        boxShadow: star.glow,
        animationDuration: star.duration + 's',
        animationDelay: star.delay + 's'
      }"
    ></span>

    <!-- 4-Point Pixel Sparkle Stars -->
    <svg
      v-for="sparkle in sparkles"
      :key="'sp-' + sparkle.id"
      class="absolute animate-twinkle"
      :style="{
        left: sparkle.x + '%',
        top: sparkle.y + '%',
        width: sparkle.size + 'px',
        height: sparkle.size + 'px',
        animationDuration: sparkle.duration + 's',
        animationDelay: sparkle.delay + 's'
      }"
      viewBox="0 0 5 5"
      fill="none"
      shape-rendering="crispEdges"
    >
      <rect x="2" y="0" width="1" height="5" :fill="sparkle.color" />
      <rect x="0" y="2" width="5" height="1" :fill="sparkle.color" />
      <rect x="2" y="2" width="1" height="1" fill="#FFFFFF" />
    </svg>

    <!-- TOP-LEFT: Quarter-Circle Pixel Sun -->
    <div
      class="absolute top-0 left-0 w-36 h-36 sm:w-52 sm:h-52 sun-pulse drop-shadow-[0_0_32px_rgba(251,146,60,0.45)]"
    >
      <svg viewBox="0 0 18 18" class="w-full h-full" shape-rendering="crispEdges">
        <g fill="#EA580C">
          <rect x="0" y="0" width="16" height="4" />
          <rect x="0" y="4" width="15" height="3" />
          <rect x="0" y="7" width="14" height="2" />
          <rect x="0" y="9" width="13" height="1" />
          <rect x="0" y="10" width="12" height="1" />
          <rect x="0" y="11" width="11" height="1" />
          <rect x="0" y="12" width="10" height="1" />
          <rect x="0" y="13" width="9" height="1" />
          <rect x="0" y="14" width="7" height="1" />
          <rect x="0" y="15" width="4" height="1" />
        </g>
        <g fill="#F59E0B">
          <rect x="0" y="0" width="14" height="4" />
          <rect x="0" y="4" width="13" height="3" />
          <rect x="0" y="7" width="12" height="2" />
          <rect x="0" y="9" width="11" height="1" />
          <rect x="0" y="10" width="10" height="1" />
          <rect x="0" y="11" width="9" height="1" />
          <rect x="0" y="12" width="7" height="1" />
          <rect x="0" y="13" width="5" height="1" />
        </g>
        <g fill="#FFD166">
          <rect x="0" y="0" width="11" height="4" />
          <rect x="0" y="4" width="10" height="3" />
          <rect x="0" y="7" width="9" height="2" />
          <rect x="0" y="9" width="7" height="1" />
          <rect x="0" y="10" width="5" height="1" />
        </g>
        <g fill="#FEF3C7">
          <rect x="0" y="0" width="7" height="4" />
          <rect x="0" y="4" width="6" height="2" />
          <rect x="0" y="6" width="4" height="1" />
        </g>
        <rect x="17" y="2" width="1" height="1" fill="#FFD166" />
        <rect x="16" y="7" width="2" height="1" fill="#F59E0B" />
        <rect x="14" y="11" width="1" height="1" fill="#FFD166" />
        <rect x="15" y="12" width="1" height="1" fill="#F59E0B" />
        <rect x="11" y="14" width="1" height="1" fill="#FFD166" />
        <rect x="12" y="15" width="1" height="1" fill="#F59E0B" />
        <rect x="7" y="16" width="1" height="2" fill="#F59E0B" />
        <rect x="2" y="17" width="1" height="1" fill="#FFD166" />
      </svg>
    </div>

    <!-- BOTTOM-RIGHT: Quarter-Circle Pixel Earth -->
    <div
      class="absolute bottom-0 right-0 w-44 h-44 sm:w-64 sm:h-64 drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]"
    >
      <svg viewBox="0 0 18 18" class="w-full h-full" shape-rendering="crispEdges">
        <g fill="#38BDF8">
          <rect x="14" y="0" width="4" height="1" />
          <rect x="11" y="1" width="7" height="1" />
          <rect x="9" y="2" width="9" height="1" />
          <rect x="7" y="3" width="11" height="1" />
          <rect x="6" y="4" width="12" height="1" />
          <rect x="5" y="5" width="13" height="1" />
          <rect x="4" y="6" width="14" height="1" />
          <rect x="3" y="7" width="15" height="2" />
          <rect x="2" y="9" width="16" height="2" />
          <rect x="1" y="11" width="17" height="3" />
          <rect x="0" y="14" width="18" height="4" />
        </g>
        <g fill="#1D4ED8">
          <rect x="14" y="1" width="4" height="1" />
          <rect x="11" y="2" width="7" height="1" />
          <rect x="9" y="3" width="9" height="1" />
          <rect x="7" y="4" width="11" height="1" />
          <rect x="6" y="5" width="12" height="1" />
          <rect x="5" y="6" width="13" height="1" />
          <rect x="4" y="7" width="14" height="2" />
          <rect x="3" y="9" width="15" height="2" />
          <rect x="2" y="11" width="16" height="3" />
          <rect x="1" y="14" width="17" height="4" />
        </g>
        <g fill="#2563EB">
          <rect x="12" y="3" width="5" height="2" />
          <rect x="8" y="6" width="6" height="3" />
          <rect x="4" y="12" width="7" height="4" />
        </g>
        <g fill="#10B981">
          <rect x="13" y="2" width="3" height="1" />
          <rect x="11" y="3" width="5" height="2" />
          <rect x="12" y="5" width="3" height="1" />
          <rect x="8" y="8" width="4" height="1" />
          <rect x="7" y="9" width="7" height="2" />
          <rect x="8" y="11" width="8" height="2" />
          <rect x="10" y="13" width="6" height="2" />
          <rect x="12" y="15" width="5" height="2" />
          <rect x="3" y="13" width="3" height="1" />
          <rect x="2" y="14" width="5" height="2" />
          <rect x="3" y="16" width="4" height="2" />
        </g>
        <g fill="#34D399">
          <rect x="12" y="3" width="2" height="1" />
          <rect x="9" y="10" width="4" height="1" />
          <rect x="11" y="12" width="3" height="1" />
          <rect x="3" y="15" width="2" height="1" />
        </g>
        <g fill="#F8FAFC">
          <rect x="9" y="5" width="3" height="1" />
          <rect x="5" y="8" width="3" height="1" />
          <rect x="14" y="8" width="3" height="1" />
          <rect x="6" y="13" width="3" height="1" />
          <rect x="9" y="16" width="4" height="1" />
        </g>
      </svg>
    </div>

    <!-- Falling Pixel Meteors -->
    <div class="meteor-wrapper meteor-1">
      <svg viewBox="0 0 24 8" class="w-24 sm:w-32 h-auto" shape-rendering="crispEdges">
        <rect x="18" y="3" width="6" height="1" fill="#EF476F" opacity="0.5" />
        <rect x="13" y="2" width="7" height="1" fill="#F97316" opacity="0.75" />
        <rect x="14" y="4" width="6" height="1" fill="#F97316" opacity="0.7" />
        <rect x="8" y="2" width="7" height="3" fill="#FFD166" opacity="0.9" />
        <rect x="3" y="1" width="6" height="5" fill="#F97316" />
        <rect x="2" y="2" width="6" height="3" fill="#FFD166" />
        <rect x="1" y="3" width="4" height="2" fill="#FFFFFF" />
      </svg>
    </div>

    <div class="meteor-wrapper meteor-2">
      <svg viewBox="0 0 24 8" class="w-20 sm:w-28 h-auto" shape-rendering="crispEdges">
        <rect x="17" y="4" width="7" height="1" fill="#38BDF8" opacity="0.5" />
        <rect x="12" y="2" width="7" height="1" fill="#06D6A0" opacity="0.75" />
        <rect x="13" y="4" width="6" height="1" fill="#38BDF8" opacity="0.75" />
        <rect x="7" y="2" width="7" height="3" fill="#7DD3FC" opacity="0.9" />
        <rect x="3" y="1" width="6" height="5" fill="#06D6A0" />
        <rect x="2" y="2" width="5" height="3" fill="#A7F3D0" />
        <rect x="1" y="3" width="4" height="2" fill="#FFFFFF" />
      </svg>
    </div>

    <div class="meteor-wrapper meteor-3">
      <svg viewBox="0 0 24 8" class="w-16 sm:w-24 h-auto" shape-rendering="crispEdges">
        <rect x="16" y="3" width="8" height="1" fill="#EF476F" opacity="0.45" />
        <rect x="11" y="2" width="7" height="3" fill="#F97316" opacity="0.8" />
        <rect x="6" y="2" width="6" height="3" fill="#FFD166" />
        <rect x="2" y="2" width="5" height="3" fill="#FFFFFF" />
      </svg>
    </div>
  </div>

  <!-- Interactive Bouncing Space Rocks Layer -->
<Teleport to="body">
    <div class="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      <button
        v-for="rock in rocks"
        :key="rock.id"
        type="button"
        aria-label="Bounce space rock"
        title="Click to bounce!"
        @click.stop="bounceRock(rock, $event)"
        class="pointer-events-auto cursor-pointer select-none absolute focus:outline-none transition-transform duration-75 hover:scale-110 active:scale-95"
        :style="{
          left: rock.x + '%',
          top: rock.y + '%',
          width: rock.size + 'px',
          height: rock.size + 'px',
          transform: `translate(-50%, -50%) rotate(${rock.angle}deg) scale(${rock.hitTimer > 0 ? 1.22 : 1})`,
          filter: rock.hitTimer > 0
            ? 'drop-shadow(0 0 12px #FFD166) brightness(1.35)'
            : 'drop-shadow(0 4px 0 rgba(7, 9, 19, 0.85))'
        }"
      >
        <svg
          v-if="rock.variant === 0"
          viewBox="0 0 12 12"
          class="w-full h-full"
          shape-rendering="crispEdges"
        >
          <rect x="4" y="1" width="4" height="1" fill="#94A3B8" />
          <rect x="2" y="2" width="8" height="1" fill="#94A3B8" />
          <rect x="1" y="3" width="10" height="6" fill="#64748B" />
          <rect x="2" y="9" width="8" height="1" fill="#475569" />
          <rect x="4" y="10" width="4" height="1" fill="#334155" />
          <rect x="3" y="2" width="4" height="1" fill="#CBD5E1" />
          <rect x="2" y="3" width="2" height="2" fill="#94A3B8" />
          <rect x="6" y="4" width="2" height="2" fill="#334155" />
          <rect x="3" y="6" width="2" height="2" fill="#475569" />
          <rect x="7" y="7" width="2" height="1" fill="#334155" />
        </svg>

        <svg
          v-else
          viewBox="0 0 12 12"
          class="w-full h-full"
          shape-rendering="crispEdges"
        >
          <rect x="3" y="1" width="5" height="1" fill="#A8A29E" />
          <rect x="2" y="2" width="8" height="2" fill="#78716C" />
          <rect x="1" y="4" width="10" height="4" fill="#57534E" />
          <rect x="2" y="8" width="7" height="2" fill="#44403C" />
          <rect x="4" y="10" width="4" height="1" fill="#292524" />
          <rect x="3" y="2" width="3" height="1" fill="#D6D3D1" />
          <rect x="7" y="4" width="2" height="1" fill="#FFD166" />
          <rect x="3" y="6" width="2" height="2" fill="#FFD166" />
          <rect x="6" y="7" width="2" height="1" fill="#F59E0B" />
        </svg>
      </button>
    </div>
  </Teleport>
</template>

<script setup>
import { reactive, onMounted, onUnmounted } from 'vue'
import { useSfx } from '@/composables/useSfx'

const { playClick } = useSfx()

function pseudoRandom(seed) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453
  return x - Math.floor(x)
}

const palette = [
  '#FFFFFF',
  '#FFFFFF',
  '#E2E8F0',
  '#CBD5E1',
  '#FFD166',
  '#06D6A0',
  '#A855F7',
  '#7DD3FC'
]

const stars = Array.from({ length: 115 }, (_, i) => {
  const seed = i + 1
  const r1 = pseudoRandom(seed)
  const r2 = pseudoRandom(seed * 3.17)
  const r3 = pseudoRandom(seed * 7.31)
  const r4 = pseudoRandom(seed * 11.13)

  const color = palette[Math.floor(r3 * palette.length)]
  const size = r4 > 0.72 ? 3 : 2

  return {
    id: seed,
    x: (r1 * 97 + 1.5).toFixed(2),
    y: (r2 * 97 + 1.5).toFixed(2),
    size,
    color,
    glow: size === 3 ? `0 0 6px ${color}` : 'none',
    duration: (1.8 + r3 * 3.2).toFixed(2),
    delay: (r4 * 4).toFixed(2)
  }
})

const sparkleColors = ['#FFD166', '#06D6A0', '#FFFFFF', '#C084FC']

const sparkles = Array.from({ length: 16 }, (_, i) => {
  const seed = (i + 1) * 19
  const r1 = pseudoRandom(seed)
  const r2 = pseudoRandom(seed * 2.71)
  const r3 = pseudoRandom(seed * 5.43)

  return {
    id: i + 1,
    x: (r1 * 94 + 3).toFixed(2),
    y: (r2 * 94 + 3).toFixed(2),
    size: r3 > 0.5 ? 10 : 8,
    color: sparkleColors[i % sparkleColors.length],
    duration: (2.4 + r3 * 2.6).toFixed(2),
    delay: (r1 * 3.5).toFixed(2)
  }
})

const rocks = reactive([
  { id: 1, x: 14, y: 28, vx: 0.015, vy: -0.012, baseVx: 0.015, baseVy: -0.012, angle: 12, vAngle: 0.25, size: 38, variant: 0, hitTimer: 0 },
  { id: 2, x: 86, y: 24, vx: -0.014, vy: 0.016, baseVx: -0.014, baseVy: 0.016, angle: 45, vAngle: -0.22, size: 42, variant: 1, hitTimer: 0 },
  { id: 3, x: 10, y: 68, vx: 0.018, vy: -0.015, baseVx: 0.018, baseVy: -0.015, angle: 110, vAngle: 0.2, size: 34, variant: 1, hitTimer: 0 },
  { id: 4, x: 89, y: 58, vx: -0.016, vy: -0.014, baseVx: -0.016, baseVy: -0.014, angle: 210, vAngle: -0.28, size: 36, variant: 0, hitTimer: 0 },
  { id: 5, x: 24, y: 83, vx: 0.012, vy: -0.016, baseVx: 0.012, baseVy: -0.016, angle: 75, vAngle: 0.18, size: 30, variant: 0, hitTimer: 0 },
  { id: 6, x: 74, y: 16, vx: -0.015, vy: 0.012, baseVx: -0.015, baseVy: 0.012, angle: 300, vAngle: -0.24, size: 32, variant: 1, hitTimer: 0 }
])

function bounceRock(rock, event) {
  playClick()

  const rect = event.currentTarget.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const dx = centerX - event.clientX
  const dy = centerY - event.clientY
  const len = Math.hypot(dx, dy) || 1

  const impulse = 0.55
  rock.vx = (dx / len) * impulse + (Math.random() - 0.5) * 0.28
  rock.vy = (dy / len) * impulse - 0.22
  rock.vAngle = (Math.random() > 0.5 ? 1 : -1) * (5.5 + Math.random() * 4)
  rock.hitTimer = 14
}

let rafId = null

function updateRocks() {
  for (const r of rocks) {
    r.x += r.vx
    r.y += r.vy
    r.angle = (r.angle + r.vAngle) % 360

    if (r.x < 3) {
      r.x = 3
      r.vx = Math.abs(r.vx) * 0.85
    } else if (r.x > 97) {
      r.x = 97
      r.vx = -Math.abs(r.vx) * 0.85
    }

    if (r.y < 6) {
      r.y = 6
      r.vy = Math.abs(r.vy) * 0.85
    } else if (r.y > 90) {
      r.y = 90
      r.vy = -Math.abs(r.vy) * 0.85
    }

    r.vx += (r.baseVx - r.vx) * 0.025
    r.vy += (r.baseVy - r.vy) * 0.025
    r.vAngle *= 0.965
    if (Math.abs(r.vAngle) < 0.2) {
      r.vAngle = r.vAngle >= 0 ? 0.2 : -0.2
    }

    if (r.hitTimer > 0) {
      r.hitTimer--
    }
  }

  rafId = requestAnimationFrame(updateRocks)
}

onMounted(() => {
  rafId = requestAnimationFrame(updateRocks)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.pixel-grid {
  background-image: radial-gradient(rgba(148, 163, 184, 0.22) 1px, transparent 1px);
  background-size: 24px 24px;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.25;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.15);
  }
}

.animate-twinkle {
  animation-name: twinkle;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes sunPulse {
  0%,
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 28px rgba(251, 146, 60, 0.4));
  }
  50% {
    transform: scale(1.03);
    filter: drop-shadow(0 0 40px rgba(255, 209, 102, 0.6));
  }
}

.sun-pulse {
  transform-origin: top left;
  animation: sunPulse 4.5s ease-in-out infinite;
}

.meteor-wrapper {
  position: absolute;
  opacity: 0;
  transform: rotate(-36deg);
}

.meteor-1 {
  top: 10%;
  left: 82%;
  animation: meteorFall 8s linear infinite;
  animation-delay: 1s;
}

.meteor-2 {
  top: 32%;
  left: 96%;
  animation: meteorFall 11s linear infinite;
  animation-delay: 4.5s;
}

.meteor-3 {
  top: 6%;
  left: 55%;
  animation: meteorFall 9.5s linear infinite;
  animation-delay: 7s;
}

@keyframes meteorFall {
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(-36deg);
  }
  4% {
    opacity: 1;
  }
  18% {
    opacity: 1;
  }
  24% {
    opacity: 0;
    transform: translate(-520px, 380px) rotate(-36deg);
  }
  100% {
    opacity: 0;
    transform: translate(-520px, 380px) rotate(-36deg);
  }
}
</style>