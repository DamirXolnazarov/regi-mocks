<script setup>
import Header from '../components/HeaderComp.vue'
import Arrow from '../components/Arrow.vue'
import Candidate from '../components/Candidate.vue'
</script>

<template>
    <div class="results">
        <Header :textHeader="'Mock exam (' + date + ')' " />
        <div class="content w-[100%] p-[15px]">
            <RouterLink to="/"><Arrow /></RouterLink>
            <div class="results_part py-[10px] w-[100%] h-[100%] flex flex-col justify-center items-center">
                <div class="searchBar w-[95%] flex flex-row justify-center items-center relative">
                    <input class="search w-[95%] relative pl-[50px] h-[47px] rounded-[42px] bg-[#F5F5F5]"
                        placeholder="Search...">
                    <img class="w-[23px] absolute top-[25%] left-[25px]" src="../assets/searchIcon.png" alt="">
                </div>
                <div class="candidate_results w-[95%]">
                        <Candidate v-for="i of results" :Candidate_name="i.Candidate_Name" :Candidate_id="i.Candidate_ID" :key="i.id"/>
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
            Sheet_ID: '1-ArEkK19KDY-GjhsO_V_NvQpHqos1V_DLdLOy4jgsYI',
            Sheet_TITLE: 'Registan_Mock',
            date: '',
            results: [],
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
                                listening: i.c[3].v,
                                reading: i.c[4].v,
                                speaking: i.c[5].v,
                                writing1: i.c[6].v,
                                writing2: i.c[7].v,
                            }
                        )
                    } else {
                        this.date = i.c[0].f
                    }
                }
                console.log(this.results);
            })
    },

    methods: {

    },
};
</script>

<style scoped></style>