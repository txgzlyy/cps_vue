<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js Apps"
    };
  },
  created() {
    
    var instance = this.ajax.create({
      headers: { "content-type": "application/x-www-form-urlencoded" }
    });
    instance.post('/api/list', this.qs.stringify({name:'txgz'})).then(res => res.data);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
