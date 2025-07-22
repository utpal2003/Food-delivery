import React, { useState } from 'react'
import Header from '../component/Header'
import Exploremenu from '../component/Exploremenu'
import Fooddisplay from '../component/Fooddisplay'

const Home = () => {
  const [category,setcategory]=useState("All")
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setcategory={setcategory}/>
      <Fooddisplay category={category}/>
    </div>
  )
}

export default Home