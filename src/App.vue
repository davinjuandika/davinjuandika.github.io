<template>
  <div class="min-h-screen bg-space-900 text-slate-100 relative overflow-x-hidden flex flex-col">
    <StarfieldBg />
    <TopHud />

    <main
      class="relative z-10 pointer-events-none flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 pb-28 sm:pb-32 flex flex-col justify-center"
    >
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

<style scoped>
main :deep(> *) {
  pointer-events: none;
}

main :deep(> * > *) {
  pointer-events: auto;
}
</style>