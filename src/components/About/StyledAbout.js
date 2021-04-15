import styled from 'styled-components'
import { lightTel, maxWidth } from "../../GlobalStyles";

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
      /* flex-basis: 60%; */
      max-width: 60%;
      margin: 0 2rem 0 2rem;
      /* background-color:red; */
      display:flex;
      flex-direction:column;
      
      p{
        margin: 0.1rem;
      }

      a{
        color:${lightTel}
      }

      ul {
        columns: 3;
        li {
          list-style-type: '👉';
          padding-inline-start: 0.4rem;
        }
      }

    }
    
    .imgContainer{
      width: 30%;
      margin: 0 auto;
      display:flex;
      justify-content: center;

      img{
        width: 15rem;
        height:13rem;
        padding-bottom:0.3rem;
        padding-right:0.3rem;
        border-bottom: 0.1rem solid;
        border-right: 0.1rem solid;
        border-color: ${lightTel};
      }
    }
  
  }


  @media (max-width: 850px) {
    div{
      .textContainer{
        /* flex-basis: 60%; */
        max-width: 100%;
      }
    }
    
  }



`
