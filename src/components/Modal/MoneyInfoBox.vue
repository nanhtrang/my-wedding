<template>
  <div class="money-info">
    <div class="titles p-3">
      <slot></slot>
    </div>
    <div class="bank-logo d-inline-flex overflow-x-auto">
      <div @click="changeBank(index)"
           :class="`bank-logo-item border rounded ${activeBankIndex === index ? 'border-custom' : ''} `"
           v-for="(item, index) in bankList" :key="index">
        <img :src="item.bankLogoUrl" width="50">
      </div>
    </div>
    <div :class="`img ${bankList[activeBankIndex] && bankList[activeBankIndex].qr}`">
    </div>
    <div class="info-text text-left px-4 pb-4">
      <div>Ngân hàng: <b>{{getBankName()}}</b></div>
      <div>Số tài khoản: <b>{{getNumberBank()}}</b></div>
      <div>Chủ Tài Khoản: <b>{{name}}</b></div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import bankData from './bank.json'
export default {
  name: 'MoneyInfoBox',
  props: {
    infoBanks: null,
    name: null,
    gender: null
  },
  mounted () {
    const vm = this

    this.allBanks = Object.assign({}, bankData);
    this.getListBank()
  },
  data: function() {
    return {
      qrs: [],
      bankList: [],
      allBanks: null,
      activeBankIndex: 0,
      ext: null
    }
  },
  methods: {
    changeBank: function (index) {
      this.activeBankIndex = index
    },
    getBankByCode: function (code) {
      return this.allBanks[code]
    },
    getListBank: function () {
      const vm = this
      vm.bankList = []
      for (const el of this.infoBanks) {
        let bank = vm.getBankByCode(el.code)
        bank = {...bank, number: el.number, qr: this.gender + '-' + el.img.toLowerCase()}
        vm.bankList.push(bank)
      }

    },
    getBankName: function () {
      const vm = this
      if (vm.bankList && vm.bankList[vm.activeBankIndex]) {
        return vm.bankList[vm.activeBankIndex].name
      }
      return null
    },
    getNumberBank: function () {
      const vm = this
      if (vm.bankList && vm.bankList[vm.activeBankIndex]) {
        return vm.splitNumber(vm.bankList[vm.activeBankIndex].number)
      }
      return null
    },
    splitNumber: function (num) {
      if (num == null) return ''
      let text = ''
      let count = 0
      for (let i = 0; i < num.length; i++) {
        text+= num[i];
        count++
        if (count === 4) {
          text+= ' '
          count = 0;
        }
      }
      return text
    }
  }
}
</script>

<style scoped>
.money-info {
  border: 2px solid #c89d9c;
  border-radius: 10px;
  height: 100%;
}
.img img {
  width: 100%;
}
.titles {
  font-size: 30px;
}

.border {
  border-color: transparent !important;
}

.border-custom {
  border-color: #c76b87 !important;
}

.bank-logo {
  cursor: pointer;
}


.boy-tcb {
  background-image: url("../../../public/static/imgs/sendMoney/boy/TCB.jpg");
  background-position: center;
  background-size: contain;
  width: 200px;
  height: 200px;
}

.boy-tpb {
  background-image: url("../../../public/static/imgs/sendMoney/boy/TPB.jpg");
  background-position: center;
  background-size: contain;
  width: 200px;
  height: 200px;
}


.girl-tcb {
  background-image: url("../../../public/static/imgs/sendMoney/girl/TCB.jpeg");
  background-position: center;
  background-size: contain;
  width: 200px;
  height: 200px;
}
.img {
  margin: 10px auto;
}
</style>
