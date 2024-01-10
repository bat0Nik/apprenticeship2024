import React from 'react';
import { useEffect } from 'react';
import { useAudio } from './AudioContext.jsx';
import Gra from '../sound/gra.mp3';

const Soundbar = () => {
const { play,volume, volumeChange } = useAudio();

useEffect(() => {
    play(Gra);
}, []);
const volumeHandler = (e) => {
    const newVolume = parseFloat(e.target.value);
    volumeChange(newVolume);
};

return (
    <div>
    <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={volumeHandler}
    />
    </div>
);
};

export default Soundbar;
