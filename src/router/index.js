import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { sector: 'SECTOR 01 // ORBIT HUB' }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { sector: 'SECTOR 02 // PILOT ID' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: { sector: 'SECTOR 03 // MISSION LOG' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { sector: 'SECTOR 04 // COMMS LINK' }
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
