import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue'
import Todo from '../views/Todo.vue'
const routes = [
  {
    path: '/users/:userId',
    name: 'User',
    component: User,
    children:[
      {
        path: 'todos',
        component: Todo
      }
    ]
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
