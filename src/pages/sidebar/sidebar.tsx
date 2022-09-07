import { MouseEvent, useState } from 'react'
import { File } from 'resources/files/types'
import markeeLogo from './markee-logo.png'
import * as icon from 'pages/components/icons'
import * as S from './sidebar-styles'

type SidebarProps = {
  files: File[]
  onNewFile: () => void
  onSelectFile: (id: string) => (e: MouseEvent) => void
  onRemoveFile: (id: string) => void
}

export function Sidebar ({
  files,
  onNewFile,
  onSelectFile,
  onRemoveFile,
}: SidebarProps) {
  const [isActive, setIsActive] = useState<boolean>(false)

  const activeMenu = () => {
    setIsActive(current => !current)
  }
  return (
    <S.Aside className={isActive ? '--active' : ''} onClick={activeMenu}>
      <S.MenuSandubar />
      <section>
        <header>
          <S.H1>
            <S.LogoLink href='/'>
              <S.Img src={markeeLogo} alt='Markee.' />
            </S.LogoLink>
          </S.H1>
        </header>

        <S.H2>
          <span>Arquivos</span>
        </S.H2>

        <S.Button onClick={onNewFile}>
          <icon.PlusDark /> Adicionar arquivo
        </S.Button>

        <S.FileList>
          {files.map(file => (
            <S.FileListItem key={file.id}>
              <S.FileItemLink
                href={`/file/${file.id}`}
                active={file.active}
                onClick={onSelectFile(file.id)}
              >
                {file.name}
              </S.FileItemLink>

              {file.active && <S.StatusIconStyled status={file.status} />}
              {!file.active && (
                <S.RemoveButton
                  title={`Remover o arquivo ${file.name}`}
                  onClick={() => onRemoveFile(file.id)}
                >
                  <S.RemoveIcon />
                </S.RemoveButton>
              )}
            </S.FileListItem>
          ))}
        </S.FileList>
      </section>
    </S.Aside>
  )
}
