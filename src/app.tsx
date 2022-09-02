import styled, { css } from 'styled-components/macro'
import { Sidebar } from 'pages/sidebar'
import { Content } from 'pages/content'

function App () {
  return (
    <main className='main'>
      <Sidebar />
      <Content />
    </main>
  )
}

export { App }
