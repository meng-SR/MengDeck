<template>
  <div class="home" ref="home">
    <a id="left-anchor" ref="achor" @click="flyRight"></a>
    <div
      style="flex:0 0 20%;margin: 0 3px"
      v-for="stamp in plateStamps"
      :key="stamp"
    >
      <Plate :id="stamp"></Plate>
    </div>
    <label id="right-anchor"></label>
    <!-- <div
      class="backIcon"
      :style="sLeft > 0 ? 'display:inline-block' : 'display:none'"
      @click="flyLeft"
    >
      <i class="el-icon-arrow-left"></i>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Plate from "@/components/Plate.vue";
export default {
  name: "Home",
  components: {
    Plate
  },
  data() {
    return {
      sLeft: 0 //水平滚动条的滚动距离
    };
  },
  computed: {
    ...mapGetters(["plateStamps", "jumpEnable"])
  },
  watch: {
    plateStamps() {
      this.$nextTick(() => {
        if (this.jumpEnable) {
          //新增面板时跳转，减少面板时不跳转
          //瞄点跳转，使滚动条永远处于底部
          this.$refs.achor.click();
        }
        //读取水平滚动条向右滚动的距离
        this.sLeft = this.$refs.home.scrollLeft;
        console.log(this.sLeft);
      });
    }
  },
  methods: {
    flyRight() {
      document
        .getElementById("right-anchor")
        .scrollIntoView({ behavior: "smooth" });
    },
    flyLeft() {
      document
        .getElementById("left-anchor")
        .scrollIntoView({ behavior: "smooth" });
      this.$nextTick(() => {
        this.sLeft = this.$refs.home.scrollLeft;
        console.log(this.sLeft);
      });
    }
  }
};
</script>
<style scoped>
.home {
  height: 100%;
  width: 100%;
  padding-left: 5px;
  display: flex;
  flex-flow: row;
  overflow: auto;
}
.backIcon {
  position: fixed;
  bottom: 40px;
  right: 40px;
  height: 50px;
  width: 50px;
  line-height: 50px;
  font-size: 30px;
  color: #1da1f2;
  border: 1px solid #cccccc;
  border-radius: 25px;
  box-shadow: 1px 1px 5px 0 #cccccc;
  background-color: white;
  z-index: 101;
}
</style>
