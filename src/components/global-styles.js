import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`

  @font-face {
    font-family: "Brandon Grotesque Bold";
    src: url("/fonts/BrandonGrotesque-Bold.woff2") format("woff2"),
    url("/fonts/BrandonGrotesque-Bold.woff") format("woff");
  }

  @font-face {
    font-family: "Brandon Grotesque Medium";
    src: url("/fonts/BrandonGrotesque-Medium.woff2") format("woff2"),
    url("/fonts/BrandonGrotesque-Medium.woff") format("woff");
  }

  @font-face {
    font-family: "Brandon Grotesque Regular";
    src: url("/fonts/BrandonGrotesque-Regular.woff2") format("woff2"),
    url("/fonts/BrandonGrotesque-Regular.woff") format("woff");
  }

  @font-face {
    font-family: "Cervo Neue";
    src: url("/fonts/CervoNeue-BoldNeue.woff2") format("woff2"),
        url("/fonts/CervoNeue-BoldNeue.woff") format("woff");
  }

  `

export default globalStyles