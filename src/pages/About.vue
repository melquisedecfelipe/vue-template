<template>
  <div class="about">
    <nav>
      <router-link to="/" exact>Home</router-link>
    </nav>
    <main>
      <h3>About</h3>
      <p>My bootstrap template to use in vue</p>
      <div>
        <Item
          v-for="item in items"
          :key="item.title"
          :title="item.title"
          :description="item.description"
          :link="item.link"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Item from '../components/Item.vue';

import api from '../services/api';

export default {
  name: 'About',
  components: {
    Item,
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
    };
  },
  created() {
    const app = this;
    async function getItems() {
      const { data } = await api.get('5e133f493100005a8ad476cc');

      app.items = data;
    }

    getItems();
  },
};
</script>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > nav {
    display: flex;
    justify-content: flex-end;
    padding: 30px 100px;

    > a {
      font-size: 1em;
      color: #04d361;
      font-weight: 300;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      text-decoration: none;
      -webkit-transition: color 0.15s ease;
      -moz-transition: color 0.15s ease;
      transition: color 0.15s ease;

      &:hover {
        color: #0ff577;
        text-shadow: none;
        border: none;
      }
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 0 100px;

    > h3 {
      font-size: 4em;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: normal;
      text-transform: none;
      text-shadow: none;
      word-wrap: break-word;
    }

    > div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 35px;
      margin: 50px 0 0 0;
      padding: 0 0 50px 0;
    }
  }
}

@media screen and (min-width: 1920px) {
  .about {
    > nav {
      padding: 30px 300px;
    }

    > main {
      padding: 0 300px;
    }
  }
}

@media screen and (max-width: 1100px) {
  .about {
    > nav {
      padding: 30px 100px;
    }

    > main {
      padding: 0 100px;

      > div {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .about {
    > nav {
      padding: 30px;
    }

    > main {
      padding: 30px;

      > div {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
