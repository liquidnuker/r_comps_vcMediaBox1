<template>
<div>
  <!-- begin vcmediabox101 -->
  <div class="row vcmediabox101">
    <div class="vcmediabox101_media-left">
      <div class="vcmediabox101_img-holder">
        <img src="img.jpg" alt="img alt" title="img title">
      </div>
    </div>
    <section class="vcmediabox101_media-right">
      <h3 class="vcmediabox101_heading">Media title 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.</p>
      <footer class="row vcmediabox101_extras">
        <span class="btn btn1-01" tabindex="0">
          Read more
          <svg class="vcmediabox101_btn_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
          </svg>
        </span>
        <span class="btn btn1-01" tabindex="0">
          Read more
          <svg class="vcmediabox101_btn_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
          </svg>
        </span>
      </footer>
    </section>
  </div>
  <!-- end vcmediabox101 -->
</div>
</template>
<script>
export default {
  data () {
    return {   

    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prName1"
  ],
  components: {
  },
  mounted: function () {
    // console.log(".vue mounted");
  },
  methods: {        
  }
}
</script>