import React, { useState } from 'react'
import View from '../components/View'

import Add from '../components/Add'
import Watch from '../components/Watch'


function Movie() {
  const [uploadVideoResponse,setUploadVideoResponse] = useState("")

  return (
    <div>
     <div className="container mt-5 d-flex justify-content-between">
<Add setUploadVideoResponse={setUploadVideoResponse}/>

    </div>
    <div className="container-fluid mt-5 mb-5 row">
      <div className="col-lg-6">
<h3 style={{textAlign:'center'}}>Movies</h3>
<View uploadVideoResponse={uploadVideoResponse}/>
      </div>
     
      <div className="col-lg-6">

 <Watch/>

      </div>
    </div>
          
    </div>
  )
}

export default Movie