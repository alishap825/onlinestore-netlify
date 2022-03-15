import React,{useState, useEffect} from 'react';
import Footer from './components/Footer';
import { BounceLoader } from 'react-spinners';
import './App.css';
import img from './bluecart.png';



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

 
  // fakeStore();

  return (
    
    <div className="App">
        {hasError && <p>Something went wrong.</p>}
        {isLoading ? (
          <BounceLoader size={100} color='#082044' loading />
        ) : (

          <ul> <img src={img} alt="shoppingcrt" width={100} height={100}></img><h1>ONLINE STORE</h1>

            <div className="container">

              {product.map((values) => {

                return (
                  
                  <>
                    <div className="box">
                      <div className="content">
                        <img src={values.image} alt="" />
                        <h3>{values.title}</h3>
                        <h4>${values.price}</h4>
                      </div>
                      
                    </div>
                    
                  </>
                  
                );
                
              })}
<div className='content-wrap'>
        <Footer />
      </div>
            
            </div>
            
      
          </ul>

        )}

     
      
      </div>
      
   
   
);
}
export default App;
    
