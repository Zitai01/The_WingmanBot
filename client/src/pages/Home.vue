<template>
<div>
   
    <div v-if="guilds" class="guildlist">
    <div :key="guild.id" v-for="guild in guilds">
        <GuildCard :guild="guild" />
    </div>
    </div>
    <div v-else >
        <h1>Login to see your severs</h1>
    </div>


</div>
    
</template>


<script>
import axios from 'axios'
import GuildCard from '../components/GuildCard.vue'
export default {
    name:'Home',
    components:{
        GuildCard
    },
    data:()=>({
        
        guilds: null
    }),
    methods:{
        async getGuilds(){
            let token = localStorage.token
            let header = {
                
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            } 
            let result = await axios.get('https://discordapp.com/api/users/@me/guilds',header)
            let guilds = result.data
            this.guilds = guilds.filter((guild)=>
                guild.owner == true
            )
        }
    },
    mounted(){
        this.getGuilds()
    }
}
</script>