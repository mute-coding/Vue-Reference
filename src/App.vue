<template>
  <div id="pageContainer">
    <!-- 確保名稱與組件名稱一致 -->
    <!-- <RoomBooking /> -->
    <div class="ItemControllerBlock" >
        <div class="ItemControllerTitle" >
          <p>飯店資料</p>
        </div>
        <div class="ItemController" >
          <ItemController />
        </div>

    </div>
    <div class="ItemCardBlock" >
      <div class="ItemCardTitle" >
          <p>房間列表</p>
      </div>
      
        <ItemCard />
       
    </div>
  </div>
</template>

<script>
// import RoomBooking from './components/RoomBooking.vue';
import ItemCard from './components/ItemCard';
import ItemController from './components/ItemController'; // 確保大小寫一致

export default {
  name: 'App',
  components: {
    // RoomBooking,
    ItemCard,
    ItemController, // 確保已在 components 中註冊
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

#pageContainer {
  display: flex;
  flex-direction: row;
  gap: 10px; /* 設置區塊之間的間距 */
  height: 100vh; /* 設置容器高度填滿整個窗口 */
}

.ItemCardBlock{
   /* flex: 8; 
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0%;  */
    flex: 8; /* 彈性分佈寬度 */
  display: flex;
  flex-direction: column; /* 改為垂直排列，方便標題與內容分離 */
  justify-content: flex-start; /* 保證內容從上往下排列 */
  align-items: center; /* 僅水平居中 */
  position: relative; /* 作為子元素絕對定位的參考 */
  padding-top: 80px; /* 適當增加內邊距，避免內容緊貼頂部 */
  height: calc(100vh - 40px); /* 設置適合的高度，避免超出視窗 */
}
.ItemCardTitle{
  position: absolute;
  bottom:  90%;
  right: 2%;
  width: 75vw;
  height: 60px;
  border-bottom: 1px solid gray;

}
.ItemCardTitle p{
  font-size: 24px;
}

.ItemControllerBlock {
  flex: 2; /* 彈性分佈寬度 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.ItemControllerTitle{
  position: absolute;
  bottom:  90%;
  right: 80%;
  width: 15vw;
  height:  60px;
  border-bottom: 1px solid gray;
}
.ItemControllerTitle p{
  font-size: 24px;
}



</style>
