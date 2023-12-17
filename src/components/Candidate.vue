<template>
    <div class="candidate relative cursor-pointer text-[24px] px-[30px] my-[30px] flex flex-row justify-between items-center">
       <span class="name">{{ Candidate_name }}</span>
       <span class="id">id: {{ Candidate_id }}</span>
       <div class="overallScore absolute w-[35px] h-[35px] right-[-10px] bottom-[-10px] rounded-[50%] bg-[#00FF1A] flex flex-row justify-center items-center">
        <span class="text-[16px] text-white font-black">{{ overallScore }}</span>
       </div>
    </div>
</template>

<script>
export default {
    name: '',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
    props:{
        Candidate_name: String,
        Candidate_id: Number,
        overallScore: Number,
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');

.candidate {
    width: 100%;
    height: 92px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 21px;

}
span{
    font-family: 'Inter', sans-serif;
}
</style>