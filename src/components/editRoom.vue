<!-- components:editRoom.vue -->
<template>
    <div class="formContainer" >
        <label class="labelStyle" >全館折扣:</label>
         <input class="hotalDiscount " type="number" v-model.number="discount"/>
        <h3>新增房間</h3>
        <form @submit.prevent="createRoom">
          <div>
            <label class="labelStyle">房間名稱:</label>
            <input type="text"  v-model="newRoom.name" required >
          </div>
          <div>
            <label class="labelStyle">英文名稱:</label>
            <input type="text"  v-model="newRoom.eng" required >
          </div>
          <div>
            <label class="labelStyle">房間價格:</label>
            <input type="number"  v-model.number="newRoom.price" required >
          </div>
          <div>
            <label class="labelStyle">圖片路徑:</label>
            <input type="text"  v-model="newRoom.image" required >
          </div>
          <fieldset>
            <legend>設備:</legend>
            <label class="checkboxBlock">
            <input type="checkbox" v-model="newRoom.equipment.wifi" />
              WiFi
            </label>
            <label class="checkboxBlock">
            <input type="checkbox" v-model="newRoom.equipment.bathtub" />
              浴缸
            </label>
            <label class="checkboxBlock">
            <input type="checkbox" v-model="newRoom.equipment.breakfast" />
              早餐
            </label>
          </fieldset>
          <button type="submit" class="btn btn-primary">新增房間</button>
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
.formContainer{
  margin-top: 0.5vh ;
   padding-left: 1vw; 
   background-color:#dddddd;
}
.labelStyle{
  font-weight: bold;
  display: block;
  font-size: 1vw;
}
.formContainer input[type=text],
 .formContainer input[type=number]{
    width: 80%;
  padding: 6px 10px;
  margin: 8px 0;
  box-sizing: border-box;
}
/* .formContainer input[type=checkbox] {
  appearance: none; 
  width: 16px;
  height: 16px;
  border: 1px solid gray;
  background-color: #fff; 
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
} */
.formContainer .checkboxBlock{
  margin:0 0.5vw;

}
.formContainer .btn{
  margin:2vh 0;
}
</style>
