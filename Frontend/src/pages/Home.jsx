import React, { useState } from 'react'
import Header from '../component/Header'
import Exploremenu from '../component/Exploremenu'
import Fooddisplay from '../component/Fooddisplay'
import AppDownload from '../component/AppDownload'

const Home = () => {
  const [category, setcategory] = useState("All")
  return (
    <div>
      <Header />
        <Exploremenu category={category} setcategory={setcategory} />
        <Fooddisplay category={category} />
        <AppDownload />
      

    </div>
  )
}

export default Home