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
        <div class="content w-[100%] p-[15px]">
            <RouterLink to="/results">
                <Arrow />
            </RouterLink>
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
            CandidateResult: {},
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
                        if(this.CandidateResult.Candidate_Name.split('').length < 10){
                            document.querySelector('.headertext').style.fontSize = this.CandidateResult.Candidate_Name.split('').length + 25 + 'px'
                        }else if(this.CandidateResult.Candidate_Name.split('').length < 15){
                            document.querySelector('.headertext').style.fontSize = this.CandidateResult.Candidate_Name.split('').length + 10 + 'px'
                        }else if(this.CandidateResult.Candidate_Name.split('').length < 20){
                            document.querySelector('.headertext').style.fontSize = this.CandidateResult.Candidate_Name.split('').length + 5 + 'px'
                        }else if(this.CandidateResult.Candidate_Name.split('').length < 25){
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
.headertext {
    font-size: 32px;
    text-align: center;
    padding-right: 110px;
}

.overallScore {
    z-index: 99999;
}</style>