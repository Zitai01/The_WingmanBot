<template>
    <nav>
        <router-link :key="$route.path" exact-active-class="active_link" class="link logo" to="/">Wingman Bot</router-link>
        <div class="routes">
        
        <router-link exact-active-class="active_link" class="link" to="/about">About</router-link>
        <router-link exact-active-class="active_link" class="link" to="/botforum">Forum</router-link>
        </div>
      
        
        <div v-if="userName && authenticated" class="loggedin">
            <button @click="logout">logout</button>
            <h4>{{userName}}</h4>
            <img class="avatar" :src="avatar" alt="avatar">
        </div>
        <div v-else  class="login">
        
        <a href="https://discord.com/api/oauth2/authorize?client_id=893515753217720320&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Flogin&response_type=code&scope=identify%20guilds%20email">Login with Discord</a>
    </div>
    </nav>
</template>

<script>
import axios from 'axios'
export default {
    name:'Nav',
    data:()=>({
        authenticated:false,
        userName:null,
        avatar:null,
        rerender:null
    }
    ),
    watch:{
        '$route'(){
            this.getuserProfile()
        }
    },
    methods:{
        async getuserProfile(){
            //this.authenticated = this.$router.params.authenticated
           let token = localStorage.token
           if (token){
            if(this.authenticated ==false){
           
           let header = {headers:{ Authorization: `Bearer ${token}`}}
           const result = await axios.get('https://discordapp.com/api/users/@me',header)  
            this.userName = result.data.username
            this.userid = result.data.id 
            let avatar = result.data.avatar
            this.avatar = `https://cdn.discordapp.com/avatars/${this.userid}/${avatar}.jpg`
            console.log(result)
            this.authenticated = true
           }}
        },
        logout(){
            this.authenticated=false
            this.userName=null
            this.avatar=null
            localStorage.removeItem('token')
            this.$router.go() 

        }
    },
    mounted(){
        //this.getuserProfile()
    }
}
</script>