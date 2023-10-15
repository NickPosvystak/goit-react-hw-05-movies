import { styled } from 'styled-components';

export const StyledCatalog = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  padding: 0;
  list-style-type: none;
  @media (min-width: 768px) {
    row-gap: 48px;
  }
  @media (min-width: 1280px) {
    row-gap: 28px;
  }
`;
export const StyledCatalogList = styled.li`
  /* position: relative; */
  row-gap: 50px;
  padding-left: 20px;
  padding-right: 10px;
  width: 280px;
  height: 406px;
  
  &:hover {
    /* transform: scale(1.02) translateZ(0);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 20px var(--orange); */
    cursor: pointer;
  }
  @media (min-width: 768px) {
    width: 224px;
    height: 325px;
  }
  @media (min-width: 1280px) {
    width: 394px;
    height: 574px;
  }
`;
export const StyledImg = styled.img`
display: inline-block;
  width: 280px;
  row-gap: 57px;
  
  @media (min-width: 768px) {
    width: 224px;
    height: 325px;
  }
  @media (min-width: 1280px) {
    width: 394px;
    height: 574px;
  }
`;

