import React, {useState, useEffect} from 'react'
import Gra from '../sound/gra.mp3'

const Soundbar = () => {
const [audio] = useState(new Audio({Gra}));
const [volume, setVolume] = useState(0.5);

const play = (track) => {
    try {
        audio.src = track;
        audio.play().then(() => {
        }).catch((error) => {
        console.error("Błąd odtwarzania dźwięku:", error);
    });
    } catch (error) {
        console.error("Błąd odtwarzania dźwięku:", error);
    }
};

const volumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audio.volume = newVolume;
};

const handleButtonClick = () => {
    play('../sound/gra.mp3');
};
useEffect(()=>{
    play(Gra)
},[])
    return (
    <div>      
    <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={volumeChange}
    />
    </div>
    )
}

export default Soundbar
