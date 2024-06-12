import styled from '@emotion/styled'

const Heropage = () => {
  return (
    <VideoStyles>
      <video autoPlay loop muted>
        <source src="/video1.mp4" type="video/mp4" />
      </video>
    </VideoStyles>
  )
}

const VideoStyles = styled.div`
  width: 100%;
  height: 100%;
  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export default Heropage
