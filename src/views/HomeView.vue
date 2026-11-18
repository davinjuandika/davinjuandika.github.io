<template>
  <section class="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center px-4 py-6">
    <!-- Hero Title Banner -->
    <div class="text-center max-w-2xl mx-auto mb-6">
      <div class="inline-block pixel-box px-3 py-1 mb-3">
        <span class="font-arcade text-xs text-pixel-cyan tracking-wider">
          ★ WELCOME TO MY DIGITAL GALAXY ★
        </span>
      </div>

      <h1 class="font-pixel text-xl sm:text-3xl text-white leading-snug tracking-wide drop-shadow-[0_4px_0_#070913]">
        HI, I'M <span class="text-pixel-gold">DAVIN JUANDIKA</span>
      </h1>

      <p class="font-arcade text-sm sm:text-base text-slate-300 mt-3 max-w-xl mx-auto">
        {{ profile.tagline }}
      </p>
    </div>

    <!-- Interactive Orbit Hub -->
    <div class="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-4 my-2">
      <!-- Left Planet: About -->
      <div class="flex justify-center md:justify-end order-2 md:order-1 animate-float-alt">
        <PlanetNode
          to="/about"
          label="ABOUT ME"
          subtitle="Pilot ID & Stats"
          variant="saturn"
        />
      </div>

      <!-- Center: Interactive Pixel Astronaut -->
      <div class="flex justify-center order-1 md:order-2">
        <PixelAstronaut />
      </div>

      <!-- Right Planets: Projects & Contact -->
      <div class="flex flex-row md:flex-col items-center justify-center md:items-start gap-6 order-3">
        <div class="animate-float-slow">
          <PlanetNode
            to="/projects"
            label="PROJECTS"
            subtitle="7 Completed Missions"
            variant="terra"
          />
        </div>
        <div class="animate-float-alt">
          <PlanetNode
            to="/contact"
            label="CONTACT"
            subtitle="Open Comms Link"
            variant="nebula"
          />
        </div>
      </div>
    </div>

    <!-- Quick Action Buttons -->
    <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
      <RouterLink
        to="/projects"
        @click="playWarp"
        @mouseenter="playHover"
        class="pixel-btn bg-pixel-gold text-space-950 font-pixel text-[10px] sm:text-xs px-5 py-3.5 border-2 border-amber-200"
      >
        EXPLORE MISSIONS ►
      </RouterLink>

      <RouterLink
        to="/about"
        @click="playWarp"
        @mouseenter="playHover"
        class="pixel-btn bg-space-800 text-white font-pixel text-[10px] sm:text-xs px-5 py-3.5 border-2 border-slate-500"
      >
        PILOT PROFILE
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { profile } from '@/data/profile'
import PixelAstronaut from '@/components/space/PixelAstronaut.vue'
import PlanetNode from '@/components/space/PlanetNode.vue'
import { useSfx } from '@/composables/useSfx'

const { playHover, playWarp } = useSfx()
</script>
