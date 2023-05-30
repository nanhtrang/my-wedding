<template>
  <div>
    <div class="slideshow-container">

      <div class="mySlides fade1">
        <div class="numbertext">1 / 3</div>
        <img src="../../../public/static/imgs/new/1.jpg" style="width:100%">
      </div>

      <div class="mySlides fade1">
        <div class="numbertext">2 / 3</div>
        <img src="../../../public/static/imgs/new/2.jpg" style="width:100%">
      </div>

      <div class="mySlides fade1">
        <div class="numbertext">3 / 3</div>
        <img src="../../../public/static/imgs/new/3.jpg" class="img3" style="width:100%">
      </div>

      <a class="prev" @click="plusSlides(-1)">❮</a>
      <a class="next" @click="plusSlides(1)">❯</a>

    </div>
    <br>

    <div style="text-align:center">
      <span class="dot" @click="currentSlide(1)"></span>
      <span class="dot" @click="currentSlide(2)"></span>
      <span class="dot" @click="currentSlide(3)"></span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'SlideShow',
  data: function () {
    return {
      slideIndex: 1,
      images: []
    }
  },
  mounted () {
    this.loadImg(require.context('../../assets/images/banner/new', true, /\.jpg/))
  },
  methods: {
    loadImg: function (r) {
      const vm = this
      r.keys().forEach(key => {
        const item = { path: r(key), name: key.replace('./', '') }
        vm.images.push(item)
      })
    },
    plusSlides: function (n) {
      this.showSlides(this.slideIndex += n)
    },
    currentSlide: function (n) {
      this.showSlides(this.slideIndex += n)
    },

    showSlides: function (n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex-1].style.display = "block";
      dots[this.slideIndex-1].className += " active";
    }
  }
}
</script>

<style scoped>
/* Slideshow container */
.slideshow-container {
  max-width: 100vw;
  min-height: 500px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  text-decoration: underline;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
  z-index: 10;
}

.prev {
  left: 0;
  border-radius: 3px 0 0 3px;
  z-index: 10;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade1 {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}

/*.mySlides {display: none}*/
img {vertical-align: middle; position: absolute;
    top: 0;
    left: 0;
  }
</style>
