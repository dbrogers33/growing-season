import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`

  @font-face {
    font-family: "Brandon Grotesque";
    src: url("../../static/BrandonGrotesque-Bold.woff2") format("woff2"),
    url("../../static/BrandonGrotesque-Bold.woff") format("woff");
  }

  @font-face {
    font-family: "Cervo Neue";
    src: url("/fonts/CervoNeue-BoldNeue.woff2") format("woff2"),
        url("/fonts/CervoNeue-BoldNeue.woff") format("woff");
  }

  `

export default globalStyles