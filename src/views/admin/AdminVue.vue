<template>
  <div class="admin-container">
    <div class="tab d-flex justify-content-between">
      <div>
        <button class="tablinks" id="tablink1" @click="openTab($event, idListFriend)">Danh sách bạn bè</button>
        <button class="tablinks" id="tablink2" @click="openTab($event, idListComment)">Lời chúc</button>
      </div>
      <div class="d-flex align-items-center mx-2">
        <span v-if="user">
          {{ user }}, <span class="btn btn-outline-secondary" @click="logout">Đăng xuất</span>
        </span>
      </div>
    </div>
    <div class="tab-content" :id="idListFriend">
      <div class="row m-0 p-0">
        <div class="col-12 m-0 p-0">
          <h3>Danh sách bạn bè</h3>
        </div>
        <div class=" col-sm-6 m-0 mx-auto p-0">
          <div class="row m-0 p-0">
            <div class="col-sm-6">
              <div class="text-start">Lọc danh sách theo</div>
              <div>
                <select v-model="option" class="form-select">
                  <option value="0">Tất cả</option>
                  <option value="2">Cô dâu</option>
                  <option value="1">Chú rể</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="text-start">Tên</div>
              <div>
                <input class="form-control" v-model="name" />
              </div>
            </div>
          </div>
          <div class="m-0 p-0 mt-3 d-inline-flex">
            <button class="btn btn-primary mx-2" style="min-width: 100px"
                    @click="clickSearch"
            >Tìm kiếm</button>

            <button class="btn btn-secondary mx-2" style="min-width: 100px"
                    @click="reset"
            >Đặt lại</button>

            <button class="btn btn-primary mx-2" style="min-width: 100px"
                    @click="download"
            >Tải xuống</button>
          </div>
        </div>
      </div>
      <div class="row m-0 p-0 mt-3">
        <div class="col-sm-6 m-auto text-end">
          <span v-if="page != null && totalPage != null">Trang {{page + 1}} trên tổng số {{totalPage}} trang</span>
        </div>
      </div>
      <div class="row m-0 p-0 mt-1">
        <div class="col-sm-6 m-auto">
          <div class="d-flex justify-content-end"  v-if="page != null && totalPage != null">
            <button class="btn" @click="changePage(false)" :disabled="this.page === 0">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div class="btn mx-2">
          <span>
            {{page + 1}} - {{totalPage}}
          </span>
            </div>
            <button class="btn" @click="changePage(true)" :disabled="this.page === this.totalPage - 1">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row m-0 p-0 mt-1">
        <div class="col-sm-8 m-auto">
          <table>
            <tr>
              <th>#</th>
              <th>Tên</th>
              <th>Số người tham dự</th>
              <th></th>
              <th></th>
            </tr>
            <tr v-for="(item, index) in listConfirm" :key="index">
              <td>{{index + 1}}</td>
              <td>{{item.name}}</td>
              <td>{{item.number}}</td>
              <td>{{item.isGroomSide ? 'Bạn chú rể' : 'Bạn cô dâu'}}</td>
              <td>
                <i @click="deleteFriend(item.id)" style="font-size: 25px; cursor: pointer" class="fa-solid fa-trash-can text-danger"></i>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="row m-0 p-0 mt-1">
        <div class="col-sm-6 m-auto">
          <div class="d-flex justify-content-end"  v-if="page != null && totalPage != null">
            <button class="btn" @click="changePage(false)" :disabled="this.page === 0">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div class="btn mx-2">
          <span>
            {{page + 1}} - {{totalPage}}
          </span>
            </div>
            <button class="btn" @click="changePage(true)" :disabled="this.page === this.totalPage - 1">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-content d-none" :id="idListComment">
      <div class="row m-0 p-0">
        <div class="col-12 m-0 p-0">
          <h3>Lời chúc</h3>
        </div>
      </div>
      <div class="row m-0 p-0">
        <div class="col-sm-6 m-auto d-flex justify-content-end my-2">
          <button class="btn btn-primary" @click="getWish">Refresh</button>
        </div>
      </div>
      <div class="row m-0 p-0">
        <div class="col-sm-8 m-auto">
          <table>
            <tr>
              <th>#</th>
              <th>Tên</th>
              <th>Lời chúc</th>
              <th></th>
            </tr>
            <tr v-for="(item, index) in getListWish" :key="index">
              <td>{{index}}</td>
              <td>{{item.name}}</td>
              <td>{{item.wish}}</td>
              <td class="d-flex justify-content-center">
                <i @click="deleteWish(item.id)" style="font-size: 25px; cursor: pointer" class="fa-solid fa-trash-can text-danger"></i>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/common/api'
