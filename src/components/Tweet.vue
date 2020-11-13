<template>
  <div class="tweet">
       <p class="context">
            <pre>{{text}}</pre>
        </p>
        <p class="create-time"><pre>{{time}}</pre></p>
  </div>
</template>

<script>
export default {
  name: 'Tweet',
  props:{
      data:{},
  },
  mounted(){
      if(!!this.data){
          this.text = this.data.text || "无";
          this.time = this.data.created_at || "未知";
      }
  },
  data(){
      return{
          text:"",
          time:"",
      }
  }

}
</script>

<style scoped>
.tweet {
    width: 100%;
    box-sizing: border-box;
    font-size: 18px;
}
.tweet .context {
    text-align: start;
    padding: 0 15px;
}
.tweet .create-time {
    text-align: start;
    padding: 0 10px;
}
.tweet pre{
    white-space:pre-wrap;
    white-space:-moz-pre-wrap;
    white-space:-pre-wrap;
    white-space:-o-pre-wrap;
    word-wrap:break-word;
}
</style>
