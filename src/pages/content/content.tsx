import { useState, ChangeEvent } from 'react'
import { marked } from 'marked'
import * as DOMPurify from 'dompurify'
import * as S from './content-style'
import 'highlight.js/styles/github.css'

// função import para carregar o hightlight após o carregamento da página.
import('highlight.js').then(hljs => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }

      return h.highlightAuto(code).value
    },
  })
})

export function Content () {
  const [content, setContent] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <S.ContentWrapper>
      <S.Header>
        <S.Input defaultValue='Sem título' />
      </S.Header>

      <S.ContentSection>
        <S.Textarea
          placeholder='Digite aqui seu markdown'
          value={content}
          onChange={handleChange}
        />

        <S.Article dangerouslySetInnerHTML={
          { __html: DOMPurify.sanitize(marked.parse(content)) }
}
        />
      </S.ContentSection>
    </S.ContentWrapper>
  )
}
