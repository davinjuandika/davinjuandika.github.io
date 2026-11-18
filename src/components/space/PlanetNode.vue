<template>
  <RouterLink
    :to="to"
    @click="playWarp"
    @mouseenter="playHover"
    class="group flex flex-col items-center text-center focus:outline-none"
  >
    <!-- Planet Graphic Container -->
    <div class="relative p-3 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1.5">
      <!-- Hover Orbit Ring -->
      <div
        class="absolute inset-0 rounded-full border-2 border-dashed opacity-0 group-hover:opacity-80 transition-opacity duration-300 animate-spin"
        :class="ringBorderClass"
        style="animation-duration: 12s;"
      ></div>

      <!-- Variant 1: Gold Ringed Planet (About) -->
      <svg
        v-if="variant === 'saturn'"
        width="104"
        height="88"
        viewBox="0 0 13 11"
        class="crisp-pixel drop-shadow-[0_6px_14px_rgba(255,209,102,0.3)]"
      >
        <rect x="4" y="1" width="5" height="1" fill="#FDE68A" />
        <rect x="3" y="2" width="7" height="2" fill="#FFD166" />
        <rect x="2" y="4" width="9" height="3" fill="#F59E0B" />
        <rect x="3" y="7" width="7" height="2" fill="#D97706" />
        <rect x="4" y="9" width="5" height="1" fill="#B45309" />
        <!-- Pixel Ring -->
        <rect x="0" y="5" width="2" height="1" fill="#FEF3C7" />
        <rect x="11" y="5" width="2" height="1" fill="#FEF3C7" />
        <rect x="1" y="6" width="11" height="1" fill="#FDE68A" />
      </svg>

      <!-- Variant 2: Cyan Tech World (Projects) -->
      <svg
        v-else-if="variant === 'terra'"
        width="96"
        height="96"
        viewBox="0 0 12 12"
        class="crisp-pixel drop-shadow-[0_6px_14px_rgba(6,214,160,0.35)]"
      >
        <rect x="4" y="1" width="4" height="1" fill="#6EE7B7" />
        <rect x="2" y="2" width="8" height="2" fill="#06D6A0" />
        <rect x="1" y="4" width="10" height="4" fill="#059669" />
        <rect x="2" y="8" width="8" height="2" fill="#047857" />
        <rect x="4" y="10" width="4" height="1" fill="#065F46" />
        <!-- Continents / Pixel Clouds -->
        <rect x="3" y="3" width="3" height="2" fill="#A7F3D0" />
        <rect x="7" y="5" width="3" height="2" fill="#34D399" />
        <rect x="3" y="7" width="2" height="2" fill="#6EE7B7" />
      </svg>

      <!-- Variant 3: Purple Nebula Relay (Contact) -->
      <svg
        v-else
        width="96"
        height="96"
        viewBox="0 0 12 12"
        class="crisp-pixel drop-shadow-[0_6px_14px_rgba(155,93,229,0.35)]"
      >
        <rect x="4" y="1" width="4" height="1" fill="#DDD6FE" />
        <rect x="2" y="2" width="8" height="2" fill="#9B5DE5" />
        <rect x="1" y="4" width="10" height="4" fill="#7C3AED" />
        <rect x="2" y="8" width="8" height="2" fill="#6D28D9" />
        <rect x="4" y="10" width="4" height="1" fill="#5B21B6" />
        <!-- Craters -->
        <rect x="3" y="4" width="2" height="2" fill="#C4B5FD" />
        <rect x="7" y="6" width="2" height="2" fill="#5B21B6" />
        <rect x="5" y="2" width="1" height="1" fill="#EDE9FE" />
      </svg>
    </div>

    <!-- Label Tag -->
    <div
      class="pixel-box px-3 py-1.5 mt-1 transition-colors"
      :class="badgeHoverClass"
    >
      <div class="font-pixel text-[10px] tracking-wider" :class="titleColorClass">
        {{ label }}
      </div>
      <div class="font-arcade text-[11px] text-slate-300 mt-0.5">
        {{ subtitle }}
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { useSfx } from '@/composables/useSfx'

const props = defineProps({
  to: { type: String, required: true },
  label: { type: String, required: true },
  subtitle: { type: String, required: true },
  variant: { type: String, default: 'terra' } // 'saturn' | 'terra' | 'nebula'
})

const { playHover, playWarp } = useSfx()

const titleColorClass = computed(() => {
  if (props.variant === 'saturn') return 'text-pixel-gold'
  if (props.variant === 'terra') return 'text-pixel-cyan'
  return 'text-pixel-purple'
})

const ringBorderClass = computed(() => {
  if (props.variant === 'saturn') return 'border-pixel-gold'
  if (props.variant === 'terra') return 'border-pixel-cyan'
  return 'border-pixel-purple'
})

const badgeHoverClass = computed(() => {
  if (props.variant === 'saturn') return 'group-hover:border-pixel-gold'
  if (props.variant === 'terra') return 'group-hover:border-pixel-cyan'
  return 'group-hover:border-pixel-purple'
})
</script>
