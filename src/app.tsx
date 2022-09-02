import styled from 'styled-components'
import { Sidebar } from 'pages/sidebar'
import { Content } from 'pages/content'

function App () {
  return (
    <Main>
      <Sidebar />
      <Content />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  height: 1024px;
`

export { App }
