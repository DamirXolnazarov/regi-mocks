<script setup>
</script>

<template>
  <div class="home">
    <div class="landingPage absolute left-[0px] top-[0px] w-[100%] h-[116px] bg-[red]">
      <div class="top w-[100%] flex flex-row justify-center items-center h-[116px] bg-[#FF4508]">
        <img class="w-[110px]" src="../assets/logo.png" alt="">
      </div>
      <div class="content pt-[25px] flex flex-row justify-center">
        <RouterLink class="w-[100%] flex flex-row justify-center" to="/results"><div class="block cursor-pointer flex flex-row px-[15px] justify-start items-center">
            <img src="../assets/mock.png" class="mr-[15px]" alt="">
            <span class="text-[18px] font-semibold">Mock exam({{ this.date }})</span>
        </div></RouterLink>
      </div>
    </div>
    <div class="animationWin" v-if="entered">
      <div class="logo absolute"><img src="../assets/logo.png" alt=""></div>
      <div class="letter-container">
        <span v-for="(letter, index) in words" :key="index" class="letter"
          :style="{ animationDelay: `${index * 300}ms` }">
          {{ letter === ' ' ? '\u00A0' : letter }}
        </span>
      </div>
      <div class="loading" v-if="loading">
        <span class="loader"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',

  data() {
    return {
      words: ['R', 'E', 'G', 'I', 'S', 'T', 'A', 'N', ' ', 'M', 'O', 'C', 'K', ' ', 'E', 'X', 'A', 'M', 'S'],
      loading: false,
      entered: true,
      date: '',
      Sheet_ID: '1-ArEkK19KDY-GjhsO_V_NvQpHqos1V_DLdLOy4jgsYI',
      Sheet_TITLE: 'Registan_Mock',
    };
  },

  mounted() {
    this.Full_URL = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID + '/gviz/tq?sheet=' + this.Sheet_TITLE
    fetch(this.Full_URL)
      .then(res => res.text())
      .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2))
        for (let i of data.table.rows) {
          if (data.table.rows.indexOf(i) == 0) {
            this.date = i.c[0].f
          }
        }
      })

    this.animateLetters();
    setTimeout(() => {
      this.loading = !this.loading
    }, 4000);
    setTimeout(() => {
    this.entered = !this.entered
    }, 7000);
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

.block {
  width: 85%;
  height: 92px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
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
  transform: translateX(-50%) translateY(-50%);
}

.letter {
  opacity: 0;
  transition: opacity 1s ease-out;
}


.appear {
  opacity: 1;
}

.loading {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #FFF;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>