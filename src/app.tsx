import styled from 'styled-components/macro'
import { Sidebar } from 'pages/sidebar'
import { Content } from 'pages/content'
import { useFiles } from 'pages/files/use-files'
import { MenuLeft } from 'pages/components/icons'

export function App () {
  const {
    files,
    inputRef,
    handleCreateNewFile,
    handleSelectFile,
    handleRemoveFile,
    handleUpdateFileContent,
    handleUpdateFileName,
  } = useFiles()

  return (
    <Main>
      <Sidebar
        files={files}
        onNewFile={handleCreateNewFile}
        onSelectFile={handleSelectFile}
        onRemoveFile={handleRemoveFile}
      />

      <Content
        inputRef={inputRef}
        file={files.find(file => file.active === true)}
        onUpdateFileName={handleUpdateFileName}
        onUpdateFileContent={handleUpdateFileContent}
      />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  max-height: 100vh;
  
  .--active {
    position: absolute;
    min-width: 200px;
    padding-bottom: 0px;
    transition: 0.5s;
    
    section {
      visibility: visible;
      opacity: 1;
      padding-bottom: 0px;
    }

    div {
      background: url(${MenuLeft});
      margin-right: 10px;
    }
  }
`
