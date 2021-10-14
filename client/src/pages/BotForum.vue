<template>
    <div>
        <h1>Welcome to the Wingman Bot Forum</h1>
        <div class="topbar" >
            
            <select name="" id="" v-model="selected">
                <option value="new">Date: Newst</option>
                <option value="old">Date: Oldest</option>
            </select>
            <button style="font-size:1.5em" @click="triggerNewPost" v-if="authenticated" >New Post</button>


        </div>
        
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
        content:null,
        authenticated:null,
        selected:'new'
    }),
    mounted(){
        this.getPosts()
    },
    watch:{
        selected:function(){
            this.arrangePost()
        }
    },
    methods:{
        async getPosts(){
            let res = await Client.get(`/db/post`)
            this.posts = res.data
            if (localStorage.token){
                this.authenticated = true
            }
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
            const result =await Client.post(`/db/post`,body)
            console.log(result)
        },
        arrangePost(){
            let time = this.posts[0].createdAt
            let d = Date.parse(time)
            console.log(d)
            if (this.selected=='new'){
                this.posts.sort((a,b)=>
                    Date.parse(b.createdAt) - Date.parse(a.createdAt)
                )
            }else if(this.selected=='old'){
                this.posts.sort((a,b)=>
                    Date.parse(a.createdAt) - Date.parse(b.createdAt)
                )
            }
        }
        
    }

}
</script>