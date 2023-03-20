<template>
  <div class="calendar-container mt-5">
    <div class="container">
      <div class="row m-0 p-0">
        <div class="col-sm-6">
          <div class="box-container">
            <div class="box">
              <h2 class="title">Save the Date</h2>
              <div class="forTheWedding">For the wedding of</div>
              <div class="font-dancing-script">
                Đức Toàn <span class="material-symbols-outlined icon-heart"> favorite </span> Như
                Ngọc
              </div>
              <div class="intro">
                Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi
                có thêm một niềm hạnh phúc!
              </div>
              <div>
                <button class="button-82-pushable" role="button">
                  <span class="button-82-shadow"></span>
                  <span class="button-82-edge"></span>
                  <span class="button-82-front text">
                    Gửi lời chúc
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="box-container">
            <div class="box">
              <div class="title">Save the Date</div>
              <div class="forTheWedding">For the wedding of</div>
              <div class="tag-name">Đức Toàn & Như Ngọc</div>
              <div class="intro">
                Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi
                có thêm một niềm hạnh phúc!
              </div>
              <div>
                <button>Gửi lời chúc</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToanNgocWeddingCalendar',

  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style scoped>
.box {
  border: 2px solid black;
  padding: 20px;
}
.calendar-container {
  background-image: url("../assets/images/bg/bg.png");
}
.col-sm-6 {
  padding: 30px 10px;
}
.box-container {
  background-color: #fff;
  padding: 40px 40px;
}
.title {
  font-family: 'Great Vibes', cursive;
  font-size: 40px;
  margin-bottom: 30px;
}
.icon-heart {
  color: #c89d9c !important;
  font-weight: 300;
}
.font-dancing-script {
  font-size: 30px;
}
.intro {
  padding: 20px;
  font-size: 18px;
}

</style>
