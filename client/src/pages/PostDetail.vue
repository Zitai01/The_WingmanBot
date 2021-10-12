<template>
    <div>
        <div v-if="post" class="postmain">
            <div v-if="postOwner" class="usercard">
                <img :src='ownerAvatar' alt="">
                <h2>{{postOwner.username}}</h2>
                <p>Join Date: {{postOwner.createdAt.substring(0,10)}}</p>
            </div>
            <div class="postdetail">
                <h1>{{post.title}}</h1>
                <div>{{post.content}}</div>
            </div>
            
        </div>
    </div>
</template>



<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
export default {
    name:'PostDetail',
    data:()=>({
        postOwner:null,
        post:null,
        ownerAvatar:null
    }),
    methods:{
        async getPostandowner(){
            let postid = this.$route.params.postid
            let body = {
                "postid":postid
            }
            let res = await axios.put(`${BASE_URL}/db/post`,body)
            this.post = res.data
            console.log(res)
            let body2 = {
                "id":this.post.userid
            }
        let res2 = await axios.put(`${BASE_URL}/db/user/id`,body2)
            this.postOwner = res2.data
             this.ownerAvatar = `https://cdn.discordapp.com/avatars/${this.postOwner.user_id}/${this.postOwner.avatar}.jpg`

        }
        
    },
    mounted(){
       
        this.getPostandowner()
        
        
    }
}
</script>