<script setup>
import { ArrowDown, ArrowRight, Github, MessageCircle, PlayCircle } from 'lucide-vue-next'
import { capabilities, stats } from '../data/portfolio'
</script>

<template>
  <section id="inicio" class="relative min-h-screen overflow-hidden bg-radial-grid pt-28">
    <div class="absolute inset-0 noise-mask opacity-70">
      <div class="absolute left-[8%] top-24 h-72 w-72 animate-pulseGlow rounded-full bg-cyan-400/20 blur-3xl"></div>
      <div class="absolute right-[5%] top-36 h-96 w-96 animate-pulseGlow rounded-full bg-violet-500/18 blur-3xl [animation-delay:1.3s]"></div>
      <div class="absolute bottom-10 left-1/3 h-80 w-80 animate-pulseGlow rounded-full bg-blue-500/14 blur-3xl [animation-delay:2.1s]"></div>
    </div>

    <div class="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr]">
      <div
        v-motion
        :initial="{ opacity: 0, y: 28 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 720 } }"
        class="max-w-3xl"
      >
        <span class="eyebrow">Disponible para proyectos premium</span>
        <h1 class="mt-6 font-display text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
          Roberto Hisao Kumagai
          <span class="gradient-text block">Full Stack Developer.</span>
        </h1>
        <p class="mt-6 max-w-2xl text-xl font-semibold leading-9 text-slate-200">
          Construyo sistemas que escalan negocios.
        </p>
        <p class="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Programador con experiencia en aplicaciones web modernas usando Laravel, Vue.js, React y bases de datos relacionales. Enfocado en soluciones eficientes, escalables y orientadas a resultados.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#proyectos" class="button-primary">
            Ver proyectos
            <ArrowRight class="h-4 w-4" />
          </a>
          <a href="#contacto" class="button-secondary">
            Contactar
            <MessageCircle class="h-4 w-4" />
          </a>
        </div>

        <div class="mt-8 flex items-center gap-4 text-slate-300">
          <a class="rounded-full border border-white/15 bg-white/5 p-3 transition hover:border-cyan-200/40 hover:text-white" href="https://github.com/hisakuma12" aria-label="GitHub">
            <Github class="h-5 w-5" />
          </a>
          <a class="rounded-full border border-white/15 bg-white/5 p-3 transition hover:border-cyan-200/40 hover:text-white" href="https://wa.me/595984800216" aria-label="WhatsApp">
            <MessageCircle class="h-5 w-5" />
          </a>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.96, y: 32 }"
        :enter="{ opacity: 1, scale: 1, y: 0, transition: { duration: 760, delay: 120 } }"
        class="relative mx-auto w-full max-w-xl"
      >
        <div class="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-400/18 via-violet-500/18 to-blue-500/18 blur-2xl"></div>
        <div class="glass relative overflow-hidden rounded-3xl">
          <div class="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div class="flex gap-2">
              <span class="h-3 w-3 rounded-full bg-pink-400"></span>
              <span class="h-3 w-3 rounded-full bg-yellow-300"></span>
              <span class="h-3 w-3 rounded-full bg-emerald-300"></span>
            </div>
            <div class="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">production</div>
          </div>

          <div class="p-5 sm:p-6">
            <div class="grid gap-4 sm:grid-cols-3">
              <div v-for="item in stats" :key="item.label" class="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div class="text-2xl font-black text-white">{{ item.value }}</div>
                <div class="mt-1 text-xs leading-5 text-slate-400">{{ item.label }}</div>
              </div>
            </div>

            <div class="mt-5 rounded-2xl border border-cyan-200/20 bg-slate-950/70 p-4">
              <div class="mb-4 flex items-center justify-between">
                <div>
                  <p class="text-sm font-bold text-white">Restaurant POS Realtime</p>
                  <p class="text-xs text-slate-400">Laravel + Vue.js + WebSockets</p>
                </div>
                <PlayCircle class="h-6 w-6 text-cyan-200" />
              </div>
              <div class="flex h-44 items-end gap-2 rounded-xl bg-gradient-to-b from-white/[0.07] to-transparent p-3">
                <span v-for="height in [42, 62, 48, 86, 72, 112, 96, 132, 116, 150, 138, 166]" :key="height" class="flex-1 rounded-t-md bg-gradient-to-t from-violet-500 to-cyan-300" :style="{ height: `${height}px` }"></span>
              </div>
            </div>

            <div class="mt-5 grid gap-3 sm:grid-cols-2">
              <div v-for="item in capabilities.slice(0, 4)" :key="item.label" class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <component :is="item.icon" class="h-5 w-5 text-cyan-200" />
                <span class="text-sm font-semibold text-slate-200">{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#sobre-mi" class="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-500 transition hover:text-cyan-200 lg:flex">
        Scroll
        <ArrowDown class="h-4 w-4" />
      </a>
    </div>
  </section>
</template>
