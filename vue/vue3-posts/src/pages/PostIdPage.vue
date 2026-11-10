<template>
    <div>
        <h1>Эта страница поста с ID= {{ $route.params.id }}</h1>
        <p v-if="isLoading" role="status">Загрузка поста...</p>
        <p v-else-if="error" role="alert">{{ error }}</p>
        <article v-else-if="post">
            <h2>{{ post.title }}</h2>
            <p class="post-body">{{ post.body }}</p>
        </article>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                post: null,
                isLoading: false,
                error: ''
            };
        },
        watch: {
            '$route.params.id': {
                immediate: true,
                async handler(id, previousId, onCleanup) {
                    const controller = new AbortController();
                    onCleanup(() => controller.abort());
                    this.post = null;
                    this.error = '';
                    this.isLoading = true;
                    try {
                        const cachedPost = this.$store.state.post.posts.find(post => String(post.id) === String(id));
                        if (cachedPost) {
                            this.post = cachedPost;
                            return;
                        }
                        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${encodeURIComponent(id)}`, {
                            signal: controller.signal
                        });
                        if (!controller.signal.aborted) {
                            this.post = response.data;
                        }
                    } catch (error) {
                        if (!controller.signal.aborted) {
                            this.error = error.response?.status === 404
                                ? 'Post not found.'
                                : 'Unable to load the post. Please refresh the page.';
                        }
                    } finally {
                        if (!controller.signal.aborted) {
                            this.isLoading = false;
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>
    article {
        margin-top: 20px;
    }

    .post-body {
        margin-top: 12px;
        white-space: pre-line;
        line-height: 1.6;
    }
</style>
