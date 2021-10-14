<template>
    <div class="commentbox" v-if="comments" >
        <h2>Comments</h2>
        <div  class="commentlist" :key="comment.id" v-for="comment in comments" >
            
            <CommentCard :comment="comment"  />
        </div>
        



            
        <form @submit="handleSubmit" class="commentform" >
            <h2>Post Comment</h2>
           <textarea v-model="message" cols="30" rows="10"></textarea> 
           <button>Submit</button>
        </form>



    </div>
</template>



<script>

import Client from '../services/authapi'
import CommentCard from './CommentCard.vue'
export default {
    name:'Comments',
    components:{
        CommentCard
    },
    data:()=>({
        comments:null,
        message:null
    }),
    props:[
        'post'
    ],
    watch:{
        post:function(){
            this.getComments()
        }
    },
    methods:{
        async getComments(){
            
            let body = {
                "postid":parseInt(this.post.id)
            }
            let result =await Client.put(`/db/comment`,body)
                this.comments = result.data
                console.log('comments')
                console.log(result.data)
            
        },
        async handleSubmit(){
            let body ={
                "postid":parseInt(this.post.id),
                "userid":parseInt(localStorage.userid),
                "content":this.message
            }
            
            const result =await Client.post(`/db/comment`,body)
            console.log(result)
            this.message = ''
        }
    },
    mounted(){
        
    }

}
</script>