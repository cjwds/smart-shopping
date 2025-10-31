<template>
  <div class="count-box">
    <button class="sub" @click="handleSub">-</button>
    <input :value="value" @change="handleChange" type="text" class="inp">
    <button class="add" @click="handleAdd">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleSub () {
      if (this.value <= 1) {
        return
      }
      this.$emit('input', this.value - 1)
    },
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
    handleChange (e) {
      // console.log(e.target.value)
      const num = +e.target.value
      if (isNaN(num) || num < 0) {
        e.target.value = this.value
        return
      }
      this.$emit('input', num)
    }
  }
}
</script>

<style lang="less" scoped>
.count-box {
  width: 110px;
  display: flex;
  .inp {
    width: 40px;
    margin: 0 5px;
    border: none;
    outline: none;
    text-align: center;
    background-color: #efefef;
  }
  .sub, .add {
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    background-color: #efefef;
  }
}
</style>>
