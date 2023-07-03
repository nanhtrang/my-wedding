<template>
  <div class="box-wish box-chat animation-box" style="border-radius: 20px">
    <div class="container-form py-3">
      <wish-content v-for="(item, index) in mainData" :key="item.id" :index="index" :id="item.id"
        :name="item.name"
      >
        {{ item.wish }}
      </wish-content>
    </div>
  </div>
</template>

<script>
import WishContent from '@/components/Wish/WishContent'

export default {
  name: 'ToanNgocWeddingWishRight',
  components: {
    WishContent
  },
  props: {
    data: null
  },
  data () {
    return {
      mainData: [
        {
            "id": 95,
            "name": "Em Hằng bé D9",
            "wish": "Chúc anh Toàn cùng vợ bên nhau hạnh phúc. Chúc cho tổ tấm nhỏ sẽ mãi lun tràn ngập tiếng cười. "
        },
        {
            "id": 94,
            "name": "Đỗ Anh Tú",
            "wish": "Chúc bạn tôi trăm năm hạnh phúc anhem chúng ta chả mấy bữa mới gặp được xong đám thì bố trí 1 buổi combat để anh biết mà hóng nhé "
        },
        {
            "id": 93,
            "name": "Đạt",
            "wish": "Chúc hai bạn hạnh phúc <3"
        },
        {
            "id": 92,
            "name": "Hùng",
            "wish": "Chúc mừng 2 bạn"
        },
        {
            "id": 91,
            "name": "Linh nè",
            "wish": "Chúc 2 bạn trăm năm hạnh phúc...sớm sinh quý tử nha "
        },
        {
            "id": 90,
            "name": "Anh zai Pika Long",
            "wish": "Không khí mùa này thấy vui ghê,\r\nThay phiên đám cưới thấy mà mê.\r\nMai mốt vào mùa mưa khỏi lạnh,\r\nSang năm con cháu có đầy đàn.\r\n\r\nĐếm ngược tuần nữa tới ngày vui,\r\nNhư Ngọc - Đắc Toàn nên đôi, kết vợ chồng.\r\nChúc cho lửa mặn hương nồng,\r\nRăng long đầu bạc vẫn còn có nhau.\r\n\r\nNgày xưa hai chữ làm quen,\r\nQuen rồi bốn chữ chúng mình yêu nhau ❤️\r\nVà rồi hai chữ trọn đời,\r\nBây giờ bốn chữ suốt đời bên nhau 💙\r\n\r\nP/s: Thật hạnh phúc nhé em zai !!! Happy Wedding 💖"
        },
        {
            "id": 89,
            "name": "VAN CAO D9",
            "wish": "Chúc mừng hạnh phúc Toàn & Ngọc nhé. Chúc 2 vợ chồng trăm năm hạnh phúc nhé.\nHappy Wedding!"
        },
        {
            "id": 88,
            "name": "Bạn Quỳnh Trang",
            "wish": "Chúc vợ chồng Toàn hạnh phúc trăm năm và gặp được nhiều điều may mắn trong cuộc sống, sớm sinh em bé nhé <3 <3"
        },
        {
            "id": 87,
            "name": "Nguyễn Phi Hải Nam",
            "wish": "Chúc mừng hạnh chúc của hai anh chị ạ, em xin được chúc anh chị bên nhau đến đầu bạc răng long, hẹn gặp anh chị tại ngày trọng đại của cả hai ạ ! Happy Wedding <3"
        },
        {
            "id": 86,
            "name": "Hoàng Anh Dương",
            "wish": "Em xin chúc anh chị: Chúc anh chị hạnh phúc bên nhau đến đầu bạc răng long, sớm sinh quý tử!"
        },
        {
            "id": 85,
            "name": "Chị Hường xinh D9 đâyyy 😍",
            "wish": "Chúc mừng hạnh phúc em Toàn & em Ngọc nha, chúc 2 em sẽ luôn vui vẻ, hạnh phúc, cùng nắm tay nhau đi qua những ngày tuyệt vời hay cả những khó khăn trong cuộc sống ạ 💞\nChúc 2 bạn luôn thấu hiểu và yêu thương nhau nhaaa 💞💞💞\n\n💖 Happy Wedding 💖"
        },
        {
            "id": 84,
            "name": "Hangokk ",
            "wish": "Chờ mãi mới tới ngày này, cô dâu chú rể đẹp đôi quá chừng ^^ chuc anh chị luôn hạnh phúc và vui vẻ. \nCho em xin vía lấy chồng nhớ <3 "
        },
        {
            "id": 83,
            "name": "Chị Trang PO",
            "wish": "Chúc gia đình trẻ mãi hạnh phúc và sớm golive tăng số lượng nhá! "
        },
        {
            "id": 82,
            "name": "Võ Thế Đông An",
            "wish": "Chúc vợ chồng em Toàn luôn hạnh phúc và gặp mọi điều thuận lợi trong cuộc sống nhé"
        },
        {
            "id": 81,
            "name": "Phạm Mỹ Linh",
            "wish": "Chúc mừng lớp trưởng nhé🥰🥰🥰 chúc 2 bạn hp sớm sịn quý tử nhé"
        },
        {
            "id": 80,
            "name": "Em Mậu",
            "wish": "Chị Ngọc thân mến,\n\nEm xin chúc chị có một hành trình mới tràn đầy niềm vui, hạnh phúc và sự đồng điệu. Chúc anh chị sẽ cùng nhau xây dựng một tình yêu bền vững và mãi mãi, vượt qua mọi khó khăn và trải qua những khoảnh khắc đẹp nhất. Em tin rằng chị sẽ là một người vợ tuyệt vời và sẽ tạo nên một gia đình ấm áp, nhiều tình thương yêu. Mong rằng chị và anh có một cuộc sống viên mãn và thịnh vượng bên nhau.\n\nChân thành,\nEm Mậu"
        },
        {
            "id": 79,
            "name": "Phạm Thanh Hằng",
            "wish": "Chúc mừng bạn lớp trưởng huyền thoại đã tìm được một nửa hoàn hảo của mình !\nMột ngày đặc biệt của những người đặc biệt ❤️ Chúc hai bạn trăm năm hạnh phúc và luôn có những khoảnh khắc yêu thương. ❤️ Happy wedding ❤️"
        },
        {
            "id": 78,
            "name": "Trần Thảo Phương",
            "wish": "Chúc vợ chồng 2 đứa luôn vui vẻ hạnh phúc mỗi ngày và sống một cuộc đời mình luôn mong muốn nha 🥰❤️"
        },
        {
            "id": 77,
            "name": "Đạt Lê",
            "wish": "Mừng hạnh phúc hai em"
        }
    ]
    }
  },

  mounted () {
  },

  methods: {
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap');

input {
  caret-color: red;
}

.container-form {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  /*padding: 40px;*/
  box-sizing: border-box;
  background: #f9f9f9;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
  overflow-y: auto;
}


.container-form::-webkit-scrollbar {
  width: 0px;
}

.inputs {
  text-align: left;
  margin-top: 30px;
}

label, input, button, textarea {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

label {
  margin-bottom: 4px;
}

label:nth-of-type(2) {
  margin-top: 12px;
}

input::placeholder {
  color: gray;
}

input, textarea {
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  font-size: 14px;
  border-radius: 12px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
}
textarea {
  resize: none;
}

input {
  height: 50px;
}


a {
  position: absolute;
  font-size: 8px;
  bottom: 4px;
  right: 4px;
  text-decoration: none;
  color: black;
  background: yellow;
  border-radius: 10px;
  padding: 2px;
}

h1 {
  position: absolute;
  top: 0;
  left: 0;
}

.wish-content-container:nth-child(even) {
  background-color: #f4eceb;
}
.wish-content-container:nth-child(odd) {
  background-color: #f9f9f9;
}
</style>
