import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShopPage from '@/views/ShopPage.vue'
import ProductsList from '@/components/ProductsList'
import PaymentTerms from '@/views/PaymentTerms.vue'
import ContactsPage from '@/views/ContactsPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopPage,
    },
    {
        path: '/products/:categoryId?',
        name: 'products',
        component: ProductsList,
    },
    {
        path: '/terms',
        name: 'terms',
        component: PaymentTerms,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsPage,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
