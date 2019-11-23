<script>
  import { Router, Route, Link } from 'svelte-routing';

  import Home from './routes/Home.svelte';
  import Feed from './routes/Feed.svelte';
  import Publishers from './routes/Publishers.svelte';

  import Background from './components/Background.svelte';

  export let url = '';
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .header {
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    position: sticky;
    top: 0;
  }

  .header__inner {
    padding: 1.5em;
    max-width: 760px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  main,
  footer {
    padding: 1.5em;
    max-width: 760px;
    margin: 0 auto;
  }

  main {
    flex: 1;
  }
</style>

<Router {url}>
  <div class="container">
    <header class="header">
      <div class="header__inner">
        <Link to="/">
          <h1>newsK</h1>
        </Link>

        <nav>
          <Link to="/about">About Project</Link>
        </nav>
      </div>
    </header>

    <main>
      <Route path="/" component={Home} />
      <Route path="news/:country" component={Feed} />
      <Route path="publishers" component={Publishers} />
      <Route path="publishers/:id" component={Publishers} />
    </main>

    <footer>
      <a href="https://newsapi.org/">Powered by News API</a>
    </footer>
  </div>

  <Background />
</Router>
