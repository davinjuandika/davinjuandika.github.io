import { ref } from 'vue'

const sfxEnabled = ref(true)
let audioCtx = null

function getContext() {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (AudioContext) {
      audioCtx = new AudioContext()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {})
  }
  return audioCtx
}

if (typeof window !== 'undefined') {
  const unlockAudio = () => {
    getContext()
    window.removeEventListener('pointerdown', unlockAudio)
    window.removeEventListener('keydown', unlockAudio)
  }
  window.addEventListener('pointerdown', unlockAudio, { once: true })
  window.addEventListener('keydown', unlockAudio, { once: true })
}

function playTone(freq, type = 'square', duration = 0.08, volume = 0.06, slideTo = null) {
  if (!sfxEnabled.value) return
  const ctx = getContext()
  if (!ctx) return

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = type
  osc.frequency.setValueAtTime(freq, ctx.currentTime)
  if (slideTo) {
    osc.frequency.exponentialRampToValueAtTime(slideTo, ctx.currentTime + duration)
  }

  gain.gain.setValueAtTime(volume, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()
  osc.stop(ctx.currentTime + duration)
}

export function useSfx() {
  const toggleSfx = () => {
    sfxEnabled.value = !sfxEnabled.value
    if (sfxEnabled.value) {
      playConfirm()
    }
  }

  const playHover = () => {
    if (audioCtx && audioCtx.state === 'suspended') return
    playTone(520, 'square', 0.04, 0.03)
  }

  const playClick = () => {
    playTone(660, 'square', 0.07, 0.05, 880)
  }

  const playWarp = () => {
    playTone(280, 'triangle', 0.18, 0.07, 780)
  }

  const playBoost = () => {
    playTone(220, 'sawtooth', 0.22, 0.06, 620)
  }

  const playConfirm = () => {
    playTone(523.25, 'square', 0.07, 0.05)
    setTimeout(() => playTone(783.99, 'square', 0.11, 0.05), 75)
  }

  return {
    sfxEnabled,
    toggleSfx,
    playHover,
    playClick,
    playWarp,
    playBoost,
    playConfirm
  }
}