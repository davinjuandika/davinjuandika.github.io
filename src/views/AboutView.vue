<template>
  <section class="max-w-4xl mx-auto px-4 py-6 pb-24">
    <!-- Section Title -->
    <div class="mb-6">
      <span class="font-arcade text-xs text-pixel-gold">SECTOR 02 // PERSONNEL DOSSIER</span>
      <h1 class="font-pixel text-lg sm:text-2xl text-white mt-1">ASTRONAUT ID CARD</h1>
    </div>

    <!-- Main ID Card -->
    <div class="pixel-box-gold p-5 sm:p-7 mb-6">
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <!-- Pixel Portrait Badge -->
        <div class="w-28 h-28 bg-space-950 border-3 border-pixel-gold flex flex-col items-center justify-center shrink-0 p-2">
          <span class="text-5xl">👨‍🚀</span>
          <span class="font-pixel text-[7px] text-pixel-cyan mt-2">LVL. 20 DEV</span>
        </div>

        <!-- Bio Info -->
        <div class="flex-1 text-center sm:text-left">
          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
            <span class="font-pixel text-[9px] bg-pixel-cyan text-space-950 px-2.5 py-1">
              {{ profile.status }}
            </span>
            <span class="font-arcade text-xs text-slate-400">
              📍 {{ profile.location }}
            </span>
          </div>

          <h2 class="font-arcade text-2xl font-bold text-white">
            {{ profile.name }}
          </h2>
          <p class="font-arcade text-sm text-pixel-gold mb-3">
            {{ profile.degree }} • {{ profile.university }}
          </p>

          <div class="space-y-2.5 font-sans text-sm text-slate-300 leading-relaxed">
            <p v-for="(paragraph, idx) in profile.bio" :key="idx">
              {{ paragraph }}
            </p>
          </div>

          <div class="mt-5 flex flex-wrap justify-center sm:justify-start gap-3">
            <button
              type="button"
              @click="openCvModal"
              class="pixel-btn bg-pixel-gold text-space-950 font-arcade text-xs font-bold px-4 py-2.5 border-2 border-amber-200 inline-flex items-center gap-2"
            >
              <span>📄</span>
              <span>PREVIEW / PRINT CV</span>
            </button>

            <RouterLink
              to="/projects"
              @click="playWarp"
              class="pixel-btn bg-space-800 text-white font-arcade text-xs px-4 py-2.5 border-2 border-slate-600"
            >
              VIEW PROJECTS ►
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Two Columns: Skill Stats & Academic Log -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Skill Bars -->
      <div class="pixel-box p-5">
        <h3 class="font-pixel text-xs text-pixel-cyan mb-4">SKILL MATRIX</h3>
        <div class="space-y-5">
          <div v-for="skill in profile.skillStats" :key="skill.label">
            <div class="flex justify-between font-arcade text-xs mb-1.5">
              <span class="text-white font-bold">{{ skill.label }}</span>
              <span class="text-pixel-gold">{{ skill.level }}%</span>
            </div>

            <!-- Segmented Pixel Progress Bar -->
            <div class="w-full h-4 bg-space-950 border-2 border-slate-700 p-0.5">
              <div
                class="h-full transition-all duration-500"
                :class="skill.color"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>

            <div class="flex flex-wrap gap-1.5 mt-2">
              <span
                v-for="tool in skill.tools"
                :key="tool"
                class="font-arcade text-[11px] px-2 py-0.5 bg-space-950 text-slate-300 border border-slate-700"
              >
                {{ tool }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Flight Log / Education -->
      <div class="pixel-box p-5 flex flex-col justify-between">
        <div>
          <h3 class="font-pixel text-xs text-pixel-purple mb-4">FLIGHT & EDUCATION LOG</h3>
          <div class="space-y-4">
            <div
              v-for="item in profile.highlights"
              :key="item.title"
              class="bg-space-950/70 border-l-4 border-pixel-purple p-3.5"
            >
              <span class="font-arcade text-[11px] text-pixel-cyan">{{ item.period }}</span>
              <h4 class="font-arcade text-sm font-bold text-white mt-0.5">
                {{ item.title }}
              </h4>
              <p class="font-arcade text-xs text-pixel-gold mb-1.5">
                {{ item.org }}
              </p>
              <p class="font-sans text-xs text-slate-300 leading-relaxed">
                {{ item.detail }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-5 pt-4 border-t border-slate-700 font-arcade text-xs text-slate-400">
          💡 Tip: Place your <code class="text-pixel-gold">cv-davin-juandika.pdf</code> inside <code class="text-pixel-cyan">public/</code> for direct download.
        </div>
      </div>
    </div>

    <!-- CV Preview Modal -->
    <div
      v-if="showCvModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/85 backdrop-blur-sm"
      @click.self="showCvModal = false"
    >
      <div class="pixel-box-cyan max-w-2xl w-full p-6 max-h-[88vh] overflow-y-auto">
        <div class="flex items-center justify-between pb-3 border-b-2 border-slate-700">
          <h3 class="font-pixel text-xs text-pixel-cyan">CURRICULUM VITAE // PREVIEW</h3>
          <button
            type="button"
            @click="showCvModal = false"
            class="pixel-btn bg-pixel-pink text-white font-pixel text-xs px-3 py-1.5"
          >
            X
          </button>
        </div>

        <div class="bg-white text-slate-900 p-6 my-4 font-sans space-y-4">
          <div class="border-b-2 border-slate-900 pb-3">
            <h2 class="text-2xl font-bold tracking-tight">{{ profile.name }}</h2>
            <p class="text-sm font-semibold text-slate-700">
              {{ profile.degree }} — {{ profile.university }}
            </p>
            <p class="text-xs text-slate-600 mt-1">
              {{ profile.location }} • {{ profile.socials.email }} • {{ profile.socials.github }}
            </p>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Summary</h4>
            <p class="text-sm text-slate-800 leading-relaxed">{{ profile.bio[0] }}</p>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Technical Skills</h4>
            <ul class="text-sm text-slate-800 space-y-1">
              <li v-for="s in profile.skillStats" :key="s.label">
                <strong>{{ s.label }}:</strong> {{ s.tools.join(', ') }}
              </li>
            </ul>
          </div>
        </div>

        <div class="flex justify-end gap-3">
          <button
            type="button"
            @click="printCv"
            class="pixel-btn bg-pixel-gold text-space-950 font-arcade text-xs font-bold px-4 py-2 border-2 border-amber-200"
          >
            🖨️ PRINT / SAVE PDF
          </button>
          <button
            type="button"
            @click="showCvModal = false"
            class="pixel-btn bg-space-800 text-white font-arcade text-xs px-4 py-2 border-2 border-slate-600"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { profile } from '@/data/profile'
import { useSfx } from '@/composables/useSfx'

const { playClick, playWarp } = useSfx()
const showCvModal = ref(false)

function openCvModal() {
  playClick()
  showCvModal.value = true
}

function printCv() {
  playClick()
  window.print()
}
</script>
