<template>
    <div class="guildcard">
        <h3>{{guild.name}}</h3>
        <div>Role: Owner</div>
        <img :src="icon" alt="icon">

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
        }
    },
    mounted(){
        this.getIcon()
    }
}
</script>