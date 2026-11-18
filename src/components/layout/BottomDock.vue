<template>
  <nav class="fixed bottom-3 left-0 right-0 z-30 px-4 pointer-events-none">
    <div class="max-w-md mx-auto pixel-box px-2 py-2 flex items-center justify-around gap-1 pointer-events-auto bg-space-900/95 backdrop-blur-sm">
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        @click="playWarp"
        @mouseenter="playHover"
        class="flex-1 py-2 px-2 text-center font-arcade text-xs transition-all border-2 flex flex-col items-center gap-1"
        :class="
          route.path === item.to
            ? 'bg-pixel-gold text-space-950 border-amber-200 font-bold -translate-y-1 shadow-[0_4px_0_0_#070913]'
            : 'bg-space-800/80 text-slate-300 border-transparent hover:border-slate-600 hover:text-white'
        "
      >
        <span class="text-sm leading-none">{{ item.icon }}</span>
        <span class="tracking-wide text-[11px]">{{ item.label }}</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useSfx } from '@/composables/useSfx'

const route = useRoute()
const { playHover, playWarp } = useSfx()

const navItems = [
  { to: '/', label: 'HUB', icon: '🚀' },
  { to: '/about', label: 'ABOUT', icon: '👨‍🚀' },
  { to: '/projects', label: 'PROJECTS', icon: '🪐' },
  { to: '/contact', label: 'CONTACT', icon: '📡' }
]
</script>
