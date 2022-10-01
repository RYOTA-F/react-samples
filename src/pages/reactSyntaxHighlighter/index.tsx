import { FC } from 'react'
/* components */
import PageTitle from '../../components/pageTitle'
import SyntaxHighlighter from '../../components/syntaxHighlighter'

const ReactSyntaxHighlighter: FC = () => {
  const code = '(num: number) => num + 1'
  const fileName = '/src/pages/reactSyntaxHighlighter/index.tsx'

  return (
    <>
      <PageTitle title="ReactSyntaxHighlighter" />
      <SyntaxHighlighter code={code} fileName={fileName} />
    </>
  )
}

export default ReactSyntaxHighlighter
