import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from 'root'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)
root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
