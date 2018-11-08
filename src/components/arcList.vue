<template>
  <div>
    <div v-for="(item,index) in data">
      <div @click="into(item.key,item.doc_count)">
        <span>{{item.key}}：</span><span>{{item.doc_count}}：</span>
      </div>
    </div>
  </div>
</template>

<script>
import { XiaoSh, AllCapth } from "@/api/woquge";
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    into(name,num) {
      this.$router.push({name:"allCapth",params:{name:name,num:num}})
    }
  },
  created() {
    XiaoSh({ field: "name" }).then(data => {
      let res = data.data;
      if (res.code == 0) {
        console.log(res.data);
        this.data = res.data;
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
