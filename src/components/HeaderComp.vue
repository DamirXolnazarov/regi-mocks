<template>
    <div class="header flex px-[10px] flex-row justify-start items-center">
        <img class="w-[110px]" src="../assets/logo.png" alt="">
        <span>{{ textHeader }}</span>
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
        textHeader: String
    }
};
</script>

<style scoped>
.header{
    width: 100%;
    font-weight: 600;
    color: white;
    font-size: 20px;
    height: 116px;
    background: #FF4508;
}
</style>