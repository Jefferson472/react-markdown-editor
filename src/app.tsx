import styled from 'styled-components/macro'
import { Sidebar } from 'pages/sidebar'
import { Content } from 'pages/content'
import { useFiles } from 'pages/files/use-files'

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
  height: 100vh;
`
