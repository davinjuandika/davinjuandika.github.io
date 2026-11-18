<template>
  <section class="max-w-4xl mx-auto px-4 py-6 pb-24">
    <!-- Header -->
    <div class="mb-6">
      <span class="font-arcade text-xs text-pixel-purple">SECTOR 04 // SUBSPACE RADIO</span>
      <h1 class="font-pixel text-lg sm:text-2xl text-white mt-1">COMMS TERMINAL</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
      <!-- Left: Direct Signal Channels -->
      <div class="md:col-span-2 pixel-box-purple p-5 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="w-2.5 h-2.5 bg-pixel-cyan animate-ping"></span>
            <span class="font-arcade text-xs text-pixel-cyan">FREQUENCY OPEN</span>
          </div>

          <p class="font-sans text-sm text-slate-300 leading-relaxed mb-5">
            Looking for a front-end / multimedia intern, game dev collaborator, or UI/UX teammate? Transmit a signal anytime!
          </p>

          <!-- One-Click Email Copy -->
          <div class="bg-space-950 border-2 border-slate-700 p-3 mb-4">
            <span class="block font-pixel text-[8px] text-slate-400 mb-1">DIRECT EMAIL</span>
            <div class="font-arcade text-xs text-pixel-gold break-all mb-2.5">
              {{ profile.socials.email }}
            </div>
            <button
              type="button"
              @click="copyEmail"
              class="pixel-btn w-full bg-pixel-gold text-space-950 font-arcade text-xs font-bold py-2 border-2 border-amber-200"
            >
              {{ copied ? '✓ COPIED TO CLIPBOARD!' : '📋 COPY EMAIL ADDRESS' }}
            </button>
          </div>
        </div>

        <!-- Social Links -->
        <div class="space-y-2">
          <a
            :href="profile.socials.github"
            target="_blank"
            rel="noopener noreferrer"
            @mouseenter="playHover"
            class="pixel-btn block bg-space-800 hover:bg-space-700 text-white font-arcade text-xs px-3.5 py-2.5 border-2 border-slate-600"
          >
            🐙 GITHUB // REPOSITORIES
          </a>
          <a
            :href="profile.socials.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            @mouseenter="playHover"
            class="pixel-btn block bg-space-800 hover:bg-space-700 text-white font-arcade text-xs px-3.5 py-2.5 border-2 border-slate-600"
          >
            💼 LINKEDIN // NETWORK
          </a>
          <a
            :href="profile.socials.itch"
            target="_blank"
            rel="noopener noreferrer"
            @mouseenter="playHover"
            class="pixel-btn block bg-space-800 hover:bg-space-700 text-white font-arcade text-xs px-3.5 py-2.5 border-2 border-slate-600"
          >
            🕹️ ITCH.IO // INDIE GAMES
          </a>
        </div>
      </div>

      <!-- Right: Message Transmission Form -->
      <div class="md:col-span-3 pixel-box p-5 sm:p-6">
        <h2 class="font-pixel text-xs text-pixel-gold mb-4">SEND TRANSMISSION</h2>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block font-arcade text-xs text-slate-300 mb-1.5">SENDER NAME</label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="e.g. Recruiter / Teammate"
              class="w-full bg-space-950 border-2 border-slate-700 focus:border-pixel-cyan px-3.5 py-2.5 font-sans text-sm text-white focus:outline-none"
            />
          </div>

          <div>
            <label class="block font-arcade text-xs text-slate-300 mb-1.5">RETURN FREQUENCY (EMAIL)</label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="you@domain.com"
              class="w-full bg-space-950 border-2 border-slate-700 focus:border-pixel-cyan px-3.5 py-2.5 font-sans text-sm text-white focus:outline-none"
            />
          </div>

          <div>
            <label class="block font-arcade text-xs text-slate-300 mb-1.5">MESSAGE PAYLOAD</label>
            <textarea
              v-model="form.message"
              rows="4"
              required
              placeholder="Write your message, project idea, or internship opportunity..."
              class="w-full bg-space-950 border-2 border-slate-700 focus:border-pixel-cyan px-3.5 py-2.5 font-sans text-sm text-white focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="pixel-btn w-full bg-pixel-cyan text-space-950 font-pixel text-xs py-3.5 border-2 border-emerald-200"
          >
            TRANSMIT MESSAGE 🚀
          </button>
        </form>

        <!-- Transmission Confirmation -->
        <div
          v-if="sent"
          class="mt-4 bg-emerald-950/80 border-2 border-pixel-cyan p-3 font-arcade text-xs text-pixel-cyan"
        >
          ✓ TRANSMISSION LOGGED! (Connect Formspree / Web3Forms in ContactView.vue to forward directly to your inbox.)
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { profile } from '@/data/profile'
import { useSfx } from '@/composables/useSfx'

const { playConfirm, playHover } = useSfx()

const copied = ref(false)
const sent = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: ''
})

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.socials.email)
    playConfirm()
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch {
    copied.value = true
  }
}

function handleSubmit() {
  playConfirm()
  sent.value = true
  form.name = ''
  form.email = ''
  form.message = ''
  setTimeout(() => {
    sent.value = false
  }, 5000)
}
</script>
