module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      'dark-mode': { raw: '(prefers-color-scheme: dark)' },
    },
    fontFamily: {
      title: ['Headland One', 'serif'],
      body: ['Fira Sans', 'sans-serif'],
    },
    // borderWidth: {
    //   default: '1px',
    //   '0': '0',
    //   '2': '2px',
    //   '4': '4px',
    // },
    extend: {
      colors: {
        primary: '',
        secondary: '',
        background: '',
        // text: '#000',
        // card: '#fff',
      },
      // spacing: {
      //   '96': '24rem',
      //   '128': '32rem',
      // },
    },
  },
};
