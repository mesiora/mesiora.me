<template>
  <div>
    <aside class="noise"></aside>
    <article class="relative prose dark:prose-invert mx-auto my-36">
      <h1>Medusiora</h1>
      <blockquote>
        <small> "Everything can work!" - BigDaddy</small>
      </blockquote>
      <p>Hey, I'm Itsarachon Puansak (Khom), a fullstack web developer</p>
      <p>
        Working at
        <a
          href="https://outsourcify.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Outsourcify
        </a>
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

<style>
.noise {
  position: fixed;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent url("~/assets/images/noise.png") repeat 0 0;
  background-repeat: repeat;
  animation: noise 0.2s infinite;
  opacity: 0.9;
  visibility: visible;
}

@keyframes noise {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -5%);
  }
  20% {
    transform: translate(-10%, 5%);
  }
  30% {
    transform: translate(5%, -10%);
  }
  40% {
    transform: translate(-5%, 15%);
  }
  50% {
    transform: translate(-10%, 5%);
  }
  60% {
    transform: translate(15%, 0);
  }
  70% {
    transform: translate(0, 10%);
  }
  80% {
    transform: translate(-15%, 0);
  }
  90% {
    transform: translate(10%, 5%);
  }
  100% {
    transform: translate(5%, 0);
  }
}
</style>
