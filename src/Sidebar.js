import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
  return (
    <div class="sidebar">  
    <SidebarRow selected Icon={HomeRoundedIcon} title="Home"/>
    <SidebarRow Icon={WhatshotRoundedIcon} title="Trending"/>
    <SidebarRow Icon={SubscriptionsRoundedIcon} title="Subscription"/>
    <hr />
    <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
    <SidebarRow Icon={HistoryIcon} title="History"/>
    <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
    <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
    <SidebarRow Icon={ThumbUpAltIcon} title="Liked Videos"/>
    <SidebarRow Icon={ExpandMoreIcon} title="Show More"/>
    <hr />
    </div>
  )
}

export default Sidebar