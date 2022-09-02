import { theme } from 'resources/themes'
import styled from 'styled-components'
import { Buttons } from 'pages/components/Buttons'

function Sidebar () {
  return (
    <Aside>
      <div className='logo'>
        <img src='/logo192.png' alt='Logo da Página' />
        <p>markee<span>.</span></p>
      </div>

      <div className='line'>
        <div />
        <span>Arquivos</span>
      </div>

      <div className='button-add'>
        <Buttons> + Adicionar arquivo </Buttons>
      </div>

      <div className='files'>
        <div className='file-item'>
          <div className='file'>
            <img src='/file-text.png' alt='File' />
            <p>README.md</p>
          </div>
          <img src='/Vector.png' alt='Close' />
        </div>
      </div>
    </Aside>
  )
}

const Aside = styled.aside`
  position: absolute;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  height: 1024px;
  width: 332px;
  font-size: 16px;

  p {
    margin: 0
  }

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 44px;
    width: 164px;
    margin: 45px auto 0;
    font-weight: 700;
    font-size: 33.8401px;
    line-height: 44px;

    img {
      width: 35.89px;
      height: 40.29px;
    }

    span {
      color: ${theme.colors.primary}
    }
  }

  .line {
    position: relative;
    height: 21px;
    width: 268px;
    margin: 56px auto 0;

    div {
      position: absolute;
      top: calc(50% - 1px);
      border: 1px solid ${theme.colors.primary};
      width: 100%;
      z-index: 1;
    }

    span {
      position: relative;
      height: 21px;
      left: 13.5px;
      background-color: ${theme.colors.black};
      padding: 0 6px 0 6px;
      z-index: 2;
      line-height: 21px;
    }
  }

  .button-add {
    margin: 24px 0 auto;
    text-align: center;

    button {
      height:33.88px;
      width: 268px;
      background-color: ${theme.colors.primary};
      border-radius: 3.38806px;

      font-size: 13.5522px;
      line-height: 18px;
    }
  }

  .files {
    margin: 32px auto 0;
    height: 100%;
    width: 268px;

    font-weight: 400;

    .file-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 37px;
      padding: 0 15px;

      :hover {
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 6px;
      }
    }

    .file {
      display: flex;
      align-items: center;
    }

    .file p {
      width: 100%;
      margin-left: 16px;
    }

    .file-item > span {
      margin-right: 15px;
    }
  }
`

export { Sidebar }
