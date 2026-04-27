<script setup>
import { Menu, X } from 'lucide-vue-next'
import { ref } from 'vue'
import { navItems } from '../data/portfolio'

const open = ref(false)
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
    <nav class="section-shell flex h-16 items-center justify-between">
      <a href="#inicio" class="flex items-center gap-3" aria-label="Inicio">
        <span class="grid h-9 w-9 place-items-center rounded-xl border border-cyan-200/30 bg-cyan-300/10 text-sm font-black text-cyan-100 shadow-glow">
          RK
        </span>
        <span class="hidden text-sm font-bold text-slate-100 sm:block">Roberto Hisao Kumagai</span>
      </a>

      <div class="hidden items-center gap-1 lg:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white"
        >
          {{ item.label }}
        </a>
      </div>

      <a href="#contacto" class="hidden button-primary min-h-10 px-4 lg:inline-flex">Hablemos</a>

      <button
        class="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
        type="button"
        :aria-label="open ? 'Cerrar menu' : 'Abrir menu'"
        @click="open = !open"
      >
        <X v-if="open" class="h-5 w-5" />
        <Menu v-else class="h-5 w-5" />
      </button>
    </nav>

    <div v-if="open" class="border-t border-white/10 bg-ink/95 px-5 py-4 lg:hidden">
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        class="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/8"
        @click="open = false"
      >
        {{ item.label }}
      </a>
    </div>
  </header>
</template>
