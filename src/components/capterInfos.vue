<template>
  <div>
    <div v-for="(item,index) in data">
      <div>
        <span>{{item._source.auther}}：</span><span>{{item._source.capter}}：</span>
        <span>{{item._source.new_capter}}：</span>
        <p>{{item._source.txt}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { capterInfos } from "@/api/woquge";
export default {
  data() {
    return {
      name: '',
      data: null
    };
  },
  methods: {
  },
  created() {
    let data = this.$route.params
    capterInfos(data).then(data => {
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
