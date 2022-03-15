import styled from 'styled-components';
   
export const Box = styled.div`
  
  background: #082044;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 120px;
  
  @media (max-width: 1000px) {
    
    
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    
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
  margin: 0 auto;
  margin-bottom: 10px;
  
  font-size: 12px;
  text-decoration: none;
   padding:0px;
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 14px;
  color: #fff;
 margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 15px;
  padding: 0;
  font-weight: bold;
`;