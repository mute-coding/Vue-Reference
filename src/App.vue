<template>
  <div class="col-sm-9">
    <h2>房型總類</h2>
    <hr>
    <div class="row hotalRoom">
      <div class="hotalRoomCard shadow p-3 mb-5 bg-body rounded col-md-3" v-for="room in roomdata" :key="room.id">
        <hotalRoom :room="room" />
      </div>
    </div>
  </div>
</template>

<script>
import hotalRoom from './components/hotalRoom.vue';

export default {
  name: 'App',
  components: {
    hotalRoom,
  },
  data(){
    return{
      roomdata:[
        {
          id: 0,
          name: "經濟雙人房",
          eng: "Economy Double Room",
          price: 7000,
          amount: 0,
          image: require('@/assets/room1.jpg'),
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
          image: require('@/assets/room2.jpg'),
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
          cover:"",
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
          cover: "",
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
          cover: "",
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
          cover: "",
          discount: 0.7,
          equipment: {
            wifi: true,
            bathtub: true,
            breakfast: false
          }
        }
      ]
    }
  }
};
</script>

<style>
  .hotalRoomCard{
    margin:0 5px ;
  }
  
</style>





