<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="item">
    <div>
      <h3 :class="this.loading ? 'loading title' : ''">{{ loading ? '' : title }}</h3>
      <p :class="this.loading ? 'loading description' : ''">{{ loading ? '' : description }}</p>
    </div>
    <span :class="this.loading ? 'loading link' : ''">
      <ArrowRight v-if="!this.loading" />
    </span>
  </a>
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
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
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
  border-radius: 5px;
  padding: 30px;
  border: solid 2px #111;
  -webkit-transition: border-color 0.15s ease;
  -moz-transition: border-color 0.15s ease;
  transition: border-color 0.15s ease;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

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

  > span {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 1.5em;
    color: #7159c1;
  }

  &:hover {
    border-color: #7159c1;
  }

  & .loading {
    width: 100%;
    height: 38px;
    background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.4) 0px,
      rgba(0, 0, 0, 0.5) 150px,
      rgba(0, 0, 0, 0.4) 300px
    );
    background-size: 600px;
    animation: loading 1.5s infinite ease-out;
  }

  & .title {
    width: 60%;
  }

  & .description {
    margin: 20px 0 10px 0;
  }

  & .link {
    margin-left: calc(100% - 24px);
    width: 24px;
    height: 24px;
  }
}

@keyframes loading {
  0% {
    background-position: -300px;
  }

  50% {
    background-position: 300px;
  }

  100% {
    background-position: 600px;
  }
}
</style>
