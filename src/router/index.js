import { createRouter, createWebHistory } from 'vue-router';
import { isProfileCached } from '../utils';
import Form from '../views/Form.vue';
import Preview from '../views/Preview.vue';

const routes = [
  {
    path: '/',
    name: 'form-page',
    component: Form,
  },
  {
    path: '/preview',
    name: 'preview-page',
    component: Preview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.name === 'preview-page' && !isProfileCached()) {
    alert('Данные не корректны');
    return { name: 'form-page' };
  }
  return true;
});

export default router;
