<template>
  <div class="row">
    <div class="col-sm-3" >
      <h2>編輯表單</h2>
      <hr>
      <edit-room v-model:hotalDiscount="hotalDiscount" @add-room="addRoom" />
    </div>

    <div class="col-sm-9">
      <h2>房型總類</h2>
      <hr>
      <div class="row hotalRoom">
        <div class="hotalRoomCard shadow mb-5 bg-body rounded col-md-3" v-for="room in roomdata" :key="room.id">
          <hotalRoom :room="room" :hotalDiscount="hotalDiscount" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditRoom from './components/editRoom.vue';
import hotalRoom from './components/hotalRoom.vue';

export default {
  name: 'App',
  components: {
    hotalRoom,
    EditRoom,
  },
  data(){
    return{
      hotalDiscount: 0.9,  // 新增折扣屬性，初始值設為 0.9
      roomdata:[
        {
          id: 0,
          name: "經濟雙人房",
          eng: "Economy Double Room",
          price: 7000,
          amount: 0,
          image: './images/room1.jpg',
          discount: 0.9,
          equipment: {
            wifi: false,
            bathtub: true,
            breakfast: true,
          },
        },
        {
          id: 1,
          name: "海景三人房",
          eng: "Sea View Triple Room",
          price: 7800,
          amount: 0,
          image: './images/room2.jpg',
          discount: 0.8,
          equipment: {
            wifi: true,
            bathtub: true,
            breakfast: false,
          },
        },
        {
          id: 2,
          name: "商務雙人房",
          eng: "Business Double Room",
          price: 5600,
          amount: 0,
          image: './images/room3.jpg',
          discount: 0.9,
          equipment: {
            wifi: true,
            bathtub: false,
            breakfast: false
          }     
        },
        {
          id: 3,
          name: "溫泉雙人房",
          eng: "Hot spring double Room",
          price: 8400,
          amount: 0,
          image: './images/room4.jpg',
          discount: 0.6,
          equipment: {
            wifi: true,
            bathtub: true,
            breakfast: true
          }
        },
        {
          id: 4,
          name: "總統套房",
          eng: "Presidential Suite",
          price: 23000,
          amount: 0,
          image: './images/room5.jpg',
          discount: 0.75,
          equipment: {
            wifi: true,
            bathtub: true,
            breakfast: true
          }
        },
        {
          id: 5,
          name: "奢華四人房",
          eng: "Luxury four Room",
          price: 8500,
          amount: 0,
          image: './images/room6.jpg',
          discount: 0.7,
          equipment: {
            wifi: true,
            bathtub: true,
            breakfast: false
          }
        }
      ]
    }
  },
   methods: {
    addRoom(newRoom) {
      this.roomdata.push(newRoom);
    },
  },
};
</script>

<style>
.row {
  max-width: 100%;
  margin: 0 auto;
}
.row.hotalRoom {
  --bs-gutter-x: 0;
}
  .hotalRoomCard{
    margin:0 5px ;
  } 
  
</style>





