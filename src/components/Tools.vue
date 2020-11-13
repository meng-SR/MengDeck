<template>
  <div class="tools">
    <div class="tools-bar">
      <span>关键字</span>
      <input type="text" v-model="params.keyword" />
    </div>
    <div class="tools-bar">
      <span>采集类型</span>
      <label
        ><input
          type="radio"
          :name="id"
          value="推文"
          v-model="target"
        />推文</label
      >
      <label
        ><input
          type="radio"
          :name="id"
          value="用户"
          v-model="target"
        />用户</label
      >
    </div>
    <div class="btn">
      <i class="el-icon-close" @click="removePlate">删除</i>
      <i class="el-icon-position" @click="collect">采集</i>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Tools",
  props: {
    id: String
  },
  data() {
    return {
      target: "推文", //分为'推文'和'用户'两种类型
      params: {
        keyword: "",
        fromDate: "",
        toDate: ""
      },
      statusOp: "", //采集成功与失败的标志位，true成功，false失败
      statusMsg: "",
      data: {},
      indentifier: "" //fetch标识符,给每一个fetch唯一的身份标识
    };
  },
  methods: {
    ...mapMutations(["decrementPlate"]),
    removePlate() {
      this.decrementPlate(this.id);
    },
    update(idf) {
      if (this.indentifier == idf) {
        this.$emit(
          "update-event",
          this.data,
          this.statusOp,
          this.statusMsg,
          this.target
        );
      }
    },
    updateLoading(value) {
      this.$emit("loading-event", value);
    },
    // 采集数据
    collect() {
      if (this.params.keyword.trim() == "") {
        return;
      }
      let timestamp = new Date().getTime();
      this.indentifier = String(timestamp);
      switch (this.target) {
        case "推文":
          this.searchByParams(this.indentifier);
          break;
        case "用户":
          this.searchByUsername(this.indentifier);
          break;
      }
    },
    // 采集推文
    searchByParams(idf) {
      this.statusOp = true;
      this.updateLoading(true);
      let url;
      if (Config.COLLECT_MODE == "LOCAL") {
        url = "./info1.json";
        fetch(url, {
          method: "GET"
        })
          .then(res => res.json())
          .then(response => {
            this.updateLoading(false);
            if (response.status == "success") {
              // 去除乱码数据
              this.data = response.data.filter(item => {
                if (
                  item.text.indexOf("???????") == -1 &&
                  item.text.indexOf("�") == -1
                ) {
                  return item;
                }
              });
            } else {
              this.statusOp = false;
              this.statusMsg = response.message;
            }

            this.update(idf);
          })
          .catch(error => {
            this.dealFetchExp(error,idf);
          });
      } else {
        url = `${Config.SERVERIP}/tweet/searchByParams`;
        fetch(url, {
          method: "POST", // or 'PUT'
          body: JSON.stringify(this.params), // data can be `string` or {object}!
          headers: new Headers({
            "Content-Type": "application/json"
          })
        })
          .then(res => res.json())
          .then(response => {
            this.updateLoading(false);
            if (response.status == "success") {
              // 去除乱码数据
              this.data = response.data.filter(item => {
                if (
                  item.text.indexOf("???????") == -1 &&
                  item.text.indexOf("�") == -1
                ) {
                  return item;
                }
              });
            } else {
              this.statusOp = false;
              this.statusMsg = response.message;
            }
            // console.log(idf);
            this.update(idf);
          })
          .catch(error => {
            // console.log(idf);
            this.dealFetchExp(error,idf);
          });
      }
    },
    // 采集用户
    searchByUsername(idf) {
      this.updateLoading(true);
      this.statusOp = true;
      let url;
      if (Config.COLLECT_MODE == "LOCAL") {
        url = "./user.json";
      } else {
        url = `${Config.SERVERIP}/user/searchByUsername/${this.params.keyword}`;
        // url = "./user.json";
      }
      fetch(url, {
        method: "GET" // or 'PUT'
      })
        .then(res => res.json())
        .then(response => {
          //   console.log("repsonse");
          this.updateLoading(false);
          if (response.status == "success") {
            this.data = response.data;
          } else {
            this.statusOp = false;
            this.statusMsg = response.message;
          }
          // console.log(url);
          // console.log(idf);
          this.update(idf);
        })
        .catch(error => {
          // console.log(url);
          // console.log("33333");
          this.dealFetchExp(error,idf);
        });
    },
    //处理Fetch异常
    dealFetchExp(error, idf) {
      this.updateLoading(false);
      this.statusOp = false;
      this.statusMsg = "服务出现错误！";
      this.update(idf);
      console.error("Error:", error);
    }
  }
};
</script>

<style scoped>
.tools {
  position: absolute;
  width: 100%;
  top: 50px;
  left: 0;
  padding: 10px 0;
  border-bottom: 1px solid #e1e8ed;
}
.tools .tools-bar {
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.tools-bar span {
  display: inline-block;
  width: 28%;
  box-sizing: border-box;
  padding-right: 20px;
  text-align: end;
}
.tools-bar label:nth-child(2) {
  margin-right: 20px;
}
.tools-bar input[type="text"] {
  width: 67%;
  padding: 6px 12px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #cccccc;
}
.tools-bar input:focus {
  border: 1px solid #1da1f2;
}
.tools .btn {
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
}
.btn i {
  padding-right: 25px;
  cursor: pointer;
}
.btn i:hover {
  color: #1da1f2;
}
</style>
<style>
.btn .el-icon-position:before{
  padding-right: 5px;
}
.btn .el-icon-close:before{
  padding-right: 5px;
}
</style>
