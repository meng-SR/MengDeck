<template>
  <div id="app">
    <el-container style="height:100%">
      <el-header>数据采集</el-header>
      <el-container>
        <el-aside style="width:50px">
          <div class="addIcon" @click="addPlate">
            <i class="el-icon-plus"></i>
          </div>
        </el-aside>
        <el-container class="main" style="height:100%">
          <router-view />
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["incrementPlate"]),
    addPlate() {
      this.incrementPlate();
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
  height: 100vh;
  box-sizing: border-box;
}
.el-header {
  background: #1c2938;
  color: white;
  font-weight: bold;
  font-size: 25px;
  text-align: left;
  height: 60px;
  line-height: 55px;
}
.el-container {
  height: calc(100% - 60px);
}
.el-aside {
  text-align: center;
  height: 100%;
  background: rgb(28, 41, 56);
  padding: 20px 0;
}
.el-aside .addIcon {
  font-size: 30px;
  color: #1da1f2;
}
.addIcon:hover {
  color: #0047ca;
}
</style>
