import React,{useState, useEffect} from 'react';
import { BounceLoader } from 'react-spinners';
import {  css } from '@emotion/react';
import './App.css';



function App() {
  const [product, setProduct] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  console.log(product);
  useEffect(() => {
    const fakeStore = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
      const response = await fetch('https://fakestoreapi.com/products');
      // console.log (response);
      const jsonData= await response.json();
      // console.log(jsonData);
      setProduct(jsonData);
    } catch (error) {
      setHasError(true);
      }
      setIsLoading(false);
    };
    fakeStore();
  }, [setProduct]);

 const loaderCSS = css`
 margin-top: 300px;
 margin-bottom: 400px;
`
  // fakeStore();
  
  return (
    <div className="App">
    <React.Fragment>
    {hasError && <p>Something went wrong.</p>}
    {isLoading ? (
      <BounceLoader css={loaderCSS} size={100} color='#082044' loading />
      ) : (
        <ul>
      <h1>ONLINE STORE</h1>
      <div className="container">
      {product.map((values)=>{
        return(
          <>
          <div className="box">
          <div className="content">
            <h3>{values.title}</h3>
            <h4>${values.price}</h4>
            <p>{values.description}</p>
          </div>
           <img src={values.image} alt="" />
        </div>
          </>
        )
      })}
      </div>
      </ul>
       )}
    </React.Fragment>
    </div>
  
);
}
export default App;
    
