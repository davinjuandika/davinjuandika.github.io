<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
    <!-- Subtle pixel grid overlay -->
    <div
      class="absolute inset-0 opacity-[0.04]"
      style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 24px 24px;"
    ></div>

    <!-- Ambient Space Glows -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-pixel-purple/15 rounded-full blur-3xl"></div>
    <div class="absolute top-1/3 -right-24 w-96 h-96 bg-pixel-cyan/10 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-24 left-1/3 w-96 h-96 bg-pixel-blue/15 rounded-full blur-3xl"></div>

    <!-- Twinkling Pixel Stars -->
    <div
      v-for="star in stars"
      :key="star.id"
      class="absolute bg-white crisp-pixel"
      :style="{
        left: star.x + '%',
        top: star.y + '%',
        width: star.size + 'px',
        height: star.size + 'px',
        backgroundColor: star.color,
        animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`
      }"
    ></div>
  </div>
</template>

<script setup>
const colors = ['#FFFFFF', '#FFD166', '#06D6A0', '#9B5DE5', '#BAE6FD']

const stars = Array.from({ length: 48 }, (_, i) => ({
  id: i,
  x: ((i * 37 + 13) % 98) + 1,
  y: ((i * 53 + 7) % 96) + 1,
  size: i % 5 === 0 ? 4 : i % 2 === 0 ? 3 : 2,
  color: colors[i % colors.length],
  duration: 2.2 + (i % 4) * 0.7,
  delay: (i % 6) * 0.4
}))
</script>
