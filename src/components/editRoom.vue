<!-- components:editRoom.vue -->
<template>
    <div>
        <label>全館折扣:</label>
         <input
            class="hotalDiscount"
            type="number"
            v-model.number="discount"
        />
    </div>
</template>
<script>
export default {
  props: {
    hotalDiscount: Number,
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
};
</script>
<style scoped>

</style>
