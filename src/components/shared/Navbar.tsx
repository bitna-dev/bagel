import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors } from '@styles/colorPalette'
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
          <img src="/logo192.png" alt="logo" css={ImageStyle} />
        </a>
      </div>
      <ListStyles>
        <Link to="/club">CLUB</Link>
        <Link to="/community">COMMUNITY</Link>
        <Link to="/sellnbuy">SELL&BUY</Link>
        <Link to="/profile">PROFILE</Link>
      </ListStyles>
    </NavStyle>
  )
}

const NavStyle = styled.div`
  width: 100%;
  min-width: 540px;
  position: fixed;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  z-index: var(--dimmed-zindex);
`
const ImageStyle = css`
  max-width: 80px;
  max-height: 80px;
`

const ListStyles = styled.div`
  display: flex;
  gap: 10px;
  padding-right: 20px;
  & a {
    font-size: 18px;
    padding: 14px;
    position: relative;
    color: white;
    font-wight: 900;
    letter-spacing: 0.9px;

    &::before {
      content: '';
      width: calc(100% - 28px);
      height: 3px;
      background-color: ${colors.white};
      position: absolute;
      left: 14px;
      bottom: 10px;
      transform: scaleX(0);
      transition: all 0.3s;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
`
export default Navbar
