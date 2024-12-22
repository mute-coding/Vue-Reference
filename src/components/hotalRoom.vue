<!-- components:hotalRoom.vue -->
<template>
  <div class="roomCard">
    <div class="imageBlock">
      <p class="roomCname">{{ room.name }}</p>
    </div>
    <p class="roomEname" >{{room.eng}}</p>
    <div class="equipment-icons">
      <font-awesome-icon
        v-if="room.equipment.wifi"
        :icon="['fas', 'wifi']"
        class="icon wifi-icon"
      />
      <font-awesome-icon
        v-if="room.equipment.bathtub"
        :icon="['fas', 'bath']"
        class="icon bath-icon"
      />
      <font-awesome-icon
        v-if="room.equipment.breakfast"
        :icon="['fas', 'mug-saucer']"
        class="icon breakfast-icon"
      />
    </div>
    <p>最新折數:{{discountINF}}折</p>
    <p class="roomPrice" >{{room.price}}</p>
    <p class="finalPrice">{{finalPrice}}</p>
  </div>
</template>

<script>

export default {
  props:{
    room : Object,
    hotalDiscount:{
      type:Number,
      default: 0.9,
    }
  },
 computed: {
    finalPrice() {
      return (this.room.price * this.room.discount * this.hotalDiscount);
    },
    discountINF() {
      return parseFloat((this.room.discount * this.hotalDiscount * 100).toFixed(2));
    },
  },
};
</script>

<style scoped>

.imageBlock {
  background-color: grey;
  height: 150px;
  position: relative; /* 確保子元素能相對於此容器定位 */
}

.roomCname {
  position: absolute;
  background-color: #fff;
  padding: 10px 50px;
  bottom: 10px;
}
</style>
