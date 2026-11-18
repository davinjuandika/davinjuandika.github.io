<template>
  <div class="min-h-screen bg-space-900 text-slate-100 relative overflow-x-hidden flex flex-col">
    <StarfieldBg />
    <TopHud />

    <main class="relative z-10 flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="warp" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <BottomDock />
  </div>
</template>

<script setup>
import StarfieldBg from '@/components/layout/StarfieldBg.vue'
import TopHud from '@/components/layout/TopHud.vue'
import BottomDock from '@/components/layout/BottomDock.vue'
</script>
