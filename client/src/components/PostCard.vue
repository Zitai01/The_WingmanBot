<template>
    <div class="postcard">
        <div >{{post.title}}</div>
        <div>{{post.content.substring(0,10)}}...</div>
        <div >{{post.createdAt}}</div>
        <div >{{userName}}</div>
    </div>
</template>

<script>
import {BASE_URL} from '../globals'
import axios from 'axios'
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
                        
            let user = await axios.put(`${BASE_URL}/db/user/id`,body)
            this.userName = user.data.username
            console.log(user)
        }
    },
    mounted(){
        
         this.getUsername()
        
    }
}
</script>