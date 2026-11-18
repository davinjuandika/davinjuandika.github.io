<template>
  <article
    @click="$emit('select', project)"
    @mouseenter="playHover"
    class="pixel-box p-4 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-1.5 group"
    :class="hoverBorderClass"
  >
    <div>
      <!-- Top Mission Header -->
      <div class="flex items-center justify-between gap-2 mb-3">
        <span class="font-pixel text-[9px] px-2 py-1 bg-space-950 border border-slate-700 text-slate-300">
          {{ project.code }}
        </span>
        <span
          class="font-arcade text-xs px-2.5 py-0.5 border font-bold"
          :class="badgeClass"
        >
          {{ project.category }}
        </span>
      </div>

      <!-- Pixel Art Preview Banner -->
      <div
        class="h-32 mb-4 border-2 border-space-950 relative overflow-hidden flex items-center justify-center"
        :class="bannerBgClass"
      >
        <!-- Decorative Pixel Grid -->
        <div
          class="absolute inset-0 opacity-20"
          style="background-image: linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 16px 16px;"
        ></div>

        <!-- Custom Pixel Icon per Project -->
        <div class="relative z-10 text-center transition-transform duration-300 group-hover:scale-110">
          <div class="text-4xl mb-1 drop-shadow-[0_4px_0_rgba(7,9,19,0.9)]">
            {{ bannerEmoji }}
          </div>
          <span class="font-pixel text-[8px] uppercase tracking-widest px-2 py-0.5 bg-space-950/80 text-white">
            {{ project.year }}
          </span>
        </div>
      </div>

      <!-- Title & Subtitle -->
      <h3 class="font-arcade text-lg font-bold text-white group-hover:text-pixel-gold transition-colors">
        {{ project.title }}
      </h3>
      <p class="font-arcade text-xs text-slate-400 mb-2.5">
        {{ project.subtitle }}
      </p>

      <!-- Short Summary -->
      <p class="font-sans text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
        {{ project.summary }}
      </p>
    </div>

    <!-- Bottom Tech Tags & Inspect Prompt -->
    <div>
      <div class="flex flex-wrap gap-1.5 mb-3">
        <span
          v-for="tag in project.tech"
          :key="tag"
          class="font-arcade text-[11px] px-2 py-0.5 bg-space-950 text-slate-300 border border-slate-700"
        >
          {{ tag }}
        </span>
      </div>

      <div class="pt-2.5 border-t border-slate-700/80 flex items-center justify-between font-arcade text-xs">
        <span class="text-slate-400 group-hover:text-white transition-colors">
          INSPECT MISSION
        </span>
        <span class="text-pixel-gold group-hover:translate-x-1 transition-transform">
          ►
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useSfx } from '@/composables/useSfx'

const props = defineProps({
  project: { type: Object, required: true }
})

defineEmits(['select'])

const { playHover } = useSfx()

const hoverBorderClass = computed(() => {
  if (props.project.accent === 'gold') return 'hover:border-pixel-gold'
  if (props.project.accent === 'cyan') return 'hover:border-pixel-cyan'
  return 'hover:border-pixel-purple'
})

const badgeClass = computed(() => {
  if (props.project.accent === 'gold') return 'bg-pixel-gold/15 text-pixel-gold border-pixel-gold/50'
  if (props.project.accent === 'cyan') return 'bg-pixel-cyan/15 text-pixel-cyan border-pixel-cyan/50'
  return 'bg-pixel-purple/15 text-pixel-purple border-pixel-purple/50'
})

const bannerBgClass = computed(() => {
  if (props.project.accent === 'gold') return 'bg-gradient-to-br from-amber-900/60 via-space-800 to-space-950'
  if (props.project.accent === 'cyan') return 'bg-gradient-to-br from-emerald-900/60 via-space-800 to-space-950'
  return 'bg-gradient-to-br from-purple-900/60 via-space-800 to-space-950'
})

const bannerEmoji = computed(() => {
  const map = {
    rpg: '⚔️',
    adventure: '🗺️',
    canteen: '🍱',
    music: '🎧',
    matcha: '🍵',
    desktop: '🎮',
    shop: '✏️',
    gallery: '🎨',
    research: '🧠'
  }
  return map[props.project.bannerTheme] || '🚀'
})
</script>
