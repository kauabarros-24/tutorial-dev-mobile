import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RecordsView from '@/views/RecordsView.vue'
import RecordDetailView from '@/views/RecordDetailView.vue'
import RecordFormView from '@/views/RecordFormView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Registros' },
  },
  {
    path: '/registros',
    name: 'registros',
    component: RecordsView,
    meta: { title: 'Registros' },
  },
  {
    path: '/registro/:id',
    name: 'registro-detalhe',
    component: RecordDetailView,
    meta: { title: 'Detalhes' },
  },
  {
    path: '/registro/:id/editar',
    name: 'registro-editar',
    component: RecordFormView,
    meta: { title: 'Editar Registro' },
  },
  {
    path: '/novo',
    name: 'registro-novo',
    component: RecordFormView,
    meta: { title: 'Novo Registro' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Registro de Atividades'
})

export default router