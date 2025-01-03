// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PlayIcon, PauseIcon, SkipBackIcon, SkipForwardIcon, VolumeIcon, Volume2Icon } from 'lucide-react';

// const SongPlayer = ({ isTimeUp }) => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [isExpanded, setIsExpanded] = useState(false);

//   const playlist = [
//     { title: "Happy New Year", artist: "ABBA", src: "/songs/happy-new-year.mp3" },
//     { title: "Celebration", artist: "Kool & The Gang", src: "/songs/celebration.mp3" },
//     { title: "Auld Lang Syne", artist: "Traditional", src: "/songs/auld-lang-syne.mp3" },
//   ];

//   useEffect(() => {
//     if (isTimeUp) {
//       playPause();
//     }
//   }, [isTimeUp]);

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     const updateTime = () => setCurrentTime(audio.currentTime);
//     const updateDuration = () => setDuration(audio.duration);

//     audio.addEventListener("timeupdate", updateTime);
//     audio.addEventListener("loadedmetadata", updateDuration);
//     audio.addEventListener("ended", nextSong);

//     return () => {
//       audio.removeEventListener("timeupdate", updateTime);
//       audio.removeEventListener("loadedmetadata", updateDuration);
//       audio.removeEventListener("ended", nextSong);
//     };
//   }, []);

//   const playPause = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const nextSong = () => {
//     setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
//     setIsPlaying(true);
//     if (audioRef.current) {
//       audioRef.current.load();
//       audioRef.current.play();
//     }
//   };

//   const prevSong = () => {
//     setCurrentSongIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
//     setIsPlaying(true);
//     if (audioRef.current) {
//       audioRef.current.load();
//       audioRef.current.play();
//     }
//   };

//   const handleVolumeChange = (e) => {
//     const newVolume = parseFloat(e.target.value);
//     setVolume(newVolume);
//     if (audioRef.current) {
//       audioRef.current.volume = newVolume;
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed md:absolute md:bottom-0 md:mt-0 right-0 bottom-0 transform -translate-x-1/2 z-10 bg-gray-950 text-white p-0 pr-6 pt-4 rounded-xl shadow-lg flex flex-col items-center justify-between w-11/12 max-w-lg sm:max-w-lg md:max-w-md space-y-4 ${
//         isExpanded ? 'h-64' : 'h-24'
//       }`}
//     >
//       <audio ref={audioRef} src={playlist[currentSongIndex].src} />
      
//       <div className="flex items-center justify-around w-full">
//         <button onClick={prevSong} className="text-yellow-400 hover:text-yellow-300">
//           <SkipBackIcon size={24} />
//         </button>
//         <button onClick={playPause} className="text-yellow-400 hover:text-yellow-300">
//           {isPlaying ? <PauseIcon size={32} /> : <PlayIcon size={32} />}
//         </button>
//         <button onClick={nextSong} className="text-yellow-400 hover:text-yellow-300">
//           <SkipForwardIcon size={24} />
//         </button>
//       </div>

//       <motion.div 
//         className="w-full bg-gray-700 rounded-full h-2 cursor-pointer"
//         whileHover={{ height: 4 }}
//         onClick={(e) => {
//           const rect = e.currentTarget.getBoundingClientRect();
//           const x = e.clientX - rect.left;
//           const clickedValue = (x / rect.width) * duration;
//           if (audioRef.current) {
//             audioRef.current.currentTime = clickedValue;
//           }
//         }}
//       >
//         <motion.div
//           className="bg-yellow-400 h-full rounded-full"
//           style={{ width: `${(currentTime / duration) * 100}%` }}
//         />
//       </motion.div>

//       <AnimatePresence>
//         {isExpanded && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="w-full flex items-center space-x-2"
//           >
//             {volume === 0 ? <VolumeIcon size={20} /> : <Volume2Icon size={20} />}
//             <input
//               type="range"
//               min="0"
//               max="1"
//               step="0.01"
//               value={volume}
//               onChange={handleVolumeChange}
//               className="w-full"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="text-sm text-center">
//         <p className="font-semibold">{playlist[currentSongIndex].title}</p>
//         <p className="text-gray-400">{playlist[currentSongIndex].artist}</p>
//       </div>

//       <button
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="absolute top-5 right-2 pr-4 text-yellow-400 hover:text-yellow-300"
//       >
//         {isExpanded ? '▼' : '▲'}
//       </button>
//     </motion.div>
//   );
// };

// export default SongPlayer;
