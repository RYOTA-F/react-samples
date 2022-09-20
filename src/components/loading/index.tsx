import { useState } from 'react'
import ReactLoading from 'react-loading'
/* styles */
import { Container, MarginContainer } from './style'

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false)

  const RenderLoading = () => {
    return (
      <>
        {isLoading && (
          <Container>
            <MarginContainer>
              <ReactLoading type="spinningBubbles" color="#1473e6" height={100} width={100} />
            </MarginContainer>
          </Container>
        )}
      </>
    )
  }

  return { RenderLoading, isLoading, setIsLoading }
}

export default Loading
