import styled from 'styled-components';
import { lightTel } from "../../GlobalStyles";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;

  img{
    margin: 0.5rem 0 0.5rem 2rem;
  }

  ul{
    display: flex;
    padding: 0;
    list-style-type: none;
    margin-right: 2rem;

    li{
      margin-left: 2rem;
      a:hover{
        color:${lightTel};
        transition: all 500ms ease;
      }
    }
  }

`