import actionTypes from '@/store/types/actionTypes'

export default {
  name: 'AdminVue',
  mounted () {
    this.user = this.$cookies.get('account')
    this.getTabId()
    this.search()
  },
  data: function () {
    return {
      option: 0,
      page: 0,
      limit: process.env.VUE_APP_ITEMS_PER_PAGE,
      name: null,
      listConfirm: [],
      listWish: [],
      totalPage: null,
      totalRow: null,
      user: null,
      loadCommentFirst: true,
      tabId: null,
      idListFriend: 'list-friend',
      idListComment: 'list-comment'
    }
  },
  methods: {
    deleteFriend: function (id) {
      const vm = this
      const body = {
        id
      }
      api.deleteCustomer(body).then(res => {
        if (res.status === 'success') {
          vm.clickSearch();
        }
      })
    },
    deleteWish: function (id) {
      this.$store.dispatch(actionTypes.DELETE_WISH, {id}).then(res => {
        console.log(res)
      })
    },
    getTabId: function() {
      const vm = this
      const cookieText = 'tabId'
      if (!vm.$cookies.isKey(cookieText)) {
        vm.$cookies.set(cookieText, vm.idListFriend)
        vm.openTab(document.getElementById('tablink1'), vm.idListFriend, true)
      } else {
        vm.tabId = vm.$cookies.get(cookieText)
        if (vm.tabId === vm.idListFriend) {
          vm.openTab(document.getElementById('tablink1'), vm.idListFriend, true)
        } else {
          vm.openTab(document.getElementById('tablink2'), vm.idListComment, true)
        }
      }
    },
    logout: function() {
      this.$cookies.remove('account')
      this.$router.push('/login')
    },
    getWish: function () {
      const vm = this
      vm.$store.dispatch(actionTypes.GET_WISH).then(res => {
        vm.listWish = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    openTab: function (e, id, isOnload = false) {
      let tabs = document.getElementsByClassName("tab-content")
      for (const el of tabs) {
        if (el.id !== id) {
          el.classList.add("d-none")
        } else {
          el.classList.remove("d-none")
        }
      }
      if (id === this.idListComment && this.loadCommentFirst) {
        this.loadCommentFirst = false
        this.getWish()
      }

      let tabLinks = document.getElementsByClassName("tablinks");
      for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-tab")
      }
      if (!isOnload) {
        e.currentTarget.classList.add("active-tab")
        this.$cookies.set("tabId", id)
      } else {
        e.classList.add("active-tab")
      }
    },
    reset: function () {
      this.option = 0
      this.name = ''
    },
    clickSearch: function() {
      this.page = 0
      this.search()
    },
    search: function () {
      const vm = this
      const params = {
        name: this.name === null ? '' : this.name,
        is_boy: this.option,
        page: this.page,
        limit: this.limit
      }
      api.searchCustomer(params).then(res => {
        if (res.status === 'success') {
          vm.listConfirm = Object.assign([], res.data.customers)
          vm.totalPage = res.data.total_page
        }
      })
    },
    download: function() {
      const vm = this
      const params = {
        name: this.name === null ? '' : this.name,
        is_boy: this.option,
        page: this.page,
        limit: this.limit
      }
      api.exportCsv(params).then(res => {

        console.log(res)
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(res);
        hiddenElement.download = 'khach_moi_'+ vm.getTime() + '.csv';
        hiddenElement.click();
      })
    },
    getTime: function() {
      return new Date().toLocaleDateString()
    },
    changePage: function (isNext) {
      const vm = this
      const params = {
        name: this.name === null ? '' : this.name,
        is_boy: this.option,
        page: this.page,
        limit: this.limit
      }
      if (isNext) {
        if (this.page === this.totalPage - 1) {
          return
        }
        this.page++;
        params.page = this.page
      } else {
        if (this.page === 0) {
          return
        }
        this.page--;
        params.page = this.page
      }
      api.searchCustomer(params).then(res => {
        if (res.status === 'success') {
          vm.listConfirm = Object.assign([], res.data.customers)
          vm.totalPage = res.data.total_page
        }
      })
    }
  },
  computed: {
    getListWish () {
      return this.$store.getters.getWishList
    }
  }
}
</script>

<style scoped>
.admin-container {
  min-height: 100vh;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active-tab {
  background-color: #ccc;
}

</style>
