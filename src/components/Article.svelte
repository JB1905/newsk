<script>
  export let data;

  const {
    title,
    description,
    content,
    author,
    url,
    urlToImage,
    publishedAt,
    source
  } = data;
</script>

<style>
  img {
    width: 100%;
  }

  .meta {
    display: flex;
  }

  a {
    text-decoration: none;
    color: #000;
  }
</style>

<a href={url}>
  <main>
    <img src={urlToImage} alt={title} />

    <h3>{title}</h3>
    <h4>{description}</h4>

    <div class="meta">
      {#if !!author}
        <p>{author}</p>
      {/if}

      <p>{publishedAt}</p>
    </div>

    <p>{content}</p>
    Source: {source.name}
    <!-- {#if !!source.id}{/if} -->
  </main>
</a>
