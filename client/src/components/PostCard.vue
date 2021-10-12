<template>
    <div class="postcard">
        <div >{{post.title}}</div>
        <div>{{post.content.substring(0,10)}}...</div>
        <div >{{post.createdAt}}</div>
        <div >{{post.userid}}</div>
    </div>
</template>

<script>
export default {
    name:'PostCard',
    props:[
        'post'
    ]
}
</script>