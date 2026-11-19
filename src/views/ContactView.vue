<template>
  <section class="w-full max-w-6xl mx-auto py-2 lg:py-4">
    <!-- Header -->
    <div class="mb-6 lg:mb-8">
      <span class="font-arcade text-xs lg:text-sm text-pixel-purple">
        SECTOR 04 // SUBSPACE RADIO
      </span>
      <h1 class="font-pixel text-lg sm:text-2xl lg:text-3xl text-white mt-1.5">
        COMMS TERMINAL
      </h1>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
      <!-- Left: Direct Signal Channels -->
      <div class="lg:col-span-5 pixel-box-purple p-5 lg:p-7 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2.5 mb-3.5">
            <span class="w-2.5 h-2.5 bg-pixel-cyan animate-ping"></span>
            <span class="font-arcade text-xs lg:text-sm text-pixel-cyan">FREQUENCY OPEN</span>
          </div>

          <p class="font-sans text-sm lg:text-base text-slate-300 leading-relaxed mb-5">
            Looking for a front-end / multimedia intern, game dev collaborator, or UI/UX teammate? Transmit a signal anytime!
          </p>

          <!-- One-Click Email Copy -->
          <div class="bg-space-950 border-2 border-slate-700 p-3.5 lg:p-4 mb-3.5">
            <span class="block font-pixel text-[8px] lg:text-[9px] text-slate-400 mb-1.5">
              DIRECT EMAIL
            </span>
            <div class="font-arcade text-xs lg:text-sm text-pixel-gold break-all mb-2.5">
              {{ profile.socials.email }}
            </div>
            <button
              type="button"
              @click="copyEmail"
              class="pixel-btn w-full flex items-center justify-center gap-2 bg-pixel-gold text-space-950 font-arcade text-xs lg:text-sm font-bold py-2 border-2 border-amber-200"
            >
              <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>{{ copied ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL ADDRESS' }}</span>
            </button>
          </div>

          <!-- One-Click Discord Copy -->
          <div class="bg-space-950 border-2 border-slate-700 p-3.5 lg:p-4 mb-5">
            <span class="block font-pixel text-[8px] lg:text-[9px] text-slate-400 mb-1.5">
              DISCORD // DIRECT COMMS
            </span>
            <div class="font-arcade text-xs lg:text-sm text-indigo-300 break-all mb-2.5">
              @{{ profile.socials.discord }}
            </div>
            <button
              type="button"
              @click="copyDiscord"
              class="pixel-btn w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-arcade text-xs lg:text-sm font-bold py-2 border-2 border-indigo-300"
            >
              <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span>{{ copiedDiscord ? 'DISCORD USERNAME COPIED!' : 'COPY DISCORD HANDLE' }}</span>
            </button>
          </div>
        </div>

        <!-- Social Links (2x2 Grid with Brand Icons) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <!-- GitHub -->
          <a
            :href="profile.socials.github"
            target="_blank"
            rel="noopener noreferrer"
            @mouseenter="playHover"
            class="pixel-btn flex items-center justify-center gap-2 bg-space-800 hover:bg-space-700 text-white font-arcade text-xs lg:text-sm px-3 py-2.5 border-2 border-slate-600"
          >
            <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span>GITHUB</span>
          </a>

          <!-- LinkedIn -->
          <a
            :href="profile.socials.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            @mouseenter="playHover"
            class="pixel-btn flex items-center justify-center gap-2 bg-space-800 hover:bg-space-700 text-white font-arcade text-xs lg:text-sm px-3 py-2.5 border-2 border-slate-600"
          >
            <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LINKEDIN</span>
          </a>

          <!-- Itch.io -->
          <a
            :href="profile.socials.itch"
            target="_blank"
            rel="noopener noreferrer"
            @mouseenter="playHover"
            class="pixel-btn flex items-center justify-center gap-2 bg-space-800 hover:bg-space-700 text-white font-arcade text-xs lg:text-sm px-3 py-2.5 border-2 border-slate-600"
          >
            <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-5.617.02-8.87.133zm6.375 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.95.795a2.786 2.786 0 0 1-1.95-.795 2.74 2.74 0 0 1-.465-.602 2.74 2.74 0 0 1-.465.602 2.786 2.786 0 0 1-1.95.795c-.22 0-.435-.027-.642-.076-.105 1.12-.155 2.2-.175 2.987v.004c-.014.544-.023 1.03-.023 1.48 0 3.224-.322 6.835 1.396 8.588 2.662.616 7.568.634 7.584.634.016 0 4.922-.018 7.584-.634 1.718-1.753 1.396-5.364 1.396-8.587 0-.45-.01-.937-.023-1.48v-.005c-.02-.787-.07-1.867-.175-2.987a2.805 2.805 0 0 1-.642.076 2.786 2.786 0 0 1-1.95-.795 2.74 2.74 0 0 1-.465-.602 2.74 2.74 0 0 1-.465.602 2.786 2.786 0 0 1-1.95.795c-.76 0-1.45-.305-1.95-.795a2.74 2.74 0 0 1-.468-.602 2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.95.795h-.024c-.76 0-1.45-.305-1.95-.795a2.74 2.74 0 0 1-.468-.602zm-1.11 2.558c.79 0 1.49.412 1.884 1.03h3.442c.394-.618 1.094-1.03 1.884-1.03 1.24 0 2.246 1.006 2.246 2.246 0 1.24-1.006 2.246-2.246 2.246-.97 0-1.797-.616-2.112-1.48H10.39c-.315.864-1.142 1.48-2.112 1.48-1.24 0-2.246-1.006-2.246-2.246 0-1.24 1.006-2.246 2.246-2.246zm3.605 2.092l-2.068 2.068h1.24v1.655h1.656v-1.655h1.24l-2.068-2.068z" />
            </svg>
            <span>ITCH.IO</span>
          </a>

          <!-- Instagram -->
          <a
            :href="profile.socials.instagram"
            target="_blank"
            rel="noopener noreferrer"
            @mouseenter="playHover"
            class="pixel-btn flex items-center justify-center gap-2 bg-space-800 hover:bg-space-700 text-white font-arcade text-xs lg:text-sm px-3 py-2.5 border-2 border-slate-600"
          >
            <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>INSTAGRAM</span>
          </a>
        </div>
      </div>

      <!-- Right: Message Transmission Form -->
      <div class="lg:col-span-7 pixel-box p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
        <div>
          <h2 class="font-pixel text-xs lg:text-sm text-pixel-gold mb-5">SEND TRANSMISSION</h2>

          <form @submit.prevent="handleSubmit" class="space-y-4 lg:space-y-5">
            <div>
              <label class="block font-arcade text-xs lg:text-sm text-slate-300 mb-1.5">
                SENDER NAME
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="e.g. Recruiter / Teammate"
                class="w-full bg-space-950 border-2 border-slate-700 focus:border-pixel-cyan px-4 py-2.5 lg:py-3 font-sans text-sm lg:text-base text-white focus:outline-none"
              />
            </div>

            <div>
              <label class="block font-arcade text-xs lg:text-sm text-slate-300 mb-1.5">
                RETURN FREQUENCY (EMAIL)
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="you@domain.com"
                class="w-full bg-space-950 border-2 border-slate-700 focus:border-pixel-cyan px-4 py-2.5 lg:py-3 font-sans text-sm lg:text-base text-white focus:outline-none"
              />
            </div>

            <div>
              <label class="block font-arcade text-xs lg:text-sm text-slate-300 mb-1.5">
                MESSAGE PAYLOAD
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                placeholder="Write your message, project idea, or internship opportunity..."
                class="w-full bg-space-950 border-2 border-slate-700 focus:border-pixel-cyan px-4 py-2.5 lg:py-3 font-sans text-sm lg:text-base text-white focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="sending"
              class="pixel-btn w-full bg-pixel-cyan text-space-950 font-pixel text-xs lg:text-sm py-3.5 lg:py-4 border-2 border-emerald-200 disabled:opacity-60"
            >
              {{ sending ? 'TRANSMITTING SIGNAL...' : 'TRANSMIT MESSAGE 🚀' }}
            </button>
          </form>
        </div>

        <!-- Transmission Confirmation -->
        <div
          v-if="sent"
          class="mt-5 bg-emerald-950/80 border-2 border-pixel-cyan p-3.5 font-arcade text-xs lg:text-sm text-pixel-cyan"
        >
          ✓ TRANSMISSION RECEIVED! Your message has been forwarded directly to Davin's inbox.
        </div>

        <!-- Error Notification -->
        <div
          v-if="errorMsg"
          class="mt-5 bg-rose-950/80 border-2 border-pixel-pink p-3.5 font-arcade text-xs lg:text-sm text-pixel-pink"
        >
          ✕ {{ errorMsg }}
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
const copiedDiscord = ref(false)
const sending = ref(false)
const sent = ref(false)
const errorMsg = ref('')

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

async function copyDiscord() {
  try {
    await navigator.clipboard.writeText(profile.socials.discord)
    playConfirm()
    copiedDiscord.value = true
    setTimeout(() => {
      copiedDiscord.value = false
    }, 2500)
  } catch {
    copiedDiscord.value = true
  }
}

async function handleSubmit() {
  if (sending.value) return
  sending.value = true
  errorMsg.value = ''

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: '083960c8-254f-4fc1-8b13-38f7301c9178',
        name: form.name,
        email: form.email,
        message: form.message,
        subject: `Portfolio Message from ${form.name}`
      })
    })

    const result = await response.json()
    if (result.success) {
      playConfirm()
      sent.value = true
      form.name = ''
      form.email = ''
      form.message = ''
      setTimeout(() => {
        sent.value = false
      }, 5000)
    } else {
      errorMsg.value = 'TRANSMISSION FAILED. Please try again or copy the email directly.'
    }
  } catch {
    errorMsg.value = 'SIGNAL LOST. Check your internet connection and try again.'
  } finally {
    sending.value = false
  }
}
</script>