<template>
  <button class="btn" :class="type">
    <div class="plus">
      <div class="union"></div>
    </div><slot/>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'full',
  },
});
</script>

<style lang="scss" scoped>
  .btn{
    display: flex;
    max-height: 44px;
    padding: 10px 20px 10px 20px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    align-items: center;
    text-align: center;

    box-sizing: border-box;
    border-radius: 100px;
    cursor: pointer;
  }
  .empty{
    color: #01A7FD;
    background-color: #FFFFFF;
    border: 2px solid #01A7FD;
    .plus{
      margin-right: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      position: relative;
      .union {
        background-color: #01A7FD;
        height: 24px;
        width: 2.3px;
        border-radius: 138.148px;
      }
      .union:after {
        content: "";
        position: absolute;
        height: 2.3px;
        width: 24px;
        left: 0px;
        top: 11px;
        background: #01A7FD;
        border-radius: 138.148px;
      }
    }
  }
  .full{
    background-color: #01A7FD;
    color: #FFFFFF;
    &:active{
      background-color: #7acef8;
    }
  }
</style>
