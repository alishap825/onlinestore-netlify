import React,{useState, useEffect} from 'react';
import './App.css';



function App() {
  const [product, setProduct] = useState<any[]>([]);
  console.log(product);
  useEffect(() => {
    fakeStore();
  }, [])

  const fakeStore = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    // console.log (response);
    const jsonData= await response.json();
    // console.log(jsonData);
    setProduct(jsonData);
  }
  // fakeStore();
  
  return (
    <div className="App">
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
    </div>
  
)
}
export default App;
    
