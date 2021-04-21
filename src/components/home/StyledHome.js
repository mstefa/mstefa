import styled from 'styled-components'
import { lightTel, mediumGray} from "../../GlobalStyles";

export const StyledHome = styled.section`
  padding: 6rem 0rem 10rem 4rem;
  display:flex;
  flex-direction:column;

  h1{
    font-size: 5rem;
    margin: 0.5rem 0 0 0;
    padding:0;
  }

  h3{
    font-size: 3rem;
    color:${mediumGray};
    margin: 0 0 1rem 0;
    
  }

  span{
    color: ${lightTel}
  }

  button{
    margin: 2rem 0;
  }

  @media (max-width: 850px) {

    padding: 5rem 0rem 8rem 1rem;

    h1{
      font-size: 4rem;
    }

    h3{
      font-size: 2.5rem;
    }

  }

  @media (max-width: 450px) {

    padding: 5rem 0rem 8rem 1rem;

  }


`
