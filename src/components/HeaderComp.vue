<template>
    <div class="header border-2 flex px-[10px] flex-row justify-start items-center">
        <div class="back"> 
        </div>
        <img class="w-[110px] lo" src="../assets/logo.png" alt="">
        <span class="w-[100%] te">{{ textHeader }}</span>
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
.back{
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100px;
    background-position: center center;
    background-image: url("../assets/Removal-92.png");
}

.header{
    width: 100%;
    font-weight: 600;
    color: white;
    font-size: 20px;
    height: 116px;
    background: #FF4508;
}
.te{
z-index: 999 !important;
}
</style>