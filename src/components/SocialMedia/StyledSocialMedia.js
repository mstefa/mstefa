import styled from 'styled-components';

export const StyledSocialMedia = styled.nav`

  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 8rem;
  align-items: center;
  width: 5rem;

  ul{
    padding: 0;
    list-style-type: none;
    li{
      margin: 1rem 0 1rem 0;
    }
  }
  
  a{
    color: white;
    font-size: 1.1rem;
  }

  .line{
    width: 0.5rem;
    height: 10rem;
    border-right: 0.1rem solid white;
    position: absolute;
    }
`