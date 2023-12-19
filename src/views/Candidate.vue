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
            <RouterLink to="/results" class="absolute left-[15px] top-[15px]">
                <Arrow />
            </RouterLink>
            <div class="overall mb-[30px] flex flex-col justify-center items-center">
                <span class="font-black text-[40px]">OVERALL</span>
                <span class="font-black text-[40px] text-[#FF4508]">{{ CandidateResult.OverallScore }}</span>
            </div>
            <div class="fourSkills w-[95%] flex flex-row justify-between h-[100px]">
                <div class="listening"></div>
                <div class="reading"></div>
                <div class="writing"></div>
                <div class="speaking"></div>
            </div>
            <div class="BandDescriptor py-[20px] px-[15px] flex flex-col items-center">
                <span class="text-center title text-[32px] py-[15px] font-black text-[#00FF19]"> {{ this.bandDescriptions[this.overall].title }} </span>
                <span class="text-center description text-[20px] px-[15px]">
                    {{ this.bandDescriptions[this.overall].description }}
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
            Sheet_ID: '1-ArEkK19KDY-GjhsO_V_NvQpHqos1V_DLdLOy4jgsYI',
            Sheet_TITLE: 'Registan_Mock',
            overall: 0,
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
                            WritingTask1Raw: i.c[6].v,
                            WritingTask2Raw: i.c[7].v,
                            ListeningBandScore: i.c[8].v,
                            ReadingBandScore: i.c[9].v,
                            SpeakingBandScore: i.c[10].v,
                            WritingTask1BandScore: i.c[11].v,
                            WritingTask2BandScore: i.c[12].v,
                            WritingOverallBandScore: i.c[13].v,
                            OverallScore: i.c[14].v,
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

    },
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
    background-size: contain;
    background-position: center center;
    border-radius: 16px;
    background-image: url('../assets/listening icon1.png');
}

.reading {
    width: 80px;
    height: 80px;
    background-position: center center;
    background-size: contain;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 16px;
    background-image: url('../assets/reading icon1.png');
}

.speaking {
    width: 80px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    height: 80px;
    background-size: contain;
    background-position: center center;
    border-radius: 16px;
    background-image: url('../assets/speaking icon1.png');
}

.writing {
    width: 80px;
    height: 80px;
    background-size: contain;
    border-radius: 16px;
    background-position: center center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-image: url('../assets/writing icon1.png');
}

.BandDescriptor {
    width: 95%;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 35px;
}

.overallScore {
    z-index: 99999;
}
</style>