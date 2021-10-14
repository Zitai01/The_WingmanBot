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
        <Comments :post='post' />
    </div>
</template>



<script>
import Client from '../services/authapi'
import Comments from '../components/Comments.vue'
export default {
    name:'PostDetail',
    components:{
        Comments
    },
    data:()=>({
        postOwner:null,
        post:null,
        ownerAvatar:null,
        userid:null
    }),
    methods:{
        async getPostandowner(){
            let postid = this.$route.params.postid
            let body = {
                "postid":postid
            }
            let res = await Client.put(`/db/post`,body)
            this.post = res.data
            console.log(res)
            let body2 = {
                "id":this.post.userid
            }
        let res2 = await Client.put(`/db/user/id`,body2)
            this.postOwner = res2.data
             this.ownerAvatar = this.postOwner.avatar

        }
        
    },
    mounted(){
       
        this.getPostandowner()
        
        
    }
}
</script>