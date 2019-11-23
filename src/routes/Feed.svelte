<script>
  import axios from 'axios';

  import Article from '../components/Article.svelte';

  // export let country;
  // export let category;

  let articles = [];

  async function getArticles() {
    axios({
      url: `https://newsapi.org/v2/top-headlines?country=pl&apiKey=b67650059a884ec3ae9fae3360e8281e`
    }).then(res => {
      articles = res.data.articles;
    });
  }

  getArticles();

  // TODO top / everything słycz
</script>

<style>

</style>

<main>
  {#each articles as article}
    <Article data={article} />
  {/each}
</main>
