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
          title="Axios"
          description="Promise based HTTP client for the browser and node.js"
          link="https://github.com/axios/axios"
        />
        <Item
          title="Commitlint"
          description="Lint commit messages"
          link="https://github.com/conventional-changelog/commitlint"
        />
        <Item
          title="Commitizen"
          description="The commitizen command line utility"
          link="https://github.com/commitizen/cz-cli"
        />
        <Item
          title="Eslint"
          description="Find and fix problems in your JavaScript code"
          link="https://eslint.org/"
        />
        <Item
          title="Eslint import helpers"
          description="ESLint plugin to help enforce a configurable order for import statements"
          link="https://github.com/Tibfib/eslint-plugin-import-helpers"
        />
        <Item
          title="Husky"
          description="Git hooks made easy"
          link="https://github.com/typicode/husky"
        />
        <Item
          title="Material design"
          description="Material design icons for vue.js"
          link="https://github.com/therufa/mdi-vue"
        />
        <Item
          title="Vue.js"
          description="The Progressive JavaScript Framework"
          link="https://vuejs.org/"
        />
        <Item
          title="Vue Router"
          description="The official router for Vue.js"
          link="https://router.vuejs.org/"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Item from '../components/Item.vue';

export default {
  name: 'about',
  components: {
    Item,
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
