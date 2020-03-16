<template>
  <div id="app">
    <h1>Hasura + Garden + K8S = 💖</h1>
    <br />
    <h2>New Todos</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: []
    }
  },
  async created() {
    const query = `
      query {
        todo {
          id
          text
        }
      }
    `
    const url = 'http://hasura/v1/graphql'
    const opts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    }

    const request = await fetch(url, opts)
    const result = await request.json()
    this.todos = result.data.todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
