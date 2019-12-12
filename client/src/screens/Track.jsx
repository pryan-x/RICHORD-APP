import React, { Component } from 'react'
import { getTrackById } from '../services/calls'

const sounds = {
    A: require('./sounds/piano-a.wav'),
    B: require('./sounds/piano-b.wav'),
    C: require('./sounds/piano-c.wav'),
    D: require('./sounds/piano-d.wav'),
    E: require('./sounds/piano-e.wav'),
    F: require('./sounds/piano-f.wav'),
    G: require('./sounds/piano-g.wav'),
}

class Track extends Component {

    constructor() {
        super()
        this.state = {
            track: null,
            play: false,
            

        }
    }


    async componentDidMount() {
        this.fetchTrack()

    }

    fetchTrack = async () => {
        try {
            const track = await getTrackById(this.props.match.params.id)
            console.log(track.track)
            this.setState({ track })

        } catch (err) {
            console.error(err)
        }
    }

    playTracks = () => {
        this.timer();
    }

    timer = () => {
        this.start();

        setTimeout(() => {
            clearInterval(this.start);
        })
    }

    start=()=> {
        
        const timeline = this.state.track.track;
        let i = 0;
        let myVar = setInterval(()=>{
            if (i > 2000) {
                clearInterval(myVar)
                console.log('SONG IS DONE')
            }
            if (timeline[i]) {
                
                for (let k = 0; k < timeline[i].length; k++) {
                    console.log('playing sound file at MS:', i)
                    
                    this.playSound(timeline[i][k]);
                }
            }
            i = i + 1;
        }, 1);
    }

    playSound = (sound) => {
        
        let audio = new Audio()
        audio.src = sounds[sound]
        audio.play()

        console.log('playing sound file:', sounds[sound]);
    }
 
    

    render() {
        return (
            this.state.track &&
            <>
                <h1>hello</h1>
                <button onClick={this.playTracks}> play </button>

            </>
        )
    }
}

export default Track

