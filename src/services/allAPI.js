import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"


export const uploadVideoAPI = async (video)=>{
    // send response to add component
    return await commonAPI("POST",`${SERVER_URL}/videos`,video)
    
}

// // get video api called by view
export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/videos`,"")
}

// store watch history by videocard to http://localhost:300/history
export const saveHistoryAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

// get history to watch componemt to http://localhost:300/history
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// remove history
export const removeHistoryAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

// remove video
export const removeVideoAPI = async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
}