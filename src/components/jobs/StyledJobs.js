import styled from 'styled-components'
import { maxWidth } from "../../GlobalStyles";
import { lightTel, darkGray, fzxs, fzxxl } from "../../GlobalStyles";

export const StyledJobs = styled.section`
  max-width: ${maxWidth}rem;
  min-height: 70vh;
  margin: 5rem auto;
  display:flex;
  flex-direction:column;
  /* background-color: gray; */
  h3{
      width: 100%;
      padding-bottom: 0.5rem;
      font-size:1.3rem;
      margin: 1rem 0 1rem 0;
  }

  .inner{
    margin: 1rem auto;
    max-width: 60%;
    display:flex;

      .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
}
`

export const StyledTabList = styled.div`
  position: relative;
  // z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0.5rem 0 0 0 ;
  list-style: none;
  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }
  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

export const StyledTabButton = styled.button`

  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  padding: 0 20px 2px;
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  border-left: 2px solid ${lightTel};
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? lightTel : darkGray)};
  font-size: ${fzxs};
  text-align: left;
  white-space: nowrap;
  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid ${lightTel};;
    text-align: center;
  }
  &:hover,
  &:focus {
    background-color: ${lightTel};;
  }
`;

export const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 0.15rem;
  height: 1rem;
  border-radius: 0.3rem;
  background: ${lightTel};
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * 1rem));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: 2.5rem;
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * 1rem));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

export const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0px;


  h4 {
    margin-top: 0;
    margin-bottom: 2px;
    font-size: ${fzxxl};
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: ${lightTel};
    }
  }

  .range {
    margin-bottom: 25px;
    color: ${lightTel};
    font-size: ${fzxs};
  }
`;