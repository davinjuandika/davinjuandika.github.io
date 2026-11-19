<template>
  <header class="sticky top-0 z-30 px-4 pt-3 pb-2">
    <div class="max-w-5xl mx-auto pixel-box px-4 py-2.5 flex items-center justify-between gap-3">
      <!-- Left: Callsign & Online Indicator -->
      <RouterLink
        to="/"
        @click="playWarp"
        @mouseenter="playHover"
        class="flex items-center gap-2.5 group"
      >
        <span class="w-2.5 h-2.5 bg-pixel-cyan inline-block animate-pulse"></span>
        <span class="font-pixel text-[10px] sm:text-xs text-pixel-gold tracking-wider group-hover:text-white transition-colors">
          DAVIN JUANDIKA
        </span>
      </RouterLink>

      <!-- Center: Current Sector Indicator -->
      <div class="hidden md:flex items-center gap-2 font-arcade text-xs text-slate-300 bg-space-950/70 px-3 py-1 border border-slate-700">
        <span class="text-pixel-cyan">►</span>
        <span>{{ currentSector }}</span>
      </div>

      <!-- Right: 8-bit SFX Toggle -->
      <button
        type="button"
        @click="toggleSfx"
        class="pixel-btn font-arcade text-xs px-3 py-1.5 border-2 flex items-center gap-2"
        :class="
          sfxEnabled
            ? 'bg-pixel-cyan text-space-950 border-emerald-200 font-bold'
            : 'bg-space-800 text-slate-300 border-slate-600'
        "
        title="Toggle 8-bit Synthesizer Sound Effects"
      >
        <span>{{ sfxEnabled ? '🔊' : '🔇' }}</span>
        <span>SFX: {{ sfxEnabled ? 'ON' : 'OFF' }}</span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSfx } from '@/composables/useSfx'

const route = useRoute()
const { sfxEnabled, toggleSfx, playHover, playWarp } = useSfx()

const currentSector = computed(() => route.meta?.sector || 'SECTOR 01 // ORBIT HUB')
</script>
