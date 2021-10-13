<template>
    <div class="commentcard" v-if="comment">
        <div>{{comment.content}}</div>
        <div>{{comment.createdAt}}</div>
        <div>By {{username}}</div><button v-if="id==comment.userid" @click="delComment">X</button>
    </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
export default {
    name:'CommentCard',
    data:()=>({
        username:null,
        id:null
    }),
    props:[
        'comment'
    ],
    methods:{
        async getUserName(){
            let body={
                "id":this.comment.userid
            }
            let result = await axios.put(`${BASE_URL}/db/user/id`,body)
            this.id = localStorage.userid
            this.username = result.data.username
        },
        async delComment(){
            let id = this.comment.id
            
            let result = await axios.delete(`${BASE_URL}/db/comment/${id}`)

            console.log(result)
        }
    },
    mounted(){
        this.getUserName()
    }
}
</script>