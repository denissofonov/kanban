import {createRouter, createWebHistory} from 'vue-router'
import Board from "./src/components/board/Board.vue";

const routes = [
    { path: '/board', component: Board },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
