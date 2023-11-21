<script>
import RealChart from "./components/RealChart.vue";

export default {
  name: "App",
  components: {
    RealChart,
  },
  data() {
    return {
      dom: "realchart",
    };
  },
};
</script>

<template>
  <main>
    <RealChart :domName="dom" />
  </main>
</template>

<style scoped>
html {
  margin: 0px;
}
#realchart {
  width: 850px;
  height: 550px;
  border: 1px solid lightgray;
  margin-bottom: 20px;
}
</style>
