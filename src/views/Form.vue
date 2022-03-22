<template>
  <div class="container">
    <div class="personal-info">
      <div class="header-info-text">Персональные данные</div>
      <VInput label="Имя" v-model="profile.name" />
      <VInput type="number" label="Возраст" class="mt-field" v-model="profile.age" />
    </div>
    <VErrors v-if="profileErrors.length > 0" :errors="profileErrors" />
    <div class="children">
      <div class="header-child-text">
        <div>Дети (макс. 5)</div>
        <VButton v-if="canAddMoreChildren" type="outlined" @click="addChild">
          Добавить ребенка
        </VButton>
      </div>
      <div v-for="(child, index) in profile.children" :key="index">
        <div class="child-row" :class="{ 'mt-field' : index > 0 }">
          <VInput
            label="Имя"
            v-model="child.name"
          />
          <VInput
            type="number"
            label="Возраст"
            v-model="child.age"
            class="ml-field"
          />
          <div class="remove-button ml-field" @click="removeChild(index)">Удалить</div>
        </div>
        <div v-if="childErorrsExist(index)">
          <VErrors :errors="childrenErrors[index]" />
        </div>
      </div>
    </div>
    <div class="btn-save mt-field">
      <VButton @click="saveProfile">Сохранить</VButton>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import VInput from '../components/VInput.vue';
import VButton from '../components/VButton.vue';
import {
  profileTemplate,
  personTemplate,
  getCachedProfile,
  validateProfile,
  deepClone,
} from '../utils';
import VErrors from '../components/VErrors.vue';

const router = useRouter();

const profile = ref(deepClone(profileTemplate()));
const profileErrors = ref([]);
const childrenErrors = ref([]);

const canAddMoreChildren = computed(() => profile.value?.children?.length < 5);

onMounted(() => {
  profile.value = getCachedProfile();
});

const addChild = () => {
  const newChild = deepClone(personTemplate());
  profile.value.children.push(newChild);
};
const saveProfile = () => {
  const toBeSavedProfile = deepClone(profile.value);
  profileErrors.value = validateProfile(toBeSavedProfile);
  if (toBeSavedProfile?.children) {
    childrenErrors.value = toBeSavedProfile.children.map((child) => validateProfile(child));
  }
  const childrenErrorsLength = childrenErrors.value?.flat().length;
  if (profileErrors.value.length > 0 || childrenErrorsLength > 0) {
    alert('Не сохранено');
    return;
  }
  const profileString = JSON.stringify(toBeSavedProfile);
  localStorage.setItem('profile', profileString);
  router.push({ name: 'preview-page' });
  alert('Cохранено');
};
const removeChild = (index) => {
  profile.value?.children.splice(index, 1);
};
const childErorrsExist = (index) => {
  const childErrors = childrenErrors.value[index];
  return childErrors && childErrors?.length > 0;
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .personal-info {
    position: relative;
    display: flex;
    flex-direction: column;

    margin-top: 106px;
    width: 50%;
    height: 166px;
    .header-info-text {
      margin-bottom: 20px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      display: flex;
      align-items: center;

      color: #111111;
    }
  }
  .children {
    display: flex;
    flex-direction: column;
    margin-top: 44px;
    width: 50%;
    height: auto;
    .header-child-text {
      margin-bottom: 20px;
      position: relative;
      display: flex;
      justify-content: space-between;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      color: #111111;
      .btn {
        position: absolute;
        top: -11px;
        right: 0px;
      }
    }
  }
  .btn-save {
    width: 50%;
  }
}
.child-row {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.remove-button {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  display: flex;
  align-items: center;

  color: #01A7FD;
  cursor: pointer;
  &:hover{
    color: #7acef8;
  }
}
</style>
