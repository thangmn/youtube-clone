import React from 'react'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"
import "./SearchPage.css"

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>        
        </div>
        <hr />

        <ChannelRow 
          image="https://yt3.googleusercontent.com/ytc/AL5GRJV0oqI59o3rTGdjJnqA1gBX4d8I39zFxx3a_XBu=s176-c-k-c0x00ffffff-no-rj"
          channel="Joma Tech"
          verified
          subs="2,15tr"
          no0fVideos={500}
          description="I talk about life in Silicon Valley and at big tech companies.
          Follow me on: 
          Instagram: http://instagram.com/jomaoppa 
          Twitter: https://twitter.com/jomaoppa 
          Business inquiries: business@joma.io"
        />

        <hr />

        <VideoRow 
          views="3.3M" 
          subs="2,15tr"
          description="👕 MERCH IS OUT FOR PRE-SALE: https://shopdoggos.com/ 
                        Order before March 13 before the pre-sale ends! 
                        More about the meaning behind the merch in this video:  
                        • I ALMOST made an ...  
                        Mapa hash."
          timestamp="3 day ago"
          channel="Joma Tech"
          title="how programmers overprepare for job interviews"
          image="https://i.ytimg.com/vi/5bId3N7QZec/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8Nre9g0UkuU0BNSnUyi-mbGSceg"
        />
        <VideoRow 
          views="3.3M" 
          subs="2,15tr"
          description="👕 MERCH IS OUT FOR PRE-SALE: https://shopdoggos.com/ 
                        Order before March 13 before the pre-sale ends! 
                        More about the meaning behind the merch in this video:  
                        • I ALMOST made an ...  
                        Mapa hash."
          timestamp="3 day ago"
          channel="Joma Tech"
          title="how programmers overprepare for job interviews"
          image="https://i.ytimg.com/vi/5bId3N7QZec/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8Nre9g0UkuU0BNSnUyi-mbGSceg"
        />
        <VideoRow 
          views="3.3M" 
          subs="2,15tr"
          description="👕 MERCH IS OUT FOR PRE-SALE: https://shopdoggos.com/ 
                        Order before March 13 before the pre-sale ends! 
                        More about the meaning behind the merch in this video:  
                        • I ALMOST made an ...  
                        Mapa hash."
          timestamp="3 day ago"
          channel="Joma Tech"
          title="how programmers overprepare for job interviews"
          image="https://i.ytimg.com/vi/5bId3N7QZec/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8Nre9g0UkuU0BNSnUyi-mbGSceg"
        />
        <VideoRow 
          views="3.3M" 
          subs="2,15tr"
          description="👕 MERCH IS OUT FOR PRE-SALE: https://shopdoggos.com/ 
                        Order before March 13 before the pre-sale ends! 
                        More about the meaning behind the merch in this video:  
                        • I ALMOST made an ...  
                        Mapa hash."
          timestamp="3 day ago"
          channel="Joma Tech"
          title="how programmers overprepare for job interviews"
          image="https://i.ytimg.com/vi/5bId3N7QZec/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8Nre9g0UkuU0BNSnUyi-mbGSceg"
        />
        <VideoRow 
          views="3.3M" 
          subs="2,15tr"
          description="👕 MERCH IS OUT FOR PRE-SALE: https://shopdoggos.com/ 
                        Order before March 13 before the pre-sale ends! 
                        More about the meaning behind the merch in this video:  
                        • I ALMOST made an ...  
                        Mapa hash."
          timestamp="3 day ago"
          channel="Joma Tech"
          title="how programmers overprepare for job interviews"
          image="https://i.ytimg.com/vi/5bId3N7QZec/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8Nre9g0UkuU0BNSnUyi-mbGSceg"
        />
    </div>
  )
}

export default SearchPage