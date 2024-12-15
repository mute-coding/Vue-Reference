<template lang="pug">
    #app
    //v-model
    label 輸入房間價格
    input(v-model="roomdata.price")
    h1 房間的資訊
    h2 房型 {{roomdata.name}}
    h2 價格 {{roomdata.price}}
    h2 折扣後的價格 {{final_Price}}
    h1 房間列表
        ul 
            li(v-for="room in rooms")|{{ room.name }}
            
</template>
<script>
export default {
    name:'allRoomData',
    data(){
        return{
            rooms:[
                {name:"room01"},
                {name:"room02"},
                {name:"room03"}
            ],
            roomdata:{
                name: "經濟雙人房",
                eng: "Economy Double Room",
                price: 7000,
                amount: 0,
                cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(1).jpg",
                discount: 0.9,
                equipment: {
                wifi: false,
                bathtub: true,
                breakfast: true,
                }
            }
            
                
            
        }
    },
    //final_Price是一個獨立的屬性，與"roomdata"同個類
    computed:{
        final_Price:function(){
            return this.roomdata.price*this.roomdata.discount;
        }
    }

}
</script>
<style scoped>

</style>