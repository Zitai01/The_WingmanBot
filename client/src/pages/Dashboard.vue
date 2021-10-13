<template>
    <div>
        <h1>Redirecting to Home</h1>
    </div>
</template>

<script>
export default {
    name:'Dashboard',
    

    methods:{
        storeCode(){
            let code = this.$route.params.code
            localStorage.token = code
            this.$router.push({name:'Home',params:{authenticated:true}})
        }
    },
    mounted(){
        this.storeCode()
    }
}
</script>