<script setup>
</script>

<template>
  <div class="home">
    <div class="landingPage absolute left-[0px] top-[0px] w-[100%] h-[116px] bg-[red]">
      <div class="top w-[100%] flex flex-row justify-center items-center h-[116px] bg-[#FF4508]">
        <img class="w-[110px]" src="../assets/logo.png" alt="">
      </div>
      <div class="content pt-[25px] flex flex-col items-center">
        <RouterLink class="w-[100%] flex flex-row my-[30px] justify-center" to="/results">
          <div class="block cursor-pointer flex flex-row px-[15px] justify-start items-center">
            <img src="../assets/mock.png" class="mr-[15px]" alt="">
            <span class="text-[18px] font-semibold">Mock exam({{ this.date }})</span>
          </div>
        </RouterLink>
        <RouterLink class="w-[100%] flex flex-row justify-center" to="/results1">
          <div class="block cursor-pointer flex flex-row px-[15px] justify-start items-center">
            <img src="../assets/mock.png" class="mr-[15px]" alt="">
            <span class="text-[18px] font-semibold">Mock exam({{ this.date1 }})</span>
          </div>
        </RouterLink>
        <RouterLink class="w-[100%] flex flex-row my-[30px] justify-center" to="/results2">
          <div class="block cursor-pointer flex flex-row px-[15px] justify-start items-center">
            <img src="../assets/mock.png" class="mr-[15px]" alt="">
            <span class="text-[18px] font-semibold">Mock exam({{ this.date2 }})</span>
          </div>
        </RouterLink>
        <RouterLink class="w-[100%] flex flex-row justify-center" to="/results3">
          <div class="block cursor-pointer flex flex-row px-[15px] justify-start items-center">
            <img src="../assets/mock.png" class="mr-[15px]" alt="">
            <span class="text-[18px] font-semibold">Mock exam({{ this.date3 }})</span>
          </div>
        </RouterLink>
        <RouterLink class="w-[100%] flex flex-row mt-[30px] justify-center" to="/result4">
          <div class="block cursor-pointer flex flex-row px-[15px] justify-start items-center">
            <img src="../assets/mock.png" class="mr-[15px]" alt="">
            <span class="text-[18px] font-semibold">Mock exam({{ this.date4 }})</span>
          </div>
        </RouterLink>
        <RouterLink class="w-[100%] flex flex-row mt-[30px] justify-center" to="/result5">
          <div class="block cursor-pointer flex flex-row px-[15px] justify-start items-center">
            <img src="../assets/mock.png" class="mr-[15px]" alt="">
            <span class="text-[18px] font-semibold">Mock exam({{ this.date5 }})</span>
          </div>
        </RouterLink>
        <RouterLink class="w-[100%] flex flex-row mt-[30px] justify-center" to="/result6">
          <div class="block cursor-pointer flex flex-row px-[15px] justify-start items-center">
            <img src="../assets/mock.png" class="mr-[15px]" alt="">
            <span class="text-[18px] font-semibold">Mock exam({{ this.date6 }})</span>
          </div>
        </RouterLink>
        <RouterLink class="w-[100%] flex flex-row mt-[30px] justify-center" to="/result7">
          <div class="block cursor-pointer flex flex-row px-[15px] justify-start items-center">
            <img src="../assets/mock.png" class="mr-[15px]" alt="">
            <span class="text-[18px] font-semibold">Mock exam({{ this.date7 }})</span>
          </div>
        </RouterLink>
        <RouterLink class="w-[100%] flex flex-row mt-[30px] justify-center" to="/result8">
          <div class="block cursor-pointer flex flex-row px-[15px] justify-start items-center">
            <img src="../assets/mock.png" class="mr-[15px]" alt="">
            <span class="text-[18px] font-semibold">Mock exam({{ this.date8 }})</span>
          </div>
        </RouterLink>
        <RouterLink class="w-[100%] flex flex-row mt-[30px] mb-[130px] justify-center" to="/result9">
          <div class="block cursor-pointer flex flex-row px-[15px] justify-start items-center">
            <img src="../assets/mock.png" class="mr-[15px]" alt="">
            <span class="text-[18px] font-semibold">Mock exam({{ this.date9 }})</span>
          </div>
        </RouterLink>
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
      date1: '',
      date2: '',
      date3: '',
      date4: '',
      date5: '',
      date7: '22.09.2024',
      date8: '27.10.2024',
      date9: '08.12.2024',
      date6: '25.08.2024',
      Sheet_ID: '1-ArEkK19KDY-GjhsO_V_NvQpHqos1V_DLdLOy4jgsYI',
      Sheet_ID1: '1X_bEBAXCTCHcDmLEbOd-rlbTi24rKvJqhaKQny2Todo',
      Sheet_ID2: '1NKibU79ABmOlduiO3rHh2HVowNuXZEUtzmE7zR1u6hA',
      Sheet_ID3: '14wmmkC61KgiSiHN04MpZEupxvOWRm4AULTyuUT4CZHY',
      Sheet_ID4: '1GL5VEgOoDcbxjThxTLpym5SR8uvft5ptmwgY-zsEm4Q',
      Sheet_ID5: '1ZNTMr30x5Us6YA1XON3cSlJNmKE6ndN7WYqTEmlrtnQ',
      Sheet_ID6: '1yHLYm51c3RrCi9Wi1Az6CsF0Dz2eLk5gNI73mx8hh2g',
      Sheet_ID7: '18aFngl71MAJVdncZxF3zQdQXbY0hUZmJCkAySH4mWW0',
      Sheet_ID8: '1ULSy7BnMxRFIis78vRdg40J5uzcFT2Oet5KOle4Jhr8',
      Sheet_ID9: '1bUmbuYChPs4Q_rvekffC5vhxiySpHHaIjG8Hfd9OIIU',
      Sheet_TITLE2: 'Reg2',
      Sheet_TITLE3: 'Reg3',
      Sheet_TITLE4: 'Reg4',
      Sheet_TITLE5: 'Reg5',
      Sheet_TITLE1: 'Reg1',
      Sheet_TITLE6: 'Reg6',
      Sheet_TITLE7: 'Reg7',
      Sheet_TITLE8: 'Reg8',
      Sheet_TITLE9: 'Reg9',
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
    this.Full_URL1 = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID1 + '/gviz/tq?sheet=' + this.Sheet_TITLE1
    fetch(this.Full_URL1)
      .then(res => res.text())
      .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2))
        for (let i of data.table.rows) {
          if (data.table.rows.indexOf(i) == 0) {
            this.date1 = i.c[0].f
          }
        }
      })
    this.Full_URL2 = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID2 + '/gviz/tq?sheet=' + this.Sheet_TITLE2
    fetch(this.Full_URL2)
      .then(res => res.text())
      .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2))
        for (let i of data.table.rows) {
          if (data.table.rows.indexOf(i) == 0) {
            this.date2 = i.c[0].f
          }
        }
      })
    this.Full_URL3 = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID3 + '/gviz/tq?sheet=' + this.Sheet_TITLE3
    fetch(this.Full_URL3)
      .then(res => res.text())
      .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2))
        for (let i of data.table.rows) {
          if (data.table.rows.indexOf(i) == 0) {
            this.date3 = i.c[0].f
          }
        }
      })
    this.Full_URL4 = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID4 + '/gviz/tq?sheet=' + this.Sheet_TITLE4
    fetch(this.Full_URL4)
      .then(res => res.text())
      .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2))
        for (let i of data.table.rows) {
          if (data.table.rows.indexOf(i) == 0) {
            this.date4 = i.c[0].f
          }
        }
      })
    this.Full_URL5 = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID5 + '/gviz/tq?sheet=' + this.Sheet_TITLE5
    fetch(this.Full_URL5)
      .then(res => res.text())
      .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2))
        for (let i of data.table.rows) {
          if (data.table.rows.indexOf(i) == 0) {
            this.date5 = i.c[0].f
          }
        }
      })
    this.Full_URL6 = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID6 + '/gviz/tq?sheet=' + this.Sheet_TITLE6
    fetch(this.Full_URL6)
      .then(res => res.text())
      .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2))
      })
    this.Full_URL7 = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID7 + '/gviz/tq?sheet=' + this.Sheet_TITLE7
    fetch(this.Full_URL7)
      .then(res => res.text())
      .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2))
      })
    this.Full_URL8 = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID8 + '/gviz/tq?sheet=' + this.Sheet_TITLE8
    fetch(this.Full_URL8)
      .then(res => res.text())
      .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2))
      })
    this.Full_URL9 = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID9 + '/gviz/tq?sheet=' + this.Sheet_TITLE9
    fetch(this.Full_URL9)
      .then(res => res.text())
      .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2))
      })
    this.animateLetters();
    setTimeout(() => {
      this.loading = true
    }, 4000);
    setTimeout(() => {
      this.entered = false
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
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
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

.happy {
  color: rgb(35, 231, 5);
  position: absolute;
  font-size: 30px;
  text-align: center;
  top: 65%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
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