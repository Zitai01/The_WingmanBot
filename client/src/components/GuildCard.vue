<template>
    <div class="guildcard">
        <h3>{{guild.name}}</h3>
        
        <img :src="icon" alt="icon" class="avatar">
        <div>Role: Owner</div>
        <button @click="authGuild" >Authorize</button>
    </div>
</template>

<script>
export default {
    name:'GuildCard',
    data:()=>({
        icon:null
    }),
    props:[
        'guild'
    ],
    methods:{
        getIcon(){
            
            this.icon =  `https://cdn.discordapp.com/icons/${this.guild.id}/${this.guild.icon}.png`
        },
        authGuild(){
            window.open(`https://discord.com/api/oauth2/authorize?client_id=893515753217720320&permissions=534723950656&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fredirect&scope=bot`,'_blank')
        }
    },  
    mounted(){
        this.getIcon()
    }
}
</script>