<template>
  <div class="home">
    <nav>
      <router-link to="/about">About</router-link>
    </nav>
    <main>
      <h3>Vue Template</h3>
      <a href="https://github.com/melquisedecfelipe/vue-template">github.com/melquisedecfelipe</a>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > nav {
    display: flex;
    justify-content: flex-end;
    padding: 30px 100px;

    > a {
      font-size: 1em;
      font-weight: 300;
      letter-spacing: 0.2em;
      color: #04d361;
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
    align-items: center;
    height: 100%;

    > h3 {
      font-size: 4em;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: normal;
      text-transform: none;
      text-shadow: none;
      word-wrap: break-word;
    }

    > a {
      font-size: 2em;
      line-height: 1.2em;
      color: #7159c1;
      text-decoration: none;
      -webkit-transition: color 0.15s ease;
      -moz-transition: color 0.15s ease;
      transition: color 0.15s ease;
      margin: 30px 0 0 0;
      word-wrap: break-word;

      &:hover {
        color: #a191d6;
        text-shadow: none;
        border: none;
      }
    }
  }
}

@media screen and (min-width: 1920px) {
  .home {
    > nav {
      padding: 30px 300px;
    }
  }
}

@media screen and (max-width: 1100px) {
  .home {
    > nav {
      padding: 30px 100px;
    }
  }
}

@media screen and (max-width: 720px) {
  .home {
    > nav {
      padding: 30px;
    }

    > main {
      padding: 30px;

      > a {
        display: none;
      }
    }
  }
}
</style>
