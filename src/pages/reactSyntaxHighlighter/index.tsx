import { FC } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
/* components */
import PageTitle from '../../components/pageTitle'

const ReactSyntaxHighlighter: FC = () => {
  const codeString = '(num: number) => num + 1'

  return (
    <>
      <PageTitle title="ReactSyntaxHighlighter" />
      <SyntaxHighlighter language="typescript" style={dark}>
        {codeString}
      </SyntaxHighlighter>
    </>
  )
}

export default ReactSyntaxHighlighter
