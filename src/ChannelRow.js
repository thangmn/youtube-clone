import { Avatar } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react'
import "./ChannelRow.css"

function ChannelRow({image, channel, verified, subs, no0fVideos, description}) {
  return (
    <div className="channelRow">
    <Avatar className="channelRow__logo" alt={channel} src={image} />
    <div className="channelRow__text">        
            <h4>
            {channel} 
            {verified && <CheckCircleOutlineIcon />}
            </h4>     
            
            <p>{subs} Subscribers • {no0fVideos} Videos</p>        
            <p>{description}</p>
    </div>   
    </div>
  )
}

export default ChannelRow