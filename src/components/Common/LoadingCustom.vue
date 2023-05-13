<template>
  <div :class="`custom-loading-container ${loading ? '' : 'd-none'}`">
    <div class="lds-heart"><div></div></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingCustom',
  props: {
    loading: null
  }
}
</script>

<style scoped>
.custom-loading-container {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  z-index: 102;
  background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
}
.lds-heart {
  /*display: inline-block;*/
  position: absolute;
  top: 50%;
  left: 47%;
  width: 80px;
  height: 80px;
  transform: rotate(45deg) translate(-50%, -50%);
  transform-origin: center center;
}
.lds-heart div {
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: #c76b86;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: #c76b86;
}
.lds-heart div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}

</style>
