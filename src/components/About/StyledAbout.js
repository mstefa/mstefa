import styled from 'styled-components'
import { lightGray } from "../../GlobalStyles";

export const StyledAbout = styled.div`
  margin: 0 auto;
  width: 60rem;
  min-height: 25rem;
  text-align: left;
  color: ${lightGray};
  /* display:flex; */
  /* background-color: red; */

  div{
    display:flex;
    flex-wrap: wrap;
    

    .textContainer{
      max-width: 30rem;
      margin: 0 2rem 0 1rem;
      display:flex;
      flex-direction:column;

      ul {
        columns: 3;
        /* -webkit-columns: 2;
        -moz-columns: 2; */
        li {
          list-style-type: '👉';
          padding-inline-start: 0.4rem;
        }
      }

    }
    
    .imgContainer{
      width: 25rem;

      img{
        width: 20rem;
        height:18rem;
      }
    }
  
  }



`
