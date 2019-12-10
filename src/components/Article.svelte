<script>
  import { Link } from 'svelte-routing';
  import stripHtml from 'string-strip-html';

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

  const date = new Date(publishedAt);
</script>

<style>
  main {
    border-radius: 2px;
    overflow: hidden;
    background-color: #fff;
    margin-bottom: 20px;
    border: 1px solid #eee;
  }

  main > div {
    padding: 8px 16px 16px;
  }

  .footer {
    border-top: 1px solid #eee;
    padding-top: 16px !important;
  }

  h3,
  h4 {
    margin: 8px 0;
  }

  figure {
    width: 100%;
    height: 0;
    padding-top: calc(100% / 16 * 9);
    overflow: hidden;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
  }

  .meta {
    display: flex;
    margin: 8px 0;
  }

  .meta p {
    margin-left: 10px;
  }

  a {
    text-decoration: none;
    color: #000;
  }
</style>

<main>
  {#if !!urlToImage}
    <a href={url}>
      <figure>
        <img src={urlToImage} alt={title} />
      </figure>
    </a>
  {/if}

  <div>
    <a href={url}>
      <h3>{title}</h3>

      {#if !!description}
        <h4>{description}</h4>
      {/if}
    </a>

    <div class="meta">
      <time>{date.getFullYear()}.{date.getMonth()}.{date.getDate()}</time>

      {#if !!author}
        <p>{author}</p>
      {/if}
    </div>

    {#if !!content}
      <p>{stripHtml(content)}</p>
    {/if}
  </div>

  <div class="footer">
    <Link to="publishers/{source.name}">{source.name}</Link>
  </div>
</main>
