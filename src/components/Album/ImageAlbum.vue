<template>
  <div class="image-album-container container px-4 pt-5" id="album">
    <header-title
      title="Album ảnh"
      subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta beatae libero similique eius neque aliquid magni dignissimos fugiat assumenda veritatis sit, quia hic sunt quas optio iure quod voluptatum?"
    ></header-title>
    <ul>
      <!-- <li v-for="n in 12" :key="n">{{ `../../assets/images/album/${n}.png` }}</li> -->
      <img v-for="n in 12" :key="n" :src="`../../assets/images/album/${n}.png`" alt="">
    </ul>
    <div class="image-container">
      <div class="img" v-for="(item, index) in albums" :key="index" data-aos="flip-up">
        <img :src="item.path" alt="">
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
    this.importAll(require.context('../../assets/images/album', true, /\.png/))
  },

  methods: {
    importAll: function (r) {
      const vm = this
      r.keys().forEach(key => {
        vm.albums.push({ path: r(key), name: key })
      })
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
  transition: all ease 0.5s;
}

.image-container .img:hover {
  transform: scale(1.5);
  box-shadow: unset;
  z-index: 15;
}
</style>
