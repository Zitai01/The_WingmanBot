<template>
    <div class="commentcard" v-if="comment">
        <div>{{comment.content}}</div>
        <div>{{comment.createdAt}}</div>
        <div>By {{username}}</div><button>X</button>
    </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
export default {
    name:'CommentCard',
    data:()=>({
        username:null
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
            
            this.username = result.data.username
        }
    },
    mounted(){
        this.getUserName()
    }
}
</script>