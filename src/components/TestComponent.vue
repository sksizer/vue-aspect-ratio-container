<script setup lang="ts">
import AspectRatioContainer from '@/AspectRatioContainer.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { CommonAspectRatios } from '@/CommonAspectRatios'

const containerWidth = ref(600)
const containerHeight = ref(400)

const containerPadding = ref(0)

const aspectRatio = ref(1)
const widthMin = ref(100)
const widthMax = ref(1000)
const heightMin = ref(100)
const heightMax = ref(1000)

const childWidth = ref(0)
const childHeight = ref(0)

let resizeObserver = null

const updateSize = () => {
  childWidth.value = document.querySelector('.childExample').offsetWidth
  childHeight.value = document.querySelector('.childExample').offsetHeight
}

onMounted(() => {
  const childElement = document.querySelector('.childExample')

  resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      if (entry.target === childElement) {
        childWidth.value = entry.contentRect.width
        childHeight.value = entry.contentRect.height
      }
    }
  })
  resizeObserver.observe(childElement)
})

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})
</script>

<template>
  <div class="w-full h-full">
    <div id="controls" class="flex flex-col space-y-4">
      <h2 class="text-2xl font-semibold">Container Size</h2>
      <div>
        <label
          for="width-slider"
          class="block text-sm font-medium text-gray-700"
          >Width</label
        >
        <div class="mt-1 flex flex-col rounded-md shadow-sm">
          <div class="flex justify-between">
            <input
              type="number"
              v-model="widthMin"
              class="w-20 text-sm border-gray-300"
              placeholder="Min"
            />
            <input
              type="number"
              id="width-input"
              v-model="containerWidth"
              class="block w-20 rounded-none rounded-r-md sm:text-sm border-gray-300"
              placeholder="600"
            />
            <input
              type="number"
              v-model="widthMax"
              class="w-20 text-sm border-gray-300"
              placeholder="Max"
            />
          </div>
          <div class="relative w-full">
            <input
              type="range"
              id="width-slider"
              v-model="containerWidth"
              :min="widthMin"
              :max="widthMax"
              class="slider h-2 w-full rounded-full bg-blue-500 outline-none"
            />
          </div>
        </div>
      </div>
      <div>
        <label
          for="height-slider"
          class="block text-sm font-medium text-gray-700"
          >Height</label
        >
        <div class="mt-1 flex flex-col rounded-md shadow-sm">
          <div class="flex justify-between">
            <input
              type="number"
              v-model="heightMin"
              class="w-20 text-sm border-gray-300"
              placeholder="Min"
            />
            <input
              type="number"
              id="height-input"
              v-model="containerHeight"
              class="block w-20 rounded-none rounded-r-md sm:text-sm border-gray-300"
              placeholder="400"
            />
            <input
              type="number"
              v-model="heightMax"
              class="w-20 text-sm border-gray-300"
              placeholder="Max"
            />
          </div>
          <div class="relative w-full">
            <input
              type="range"
              id="height-slider"
              v-model="containerHeight"
              :min="heightMin"
              :max="heightMax"
              class="slider h-2 w-full rounded-full bg-blue-500 outline-none"
            />
          </div>
        </div>
      </div>
      <!-- New slider for adjusting the container padding -->
      <div>
        <label
          for="padding-slider"
          class="block text-sm font-medium text-gray-700"
        >
          Padding
        </label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <input
            type="range"
            id="padding-slider"
            v-model="containerPadding"
            min="0"
            max="100"
            class="slider h-2 w-full rounded-full bg-blue-500 outline-none"
          />
        </div>
      </div>
    </div>
    <div
      class="relative"
      :style="{
        height: containerHeight + 'px',
        width: containerWidth + 'px',
        padding: containerPadding + 'px'
      }"
    >
      <AspectRatioContainer
        :ratio="aspectRatio"
        :log="true"
        class="bg-blue w-full h-full"
      >
        <div
          class="childExample w-full h-full bg-red-300 text-neutral-50 dark:bg-slate-900 dark:text-neutral-50"
        >
          <div class="absolute top-0 right-0 bg-white text-black p-2 rounded">
            {{ childWidth }} x {{ childHeight }}
          </div>
          <Button label="No AR Constraint" @click="aspectRatio = 0" />
          <ul>
            <li v-for="ar in CommonAspectRatios">
              <Button :label="ar.name" @click="aspectRatio = ar.ratio" />
            </li>
          </ul>
        </div>
      </AspectRatioContainer>
      <div class="absolute top-0 left-0 bg-white text-black p-2 rounded">
        {{ containerWidth }} x {{ containerHeight }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
