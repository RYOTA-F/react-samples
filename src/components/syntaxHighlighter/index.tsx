import { FC } from 'react'
import { Prism } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
/* styles */
import { Container, Filename } from './style'

type SyntaxHighlighterProps = {
  code: string
  fileName: string
}

const SyntaxHighlighter: FC<SyntaxHighlighterProps> = ({ code, fileName }) => {
  return (
    <Container>
      <Filename>{fileName}</Filename>
      <Prism language="typescript" style={dark}>
        {code}
      </Prism>
    </Container>
  )
}

export default SyntaxHighlighter
