<template>
  <div class="item">
    <div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <a :href="link">
      <ArrowRight />
    </a>
  </div>
</template>

<script>
import ArrowRight from 'mdi-vue/ArrowRight.vue';

export default {
  name: 'Item',
  props: {
    title: String,
    description: String,
    link: String,
  },
  components: {
    ArrowRight,
  },
};
</script>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: #121212;
  box-shadow: 0px 10px 20px #00000014;
  border-radius: 5px;
  padding: 30px;
  border: solid 2px #111;
  -webkit-transition: border-color 0.15s ease;
  -moz-transition: border-color 0.15s ease;
  transition: border-color 0.15s ease;

  > div {
    height: 100%;

    > h3 {
      margin: 0 0 20px 0;
      font-size: 2em;
      font-weight: 300;
    }

    > p {
      font-size: 1em;
      margin: 0 0 10px 0;
      opacity: 0.5;
    }
  }

  > a {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 1.5em;
    color: #7159c1;
    text-decoration: none;
    -webkit-transition: color 0.15s ease;
    -moz-transition: color 0.15s ease;
    transition: color 0.15s ease;

    &:hover {
      color: #a191d6;
      text-shadow: none;
      border: none;
    }
  }

  &:hover {
    border-color: #7159c1;
  }
}
</style>
