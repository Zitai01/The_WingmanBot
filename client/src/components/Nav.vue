<template>
    <nav>
        <router-link exact-active-class="active_link" class="link" to="/">Home</router-link>
        <router-link exact-active-class="active_link" class="link" to="/about">About</router-link>
    </nav>
</template>

<script>
export default {
    name:'Nav',
    data:()=>({
        notlogin:false
    }
    ),methods:{

    },
    mounted(){}
}
</script>