import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Card/Cards'

function Products() {

    const [product, setProduct] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((data)=>{
            return data.json()
        })
        .then((data)=>{
            console.log(data)
            setProduct(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

  return (
    <div>
        {
            product.map((item, index)=>{
                return <div key={item.id}> <Cards item={item}/> </div>
            })
        }
    </div>
  )
}

export default Products