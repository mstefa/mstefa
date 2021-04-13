import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: gray;
  display: flex;
  justify-content: space-between;

  img{
    margin: 0.5rem 0 0.5rem 2rem;
  }

  ul{
    display: flex;
    /* justify-content:space-between; */
    /* max-width: 28rem; */
    /* background-color:red; */
    padding: 0;
    list-style-type: none;

    li{
      /* list-style-type: none; */
      margin-right: 2rem;
    }
  }

`