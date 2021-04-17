import styled from 'styled-components'
import { lightGray, lightTel, darkRed } from "../../GlobalStyles";

export const StyledMainProject = styled.div`
  position: relative;
  margin: 4rem  0 0 0;

  h3{
      position: absolute;
      /* margin-top:0; */
      right: 0;
      padding-bottom: 0.5rem;
      border-bottom: 0.1rem solid ${lightTel};
      width: 14rem;
      font-size:1.3rem;
      margin: 1rem 0 1rem 0;
    }
  .img-contanier{
    img{
      width: 40vw;
    }
  }

  .text-container{
    position: absolute;
    top: 3rem;
    left:35vw;
    width: 48vw;
    text-align:right;
  
    p{
      height: 8rem;
      background-color: ${darkRed+ `F2`} ;
      color: ${lightGray};
      padding: 0.2rem 1rem 0rem 0.1rem;
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
      text-align:left;
    }

  }

`