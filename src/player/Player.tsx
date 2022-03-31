import React, {useEffect, useState} from 'react';
import "./Player.css"

interface IProps{
    audioUrl : string
}

const Player = (props : IProps) => {

    const [audio, setAudio] = useState(new Audio(require("../asset/media/빨간내복야코 - 당신의 아침을 깨우는 알람 송.mp3")))

    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    const [currentTime, setCurrentTime] = useState<number | null | string>(null)
    const [duration, setDuration] = useState<number | null>(null)

    // audio.addEventListener("loadeddata", (e) => {
    //     console.log(e)
    // })
    //
    // audio.addEventListener("pause", e => {
    //     console.log(e)
    // })

    audio.addEventListener("playing", e => {
        setIsPlaying(true)
    })

    audio.addEventListener("timeupdate", e => {
        setCurrentTime((audio.currentTime as number).toFixed(1))
        setDuration(Math.floor(audio.duration as number))
    })

    const handlePlay = () => {
        if (!isPlaying) {
            // setIsPlaying(true)
            audio.play()
        } else {
            console.log("=======")
        }
    }

    const handleStop = () => {
        if (isPlaying) {
            console.log("================================================stop==================================")
            audio.pause()
            audio.currentTime = 0
            setIsPlaying(false)
        } else {
            console.log("stop")
        }

    }

    useEffect(() => {
        console.log(isPlaying)
    }, [isPlaying])


    return (
        <>
            <div className="player">
                <figcaption>Listen to the T-Rex:</figcaption>
                <div className="player-wrap">
                    <div className="btn-wrap">
                        <img className="btn-prev" src={require("../asset/img/player/prev.png")}/>
                        {isPlaying ?
                            <img className="stop-btn" src={require("../asset/img/player/pause.png")} onClick={handleStop}/>
                            :
                            <img className="play-btn" src={require("../asset/img/player/play.png")} onClick={handlePlay}/>}
                        {/*<button onClick={handlePlay}>start</button>*/}
                        {/*<button onClick={handleStop}>stop</button>*/}
                        <img className="btn-stop" src={require("../asset/img/player/stop.png")}/>
                        <img className="btn-next" src={require("../asset/img/player/next.png")}/>
                    </div>
                    <progress className="progress" id="progress" value={String(currentTime) || "50"}
                              max={String(duration)}></progress>
                </div>


                {(currentTime || duration) &&
                    <h1>{currentTime}:{duration}</h1>}
            </div>
        </>
    )
}

export default Player;
