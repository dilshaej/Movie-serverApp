import React from 'react'
import { useState } from 'react';

import { Card,Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';


function VideoCard({displayData,setDeleteVideoResponse}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () =>{ 
      setShow(true);

      const {Movie,Trailer} = displayData
      let timeData = new Date()
      let timeStamp= new Intl.DateTimeFormat('en-US',{
        year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'
      }).format(timeData)
      console.log(timeStamp);
      await saveHistoryAPI({Movie,Trailer,timeStamp})
    }

    const deleteVideo = async(vId)=>{
 const result = await removeVideoAPI(vId)
setDeleteVideoResponse(result.data)
    }
  return (
    <div>
        <Card style={{width:'210px', height:'300px'}}>
          <Card.Img style={{cursor:'pointer'}} onClick={handleShow} variant="top" height={'200px'} src={displayData?.imageURL} />
          <Card.Body>
            <Card.Title className='d-flex justify-content-between'>
                <p>{displayData?.Movie} </p>
                <button onClick={()=>deleteVideo(displayData?.id)} className='btn'> <i className="fa-solid fa-trash text-danger"></i> </button>
            </Card.Title>
           
        
          </Card.Body>
        </Card>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>{displayData?.Movie}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <iframe width="100%" height="400" src={`${displayData?.Trailer}?autoplay=1`} title="Caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Modal.Body>
         
          </Modal>

    </div>
  )
}

export default VideoCard