<template>
    <div>
        <h1>Данное приложение было создано в результате моего обучения на Vue 3</h1>
        <section class="about-info">
            <h2>Почему списки постов похожи?</h2>
            <p>Это учебное приложение: три раздела показывают один и тот же список постов, реализованный разными способами.</p>
            <ul>
                <li><strong>Посты</strong> — реализация через Options API.</li>
                <li><strong>Store</strong> — управление состоянием через Vuex.</li>
                <li><strong>Composition</strong> — реализация через Composition API.</li>
            </ul>
            <p>Эти разделы намеренно выглядят похоже. Каждый из них содержит собственный список постов.</p>
        </section>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .about-info {
        margin-top: 24px;
        max-width: 800px;
        line-height: 1.6;
    }

    .about-info p,
    .about-info ul {
        margin-top: 12px;
    }

    .about-info ul {
        padding-left: 24px;
    }
</style>