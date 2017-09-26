<template>
  <div>
  
  <h2 class="item-id">vcMediaBox101</h2>
  <div class="row">
    <div class="col-sm-3 col-md-3 col-lg-3">39</div>
    <div class="col-sm-9 col-md-9 col-lg-9">
      <vcMediaBox101 />
    </div>
  </div>

  </div>
</template>
<script>
const vcMediaBox101 = () => import ('./vcMediaBox101.vue');
  export default {
    data () {
      return {    
      }
    },
    components: {
      vcMediaBox101: vcMediaBox101
    },
    mounted: function () {
      // console.log("Home.vue mounted");
    }
  }
</script>