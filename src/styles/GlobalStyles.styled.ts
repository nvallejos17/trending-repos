import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle(
  ({ theme }: any) => css`
    * {
      margin: 0;
      padding: 0;
    }

    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      font-family: 'Nunito', sans-serif;
      color: ${theme.colors.fontDefault};
      background: ${theme.colors.bgDefault};
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  `
)

export default GlobalStyles
