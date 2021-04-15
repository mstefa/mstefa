import styled from 'styled-components'
import { lightGray, lightTel, mediumGray } from "../../GlobalStyles";

export const StyledContact = styled.section`
  min-height: 10rem;
  margin: 2rem auto;

  .contactContainer{
    margin-top:3rem;
    max-width: 35rem;
    text-align: center;
    margin: 1rem auto;
    max-width: 40rem;
    color:${mediumGray};

    a{
      font-size: 1.5rem;
      color:${lightGray};
      
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
  /* background-color: gray; */
`