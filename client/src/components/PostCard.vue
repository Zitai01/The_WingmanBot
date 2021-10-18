<template>
    <div class="postcard" @click="godetail" v-if="date">
        <div class="cardtitle" >{{post.title}}</div>
        <div>{{post.content.substring(0,10)}}...</div>
        <div >{{date.toLocaleString()}}</div>
        <div class="cardtitle">{{userName}}</div>
    </div>
</template>

<script>
import Client from '../services/authapi'
export default {
    name:'PostCard',
    data:()=>({
        userName:null,
        date:null
    }),
    props:[
        'post'
    ],
    methods:{
        async getUsername(){
            let d =this.post.createdAt
            this.date = new Date(Date.parse(d))

            let id = await parseInt(this.post.userid)
            
            
            let body = {
                id: id
            }
            // headers: {'Content-Type': 'application/json'},
                        
            let user = await Client.put(`/db/user/id`,body)
            this.userName = user.data.username
            
        },
        godetail(){
            this.$router.push(`/postdetail/${this.post.id}`)
        }
    },
    mounted(){
        
         this.getUsername()
        
    }
}
</script>