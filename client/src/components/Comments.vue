<template>
    <div class="commentbox">
        <CommentCard />




        <form action="">
           <textarea name="" id="" cols="30" rows="10"></textarea> 
           <button>Submit</button>
        </form>



    </div>
</template>



<script>
import CommentCard from './CommentCard.vue'
export default {
    name:'Comments',
    components:{
        CommentCard
    }

}
</script>