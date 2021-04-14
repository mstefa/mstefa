import styled from 'styled-components'
import { lightGray, lightTel, mainRed } from "../../GlobalStyles";

export const StyledMainProject = styled.div`
  color: ${lightGray};
  position: relative;
  margin: 2rem;


  .img-contanier{
    /* width: 25rem; */

    img{
      width: 40vw;
    }
  }

  .text-container{
    position: absolute;
    top: 0rem;
    left:35vw;
    max-width: 40vw;
    text-align:right;
    

    h3{
      margin-left: 22vw;
      padding-bottom: 0.5rem;
      color: ${lightGray};
      border-bottom: 0.1rem solid ${lightTel};
      width: 10rem;
    }
    p{
      height: 6rem;
      background-color: ${mainRed+ `CC`} ;
      color: ${lightGray};
      padding: 0.5rem 2rem 0.5rem 2rem;
    }
      
    ul {
        display:flex;
        justify-content: flex-end;
        list-style: none;
        li {
          font-size:0.8rem;
          margin: 0 1rem ;
        }
        li::before {
          content: '> ';
          color:${lightTel};
        }
      }

      a{
        color:${lightGray};
        font-weight: lighter;
        margin: 0 0.4rem;
      }
  }

`