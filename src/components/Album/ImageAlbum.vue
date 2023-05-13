<template>
  <div class="image-album-container container px-4 pt-5 border-bottom" id="album">
    <header-title
      title="Album ảnh"
      subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta beatae libero similique eius neque aliquid magni dignissimos fugiat assumenda veritatis sit, quia hic sunt quas optio iure quod voluptatum?"
    ></header-title>
    <ul>
      <!-- <li v-for="n in 12" :key="n">{{ `../../assets/images/album/${n}.png` }}</li> -->
      <!-- <img v-for="n in 12" :key="n" :src="`../../assets/images/album/${n}.png`" alt=""> -->
    </ul>
    <div class="image-container animation-up">
      <div class="img" v-for="(item, index) in albums" :id="`flip-up-${item.name}`" :key="index" data-aos="flip-up">
        <img class="lazy" :data-src="item.path" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../Common/HeaderTitle.vue'
// import album1 from '../../assets/album/1.png'
export default {
  components: { HeaderTitle },
  name: 'ToanNgocWeddingImageAlbum',

  data () {
    return {
      albums: []
    }
  },

  mounted () {
    this.importAll(require.context('../../assets/images/album', true, /\.jpg/))
    this.addEventShowAlbum()
  },

  methods: {
    addEventShowAlbum : function () {
      document.getElementById("album").addEventListener('onch', () => {
      })
    },
    importAll: function (r) {
      const vm = this
      r.keys().forEach(key => {
        const time = this.getRandomIntInclusive(3000, 5000)
        const item = { path: r(key), name: key.replace('./', ''), time, isRotate: false }
        vm.albums.push(item)
      })
    },
    getRandomIntInclusive: function (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
    }
  }
}
</script>

<style scoped>
.image-container {
  columns: 3 250px;
  gap: 15px;
}

.image-container img {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgb(163, 162, 162);
  overflow: hidden;
  transition: all ease 1s;
  transform-style: preserve-3d;
}

.img:hover img{
  transform: rotateY(180deg);
  box-shadow: unset;
  z-index: 15;
}
</style>
