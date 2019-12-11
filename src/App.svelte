<script>
  import { Router, Route, Link } from 'svelte-routing';

  import Home from './routes/Home.svelte';
  import NewsFeed from './routes/NewsFeed.svelte';
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
    margin-top: 16px;
  }

  .header__inner {
    padding: 1.5em;
    max-width: 760px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  .header h1 {
    font-weight: 700;
    font-size: 34px;
    color: #000;
  }

  main,
  footer {
    padding: 1.5em;
    max-width: 760px;
    margin: 0 auto;
    width: 100%;
  }

  footer {
    text-align: center;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<Router {url}>
  <div class="container">
    <header class="header">
      <div class="header__inner">
        <Link to="/">
          <h1>newsK</h1>
        </Link>
      </div>
    </header>

    <main>
      <Route path="/" component={Home} />
      <Route path=":type" component={NewsFeed} />
      <Route path="publishers" component={Publishers} />
    </main>

    <footer>
      <a href="https://newsapi.org/">Powered by News API</a>
    </footer>
  </div>

  <Background />
</Router>
