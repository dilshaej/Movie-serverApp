import React, { useEffect, useState } from 'react'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'

function Watch() {
    const [history,setHistory] = useState([])
 const  getAllHistory = async()=>{
  const result = await getHistoryAPI()
  if(result.status>=200 && result.status<300){
   setHistory( result.data)
  }
 }
 useEffect(()=>{
getAllHistory()
 },[])

 const deleteHistory = async(vId)=>{
    await removeHistoryAPI(vId)
    getAllHistory()
 }
  return (
    <div className='container mt-5 mb-5'>
    <div className="d-flex justify-content-between">
      <h3>Continue Watch</h3>
     
    </div>
    <table className='table mt-5 mb-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Video Link</th>
          <th>Time Stamp</th>
          <th>*</th>
        </tr>
      </thead>
      <tbody>
      { history?.length>0?  history?.map((video,index)=>(

      
        <tr key={index}>
          <td>{index+1}</td>
          <td>{video?.Movie}</td>
          <td><a href={video?.Trailer} target='_blank'>{video?.Trailer}</a></td>
          <td>{video?.timeStamp}</td>
          <td><button onClick={()=>deleteHistory(video.id)}  className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
        ))
        :
        <tr className='text-danger fw-bolder'>Your Watch History is Empty!!!</tr>
        }
        
      </tbody>
    </table>
    </div>
  )
}

export default Watch