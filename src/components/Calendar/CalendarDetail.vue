<template>
  <div class="calendar-detail-container">
    <div class="calendar-timer mb-2">
      Tháng 6 / 2023
    </div>
    <div class="date-of-month">
      <ul class="border-top border-bottom p-1">
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Web</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>
      <div class="date-table border-bottom">
        <div v-for="(week, index) in dateOfMonth" :key="index" class="week">
          <div v-for="(date, idex) in week" :key="idex" class="date-of-week d-flex justify-content-center">
            <template v-if="date === 24">
              <div class="active-date">
                24
              </div>
            </template>
            <template v-else-if="date === 25">
              <div class="active-date main-date">
                25
              </div>
            </template>
            <template v-else>
              <div data-aos="zoom-out-left" data-aos-duration="1500">
                {{date}}
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="countdown-box animation-box delay-23">
        <div id="demo" class="d-flex justify-content-center align-items-center pt-3 w-100 timer">
          <div class="timer" data-aos="zoom-out-up" data-aos-duration="1000">
            <div>{{date}}</div>
            <div>Ngày</div>
          </div>
          <div class="timer" data-aos="zoom-out-up" data-aos-duration="1200">
            <div>{{hour}}</div>
            <div>Giờ</div>
          </div>
          <div class="timer" data-aos="zoom-out-up" data-aos-duration="1400">
            <div>{{min}}</div>
            <div>Phút</div>
          </div>
          <div class="timer" data-aos="zoom-out-up" data-aos-duration="1600">
            <div>{{sec}}</div>
            <div>Giây</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToanNgocWeddingCalendarDetail',
  data () {
    return {
      dateOfMonth: [],
      hour: null,
      min: null,
      sec: null,
      date: null
    }
  },

  mounted () {
    this.countdownTime()
    this.generateDate()
  },

  methods: {
    countdownTime: function () {
      const countDownDate = new Date('Jun 25, 2023 12:00:00').getTime()
      const vm = this
      const x = setInterval(function () {
        // Get today's date and time
        const now = new Date().getTime()

        // Find the distance between now and the count down date
        const distance = countDownDate - now

        // Time calculations for days, hours, minutes and seconds
        vm.date = Math.floor(distance / (1000 * 60 * 60 * 24))
        vm.hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        vm.min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        vm.sec = Math.floor((distance % (1000 * 60)) / 1000)

        // Output the result in an element with id="demo"
        // document.getElementById('day').innerHTML = days + ' Ngày'
        // document.getElementById('hour').innerHTML = hours + ' Giờ'
        // document.getElementById('min').innerHTML = minutes + ' Phút'
        // document.getElementById('sec').innerHTML = seconds + ' Giây'

        // If the count down is over, write some text
        if (distance < 0) {
          clearInterval(x)
          document.getElementById('demo').innerHTML = 'Jun 25, 2023 12:00:00'
        }
      }, 1000)
    },
    generateDate: function () {
      let arrLine = []
      for (let i = 28; i <= 31; i++) {
        arrLine.push('')
      }
      for (let j = 1; j <= 31; j++) {
        if (j < 31) {
          arrLine.push(j)
        } else {
          arrLine.push('')
        }
        if (arrLine.length === 7) {
          const arrTmp = Object.assign([], arrLine)
          this.dateOfMonth.push(arrTmp)
          arrLine = []
        }
      }
      // this.dateOfMonth.push(arrLine)
    }
  }
}
</script>

<style scoped>
.timer {
  font-family: "Dancing Script", cursive !important;
  font-size: 30px;
  width: 25%;
  color: #c89d9c;
}
ul li {
  list-style-type: none;
  flex: 1;
}
ul {
  display: flex;
  margin-bottom: 0;
}
.week {
  display: flex;
  align-items: center;
  min-height: 49px;
}
.date-of-week {
  flex: 1;
  margin-bottom: 6px;
  margin-top: 6px;
}

.active-date {
  min-height: 40px;
  min-width: 40px;
  border: 2px solid #cc446e;
  color: #cc446e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.active-date::before {
  content: "";
  position: absolute;
  top: 50px;
  min-height: 0;
  min-width: 40px;
  background-color: #c89d9c;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: ease all .5s;

}

/*.active-date:hover::before {*/
/*  content: "25";*/
/*  min-height: 40px;*/
/*  top: 0px;*/
/*  background-color: #c89d9c;*/
/*}*/

.main-date {
  color: white;
  border-color: #c76b87;
  background: linear-gradient(
    to left bottom,
    hsl(339, 59%, 91%) 0%,
    hsl(342, 59%, 80%) 8%,
    hsl(342, 63%, 69%) 92%,
    hsl(342, 58%, 59%) 100%
  );
}

/* CSS */
</style>
