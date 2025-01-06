<!-- components:editRoom.vue -->
<template>
    <div>
        <label>全館折扣:</label>
         <input class="hotalDiscount" type="number" v-model.number="discount"/>
        <h3>新增房間</h3>
        <form @submit.prevent="createRoom">
          <div>
            <label>房間名稱:</label>
            <input type="text" v-model="newRoom.name" required >
          </div>
          <div>
            <label>英文名稱:</label>
            <input type="text" v-model="newRoom.eng" required >
          </div>
          <div>
            <label>房間價格:</label>
            <input type="number" v-model.number="newRoom.price" required >
          </div>
          <div>
            <label>圖片路徑:</label>
            <input type="text" v-model="newRoom.image" required >
          </div>
          <fieldset>
            <legend>設備:</legend>
            <label>
            <input type="checkbox" v-model="newRoom.equipment.wifi" />
              WiFi
            </label>
            <label>
            <input type="checkbox" v-model="newRoom.equipment.bathtub" />
              浴缸
            </label>
            <label>
            <input type="checkbox" v-model="newRoom.equipment.breakfast" />
              早餐
            </label>
          </fieldset>
          <button type="submit">新增房間</button>
        </form>
    </div>
</template>
<script>
export default {
  props: {
    hotalDiscount: Number,
  },
  data(){
    return{
      newRoom:{
        name:'',
        eng:'',
        price:0,
        discount:'',
        image:'',
        equipment:{
          wifi:false,
          bathtub:false,
          breakfast:false,
        },
      },
    }
  },
  computed: {
    discount: {
      get() {
        return this.hotalDiscount;
      },
      set(value) {
        this.$emit('update:hotalDiscount', value);  // 觸發雙向綁定
      },
    },
  },
  methods:{
       createRoom() {
      const newRoomData = {
        ...this.newRoom,
        id: Date.now(),  // 使用當前時間作為唯一 ID
        image: `images/${this.newRoom.image}`,  // 自動補上 public/images 路徑
      };
      this.$emit('add-room', newRoomData);  // 發送新增房間事件
      this.resetForm();
    },
    resetForm() {
      this.newRoom = {
        name: '',
        eng: '',
        price: 0,
        discount: 1,
        image: '',
        equipment: {
          wifi: false,
          bathtub: false,
          breakfast: false,
        },
      };
    },
  }
};
</script>
<style scoped>

</style>
