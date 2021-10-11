<template>
    <nav>
        <router-link exact-active-class="active_link" class="link" to="/">Home</router-link>
        
        <router-link exact-active-class="active_link" class="link" to="/about">About</router-link>
        
        <div v-if="userName && authenticated" class="loggedin">
            <h1>{{userName}}</h1>
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
        avatar:null
    }
    ),methods:{
        async getuserProfile(){
           let token = localStorage.token
           if (token){

           
           let header = {headers:{ Authorization: `Bearer ${token}`}}
           const result = await axios.get('https://discordapp.com/api/users/@me',header)  
            this.userName = result.data.username
            this.userid = result.data.id 
            let avatar = result.data.avatar
            this.avatar = `https://cdn.discordapp.com/avatars/${this.userid}/${avatar}.jpg`
            console.log(result)
            this.authenticated = true
           }
        }
    },
    mounted(){
        this.getuserProfile()
    }
}
</script>