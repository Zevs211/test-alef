<template>
  <div class="container">
    <div class="personal-info">
      <div class="header-info-text">Персональные данные</div>
      <div class="info">
        <div class="f-name">{{ profile.name }} , {{ profile.age }}</div>
      </div>
    </div>
    <div class="children">
      <div class="header-child-text">
        <div>Дети</div>
      </div>
      <div class="card" v-for="(child, index) in profile.children" :key="index">
        <div class="item">{{ child.name }}, {{ child.age }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getCachedProfile } from '../utils';

const profile = ref([]);

onMounted(() => {
  profile.value = getCachedProfile();
});
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .personal-info{
    position: relative;
    display: flex;
    flex-direction: column;

    margin-top: 106px;
    width: 50%;
    .header-info-text{
      margin-bottom: 20px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      display: flex;
      align-items: center;

      color: #111111;
    }
    .info{
      display: flex;
      .f-name{
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;

        color: #000000;
      }
    }
  }
  .children{
    display: flex;
    flex-direction: column;
    margin-top: 44px;
    width: 50%;
    .header-child-text{
      margin-bottom: 20px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      color: #111111;
    }
    .card{
      display: flex;
      margin-bottom: 20px;

      .item{
        padding: 10px 20px;
        background-color: #F1F1F1;
      }
    }
  }
}
</style>
