# newsK

## About

Svelte news browser

##### Main Features

- search articles by category, language, country & more
- display articles from different sources
- display favorite sources on home page
- add to home screen (PWA support)

[Open newsK](https://newsk.netlify.app/)

## Setup

##### 1. Clone repo

```sh
$ git clone https://github.com/JB1905/newsk.git
```

##### 2. Go to directory

```sh
$ cd /path/to/newsk
```

### Development

##### 3. Install dependencies

```sh
$ npm i

# Or use yarn
$ yarn
```

##### 4. Set environment variables

- Edit `.env.example` file
- Rename `.env.example` to `.env`

##### 5. Run

- Project:

```sh
$ npm run dev

# Or use yarn
$ yarn dev
```

- Tailwind CSS:

```sh
$ npm run watch:tailwind

# Or use yarn
$ yarn watch:tailwind
```

### Production

##### 3. Build image

```sh
docker build -t newsk .
```

##### 4. Run a container with port forwarding

```sh
docker run --rm --env PORT=80 -p 3000:80 newsk
```

## Build with

- [Svelte](https://svelte.dev/)
- [Sapper](https://sapper.svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cypress](https://www.cypress.io/)
- [Netlify](https://www.netlify.com/)
- [Docker](https://www.docker.com/)
- [News API](https://newsapi.org/)

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
