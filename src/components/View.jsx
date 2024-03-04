import React, {useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from '../components/VideoCard'
import { getAllVideosAPI } from '../services/allAPI'

function View({uploadVideoResponse}) {
    const [allVideos,setAllVideos] = useState([])
    const [deleteVideoResponse,setDeleteVideoResponse] = useState("")

    const getAllVideos = async () =>{
        const result = await getAllVideosAPI()
        // console.log(result);
        if(result?.status==200){
      setAllVideos(result?.data);
        }
      }
      useEffect(()=>{
    getAllVideos()
},[uploadVideoResponse,deleteVideoResponse])
  return (
    <div >
          <Row >
    {allVideos?.length>0? allVideos?.map((video,index)=>(
       <Col key={index} className='mb-4' sm={12} md={6} lg={4} >
            <VideoCard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
    ))
      :
      <div>No Movies are added !!!</div>
      }
         </Row>
    </div>
  )
}

export default View