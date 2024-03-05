<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  ratio: {
    type: Number,
    required: false,
    default: 1
  },
  log: {
    type: Boolean,
    required: false,
    default: false
  }
})

let callCounter = 0
const containerRef = ref()
const childRef = ref()
let resizeObserver: ResizeObserver | null = null

watch(
  () => props.ratio,
  () => {
    adjustAspectRatio()
  }
)

function logger(...args: any[]) {
  if (props.log && console) {
    console.log(...args)
  }
}

function adjustAspectRatio() {
  logger('adjustAspectRatio', callCounter++)
  const container = containerRef.value
  const child = childRef.value
  if (!container || !child) return
  const aspectRatio = props.ratio

  let containerWidth = container.offsetWidth
  let containerHeight = container.offsetHeight
  logger('Container size:', containerWidth, 'x', containerHeight)

  let newWidth, newHeight

  if (aspectRatio === 0) {
    // If ratio is 0, make child occupy the entire container
    newWidth = containerWidth
    newHeight = containerHeight
  } else if (containerWidth / containerHeight > aspectRatio) {
    // Container is wider than the desired aspect ratio
    newHeight = containerHeight
    newWidth = newHeight * aspectRatio
  } else {
    // Container is taller than the desired aspect ratio
    newWidth = containerWidth
    newHeight = newWidth / aspectRatio
  }

  child.style.width = `${newWidth}px`
  child.style.height = `${newHeight}px`
  child.style.top = `${(containerHeight - newHeight) / 2}px` // Center vertically
  child.style.left = `${(containerWidth - newWidth) / 2}px` // Center horizontally
}

onMounted(() => {
  logger('onMounted')
  let container = containerRef.value
  resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      logger('ResizeObserver', entry)
      const rect = entry.contentRect
      logger('Element size:', rect.width, 'x', rect.height)
      adjustAspectRatio()
    }
  })
  resizeObserver.observe(container) //document.getElementById('container'))
})

// Cleanup handlers
onBeforeUnmount(() => {
  resizeObserver?.unobserve(containerRef.value)
  resizeObserver?.disconnect()
})
</script>

<template>
  <div ref="containerRef" class="sarcContainer">
    <div ref="childRef" class="sarcChild">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.sarcContainer {
  position: relative;
  width: 100%;
  height: 100%;
}
.sarcChild {
  position: relative;
}
</style>
