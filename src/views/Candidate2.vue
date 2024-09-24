<script setup>
import Header from '../components/HeaderComp.vue'
import Arrow from '../components/Arrow.vue'
</script>

<template>
    <div class="candidate">
        <Header class="headertext" :textHeader='CandidateResult.Candidate_Name' />
        <div
            class="overallScore absolute w-[55px] h-[55px] right-[15px] top-[15px] rounded-[50%] bg-[#00FF1A] flex flex-row justify-center items-center">
            <span class="text-[24px] text-white font-black">{{ CandidateResult.OverallScore }}</span>
        </div>
        <div class="content relative flex flex-col justify-center items-center w-[100%] p-[15px] pt-[45px]">
            <RouterLink to="/results2" class="absolute left-[15px] top-[15px]">
                <Arrow />
            </RouterLink>
            <div @click="overa" class="overall mb-[30px] flex flex-col justify-center items-center">
                <span class="font-black text-[40px]">OVERALL</span>
                <span class="font-black text-[40px] text-[#FF4508]">{{ CandidateResult.OverallScore }}</span>
            </div>
            <div class="fourSkills relative w-[95%] flex flex-row justify-between h-[100px]">
                <div @click="Listening" class="flex flex-row justify-center items-center cursor-pointer listening">
                    <div class="listening" :class="{ 'ListeningActive': listening }"></div>
                    <div class="listeningScore w-[100%] h-[100%] absolute">
                        <span class="text-[35px] font-black">{{ CandidateResult.ListeningBandScore }}</span>
                    </div>
                </div>
                <div @click="Reading" class="flex flex-row justify-center items-center cursor-pointer reading"
                    :class="{ 'ReadingActive': reading }">
                    <div class="reading" :class="{ 'ReadingActive': reading }"></div>
                    <div class="readingScore w-[100%] h-[100%] absolute">
                        <span class="text-[35px] font-black">{{ CandidateResult.ReadingBandScore }}</span>
                    </div>
                </div>
                <div @click="Writing" class="flex flex-row justify-center items-center cursor-pointer writing"
                    :class="{ 'WritingActive': writing }">
                    <div class="writing" :class="{ 'WritingActive': writing }"></div>
                    <div class="writingScore w-[100%] h-[100%] absolute">
                        <span class="text-[35px] font-black">{{ CandidateResult.WritingOverallBandScore }}</span>
                    </div>
                </div>
                <div @click="Speaking" class="flex flex-row justify-center items-center cursor-pointer speaking"
                    :class="{ 'SpeakingActive': speaking }">
                    <div class="speaking" :class="{ 'SpeakingActive': speaking }"></div>
                    <div class="SpeakingScore w-[100%] h-[100%] absolute">
                        <span class="text-[35px] font-black">{{ CandidateResult.SpeakingBandScore }}</span>
                    </div>
                </div>
            </div>
            <div class="BandDescriptor py-[20px] px-[15px] flex flex-col items-center">
                <span class="flex flex-col text-center title text-[32px] py-[15px] font-black text-[#00FF19]">
                    {{ bandDescriptions[overall].title }}
                </span>
                <span class="text-center description text-[20px] px-[15px]">
                    {{ bandDescriptions[overall].description }}
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
            candidateDatas: {},
            Sheet_ID: '1NKibU79ABmOlduiO3rHh2HVowNuXZEUtzmE7zR1u6hA',
            Sheet_TITLE: 'Reg2',
            overall: 0,
            listening: false,
            reading: false,
            writing: false,
            speaking: false,
            CandidateResult: {},
            bandDescriptions: [
                {
                    title: 'Did not attempt the test',
                    description: 'You did not answer the questions.',
                },
                {
                    title: 'Non-user',
                    description: 'You have no ability to use the language except a few isolated words.',
                },
                {
                    title: 'Intermittent user',
                    description: 'You have great difficulty understanding spoken and written English.',
                },
                {
                    title: 'Extremely limited user',
                    description: 'You convey and understand only general meaning in very familiar situations. There are frequent breakdowns in communication.',
                },
                {
                    title: 'Limited user',
                    description: 'Your basic competence is limited to familiar situations. You frequently show problems in understanding and expression. You are not able to use complex language.',
                },
                {
                    title: 'Modest user',
                    description: 'You have a partial command of the language, and cope with overall meaning in most situations, although you are likely to make many mistakes. You should be able to handle basic communication in your own field.',
                },
                {
                    title: 'Competent user',
                    description: 'Generally you have an effective command of the language despite some inaccuracies, inappropriate usage and misunderstandings. You can use and understand fairly complex language, particularly in familiar situations.',
                },
                {
                    title: 'Good user',
                    description: 'You have an operational command of the language, though with occasional inaccuracies, inappropriate usage and misunderstandings in some situations. Generally you handle complex language well and understand detailed reasoning.',
                },
                {
                    title: 'Very good user',
                    description: 'You have a fully operational command of the language with only occasional unsystematic inaccuracies and inappropriate usage. You may misunderstand some things in unfamiliar situations. You handle complex detailed argumentation well.',
                },
                {
                    title: 'Expert user',
                    description: 'You have a full operational command of the language. Your use of English is appropriate, accurate and fluent, and you show complete understanding.',
                },
            ]
        };
    },

    mounted() {
        this.candidateDatas = JSON.parse(window.localStorage.candidate)
        this.Full_URL = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID + '/gviz/tq?sheet=' + this.Sheet_TITLE
        fetch(this.Full_URL)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2))
                for (let i of data.table.rows) {
                    if (i.c[1].v == this.candidateDatas.Candidate_Name && i.c[2].v == this.candidateDatas.Candidate_ID) {
                        console.log(i);
                        this.CandidateResult = {
                            Candidate_Name: i.c[1].v,
                            Candidate_ID: i.c[2].v,
                            ListeningRaw: i.c[3].v,
                            ReadingRaw: i.c[4].v,
                            SpeakingRaw: i.c[5].v,
                            ListeningBandScore: i.c[8].v,
                            ReadingBandScore: i.c[9].v,
                            SpeakingBandScore: i.c[11].v,
                            WritingTask1BandScore: i.c[6].v,
                            WritingTask2BandScore: i.c[7].v,
                            WritingOverallBandScore: i.c[10].v,
                            OverallScore: i.c[12].v,
                        }
                        this.overall = Math.ceil(this.CandidateResult.OverallScore)
                        if (this.CandidateResult.Candidate_Name.split('').length < 10) {
                            document.querySelector('.headertext').style.fontSize = this.CandidateResult.Candidate_Name.split('').length + 25 + 'px'
                        } else if (this.CandidateResult.Candidate_Name.split('').length < 15) {
                            document.querySelector('.headertext').style.fontSize = this.CandidateResult.Candidate_Name.split('').length + 10 + 'px'
                        } else if (this.CandidateResult.Candidate_Name.split('').length < 20) {
                            document.querySelector('.headertext').style.fontSize = this.CandidateResult.Candidate_Name.split('').length + 5 + 'px'
                        } else if (this.CandidateResult.Candidate_Name.split('').length < 25) {
                            document.querySelector('.headertext').style.fontSize = this.CandidateResult.Candidate_Name.split('').length + 1 + 'px'
                        }

                    }
                }
            })
    },

    methods: {
        overa() {
            document.querySelector('.BandDescriptor').firstChild.innerHTML = this.bandDescriptions[this.overall].title
            document.querySelector('.BandDescriptor').lastChild.innerHTML = this.bandDescriptions[this.overall].description
            this.listening = false
            this.reading = false
            this.speaking = false
            this.writing = false
            document.querySelector('.listeningScore').classList = 'listeningScore'
            document.querySelector('.readingScore').classList = 'readingScore'
            document.querySelector('.writingScore').classList = 'writingScore'
            document.querySelector('.SpeakingScore').classList = 'SpeakingScore'
        },
        Listening() {
            this.listening = !this.listening
            this.reading = false
            this.speaking = false
            this.writing = false
            document.querySelector('.listeningScore').classList.toggle('skillActive')
            document.querySelector('.readingScore').classList = 'readingScore'
            document.querySelector('.writingScore').classList = 'writingScore'
            document.querySelector('.SpeakingScore').classList = 'SpeakingScore'
            document.querySelector('.BandDescriptor').firstChild.innerHTML = this.bandDescriptions[Math.ceil(this.CandidateResult.ListeningBandScore)].title + "(" + this.CandidateResult.ListeningRaw + ')'
            document.querySelector('.BandDescriptor').lastChild.innerHTML = this.bandDescriptions[Math.ceil(this.CandidateResult.ListeningBandScore)].description
        },
        Reading() {
            this.reading = !this.reading
            this.listening = false
            this.speaking = false
            this.writing = false
            document.querySelector('.readingScore').classList.toggle('skillActive')
            document.querySelector('.listeningScore').classList = 'listeningScore'
            document.querySelector('.writingScore').classList = 'writingScore'
            document.querySelector('.SpeakingScore').classList = 'SpeakingScore'
            document.querySelector('.BandDescriptor').firstChild.innerHTML = this.bandDescriptions[Math.ceil(this.CandidateResult.ReadingBandScore)].title + "(" + this.CandidateResult.ReadingRaw + ')'
            document.querySelector('.BandDescriptor').lastChild.innerHTML = this.bandDescriptions[Math.ceil(this.CandidateResult.ReadingBandScore)].description
        },
        Speaking() {
            this.speaking = !this.speaking
            this.reading = false
            this.listening = false
            this.writing = false
            document.querySelector('.SpeakingScore').classList.toggle('skillActive')
            document.querySelector('.listeningScore').classList = 'listeningScore'
            document.querySelector('.writingScore').classList = 'writingScore'
            document.querySelector('.readingScore').classList = 'readingScore'
            document.querySelector('.BandDescriptor').firstChild.innerHTML = this.bandDescriptions[Math.ceil(this.CandidateResult.SpeakingBandScore)].title + '\n' + "(" + this.CandidateResult.SpeakingRaw + ')'
            document.querySelector('.BandDescriptor').lastChild.innerHTML = this.bandDescriptions[Math.ceil(this.CandidateResult.SpeakingBandScore)].description
        },
        Writing() {
            this.writing = !this.writing
            this.reading = false
            this.speaking = false
            this.listening = false
            document.querySelector('.writingScore').classList.toggle('skillActive')
            document.querySelector('.readingScore').classList = 'readingScore'
            document.querySelector('.listeningScore').classList = 'listeningScore'
            document.querySelector('.SpeakingScore').classList = 'SpeakingScore'
            document.querySelector('.BandDescriptor').firstChild.innerHTML = this.bandDescriptions[Math.ceil(this.CandidateResult.WritingOverallBandScore)].title + '\n' + this.CandidateResult.WritingTask1BandScore + '/' + this.CandidateResult.WritingTask2BandScore
        },
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap');

.headertext {
    font-size: 32px;
    text-align: center;
    padding-right: 110px;
}

.overall span {
    font-family: 'Inter', sans-serif;
}

.overall {
    width: 95%;
    height: 151px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 27px;

}

.listening {
    width: 80px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    height: 80px;
    transition: 0.3s;
    background-size: contain;
    background-position: center center;
    border-radius: 16px;
    background-image: url('../assets/listening icon1.png');
}

.ListeningActive {
    width: 80px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    height: 80px;
    background-size: contain;
    background-position: center center;
    border-radius: 16px;
    background-image: url('../assets/listening icon.png');
}

.reading {
    width: 80px;
    height: 80px;
    background-position: center center;
    transition: 0.3s;
    background-size: contain;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 16px;
    background-image: url('../assets/reading icon1.png');
}

.ReadingActive {
    width: 80px;
    height: 80px;
    background-position: center center;
    background-size: contain;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 16px;
    background-image: url('../assets/reading icon.png');
}

.speaking {
    width: 80px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    height: 80px;
    background-size: contain;
    background-position: center center;
    border-radius: 16px;
    transition: 0.3s;
    background-image: url('../assets/speaking icon1.png');
}

.SpeakingActive {
    width: 80px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    height: 80px;
    background-size: contain;
    background-position: center center;
    border-radius: 16px;
    background-image: url('../assets/speaking icon.png');
}

.writing {
    width: 80px;
    height: 80px;
    background-size: contain;
    transition: 0.3s;
    border-radius: 16px;
    background-position: center center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-image: url('../assets/writing icon1.png');
}

.WritingActive {
    width: 80px;
    height: 80px;
    background-size: contain;
    border-radius: 16px;
    background-position: center center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-image: url('../assets/writing icon.png');
}

.BandDescriptor {
    width: 95%;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 35px;
}

.listeningScore {
    width: 80px;
    height: 80px;
    position: absolute;
    transition: .3s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    z-index: -1;
    left: 0;
    top: 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
}

.readingScore {
    width: 80px;
    height: 80px;
    z-index: -1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    transition: .3s;
    position: absolute;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
}

.writingScore {
    width: 80px;
    z-index: -1;
    transition: .3s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    height: 80px;
    position: absolute;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
}

.SpeakingScore {
    width: 80px;
    height: 80px;
    z-index: -1;
    position: absolute;
    transition: .3s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    left: 0px;
    z-index: -111;
    top: 0px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
}

.skillActive {
    top: 50px;
}

.overallScore {
    z-index: 99999;
}
</style>
