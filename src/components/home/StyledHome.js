import styled from 'styled-components'
import { lightTel, maxWidth, mediumGray} from "../../GlobalStyles";

export const StyledHome = styled.section`
  /* max-width: ${maxWidth}rem; */
  /* min-height: 30vh; */
  padding: 6rem 0rem 10rem 4rem;
  display:flex;
  flex-direction:column;
  /* background-color: gray; */


  h1{
    font-size: 4rem;
    margin: 0.5rem 0 0 0;
    padding:0;
  }

  h3{
    font-size: 2.5rem;
    color:${mediumGray};
    margin: 0 0 1rem 0;
    
  }

  span{
    color: ${lightTel}
  }


  @media (max-width: 450px) {

    padding: 5rem 0rem 8rem 1rem;

  }


`
