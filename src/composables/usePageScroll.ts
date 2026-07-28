import { onMounted, onUnmounted, ref } from 'vue'

export function usePageScroll(threshold = 120) {
  const isScrolled = ref(false)

  function onScroll() {
    isScrolled.value = window.scrollY > threshold
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { isScrolled }
}