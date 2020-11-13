<template>
  <div class="user">
    <div v-for="(item, index) in tweetList" :key="index" class="user-tweet">
      <img
        :src="imgsrc"
        onerror="this.src='./imgs/默认头像.png'"
        width="48px"
        height="48px"
      />
      <div class="profile">
        <div style="padding-top:2px">
          <pre><strong>{{ name }}</strong></pre>
        </div>
        <div>
          <div class="context">
            <pre>{{ item.text.replace(/�/g,"") }}</pre>
            <!-- <pre>{{ dealContext(item.text)}}</pre> -->
          </div>
          <div class="create-time" v-if="!!item.created_at">
            <pre>{{ item.created_at }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tweet from "@/components/Tweet.vue";
export default {
  name: "User",
  props: {
    data: {}
  },
  components: {
    Tweet
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      name: "",
      location: "",
      description: "",
      imgsrc: "",
      tweetList: []
    };
  },
  computed: {},
  methods: {
    init() {
      this.name = this.data.name || "未知";
      this.imgsrc = this.data.data.profile_image_url || "";
      this.tweetList = this.data.includes.tweets;
      // console.log(this.tweetList);
    },
    dealContext(text){
      console.log(text);
      let str =String(text).replaceAll("�","");
      console.log(str);
      return str;
    }
  }
};
</script>

<style scoped>
.user {
  width: 100%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
}
.user-tweet {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px 10px;
  border-bottom: 1px solid #e1e8ed;
}
.user-tweet > img {
  flex: 0 0 48px;
  margin-right: 12px;
  border-radius: 24px;
  border:1px solid #cccccc;
}

.user-tweet .profile {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  text-align: start;
}
.user-tweet pre {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  margin: 0;
  padding: 0;
}
.user-tweet .context {
  padding: 10px 0 4px 0;
}
.create-time {
  padding-top: 14px;
  padding-bottom: 2px;
}
</style>
