import React, { createContext, useContext, useState } from 'react';
import Gra from '../sound/gra.mp3'; 

const AudioContext = createContext();

export const useAudio = () => {
    return useContext(AudioContext);
};

export const AudioProvider = ({ children }) => {
const [audio] = useState(new Audio(Gra));
const [volume, setVolume] = useState(0.5);

const play = () => {
    audio.loop = true;
    audio.play().catch((error) => {
    console.error("Błąd odtwarzania dźwięku:", error);
    });
};

const volumeChange = (newVolume) => {
    setVolume(newVolume);
    audio.volume = newVolume;
};

return (
    <AudioContext.Provider value={{ audio, volume, play, volumeChange }}>
    {children}
    </AudioContext.Provider>
);
};
