<script setup>
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import SectionHeader from './components/SectionHeader.vue'
import { approach, projects, services, technologies } from './data/portfolio'
import { ArrowUpRight, CheckCircle2, Github, Mail, MessageCircle, Send } from 'lucide-vue-next'
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

function submitContact() {
  sent.value = true
  setTimeout(() => {
    sent.value = false
    form.name = ''
    form.email = ''
    form.message = ''
  }, 1800)
}
</script>

<template>
  <AppNavbar />
  <main>
    <HeroSection />

    <section id="sobre-mi" class="relative py-24 sm:py-32">
      <div class="section-shell">
        <SectionHeader
          kicker="Sobre mi"
          title="Frontend moderno, backend solido y foco en resultados."
          text="Experiencia profesional desarrollando aplicaciones web con Laravel, Vue.js, Vuetify, APIs REST, facturacion electronica y WebSockets."
        />

        <div class="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div
            v-motion
            :initial="{ opacity: 0, x: -28 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 650 } }"
            class="glass rounded-3xl p-6 sm:p-8"
          >
            <p class="text-lg leading-9 text-slate-200">
              Soy Roberto Hisao Kumagai Yamamoto, programador full stack con experiencia en desarrollo de aplicaciones web modernas, interfaces enfocadas en UX/UI e integraciones para procesos empresariales.
            </p>
            <p class="mt-5 leading-8 text-slate-300">
              En IDEV trabajo desde 2019 en soluciones con Laravel, Vue.js y Vuetify, implementando APIs REST, sistemas de pago, facturacion electronica y funcionalidades en tiempo real con WebSockets.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <span v-for="tag in ['Laravel', 'Vue.js', 'React', 'Vuetify', 'Inertia.js', 'MySQL', 'Docker']" :key="tag" class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <article
              v-for="(item, index) in approach"
              :key="item.title"
              v-motion
              :initial="{ opacity: 0, y: 24 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 560, delay: index * 80 } }"
              class="glass card-hover rounded-3xl p-6"
            >
              <component :is="item.icon" class="h-7 w-7 text-cyan-200" />
              <h3 class="mt-5 text-lg font-black text-white">{{ item.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-300">{{ item.text }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="tecnologias" class="overflow-hidden border-y border-white/10 bg-white/[0.025] py-24 sm:py-32">
      <div class="section-shell">
        <SectionHeader
          kicker="Tecnologias"
          title="Stack moderno para productos serios."
          text="Stack principal basado en el CV: PHP, JavaScript, Laravel, Vue.js, React, Vuetify, Inertia.js, MySQL, Docker, Vite, APIs REST y WebSockets."
        />

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(tech, index) in technologies"
            :key="tech.name"
            v-motion
            :initial="{ opacity: 0, y: 26 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 560, delay: index * 70 } }"
            class="glass card-hover group rounded-3xl p-6"
          >
            <div :class="['grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-slate-950 shadow-violet transition duration-300 group-hover:scale-110', tech.tone]">
              <component :is="tech.icon" class="h-7 w-7" />
            </div>
            <h3 class="mt-6 text-xl font-black text-white">{{ tech.name }}</h3>
            <p class="mt-2 text-sm leading-7 text-slate-300">{{ tech.detail }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="proyectos" class="py-24 sm:py-32">
      <div class="section-shell">
        <SectionHeader
          kicker="Proyectos"
          title="Sistemas que parecen producto, no solo codigo."
          text="Casos pensados para demostrar criterio tecnico, calidad visual y capacidad de resolver problemas de negocio."
        />

        <div class="grid gap-6 lg:grid-cols-3">
          <article
            v-for="(project, index) in projects"
            :key="project.title"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 620, delay: index * 90 } }"
            class="glass card-hover flex overflow-hidden rounded-3xl lg:flex-col"
          >
            <img :src="project.image" :alt="project.title" class="h-56 w-full object-cover lg:h-60" />
            <div class="flex flex-1 flex-col p-6">
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">{{ project.category }}</p>
              <h3 class="mt-3 text-2xl font-black text-white">{{ project.title }}</h3>
              <p class="mt-3 flex-1 text-sm leading-7 text-slate-300">{{ project.description }}</p>
              <div class="mt-5 flex flex-wrap gap-2">
                <span v-for="tech in project.stack" :key="tech" class="rounded-full bg-white/8 px-3 py-1 text-xs font-bold text-slate-200">{{ tech }}</span>
              </div>
              <div class="mt-5 space-y-2">
                <div v-for="metric in project.metrics" :key="metric" class="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 class="h-4 w-4 text-emerald-300" />
                  {{ metric }}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="servicios" class="border-y border-white/10 bg-white/[0.025] py-24 sm:py-32">
      <div class="section-shell">
        <SectionHeader
          kicker="Servicios"
          title="Soluciones completas para operaciones digitales."
          text="Desde arquitectura y desarrollo hasta automatizacion, integraciones y experiencia de usuario."
        />

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="(service, index) in services"
            :key="service.title"
            v-motion
            :initial="{ opacity: 0, y: 26 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 560, delay: index * 80 } }"
            class="glass card-hover rounded-3xl p-6"
          >
            <component :is="service.icon" class="h-8 w-8 text-cyan-200" />
            <h3 class="mt-6 text-xl font-black text-white">{{ service.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-300">{{ service.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="contacto" class="relative overflow-hidden py-24 sm:py-32">
      <div class="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div class="section-shell relative">
        <div class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div
            v-motion
            :initial="{ opacity: 0, x: -28 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 650 } }"
            class="pt-4"
          >
            <span class="eyebrow">Contacto</span>
            <h2 class="mt-5 font-display text-4xl font-black leading-tight text-white sm:text-5xl">
              Tienes una idea o sistema que necesita mejor software.
            </h2>
            <p class="mt-5 text-lg leading-8 text-slate-300">
              Escribeme para proyectos web, sistemas internos, POS, facturacion electronica, integraciones o interfaces modernas orientadas a negocio.
            </p>
            <div class="mt-8 space-y-4">
              <a href="mailto:hisakuma95@gmail.com" class="flex items-center gap-3 text-slate-200 hover:text-cyan-200">
                <Mail class="h-5 w-5" />
                hisakuma95@gmail.com
              </a>
              <a href="https://wa.me/595984800216" class="flex items-center gap-3 text-slate-200 hover:text-cyan-200">
                <MessageCircle class="h-5 w-5" />
                0984 800 216
              </a>
              <a href="https://github.com/hisakuma12" class="flex items-center gap-3 text-slate-200 hover:text-cyan-200">
                <Github class="h-5 w-5" />
                github.com/hisakuma12
              </a>
            </div>
          </div>

          <form
            v-motion
            :initial="{ opacity: 0, y: 28 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 650 } }"
            class="glass rounded-3xl p-5 sm:p-8"
            @submit.prevent="submitContact"
          >
            <div class="grid gap-5 sm:grid-cols-2">
              <label class="block">
                <span class="text-sm font-bold text-slate-200">Nombre</span>
                <input v-model="form.name" required class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/60" placeholder="Tu nombre" />
              </label>
              <label class="block">
                <span class="text-sm font-bold text-slate-200">Email</span>
                <input v-model="form.email" required type="email" class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/60" placeholder="tu@email.com" />
              </label>
            </div>
            <label class="mt-5 block">
              <span class="text-sm font-bold text-slate-200">Mensaje</span>
              <textarea v-model="form.message" required rows="6" class="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/60" placeholder="Cuentame sobre el proyecto, problema o sistema que necesitas."></textarea>
            </label>
            <button type="submit" class="button-primary mt-6 w-full">
              <span>{{ sent ? 'Mensaje preparado' : 'Enviar mensaje' }}</span>
              <Send class="h-4 w-4" />
            </button>
            <p class="mt-4 text-center text-xs leading-6 text-slate-500">
              El formulario queda listo para conectar a un endpoint Laravel como POST /api/contact.
            </p>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="border-t border-white/10 py-8">
    <div class="section-shell flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
      <p>Roberto Hisao Kumagai Yamamoto. Full Stack Developer.</p>
      <a href="#inicio" class="inline-flex items-center gap-2 font-bold text-slate-300 hover:text-cyan-200">
        Volver arriba
        <ArrowUpRight class="h-4 w-4" />
      </a>
    </div>
  </footer>
</template>
