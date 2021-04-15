import styled from 'styled-components'
import { lightGray, lightTel, mainRed } from "../../GlobalStyles";

export const StyledMainProject = styled.div`
  position: relative;
  margin: 3rem;

  h3{
      position: absolute;
      margin-top:0;
      right: 0;
      padding-bottom: 0.5rem;
      /* color: ${lightGray}; */
      border-bottom: 0.1rem solid ${lightTel};
      width: 10rem;
    }
  .img-contanier{
    img{
      width: 40vw;
    }
  }

  .text-container{
    position: absolute;
    top: 2rem;
    left:35vw;
    max-width: 44vw;
    text-align:right;
  
    p{
      height: 6rem;
      background-color: ${mainRed+ `CC`} ;
      color: ${lightGray};
      padding: 0.5rem 2rem 0.5rem 0.1rem;
    }
      
    ul {
        display:flex;
        flex-wrap:wrap;
        justify-content: flex-end;
        list-style: none;
        li {
          font-size:0.8rem;
          margin: 0 0.2rem ;
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

  @media (max-width: 850px) {
    
    margin: 1rem;

    position: static;

    h3{
      position:static;
    }
    .img-contanier{
      img{
        width: 100%;
      }
    }

    .text-container{
      position: static;
      max-width: 100%;
      .textContainer{
        /* flex-basis: 60%; */
        max-width: 100%;
      }
    }

  }

`