<script setup>
</script>

<template>
  <div class="home">
    <div class="animationWin">
      <div class="logo absolute"><img src="../assets/logo.png" alt=""></div>
      <div class="letter-container">
        <span v-for="(letter, index) in words" :key="index" class="letter"
          :style="{ animationDelay: `${index * 300}ms` }">
          {{ letter === ' ' ? '\u00A0' : letter }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',

  data() {
    return {
      words: ['R', 'E', 'G', 'I', 'S', 'T', 'A', 'N', ' ', 'M', 'O', 'C', 'K', ' ', 'E', 'X', 'A', 'M', 'S']
    };
  },

  mounted() {
    this.animateLetters();
  },

  methods: {
    animateLetters() {
      const letterElements = document.querySelectorAll('.letter');

      letterElements.forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add('appear');
        }, index * 200);
      });
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
@keyframes appearing {
  0% {
    opacity: 0%
  }

  100% {
    opacity: 100%
  }

}

.home {
  width: 100%;
  height: 100%;
  /* background-color: #FF4508; */
}

.animationWin {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #FF4508;
  animation: appearing .3s ease-in-out;
}

.logo img {
  width: 220px;
}

.logo {
  position: absolute;
  top: 35%;
  transform: translateX(-50%) translateY(-50%);
  left: 50%;
}

.letter-container {
  display: flex;
  top: 50%;
  left: 50%;
  justify-content: center;
  font-size: 32px;
  width: 290px;
  height: 100px;
  position: absolute;
  flex-wrap: wrap;
  color: white;
  font-family: 'Inter', sans-serif;
  transform: translateX(-50%) translateY(-50%);
}

.letter {
  opacity: 0;
  transition: opacity 1s ease-out;
}

.appear {
  opacity: 1;
}
</style>