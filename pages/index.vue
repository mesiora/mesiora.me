<template>
  <div class="container">
    <article class="relative prose dark:prose-invert mx-auto my-14">
      <h1>Medusiora</h1>
      <blockquote>
        <small> "Everything can work!" - BigDaddy</small>
      </blockquote>
      <p>Hey, I'm Itsarachon Puansak (Khom), a fullstack web developer</p>
      <p>
        🔭 Working at
        <UTooltip
          text="Web/Mobile Apps Design and Development in Bangkok, Thailand"
        >
          <a
            href="https://outsourcify.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Outsourcify
          </a>
        </UTooltip>
      </p>
      <p>
        Welcome to my corner of the web! I'm passionate about crafting engaging
        online experiences and leveraging technology to bring visions to life.
      </p>
      <p>
        As a lead web developer, I thrive on the challenges of code, design, and
        innovation.
      </p>
      <p>
        With years of experience in front-end and back-end development, I
        specialize in creating robust, user-centric websites that merge
        functionality with aesthetics.
      </p>
      <p>
        My journey in this dynamic field has honed not only my technical skills
        but also my ability to collaborate effectively, communicate ideas, and
        adapt to emerging trends.
      </p>

      <UDivider label="Find me on" color="gray" class="my-4" />

      <div class="flex flex-wrap items-center gap-3 text-sm">
        <a
          href="https://github.com/medusiora"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline"
        >
          <UIcon name="i-simple-icons-github" dynamic />
          GitHub
        </a>
        <a
          href="https://www.facebook.com/itsarachon.khom/"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline"
        >
          <UIcon name="i-simple-icons-facebook" dynamic />
          Facebook
        </a>
        <a
          href="https://www.instagram.com/medusiora/"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline"
        >
          <UIcon name="i-simple-icons-instagram" dynamic />
          instagram
        </a>
        <a
          href="mailto:itsarachon.khom@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline"
        >
          <UIcon name="i-simple-icons-gmail" dynamic />
          itsarachon.khom@gmail.com
        </a>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
