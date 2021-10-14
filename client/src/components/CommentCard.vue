<template>
    <div class="commentcard" v-if="comment">
        <div>{{comment.content}}</div>
        <div>{{comment.createdAt}}</div>
        <div>By {{username}}</div><button v-if="id==comment.userid" @click="delComment">X</button>
    </div>
</template>

<script>

import Client from '../services/authapi'
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
            let result = await Client.put(`/db/user/id`,body)
            this.id = localStorage.userid
            this.username = result.data.username
        },
        async delComment(){
            let id = this.comment.id
            
             await Client.delete(`/db/comment/${id}`)
            this.$router.go()
            
        }
    },
    mounted(){
        this.getUserName()
    }
}
</script>