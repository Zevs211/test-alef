<template>
  <button class="btn" :class="buttonClass">
    <div class="plus">
      <div class="union"></div>
    </div>
    <slot/>
  </button>
</template>

<script setup>
import { defineProps, computed, toRefs } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'filled',
  },
});
const { type } = toRefs(props);

const buttonClass = computed(() => `btn--${type.value}`);
</script>

<style lang="scss" scoped>

.btn {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 10px 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  border-radius: 100px;
  cursor: pointer;
  border: 2px solid #FFFFFF;
  background-color: transparent;
  & :first-child {
    display: flex;
    align-items: center;
    & .icon:hover{
      fill: #7acef8;
    }
  }
  &--filled {
    background-color: #01A7FD;
    border-color: #01A7FD;
    color: #FFFFFF;
    &:hover {
      background-color: #7acef8;
      border-color: #7acef8;
    }
  }
  &--outlined {
    color: #01A7FD;
    border-color: #01A7FD;
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
}
  // .btn{
  //   display: flex;
  //   max-height: 44px;
  //   padding: 10px 20px 10px 20px;

  //   font-style: normal;
  //   font-weight: normal;
  //   font-size: 14px;
  //   line-height: 24px;
  //   align-items: center;
  //   text-align: center;

  //   box-sizing: border-box;
  //   border-radius: 100px;
  //   cursor: pointer;
  // }
  // .empty{
  //   color: #01A7FD;
  //   background-color: #FFFFFF;
  //   border: 2px solid #01A7FD;
  //   .plus{
  //     margin-right: 8px;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     width: 24px;
  //     height: 24px;
  //     position: relative;
  //     .union {
  //       background-color: #01A7FD;
  //       height: 24px;
  //       width: 2.3px;
  //       border-radius: 138.148px;
  //     }
  //     .union:after {
  //       content: "";
  //       position: absolute;
  //       height: 2.3px;
  //       width: 24px;
  //       left: 0px;
  //       top: 11px;
  //       background: #01A7FD;
  //       border-radius: 138.148px;
  //     }
  //   }
  // }
  // .full{
  //   background-color: #01A7FD;
  //   color: #FFFFFF;
  //   &:active{
  //     background-color: #7acef8;
  //   }
  // }
</style>
