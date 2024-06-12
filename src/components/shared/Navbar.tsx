import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

// const LIST_ITEMS = [
//   {
//     name: "CLUB",
//   }
// ]
const Navbar = () => {
  return (
    <NavStyle>
      <div>
        <a href="/">
          <img src="/logo192.png" alt="logo" css={VideoStyle} />
        </a>
      </div>
      <ListStyles>
        <Link to="/club">CLUB</Link>
        <Link to="/community">COMMUNITY</Link>
        <Link to="/sellnbuy">SELL&BUY</Link>
        <Link to="/sellnbuy">PROFILE</Link>
      </ListStyles>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  position: sticky;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const VideoStyle = css`
  max-width: 80px;
  max-height: 80px;
`

const ListStyles = styled.div`
  display: flex;
  gap: 10px;
  & a {
    padding: 14px 20px;
  }
`
export default Navbar
