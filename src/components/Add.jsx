import React,{ useState } from 'react';
import {Modal, Button, FloatingLabel, Form} from 'react-bootstrap';
import { uploadVideoAPI } from '../services/allAPI';

function Add({setUploadVideoResponse}) {
    const [uploadVideo,setUploadVideo] = useState({
        Movie:"",imageURL:"",Trailer:""
      })
      
      
    const [show, setShow] = useState(false);

    const handleClose = () => {
    setShow(false);
    setUploadVideo({...uploadVideo,Movie:"",imageURL:"",Trailer:""})
    }
    const handleShow = () => setShow(true);

    const getYoutubeEmbedLink =(link)=>{
        if(link.includes("v=")){
         let videoId = link.split("v=")[1].slice(0,11)
         setUploadVideo({...uploadVideo,Trailer:`https://www.youtube.com/embed/${videoId}`})
        }else{
          setUploadVideo({...uploadVideo,Trailer:""})
          alert("Input Proper youtube link!!!")
        }
          }

          const handleAdd = async ()=>{
            // store upload video in http://localhost:300/videos
            const {Movie,imageURL,Trailer} = uploadVideo
            if(Movie && imageURL && Trailer){
              // proceed to store video from http://localhost:5137/home to http://localhost:3000/videos
             const result = await uploadVideoAPI(uploadVideo)
             console.log(result);
            
             if(result.status>=200 && result.status<300){
              alert(`Video '${result.data.Movie}' uploaded successfully!!! `)
              setUploadVideoResponse(result.data)
              
              handleClose()
             }else{
              alert("API Call Failed... Please try after some time!!!")
             }
            }else{
              alert("Please fill the form completely!!!")
            }
              }
  return (
    <div>
         <div className="d-flex align-items-center">
        <h5>Add New Movie</h5>
        <button onClick={handleShow} style={{height:'50px',width:'50px', borderRadius:'50%',marginTop:'-9px'}} className='btn bg-light  ms-2 rounded-circle  '> <i className="fa-solid fa-plus "></i></button>

    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please Fill the following details!!!</p>
       <div className='border rounded border-secondary p-3'>
            <FloatingLabel
            controlId="floatingInputCaption"
            label="Movie Name"
            className="mb-3"
          >
            <Form.Control value={uploadVideo.Movie} onChange={e=>setUploadVideo({...uploadVideo,Movie:e.target.value})}   type="text" placeholder="Movie Name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputImg"
            label="Image URL"
            className="mb-3"
          >
            <Form.Control value={uploadVideo.imageURL} onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})}    type="text" placeholder="Image URL" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputLink"
            label="Trailer "
            className="mb-3"
          >
            <Form.Control value={uploadVideo.Trailer} onChange={e=>getYoutubeEmbedLink(e.target.value)}  type="text" placeholder="Trailer" />
          </FloatingLabel>
       </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Cancel
          </Button>
          <Button onClick={handleAdd} className='btn btn-danger' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add