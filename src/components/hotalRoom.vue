<!-- components:hotalRoom.vue -->
<template>
  <div class="roomCard">
    <div class="imageBlock" :style="{ backgroundImage: `url(${room.image})` }">
      <p class="roomCname">{{ room.name }}</p>
    </div>
    <div class="roomINF">
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
    </div> 
    <p class="discountINF" >最新折數:{{discountINF}}折</p>
    <div class="roomPriceINF" >
      <p class="price roomPrice" >TWD{{room.price}}</p>
      <p class="price finalPrice">TWD{{finalPrice}}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    room: Object,
    hotalDiscount: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    finalPrice() {
      return this.room.price * this.room.discount * this.hotalDiscount;
    },
    discountINF() {
      return parseFloat((this.room.discount * this.hotalDiscount * 100).toFixed(2));
    },
  },
};
</script>

<style scoped>

.imageBlock {
  height: 150px;
  background-color: #eee;
  position: relative;
  background-size: 100% auto;
  background-position: center center;
  border-radius:0.375rem 0.375rem 0 0;
}

.roomCname {
  position: absolute;
  background-color: #eee;
  padding: 10px 50px;
  bottom: 10px;
}
.roomEname{
  margin-bottom: 5px;
}
.roomINF{
  display: flex;
  flex-direction: row;
  margin:0 0 0 10px;
}
.discountINF{
  margin:0 0 0 10px;
}
.icon{
  margin: 0 5px;
}
.roomPriceINF{
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
.price{
  margin: 5px 10px;
  font-size: 24px;
}
.roomPrice{
  text-decoration: line-through;
}
.finalPrice{
  color: red;
}
</style>
