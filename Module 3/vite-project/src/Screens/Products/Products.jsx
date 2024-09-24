import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Card/Card'

export const Products = () => {

  const [pro, setPro] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((data)=>{
      return data.json()
    })
    .then((data)=>{
      setPro(data)
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])


  return (
    <div>
      {
        pro.map((item, index)=>{
          return <div key={item.id}>
            <Cards item={item}/>
          </div>

        })
      }
    </div>
  )
}
