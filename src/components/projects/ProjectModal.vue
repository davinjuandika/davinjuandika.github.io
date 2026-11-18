<template>
  <div
    v-if="project"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/85 backdrop-blur-sm"
    @click.self="close"
  >
    <div class="pixel-box-gold max-w-xl w-full p-5 sm:p-6 max-h-[88vh] overflow-y-auto relative">
      <!-- Header -->
      <div class="flex items-start justify-between gap-4 pb-4 border-b-2 border-slate-700">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="font-pixel text-[9px] px-2 py-0.5 bg-pixel-gold text-space-950">
              {{ project.code }}
            </span>
            <span class="font-arcade text-xs text-pixel-cyan">
              {{ project.category }} • {{ project.year }}
            </span>
          </div>
          <h2 class="font-arcade text-2xl font-bold text-white">
            {{ project.title }}
          </h2>
          <p class="font-arcade text-sm text-slate-300">
            {{ project.subtitle }}
          </p>
        </div>

        <button
          type="button"
          @click="close"
          class="pixel-btn bg-pixel-pink text-white font-pixel text-xs px-3 py-2 border-2 border-rose-300"
          aria-label="Close modal"
        >
          X
        </button>
      </div>

      <!-- Body -->
      <div class="py-4 space-y-4">
        <div>
          <h3 class="font-pixel text-[10px] text-pixel-gold mb-2">MISSION BRIEFING</h3>
          <p class="font-sans text-sm text-slate-200 leading-relaxed">
            {{ project.summary }}
          </p>
        </div>

        <div>
          <h3 class="font-pixel text-[10px] text-pixel-cyan mb-2">KEY HIGHLIGHTS</h3>
          <ul class="space-y-2">
            <li
              v-for="(item, idx) in project.highlights"
              :key="idx"
              class="font-sans text-sm text-slate-300 flex items-start gap-2.5"
            >
              <span class="text-pixel-gold font-arcade mt-0.5">▸</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-pixel text-[10px] text-pixel-purple mb-2">EQUIPPED TECH STACK</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="font-arcade text-xs px-3 py-1 bg-space-950 border border-slate-600 text-slate-200"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Footer Links -->
      <div class="pt-4 border-t-2 border-slate-700 flex flex-wrap items-center justify-between gap-3">
        <div class="flex flex-wrap gap-2.5">
          <a
            v-for="link in project.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            @click="playClick"
            class="pixel-btn bg-pixel-cyan text-space-950 font-arcade text-xs font-bold px-4 py-2 border-2 border-emerald-200 inline-flex items-center gap-2"
          >
            <span>🚀</span>
            <span>{{ link.label }}</span>
          </a>
        </div>

        <button
          type="button"
          @click="close"
          class="pixel-btn bg-space-800 text-slate-200 font-arcade text-xs px-4 py-2 border-2 border-slate-600"
        >
          CLOSE LOG
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSfx } from '@/composables/useSfx'

defineProps({
  project: { type: Object, default: null }
})

const emit = defineEmits(['close'])
const { playClick } = useSfx()

function close() {
  playClick()
  emit('close')
}
</script>
