
import gsap from "gsap";
import { hightlightsSlides } from "../constants"
import { useEffect, useRef, useState } from "react"
// IMPORTANT: VideoCarousel.jsx is not finished.
const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);
    const [video,setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    })
    const [loadedData, setloadedData] = useState([]);
    
    const { isEnd, isLastVideo, startPlay, videoId, isPlaying} = video;
    useEffect(()=>{
        if(loadedData.length > 3){
            if(!isPlaying){
                videoRef.current[videoId].pause();
            } else {
                startPlay && videoRef.current[videoId].play();
            }
        }

    },[startPlay,videoId,isPlaying,loadedData])
    useEffect(()=>{
        const currentProgress = 0;
        let span = videoSpanRef.current;
        if(span[videoId]){
            // animate the progress of the video
            let anim = gsap.to(span[videoId],{
                onUpdate: () => {
                    
                },
                onComplete: () => {

                },
            })
        }
    },[videoId,startPlay])
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i)=> (
            <div key={list.id} id="slider">
                <div className="video-carousel_container">
                    <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                        <video id="video"
                         playsInline={true} 
                         preload="auto" 
                         muted>
                        
                            <source src={list.video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="absolute top-12 left-[5%] z-10">
                        {list.textLists.map((text) => (
                            <p key={text} className="md:text-2xl text-xl font-medium">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        ))}

      </div>
    </>
  )
}

export default VideoCarousel
