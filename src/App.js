import { useState } from 'react';
import './App.css';
import ProductList from './Components/Contents/Products/ProductList';
import Header from './Components/Header/Header';
import ModalInfo from './Components/Modal/ModalInfo';

function App() {
  const [openModal,setOpenModal] = useState(false)
  const [productDetail,setProductDetail] = useState({})
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const handleProductDetail = (product) => {
    console.log(product);
    setProductDetail(product)
  }
  return (
    <div className="App">
      <Header/>
      <ProductList handleOpenModal={handleOpenModal} handleProductDetail={handleProductDetail}/>
      <ModalInfo open={openModal} handleCloseModal={handleCloseModal} content={productDetail}/>
    </div>
  );
}

export default App;
