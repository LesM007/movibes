import { css, Global } from "@emotion/react";
/** @jsxImportSource @emotion/react */


const GlobalStyles = () => {
    return ( 
        <Global styles={css`
      
        @import url('https://fonts.googleapis.com/css2?family=Oswald&family=Poppins:wght@500;600&display=swap');
          body{
            background-color: #191919;
            font-family: -apple-system, BlinkMacSystemFont,'Poppins', sans-serif;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
         .flexCenter{
          display: flex;
          justify-content: center;
          align-items: center;
          }
          .fontOswald{
           font-family: 'Oswald', sans-serif;
          }
          .posiRelativ{
            position: relative;
          }
          `
        }
  />
     );
}
 
export default GlobalStyles;