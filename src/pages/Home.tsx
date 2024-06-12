import Heropage from '@components/shared/Heropage'
import Navbar from '@components/shared/Navbar'
import styled from '@emotion/styled'

const Home = () => {
  return (
    <>
      <StyledComponent>
        <Navbar />
        <Heropage />
      </StyledComponent>
    </>
  )
}

const StyledComponent = styled.div`
  height: 100vh;
`
export default Home
