<template>
    <div class="config_detail">
        <h1>Config</h1>

        <form @submit.prevent>
            <h2>Wingman Reply to:</h2>
            <h3>{{triggermsg}}</h3>
            <input v-model="triggermsgquery" type="text">
            <button @click="SubmitReplyto">Submit</button>
        </form>

        <form @submit.prevent>
            <h2>Wingman's Reply</h2>
            <h3>{{msg}}</h3>
            <input v-model="msgquery" type="text">
            <button @click="SubmitReply">Submit</button>
        </form>










        <button @click="goback">Back</button>
    </div>
</template>

<script>
//import axios from 'axios'
import Client from '../services/authapi'
export default {
    name:'GuildConfig',
    data:()=>({
        msg:null,
        triggermsg:null,
        msgquery:null,
        triggermsgquery:null
    }),
    methods:{
        goback(){
            this.$router.push('/')
        },
        async getConfig(){
            const result = await Client.get(`/db/config/${this.$route.params.guildid}`)
            console.log(result)
            this.msg = result.data.msg
            this.triggermsg = result.data.triggermsg
            if (result == false){
                let id = localStorage.userid
                let body = {
                    "userid":id,
                    "guildid":this.$route.params.guildid,
                    "msg":"Thanks for using WingmanBot, you can config the reply on wingmanbot.herokuapp.com",
                    "triggermsg":"wingman"
                }
                
                const result = await Client.post(`/db/config`,body)
                console.log('post result')
                console.log(result)
            }
        },
        async SubmitReplyto(){
            let body={
                "triggermsg":this.triggermsgquery,
                "guildid":this.$route.params.guildid
            }
             await Client.put(`/db/config/triggermsg`,body)
             this.triggermsgquery = null
             this.getConfig()
        },
        async SubmitReply(){
            let body={
                "msg":this.msgquery,
                "guildid":this.$route.params.guildid
            }
             await Client.put(`/db/config/msg`,body)
             this.msgquery = null
             this.getConfig()
        }
    },
    mounted(){
        this.getConfig()
    }
}
</script>