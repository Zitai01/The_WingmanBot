<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <PostCard :post='post' />
        </div>
        
    </div>
</template>


<script>
import PostCard from './PostCard'
export default {
    name:'PostList',
    props:[
        'posts'
    ],
    components:{
        PostCard
    }
}
</script>