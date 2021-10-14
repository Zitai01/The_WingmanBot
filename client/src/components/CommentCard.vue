<template>
    <div class="commentcard" v-if="comment">
        <h2 >{{comment.content}} </h2>
        <div>{{date.toLocaleString()}}</div>
        <h3>By {{username}}</h3>
        <button v-if="id==comment.userid" @click="delComment">X</button>
    </div>
</template>

<script>

import Client from '../services/authapi'
export default {
    name:'CommentCard',
    data:()=>({
        username:null,
        id:null,
        date:null
    }),
    props:[
        'comment'
    ],
    methods:{
        async getUserName(){
            let d =this.comment.createdAt
            this.date = new Date(Date.parse(d))




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