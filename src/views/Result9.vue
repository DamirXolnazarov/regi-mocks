<script setup>
import Header from '../components/HeaderComp.vue'
import Arrow from '../components/Arrow.vue'
import Candidate from '../components/Candidate.vue'
</script>

<template>
    <div class="results">
        <Header :textHeader="'Mock exam (' + date + ')'" />
        <div class="content w-[100%] p-[15px]">
            <RouterLink to="/">
                <Arrow />
            </RouterLink>
            <div class="results_part py-[10px] w-[100%] h-[100%] flex flex-col justify-center items-center">
                <div class="searchBar w-[95%] flex flex-row justify-center items-center relative">
                    <input v-model="search" @input="filterData"
                        class="search w-[95%] relative pl-[50px] h-[47px] rounded-[42px] bg-[#F5F5F5]"
                        placeholder="Search...">
                    <img class="w-[23px] absolute top-[25%] left-[25px]" src="../assets/searchIcon.png" alt="">
                </div>
                <div class="candidate_results w-[95%]">
                    <RouterLink to="/candidate9">
                        <Candidate @click="candidatePage(i)" v-for="i of Datas" :Candidate_name="i.Candidate_Name"
                            :Candidate_id="i.Candidate_ID" :overallScore="i.OverallScore" :key="i.id" />
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',

    data() {
        return {
            Sheet_ID: '1bUmbuYChPs4Q_rvekffC5vhxiySpHHaIjG8Hfd9OIIU',
            Sheet_TITLE: 'Reg9',
            date: '',
            results: [],
            search: '',
            Datas: [],

        };
    },

    mounted() {
        this.Full_URL = 'https://docs.google.com/spreadsheets/d/' + this.Sheet_ID + '/gviz/tq?sheet=' + this.Sheet_TITLE
        fetch(this.Full_URL)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2))
                for (let i of data.table.rows) {
                    if (data.table.rows.indexOf(i) !== 0) {
                        this.results.push(
                            {
                                Candidate_Name: i.c[1].v,
                                Candidate_ID: i.c[2].v,
                                OverallScore: i.c[12].v,
                            }
                        )
                        this.Datas = this.results
                    } else {
                        this.date = i.c[0].f
                    }
                }
                console.log(this.results);
            })
    },

    methods: {
        candidatePage(result) {
            window.localStorage.candidate = JSON.stringify(result)
        },
        filterData() {
            const searchLower = this.search.toLowerCase();
            if (parseInt(this.search) == 0 || parseInt(this.search) == 1 || parseInt(this.search) == 2 || parseInt(this.search) == 3 || parseInt(this.search) == 4 || parseInt(this.search) == 5 || parseInt(this.search) == 6 || parseInt(this.search) == 7 || parseInt(this.search) == 8) {
                this.Datas = this.results.filter(item => item.Candidate_ID.splice(0, 1) == this.search)
                for (let i of this.results) {
                    if (i.Candidate_ID.split('').splice(0, this.search.length).join('') == this.search) {
                        console.log(i.Candidate_Name);
                    }
                }

            }
            else {
                this.Datas = this.results.filter(item => item.Candidate_Name.toLowerCase().includes(searchLower));
            }
        },
    },
};
</script>

<style scoped></style>
