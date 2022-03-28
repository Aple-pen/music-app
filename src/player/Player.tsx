import React, {useEffect, useState} from 'react';
import "./Player.css"

const Player = () => {

    const [audio, setAudio] = useState(new Audio(require("../asset/media/빨간내복야코 - 당신의 아침을 깨우는 알람 송.mp3")))

    const [isPlaying, setIsPlaying] = useState(false)

    const [currentTime, setCurrentTime] = useState<number>(0)
    const [duration, setDuration] = useState<number>(0)


    audio.addEventListener("loadeddata", (e) => {
        console.log(e)
    })

    audio.addEventListener("pause", e => {
        console.log(e)
    })

    audio.addEventListener("playing", e => {
        console.log(e)
        setIsPlaying(true)
    })

    audio.addEventListener("timeupdate", e => {
        setCurrentTime(Math.floor(audio.currentTime as number))
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
            <figure className="player">
                <figcaption>Listen to the T-Rex:</figcaption>
                <button onClick={handlePlay}>start</button>
                <button onClick={handleStop}>stop</button>
            </figure>
            <h1>{currentTime}:{duration}</h1>

        </>
    )
}

export default Player;
