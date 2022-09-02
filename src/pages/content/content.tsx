import styled from 'styled-components'
import { theme } from 'resources/themes'

export function Content () {
  return (
    <Main>
      <div className="title">
        <img src='/file-text-load.png' alt='File' />
        <p>File Name</p>
      </div>

      <div className="editor">
        <div className="input">
          <p>## Bootcamp Brainn Co.</p>
          <p>Lorem ipsum dolor sit amet simet</p>
        </div>
        <span />
        <div className="output">
          <p>Bootcamp Brainn Co.</p>
          <p>Lorem ipsum dolor sit amet simet</p>
        </div>
      </div>
    </Main>
  )
}

const Main = styled.main`
  flex-grow: 1;
  color: ${theme.colors.black};
  font-weight: 500;
  font-size: 18px;

  p {
    margin: 0;
  }

  .title {
    display: flex;
    margin: 24px 0 0 24px;
    line-height: 23px;

    img {
      margin-right: 12px;
    }
  }

  .editor {
    display: flex;
    margin: 41px 0 0 30px;

    .input {
      width: 50%;
      line-height: 18.88px;
      font-family: Inconsolata;
    }

    span {
      width: 0px;
      height: 878px;
      border: 1px solid rgba(30, 41, 59, 0.12);
    }

    .output {
      width: 50%;
      margin-left: 32px
    }
  }


`
