<template>
  <div class="main-container">
    <div class="container">
      <div id="slider" class="slider">
        <div class="item" style="background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');">
          <div class="content">
            <div class="name">1</div>
            <div class="description">Description</div>
          </div>
        </div>

        <div class="item" style="background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');">
          <div class="content">
            <div class="name">2</div>
            <div class="description">Description</div>
          </div>
        </div>

        <div class="item" style="background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');">
          <div class="content">
            <div class="name">3</div>
            <div class="description">Description</div>
          </div>
        </div>

        <div class="item" style="background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');">
          <div class="content">
            <div class="name">4</div>
            <div class="description">Description</div>
          </div>
        </div>

        <div class="item" style="background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');">
          <div class="content">
            <div class="name">5</div>
            <div class="description">Description</div>
          </div>
        </div>

        <div class="item" style="background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');">
          <div class="content">
            <div class="name">6</div>
            <div class="description">Description</div>
          </div>
        </div>

        <div class="item" style="background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');">
          <div class="content">
            <div class="name">7</div>
            <div class="description">Description</div>
          </div>
        </div>

        <div class="item" style="background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');">
          <div class="content">
            <div class="name">8</div>
            <div class="description">Description</div>
          </div>
        </div>

        <div class="item" style="background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');">
          <div class="content">
            <div class="name">9</div>
            <div class="description">Description</div>
          </div>
        </div>

        <div class="item" style="background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');">
          <div class="content">
            <div class="name">10</div>
            <div class="description">Description</div>
          </div>
        </div>
      </div>
      <div class="buttons">
<!--        <button class="btn" @click="prev()"><i class="fa-solid fa-chevron-left"></i></button>-->
<!--        <button class="btn" @click="next()"><i class="fa-solid fa-chevron-right"></i></button>-->
        <toan-ngoc-wedding-button82 @onClick="prev" class="mx-2">
          <i class="fa-solid fa-chevron-left"></i>
        </toan-ngoc-wedding-button82>
        <toan-ngoc-wedding-button82 @onClick="next" class="mx-2">
          <i class="fa-solid fa-chevron-right"></i>
        </toan-ngoc-wedding-button82>
      </div>
    </div>
  </div>
</template>

<script>
import ToanNgocWeddingButton82 from '@/components/Common/Button82'
export default {
  name: 'CardSlider',
  components: { ToanNgocWeddingButton82 },
  methods: {
    next: function() {
      let items = document.querySelectorAll(".item")
      document.getElementById("slider").appendChild(items[0])
    },
    prev:  function() {
      let items = document.querySelectorAll(".item")
      document.getElementById("slider").prepend(items[items.length - 1])
    }
  }
}
</script>

<style scoped>
.main-container {
  width: 100vw;
  height: 80vh;
  position: relative;
  overflow: hidden;
  background-color: #fafafa;

}

.container {
  position: absolute;
  /*top: 40%;*/
  margin-top: 20px;
  border-radius: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 550px;
  box-shadow: 0 20px 30px #bdbdbd;
  padding: 50px;
  padding-bottom: 20px;
  background-color: #f2eded;
}

.slider {
  width: max-content;
}
.item {
  width: 400px;
  height: 260px;
  background-position: 50% 50%;
  display: inline-block;
  transition: 1s;
  background-size: 200%;
  position: absolute;
  z-index: 2;
  left: 50%;
}
.item:nth-child(1) {
  transform: translateX(-260%);
  opacity: 0;
  background-position: 0% 50%;
}

.item:nth-child(2) {
  transform: translateX(-160%);
  background-position: 20% 50%;
}

/* center */
.item:nth-child(3) {
  transform: translateX(-50%);
  background-position: 50% 50%;
  width: 520px;
  height: 390px;
}

.item:nth-child(4) {
  transform: translateX(60%);
  background-position: 70% 50%;
}

.item:nth-child(n + 5) {
  transform: translateX(160%);
  background-position: 100% 50%;
  opacity: 0;
}

.item .content {
  position: absolute;
  top: 100%;
  background-color: #fff;
  width: 90%;
  padding: 0% 5%;
  box-shadow: 0 20px 30px #b9b9b9;
  text-align: center;
  overflow: hidden;
  max-height: 0;
  transition: ease 0.5s all;
}

.item:hover .content {
  max-height: 100px;
  padding: 3% 5%;
}

.item:hover {
  background-size: 250%;
}

.buttons {
  position: absolute;
  width: 100%;
  bottom: 20px;
  left: 0;
  display: inline-flex;
  justify-content: center;
}
/*.btn {*/
/*  width: 40px;*/
/*  height: 40px;*/
/*  border-radius: 50%;*/
/*  border: 1px solid #555;*/
/*}*/

/*.btn:hover {*/
/*  background-color: antiquewhite;*/
/*}*/
</style>
