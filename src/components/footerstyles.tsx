import styled from 'styled-components';
   
export const Box = styled.div`
  
  background: #082044;
  
  bottom: 0;
  display: block;
  box-sizing: inherit;
  width: 100%;
  height: 120px;
  @media (max-width: 1000px) {
    
    
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
   
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 50px;
    /* background: red; */
    `
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(220px, 1fr));
  grid-gap: 10px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(220px, 1fr));
  }
`;
export const FooterLink = styled.a`
  color: #fff;
 
  font-size: 12px;
  text-decoration: none;
  text-align: left;
   padding-bottom: 5px;
   padding-left: 90px;
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
  margin-top: 15px;
  padding-left: 88px;
  font-weight: bold;
`;