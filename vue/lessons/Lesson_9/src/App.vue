<template>
    <div class="container">
        <nav class="navbar navbar-dark bg-dark px-2">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Головна</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/shop" class="nav-link">Магазин</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/terms" class="nav-link">Правила оплати</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contacts" class="nav-link">Контакти</router-link>
                </li>
            </ul>
        </nav>
        <router-view />
    </div>
</template>

<style lang="scss">
.nav-tabs {
    border: 0;
}

.nav-link {
    color: #fff;
}

.nav-tabs .nav-link:hover {
    border-color: #42b983;
}

.nav-link:focus,
.nav-link:hover {
    color: #42b983;
}
</style>
