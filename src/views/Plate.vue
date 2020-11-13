<template>
  <div class="container">
    <div class="header">
      <i class="el-icon-s-operation" @click="flotage"></i>
    </div>
    <Tools
      :id="id"
      @update-event="update"
      @loading-event="updateLoading"
    ></Tools>
    <div :class="{ body: true, bodyUp: !toolsOp }" v-loading="loading">
      <template v-if="statusOp">
        <template v-if="target == '推文'">
          <div class="entry" v-for="(item, index) in data" :key="index">
            <Tweet :data="item"></Tweet>
          </div>
        </template>
        <template v-else>
          <User :data="data"></User>
        </template>
      </template>
      <template v-else>
        <div class="status-message">{{ statusMsg }}</div>
      </template>
    </div>
  </div>
</template>

<script>
import Tweet from "@/components/Tweet.vue";
import Tools from "@/components/Tools.vue";
import User from "@/components/User.vue";
export default {
  name: "Plate",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  components: {
    Tweet,
    Tools,
    User
  },
  mounted() {},
  data() {
    return {
      toolsOp: true,
      statusOp: true, //采集成功与失败的标志位，true成功，false失败
      data: [],
      statusMsg: "",
      target: "推文",
      loading: false
    };
  },
  methods: {
    flotage() {
      this.toolsOp = !this.toolsOp;
    },
    // 该方法用于子组件回传数据
    update(data, status, msg, target) {
      this.data = data;
      this.statusOp = status;
      this.statusMsg = msg;
      this.target = target;
    },
    updateLoading(loading) {
      this.loading = loading;
    }
  }
};
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  background-color: white;
  color: rgb(49, 48, 48);
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: column;
  user-select: none;
  position: relative;
}
.container .header {
  height: 50px;
  width: 100%;
  font-size: 20px;
  color: #1da1f2;
  border-bottom: 1px solid #e1e8ed;
  flex: 0 0 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
}
.header > i:hover{
  color: #0047ca;
}
.container .body {
  height: 100%;
  margin-top: 131px;
  flex-grow: 1;
  overflow: auto;
  z-index: 2;
  transition: margin-top 0.3s ease-in-out;
  background-color: white;
}
.container .bodyUp {
  margin-top: 0;
}

.body .entry {
  flex-shrink: 0;
  border-bottom: 1px solid #e1e8ed;
}
.body .status-message {
  font-size: 18px;
  color: #24262d73;
  padding: 20px 0;
  font-weight: 600;
}
</style>
