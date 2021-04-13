import styled from 'styled-components'

export const StyledAbout = styled.div`
  margin: 0 auto;
  width: 60rem;
  min-height: 25rem;
  /* display:flex; */
  /* background-color: red; */

  div{
    display:flex;

    .textContainer{
      width: 50rem;
      margin: 0 2rem 0 1rem;
      display:flex;
      flex-direction:column;
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
