<template>
    <div class="commentbox">
        <div class="commentlist" :key="comment.id" v-for="comment in comments" >
            <CommentCard :comment="comment"  />
        </div>
        




        <form action="">
           <textarea name="" id="" cols="30" rows="10"></textarea> 
           <button>Submit</button>
        </form>



    </div>
</template>



<script>
import {BASE_URL} from '../globals'
import axios from 'axios'
import CommentCard from './CommentCard.vue'
export default {
    name:'Comments',
    components:{
        CommentCard
    },
    data:()=>({
        comments:null
    }),
    props:[
        'post'
    ],
    methods:{
        async getComments(){
            let body = {
                "postid":parseInt(this.post.id)
            }
            let result =await axios.put(`${BASE_URL}/db/comment`,body)
                this.comments = result.data
                
        }
    },
    mounted(){
        this.getComments()
    }

}
</script>