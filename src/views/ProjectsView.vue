<template>
  <section class="w-full max-w-6xl mx-auto py-2 lg:py-4">
    <!-- Header & Category Filter -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 lg:gap-6 mb-6 lg:mb-8">
      <div>
        <span class="font-arcade text-xs lg:text-sm text-pixel-cyan">
          SECTOR 03 // ARCHIVED BUILDS
        </span>
        <h1 class="font-pixel text-lg sm:text-2xl lg:text-3xl text-white mt-1.5">
          MISSION LOG
        </h1>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap gap-2 lg:gap-2.5">
        <button
          v-for="cat in projectCategories"
          :key="cat"
          type="button"
          @click="selectCategory(cat)"
          @mouseenter="playHover"
          class="pixel-btn font-arcade text-xs lg:text-sm px-3.5 lg:px-4 py-2 lg:py-2.5 border-2 transition-colors"
          :class="
            activeCategory === cat
              ? 'bg-pixel-cyan text-space-950 border-emerald-200 font-bold'
              : 'bg-space-800 text-slate-300 border-slate-600 hover:text-white'
          "
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 items-stretch">
      <ProjectCard
        v-for="proj in filteredProjects"
        :key="proj.id"
        :project="proj"
        @select="openProject"
      />
    </div>

    <!-- Mission Detail Modal -->
    <ProjectModal
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects, projectCategories } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectModal from '@/components/projects/ProjectModal.vue'
import { useSfx } from '@/composables/useSfx'

const { playClick, playHover } = useSfx()

const activeCategory = ref('All')
const selectedProject = ref(null)

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter((p) => p.category === activeCategory.value)
})

function selectCategory(category) {
  playClick()
  activeCategory.value = category
}

function openProject(project) {
  playClick()
  selectedProject.value = project
}
</script>