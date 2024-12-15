<!--components - ItemCard.vue -->
<template>
    <!-- index為索引值 key為鍵值(這裡用id) -->
    <div class="ItemCard" >
        <div class="Card_Container" v-for="room in roomdata" :key="room.id">
            
            <div class="Card_Image">
                <img :src="room.image" :alt="room.eng">
            </div>
            <div class="Card_Name" >
                <p>{{room.name}}</p>
            </div>
            <div class="Card_Msg" >
                <div class="Card_RoomMsg">
                    <p>{{room.eng}}</p>
                    
                </div>
                <div class="Card_DiscountMsg" >
                    <p>0.9*0.9=81折</p>
                </div>
            </div>
            <div class="Card_Price" >
                <h2>TWD 7000</h2>
                <h2 class="finalPrice">5870</h2>
            </div>

        </div>
    </div>   
</template>
<script>
export default {
    name: 'allRoomData',
    data() {
        return {
            roomdata: [
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
                    name: "典雅景觀房",
                    eng: "Elegant Landscape Room",
                    price: 5400,
                    amount: 0,
                    image: require('@/assets/room3.jpg'),
                    discount: 0.85,
                    equipment: {
                        wifi: false,
                        bathtub: true,
                        breakfast: true,
                    },
                },
                {
                    id: 3,
                    name: "尊享豪華房",
                    eng: "Exclusive Deluxe Room",
                    price: 9800,
                    amount: 0,
                    image: require('@/assets/room4.jpg'),
                    discount: 0.8,
                    equipment: {
                        wifi: true,
                        bathtub: false,
                        breakfast: true,
                    },
                },
            ],
        };
    },
};

</script>
<style scoped>
    .ItemCard{
        display: flex;
        flex-direction: row; 
        flex-wrap: wrap; 
        justify-content:flex-start; 
        align-items: center; 
        gap: 20px;
        margin:20px 0 0 50px;


    }
   .ItemCard .Card_Container {
        /* width: calc(33.333% - 30px);  */
        width: 450px; 
        box-sizing: border-box; /* 確保內邊距不影響寬度 */
        text-align: left;
        /* border: 1px solid; */
         border-radius: 15px; 
        box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
        /* padding: 10px; */

    }
.Card_Image {
    width: 100%; /* 寬度與父容器一致 */
    height: 200px; /* 固定高度 */
    overflow: hidden; /* 防止圖片溢出容器 */
    border-radius: 15px 15px 0 0; /* 保持圖片圓角 */
}

.Card_Image img {
    width: 100%; /* 圖片寬度與父容器一致 */
    height: 100%; /* 圖片高度與父容器一致 */
    object-fit: cover; /* 裁切圖片，避免變形 */
    display: block; /* 避免圖片因 inline 特性導致意外間距 */
}
    .Card_Msg{
        font-size: 12px;
    }
    .Card_Msg p{
        margin: 0 8px;
    }
    .Card_Price{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 18px;
        
    }
     .Card_Price h2{
        margin: 0 8px;
    } 
    .Card_Price .finalPrice{
        color: red;
    }
</style>