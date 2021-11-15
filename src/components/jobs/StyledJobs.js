import styled from 'styled-components'
import { maxWidth } from "../../GlobalStyles";
import { lightTel } from "../../GlobalStyles";

export const StyledJobs = styled.section`
  /* max-width: ${maxWidth}rem; */
  /* min-height: 70vh; */
  margin: 5rem auto;
  display:flex;
  flex-direction:column;
  /* background-color: gray; */


  .description-container{
    margin: 1rem auto;
    max-width: 60%;
    h3{
      padding-bottom: 0.5rem;
      font-size:1.3rem;
      margin: 1rem 0 1rem 0;

    }

    a{
        color:${lightTel};
      }

    ul {
      columns: 3;
      li {
        /* list-style-type: '👉'; */
        list-style: none;
        /* padding-inline-start: 0.4rem; */
      }
      li::before {
        content: '> ';
        color:${lightTel};
      }
    }
}
`