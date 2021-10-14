<template>
    <div>
        <h1>Welcome to the Wingman Bot Forum</h1>
        <button style="font-size:1.5em" @click="triggerNewPost" >New Post</button>
        <div v-if="newpost">
            <form  class="postform" @submit="handleSubmit">
                <label for="title">Title</label>
                <input id="title" v-model='title' style="width:49em" type="text" >
                <label for="content">Content</label>
                <textarea name="content" v-model='content' id="Content" cols="80" rows="12"></textarea>
                <button type="submis">Submit</button>
            </form>
        </div>
        <div class="postbar">
            <div >Title</div>
            <div>Content</div>
            <div >Post at</div>
            <div >Post By</div>
        </div>
        <div class="postlist">
            <PostList :posts='posts' />
        </div>

    </div>
</template>

<script>
import Client from '../services/authapi'
import {BASE_URL} from '../globals'
import axios from 'axios'
import PostList from '../components/PostList.vue'

export default {
    name:'BotForum',
    components:{
        PostList
    },
    data:()=>({
        posts:[],
        newpost:false,
        title:null,
        content:null
    }),
    mounted(){
        this.getPosts()
    },
    methods:{
        async getPosts(){
            let res = await Client.get(`/db/post`)
            this.posts = res.data
            console.log(res)
        },
        triggerNewPost(){
            if (this.newpost){
                this.newpost = false
            }else{
                this.newpost = true
            }
        },
        async handleSubmit(){
            let body ={
                "userid":localStorage.userid,
                "title":this.title,
                "content":this.content
            }
            const result =await axios.post(`${BASE_URL}/db/post`,body)
            console.log(result)
        }
        
    }

}
</script>