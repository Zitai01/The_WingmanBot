<template>
    <div class="postcard" @click="godetail">
        <div >{{post.title}}</div>
        <div>{{post.content.substring(0,10)}}...</div>
        <div >{{post.createdAt}}</div>
        <div >{{userName}}</div>
    </div>
</template>

<script>
import Client from '../services/authapi'
export default {
    name:'PostCard',
    data:()=>({
        userName:null
    }),
    props:[
        'post'
    ],
    methods:{
        async getUsername(){
            let id = await parseInt(this.post.userid)
            console.log(id)
            
            let body = {
                id: id
            }
            // headers: {'Content-Type': 'application/json'},
                        
            let user = await Client.put(`/db/user/id`,body)
            this.userName = user.data.username
            console.log(user)
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