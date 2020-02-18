<template>
  <div>
    <div v-if="isGreen" class="lds-heart-green"><div></div></div>
    <div v-if="!isGreen" class="lds-heart-grey"><div></div></div>
  </div>
</template>

<script>
export default {
  props: ['color'],
  computed: {
    isGreen() {
      return this.color === 'green';
    }
  }
};
</script>

<style scoped>
.lds-heart-green {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  transform: rotate(45deg);
  transform-origin: 20px 20px;
}
.lds-heart-green div {
  top: 16px;
  left: 16px;
  position: absolute;
  width: 16px;
  height: 16px;
  background: #65d6ad;
  animation: lds-heart-green 1.2s forwards cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart-green div:after,
.lds-heart-green div:before {
  content: ' ';
  position: absolute;
  display: block;
  width: 16px;
  height: 16px;
  background: #65d6ad;
}
.lds-heart-green div:before {
  left: -12px;
  border-radius: 50% 0 0 50%;
}
.lds-heart-green div:after {
  top: -12px;
  border-radius: 50% 50% 0 0;
}

.lds-heart-grey {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  transform: rotate(45deg);
  transform-origin: 20px 20px;
}
.lds-heart-grey div {
  top: 16px;
  left: 16px;
  position: absolute;
  width: 16px;
  height: 16px;
  background: #c6f7e2;
  animation: lds-heart-grey 1.2s forwards cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart-grey div:after,
.lds-heart-grey div:before {
  content: ' ';
  position: absolute;
  display: block;
  width: 16px;
  height: 16px;
  background: #c6f7e2;
}
.lds-heart-grey div:before {
  left: -12px;
  border-radius: 50% 0 0 50%;
}
.lds-heart-grey div:after {
  top: -12px;
  border-radius: 50% 50% 0 0;
}

@keyframes lds-heart-green {
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

@keyframes lds-heart-grey {
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
