module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        dblue:'#191826',
        white:'#FCFAF9',
        skyblue:'#66E2DC',
        kesar:'#FFB964',
        orange:'#FA7453'

      },
      backgroundImage:{
        'bgImage':"url('assets/bg-main-desktop.png')",
        'bgImage1':"url('assets/bg-main-tablet.png')",
        'bgImage2':"url('assets/bg-main-mobile.png')",
      }
    },
  },
  plugins: [],
}
