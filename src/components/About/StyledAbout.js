import styled from 'styled-components'
import { maxWidth } from "../../GlobalStyles";

export const StyledAbout = styled.section`
  /* max-width: ${maxWidth}rem; */
  /* margin: 0 auto; */
  min-height: 25rem;
  text-align: left;
  /* background-color: red; */

  div{
    display:flex;
    flex-wrap: wrap;
    

    .textContainer{
      max-width: 35vw;
      margin: 0 4rem 0 4rem;
      background-color:red;
      display:flex;
      flex-direction:column;

      ul {
        columns: 3;
        li {
          list-style-type: '👉';
          padding-inline-start: 0.4rem;
        }
      }

    }
    
    .imgContainer{
      width: 25vw;

      img{
        width: 25vw;
        height:22vw;
      }
    }
  
  }



`
