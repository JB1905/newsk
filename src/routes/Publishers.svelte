<script>
  import Article from '../components/Article.svelte';

  export let params;

  let articles = [];

  // console.log(params);

  // const apiKey = 'b67650059a884ec3ae9fae3360e8281e';

  // const type = 'top-headlines';

  // const country = 'pl';

  // async function getArticles() {
  //   axios({
  //     url: `https://newsapi.org/v2/${type}?country=${country}&apiKey=${apiKey}`
  //   }).then(res => {
  //     articles = res.data.articles;
  //   });
  // }

  // getArticles();
</script>
