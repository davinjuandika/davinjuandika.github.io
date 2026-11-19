<template>
  <section class="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-2 lg:py-4">
    <!-- Left Column: Hero Intro & Quick Actions -->
    <div class="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
      <div class="inline-block pixel-box px-3.5 py-1.5 mb-4">
        <span class="font-arcade text-xs lg:text-sm text-pixel-cyan tracking-wider">
          ★ WELCOME TO MY DIGITAL GALAXY ★
        </span>
      </div>

      <h1
        class="font-pixel text-xl sm:text-3xl lg:text-[38px] xl:text-[42px] text-white leading-snug lg:leading-tight tracking-wide drop-shadow-[0_4px_0_#070913]"
      >
        HI, I'M
        <span class="text-pixel-gold block mt-1.5 lg:mt-2">DAVIN JUANDIKA</span>
      </h1>

      <p class="font-arcade text-sm sm:text-base lg:text-lg text-slate-300 mt-4 max-w-xl leading-relaxed">
        {{ profile.tagline }}
      </p>

      <!-- Desktop Telemetry Status Strip -->
      <div class="hidden sm:flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-5">
        <div class="pixel-box px-3 py-1.5 flex items-center gap-2 bg-space-900/80">
          <span class="w-2 h-2 bg-emerald-400 animate-pulse"></span>
          <span class="font-arcade text-xs text-slate-300">SYSTEM: ONLINE</span>
        </div>
        <div class="pixel-box px-3 py-1.5 bg-space-900/80">
          <span class="font-arcade text-xs text-pixel-gold">MISSIONS: 4 DONE // 1 ON-DUTY</span>
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div class="mt-7 lg:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
        <RouterLink
          to="/projects"
          @click="playWarp"
          @mouseenter="playHover"
          class="pixel-btn bg-pixel-gold text-space-950 font-pixel text-[10px] sm:text-xs px-5 lg:px-6 py-3.5 lg:py-4 border-2 border-amber-200"
        >
          EXPLORE MISSIONS ►
        </RouterLink>

        <RouterLink
          to="/about"
          @click="playWarp"
          @mouseenter="playHover"
          class="pixel-btn bg-space-800 text-white font-pixel text-[10px] sm:text-xs px-5 lg:px-6 py-3.5 lg:py-4 border-2 border-slate-500"
        >
          PILOT PROFILE
        </RouterLink>
      </div>
    </div>

    <!-- Right Column: Interactive Widescreen Orbit Hub -->
    <div class="lg:col-span-7 relative flex items-center justify-center">
      <!-- Subtle Desktop Orbit Rings -->
      <div
        class="hidden lg:block pointer-events-none absolute w-[470px] h-[470px] xl:w-[520px] xl:h-[520px] rounded-full border border-dashed border-slate-700/60"
      ></div>
      <div
        class="hidden lg:block pointer-events-none absolute w-[300px] h-[300px] xl:w-[330px] xl:h-[330px] rounded-full border border-slate-800/80"
      ></div>

      <div class="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-4">
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
        <div class="flex justify-center order-1 md:order-2 lg:scale-110 transition-transform">
          <PixelAstronaut />
        </div>

        <!-- Right Planets: Projects & Contact -->
        <div class="flex flex-row md:flex-col items-center justify-center md:items-start gap-6 lg:gap-8 order-3">
          <div class="animate-float-slow">
            <PlanetNode
              to="/projects"
              label="PROJECTS"
              subtitle="4 Completed Missions, 1 On-Duty"
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