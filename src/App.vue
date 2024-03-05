<template>
  <div class="w-full h-full min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <div class="container mx-auto max-w-5xl relative">
      <nav class="h-20 py-4 flex-between text-primary">
        <div class="font-semibold text-xl flex-center gap-2">
          Vue Aspect Ratio Container
        </div>
        <div class="flex-center gap-4">
          <button
            class="!bg-transparent opacity-50 hover:opacity-100 transition"
            @click="(e) => toggleDarkmode()"
          >
            <carbon:moon class="w-6 h-6" v-if="isDark" />
            <carbon:sun class="w-6 h-6" v-else />
          </button>
          <a
            class="opacity-50 hover:opacity-100 transition"
            href="https://github.com/sksizer/vue-aspect-ratio-container"
          >
            <carbon:logo-github class="h-6 w-6" />
          </a>
        </div>
      </nav>
      <header class="py-20">
        <div class="font-extrabold">
          <span class="text-6xl text-neon">Vue Aspect Ratio Container</span>
        </div>
        <div
          class="text-2xl font-semibold text-slate-700 py-4 dark:text-slate-200"
        >
          A simple container to maintain aspect ratio of a child element within
          the parent space
        </div>
        <div class="flex gap-4 mt-8">
          <a
            class="bg-gray-200 hover:bg-gray-300 transition rounded-full text-lg font-semibold py-3 px-6 w-full sm:w-auto text-center"
            href="https://github.com/sksizer/vue-aspect-ratio-container"
            target="_blank"
          >
            <span>Documentation</span>
          </a>
        </div>
      </header>
      <main class="grid grid-cols-1 gap-8 text-xs 2xl:text-sm"></main>
      <TestComponent />
      <footer
        class="sticky mt-16 w-full flex-center text-primary"
        text="slate-900 dark:slate-300 opacity-60 sm"
      >
        <div class="copyright flex flex-col justify-center items-center">
          <p>
            Code with ❤ & ☕️ by
            <a class="text-neon" href="https://github.com/sksizer">
              @sksizer
            </a>
            <span> © {{ new Date().getFullYear() }}</span>
          </p>
        </div>
      </footer>
      <div class="w-full mx-auto"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isDark, toggleDarkmode } from '~/composables/useDarkmode'
</script>

<style lang="scss">
@import '~/assets/highlight.scss';
</style>
