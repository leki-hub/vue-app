import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AboutPage from './pages/AboutPage.vue';
import ContactPage from './pages/ContactPage.vue';
import PostPage from './pages/PostPage.vue';
import ArticlePage from './pages/ArticlePage.vue';
import CounterPage from './pages/CounterPage.vue';
import { createStore } from 'vuex';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/about',
            component: AboutPage,
        },
        {
            path: '/contact',
            component: ContactPage,
        },
        {
            path: '/post/:id',
            component: PostPage,
        },
        {
            path: '/article/:id',
            component: ArticlePage,
            props: true,
        },
        {
            path: '/counter',
            component: CounterPage,
        },
    ],
});

const store = createStore({
    state() {
        return {
            counter: 0,
        };
    },
    getters: {
        counter(state) {
            return state.counter;
        },
    },
    mutations: {
        setCounter(state, data) {
            state.counter += data;
        },
    },
    actions: {
        increment(context) {
            context.commit('setCounter', 1);
        },
    },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');