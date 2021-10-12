<template>
    <div>
        <h1>Welcome to the Wingman Bot Forum</h1>
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
import axios from 'axios'
import PostList from '../components/PostList.vue'
export default {
    name:'BotForum',
    components:{
        PostList
    },
    data:()=>({
        posts:[]
    }),
    mounted(){
        this.getPosts()
    },
    methods:{
        async getPosts(){
            let res = await axios.get(`http://127.0.0.1:3001/api/db/post`)
            this.posts = res.data
            console.log(res)
        }
    }

}
</script>