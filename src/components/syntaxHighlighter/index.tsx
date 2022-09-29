import { FC } from 'react'
import { Prism } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

type SyntaxHighlighterProps = {
  code: string
}

const SyntaxHighlighter: FC<SyntaxHighlighterProps> = ({ code }) => {
  return (
    <Prism language="typescript" style={dark}>
      {code}
    </Prism>
  )
}

export default SyntaxHighlighter
