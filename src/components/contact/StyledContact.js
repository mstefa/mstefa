import styled from 'styled-components'
import { lightGray, lightTel, mediumGray } from "../../GlobalStyles";

export const StyledContact = styled.section`
  min-height: 10rem;
  margin: 5rem auto;

  .contactContainer{
    margin-top:3rem;
    max-width: 45rem;
    text-align: center;
    margin: 1rem auto;
    max-width: 40rem;
    color:${mediumGray};
    padding: 3rem;

    p{
      margin: 2rem auto;
    }
    a{
      font-size: 1.5rem;
      color:${lightGray};
      /* margin: 20rem auto; */
      
      .fab{
        padding: 1rem;
        font-size: 2rem;
      }
      .fas{
        padding: 0.5rem 1.2rem;
      }
      :hover{
        color:${lightTel};
        transition: all 500ms ease;
      }
    }
    

  }
  @media (max-width: 450px) {
    .contactContainer{
      padding: 2rem 0.5rem;;
    }
    /* margin: auto; */

  }
`