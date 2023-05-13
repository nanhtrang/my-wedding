<template>
  <div class="custom-modal" id="sendModal">
    <div class="custom-modal-content">
      <div class="custom-modal-header">
        <span @click="closeSendModal" class="close">&times;</span>
        <h2>Hộp mừng cưới</h2>
        <div>
          Mọi sự yêu thương không thể trao tay xin gửi về hộp mừng cưới này
        </div>
      </div>
      <div class="custom-modal-body py-3">
        <div class="row m-0 p-0">
          <div class="col-sm-6">
            <money-info-box
              :info-banks="boy"
              name="Trần Đức Toàn"
            >
              Mừng cưới chú rể
            </money-info-box>
          </div>
          <div class="col-sm-6">
            <money-info-box
              :info-banks="girl"
              name="Nguyễn Như Ngọc"
            >
              Mừng cưới cô dâu
            </money-info-box>
          </div>
        </div>
      </div>
      <div class="custom-modal-footer">
      </div>
    </div>
  </div>
</template>

<script>
import MoneyInfoBox from '@/components/Modal/MoneyInfoBox'
export default {
  name: 'SendMoney',
  data: function () {
    return {
      boy: [
        {
          number: "19070125033015",
          code: "TCB"
        },
        {
          number: "00999735402",
          code: "TPB"
        },
        {
          number: "104875485467",
          code: "ICB"
        }],
      girl: [
        {
          number: "19035087650013",
          code: "TCB"
        },
        {
          number: "00999735402",
          code: "TPB"
        },
        {
          number: "638121197",
          code: "MB"
        }
      ],
    }
  },
  components: { MoneyInfoBox },
  mounted () {
    window.onclick = function(event) {
      let modal = document.getElementById("sendModal")
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  },
  methods: {
    closeSendModal: function () {
      let modal = document.getElementById("sendModal")
      modal.style.display = 'none'
    }
  }
}
</script>

<style scoped>
/* The Modal (background) */
.custom-modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 101; /* Sit on top */
  padding-top: 30px; /* Location of the box */
  left: 0%;
  top: 0%;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.custom-modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 55%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.6s;
  animation-name: animatetop;
  animation-duration: 0.6s;
  border-radius: 10px;
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.custom-modal-header {
  padding: 2px 16px;
  background-color: #e387a3;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.custom-modal-body {padding: 2px 16px;
}

.custom-modal-footer {
  padding: 2px 16px;
  /*background-color: #e387a3;*/
  color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

@media (min-width: 1300px) {
  .custom-modal-content {
    width: 55% !important;
  }
}

@media (min-width: 960px) {
  .custom-modal-content {
    width: 65%;
  }
}

@media (max-width: 1134px) and (min-width: 955px) {
  .custom-modal-content {
    width: 80%;
  }
}
@media (max-width: 960px) {
  .custom-modal-content {
    width: 90%;
  }
}
</style>
