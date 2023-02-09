document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });

const music = document.querySelector('#audio')
const seekBar = document.querySelector('.seek-bar')
const songName = document.querySelector('.music-name')
const artistName = document.querySelector('.artist-name')
const disk = document.querySelector('.disk')
const currentTime = document.querySelector('.current-time')
const musicDuration = document.querySelector('.song-duration')
const playBtn = document.querySelector('.play-btn')
const forwardBtn = document.querySelector('.forward-btn')
const backwardBtn = document.querySelector('.backward-btn')
//console.log('seekBar', seekBar)

playBtn.addEventListener('click', () =>{
    if(playBtn.className.includes('pause'))
    {
        music.play()
    }else
    {
        music.pause()
    }
    playBtn.classList.toggle('pause')
    disk.classList.toggle('play')
})

const setMusic = (i) => {
    seekBar.value = 0
    let song = songs [i]
    currentMusic = i
    music.src = song.path
    songName.innerHTML = song.name
    artistName.innerHTML = song.artist
    disk.getElementsByClassName.backgroundImage = `url('${ song.cover }')`
    currentTime.innerHTML = '00:00'

    setTimeout(() => {
            seekBar.max = music.duration
            console.log('duration', music.duration)
            musicDuration = innerHTML = formatTime(music.duration)
        }, 700)
}
setMusic(0)

const formatTime = (time) => {
    let minutes = Math.floor(time/60)
    if(minutes < 10)
    {
        minutes = `0${ minutes }`
    }
    let seconds = Math.floor(time % 60)
    if(seconds < 10)
    {
        seconds = `0${ seconds }`
    }
    return `${ minutes } : ${ seconds }`
}

setInterval(() => {
        seekBar.value = music.currentTime
        currentTime.innerHTML = formatTime(music.currentTime)
        if(Math.floor(music.currentTime === Math.floor(seekBar.max)))
        {
            forwardBtn.click()
        }
}, 1000)

forwardBtn.addEventListener('click', () => {
        if(currentMusic >= songs.length - 1)
        {
            currentMusic = 0
        }else
        {
            currentMusic++
        }
        setMusic(currentMusic)
        playMusic()
})

backwardBtn.addEventListener('click', () => {
    if(currentMusic <= 0)
    {
        currentMusic = songs.length - 1
    }else
    {
        currentMusic--
    }
    setMusic(currentMusic)
    playMusic()
})

const playMusic = () => {
    music.play()
    playBtn.classList.remove('pause')
    disk.classList.add('play')
}