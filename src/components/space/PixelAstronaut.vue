<template>
  <div class="flex flex-col items-center select-none">
    <!-- Speech Bubble -->
    <div
      class="pixel-box px-3.5 py-2 mb-3 max-w-[260px] text-center relative transition-transform duration-200"
      :class="{ 'scale-105 border-pixel-gold': isBoosting }"
    >
      <p class="font-arcade text-xs text-pixel-gold leading-relaxed">
        "{{ currentQuote }}"
      </p>
      <span class="block font-sans text-[10px] text-slate-400 mt-1">
        (Click astronaut to boost!)
      </span>
      <!-- Pixel Bubble Pointer -->
      <div class="w-3 h-3 bg-space-800 border-r-2 border-b-2 border-slate-600 rotate-45 mx-auto -mb-3.5 mt-1"></div>
    </div>

    <!-- Clickable Pixel Astronaut SVG -->
    <button
      type="button"
      @click="handleBoost"
      @mouseenter="playHover"
      class="group relative focus:outline-none cursor-pointer transition-transform duration-300"
      :class="isBoosting ? '-translate-y-4 scale-110' : 'animate-float-slow hover:scale-105'"
      aria-label="Interactive Pixel Astronaut"
    >
      <svg
        width="136"
        height="152"
        viewBox="0 0 17 19"
        class="crisp-pixel drop-shadow-[0_10px_18px_rgba(6,214,160,0.28)]"
      >
        <!-- Antenna -->
        <rect x="8" y="0" width="1" height="1" fill="#FFD166" />
        <rect x="8" y="1" width="1" height="1" fill="#94A3B8" />

        <!-- Helmet Outline & White Shell -->
        <rect x="5" y="2" width="7" height="1" fill="#E2E8F0" />
        <rect x="4" y="3" width="9" height="1" fill="#FFFFFF" />
        <rect x="3" y="4" width="11" height="5" fill="#FFFFFF" />
        <rect x="4" y="9" width="9" height="1" fill="#CBD5E1" />

        <!-- Visor -->
        <rect x="5" y="4" width="7" height="4" fill="#0F172A" />
        <rect x="6" y="5" width="5" height="2" fill="#1E293B" />
        <!-- Visor Gloss -->
        <rect x="6" y="4" width="2" height="1" fill="#38BDF8" />
        <rect x="5" y="5" width="1" height="1" fill="#7DD3FC" />
        <!-- Cute Pixel Eyes inside Visor -->
        <rect x="6" y="6" width="1" height="1" fill="#06D6A0" />
        <rect x="10" y="6" width="1" height="1" fill="#06D6A0" />

        <!-- Jetpack Backpack -->
        <rect x="2" y="10" width="2" height="5" fill="#64748B" />
        <rect x="13" y="10" width="2" height="5" fill="#64748B" />

        <!-- Torso Suit -->
        <rect x="4" y="10" width="9" height="5" fill="#F8FAFC" />
        <!-- Chest Control Panel -->
        <rect x="6" y="11" width="5" height="3" fill="#CBD5E1" />
        <rect x="7" y="12" width="1" height="1" fill="#EF476F" />
        <rect x="9" y="12" width="1" height="1" fill="#06D6A0" />

        <!-- Arms -->
        <rect x="2" y="11" width="2" height="3" fill="#E2E8F0" />
        <rect x="13" y="11" width="2" height="3" fill="#E2E8F0" />
        <rect x="2" y="14" width="2" height="1" fill="#FFD166" />
        <rect x="13" y="14" width="2" height="1" fill="#FFD166" />

        <!-- Belt -->
        <rect x="4" y="14" width="9" height="1" fill="#334155" />
        <rect x="8" y="14" width="1" height="1" fill="#FFD166" />

        <!-- Legs -->
        <rect x="5" y="15" width="3" height="2" fill="#E2E8F0" />
        <rect x="9" y="15" width="3" height="2" fill="#E2E8F0" />
        <!-- Boots -->
        <rect x="4" y="17" width="4" height="1" fill="#FFD166" />
        <rect x="9" y="17" width="4" height="1" fill="#FFD166" />
      </svg>

      <!-- Jetpack Thruster Flames -->
      <div class="flex justify-center gap-7 -mt-3">
        <div
          class="w-2.5 bg-gradient-to-b from-pixel-gold via-orange-500 to-transparent animate-thruster"
          :class="isBoosting ? 'h-8' : 'h-4'"
        ></div>
        <div
          class="w-2.5 bg-gradient-to-b from-pixel-gold via-orange-500 to-transparent animate-thruster"
          :class="isBoosting ? 'h-8' : 'h-4'"
        ></div>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { profile } from '@/data/profile'
import { useSfx } from '@/composables/useSfx'

const { playBoost, playHover } = useSfx()

const quoteIndex = ref(0)
const currentQuote = ref(profile.astronautQuotes[0])
const isBoosting = ref(false)

function handleBoost() {
  playBoost()
  isBoosting.value = true
  quoteIndex.value = (quoteIndex.value + 1) % profile.astronautQuotes.length
  currentQuote.value = profile.astronautQuotes[quoteIndex.value]

  setTimeout(() => {
    isBoosting.value = false
  }, 450)
}
</script>
