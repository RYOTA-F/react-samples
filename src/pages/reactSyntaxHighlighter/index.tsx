import { FC } from 'react'
/* components */
import PageTitle from '../../components/pageTitle'
import SyntaxHighlighter from '../../components/syntaxHighlighter'

const ReactSyntaxHighlighter: FC = () => {
  const codeString = '(num: number) => num + 1'

  return (
    <>
      <PageTitle title="ReactSyntaxHighlighter" />
      <SyntaxHighlighter code={codeString} />
    </>
  )
}

export default ReactSyntaxHighlighter
