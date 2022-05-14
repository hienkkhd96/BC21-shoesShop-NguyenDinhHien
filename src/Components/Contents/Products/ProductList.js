import React from 'react'
import { data } from '../../../Data/data'
import ProductItem from './ProductItem';

function ProductList(props) {
    const productList = data
    const handleOpenModal = props.handleOpenModal
    const handleProductDetail = props.handleProductDetail
    const handleDetailShow = (product) => {
      handleOpenModal()
      handleProductDetail(product)
    }
  return (
    <div className='row container mx-auto g-4'>
       {productList.map((product,index)=> {
         return (
           <div className='col-lg-4 col-md-6 col-sm-12' key={index} onClick={()=>handleDetailShow(product)} >
             <ProductItem data={product}/>
           </div>
         )
       })}
    </div>
  )
}

ProductList.propTypes = {}

export default ProductList
