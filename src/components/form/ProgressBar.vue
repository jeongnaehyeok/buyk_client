<template>
    <div class="progress-bar">
        <div class="progress_bar-contain">
            <progress class="bar" :value='this.getPercent' max="100"></progress>
        </div>
        <p>{{ this.getPercent }}%</p>
    </div>
</template>

<script>
export default {
    name:'ProgressBar',
    props:{
        progressIndex:{
            type: Number,
            require: true,
        }
    },
    computed:{
        getPercent(){
            return this.progressPercent[this.progressIndex]
        }
    },
    created(){
        this.progressPercent = [ "0", "11", "33", "44", "61", "72", "83", "100"]
    },
    date(){
        return{
            progressPercent:[],
        }
    }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.progress-bar{
    width: 100%;
    .progress_bar-contain{
        width: 100%;
        height: 1.25rem;
        border-radius: 10px; 
        background: $gray;
        .bar{
            width: 100%;
            height: 1.25rem;
            border-radius: 10px;
            &::-webkit-progress-bar {
                background-color: $gray;
                border-radius: 10px;
            }
            &::-webkit-progress-value {
                background-color: $orange;
                border-radius: 10px;
            }
            &::-moz-progress-bar {
                background-color: $gray;
                border-radius: 10px;
            }
        }
    }
    p{
        margin-top: 0.5rem;
        text-align: right;
    }
}
</style>