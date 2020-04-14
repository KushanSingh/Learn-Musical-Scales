import {Howl, Howler} from 'howler'

// Command to change the global volume of all samples
Howler.volume(1)

const NoteData = [
    {
        name: 'C1',
        sound: new Howl({
            src: ['./audio/C1.mp3']
        })
    },
    {
        name: 'C#1',
        sound: new Howl({
            src: ['./audio/Csharp1.mp3']
        })
    },
    {
        name: 'D1',
        sound: new Howl({
            src: ['./audio/D1.mp3']
        })
    },
    {
        name: 'D#1',
        sound: new Howl({
            src: ['./audio/Dsharp1.mp3']
        })
    },
    {
        name: 'E1',
        sound: new Howl({
            src: ['./audio/E1.mp3']
        })
    },
    {
        name: 'F1',
        sound: new Howl({
            src: ['./audio/F1.mp3']
        })
    },
    {
        name: 'F#1',
        sound: new Howl({
            src: ['./audio/Fsharp1.mp3']
        })
    },
    {
        name: 'G1',
        sound: new Howl({
            src: ['./audio/G1.mp3']
        })
    },
    {
        name: 'G#1',
        sound: new Howl({
            src: ['./audio/Gsharp1.mp3']
        })
    },
    {
        name: 'A1',
        sound: new Howl({
            src: ['./audio/A1.mp3']
        })
    },
    {
        name: 'A#1',
        sound: new Howl({
            src: ['./audio/Asharp1.mp3']
        })
    },
    {
        name: 'B1',
        sound: new Howl({
            src: ['./audio/B1.mp3']
        })
    },
    {
        name: 'C2',
        sound: new Howl({
            src: ['./audio/C2.mp3']
        })
    },
    {
        name: 'C#2',
        sound: new Howl({
            src: ['./audio/Csharp2.mp3']
        })
    },
    {
        name: 'D2',
        sound: new Howl({
            src: ['./audio/D2.mp3']
        })
    },
    {
        name: 'D#2',
        sound: new Howl({
            src: ['./audio/Dsharp2.mp3']
        })
    },
    {
        name: 'E2',
        sound: new Howl({
            src: ['./audio/E2.mp3']
        })
    },
    {
        name: 'F2',
        sound: new Howl({
            src: ['./audio/F2.mp3']
        })
    },
    {
        name: 'F#2',
        sound: new Howl({
            src: ['./audio/Fsharp2.mp3']
        })
    },
    {
        name: 'G2',
        sound: new Howl({
            src: ['./audio/G2.mp3']
        })
    },
    {
        name: 'G#2',
        sound: new Howl({
            src: ['./audio/Gsharp2.mp3']
        })
    },
    {
        name: 'A2',
        sound: new Howl({
            src: ['./audio/A2.mp3']
        })
    },
    {
        name: 'A#2',
        sound: new Howl({
            src: ['./audio/Asharp2.mp3']
        })
    },
    {
        name: 'B2',
        sound: new Howl({
            src: ['./audio/B2.mp3']
        })
    },
    {
        name: 'C3',
        sound: new Howl({
            src: ['./audio/C3.mp3']
        })
    },
    {
        name: 'C#3',
        sound: new Howl({
            src: ['./audio/Csharp3.mp3']
        })
    },
    {
        name: 'D3',
        sound: new Howl({
            src: ['./audio/D3.mp3']
        })
    },
    {
        name: 'D#3',
        sound: new Howl({
            src: ['./audio/Dsharp3.mp3']
        })
    },
    {
        name: 'E3',
        sound: new Howl({
            src: ['./audio/E3.mp3']
        })
    },
    {
        name: 'F3',
        sound: new Howl({
            src: ['./audio/F3.mp3']
        })
    },
    {
        name: 'F#3',
        sound: new Howl({
            src: ['./audio/Fsharp3.mp3']
        })
    },
    {
        name: 'G3',
        sound: new Howl({
            src: ['./audio/G3.mp3']
        })
    },
    {
        name: 'G#3',
        sound: new Howl({
            src: ['./audio/Gsharp3.mp3']
        })
    },
    {
        name: 'A3',
        sound: new Howl({
            src: ['./audio/A3.mp3']
        })
    },
    {
        name: 'A#3',
        sound: new Howl({
            src: ['./audio/Asharp3.mp3']
        })
    },
    {
        name: 'B3',
        sound: new Howl({
            src: ['./audio/B3.mp3']
        })
    },
    {
        name: 'C4',
        sound: new Howl({
            src: ['./audio/C4.mp3']
        })
    },
    {
        name: 'C#4',
        sound: new Howl({
            src: ['./audio/Csharp4.mp3']
        })
    },
    {
        name: 'D4',
        sound: new Howl({
            src: ['./audio/D4.mp3']
        })
    },
    {
        name: 'D#4',
        sound: new Howl({
            src: ['./audio/Dsharp4.mp3']
        })
    },
    {
        name: 'E4',
        sound: new Howl({
            src: ['./audio/E4.mp3']
        })
    },
    {
        name: 'F4',
        sound: new Howl({
            src: ['./audio/F4.mp3']
        })
    },
    {
        name: 'F#4',
        sound: new Howl({
            src: ['./audio/Fsharp4.mp3']
        })
    },
    {
        name: 'G4',
        sound: new Howl({
            src: ['./audio/G4.mp3']
        })
    },
    {
        name: 'G#4',
        sound: new Howl({
            src: ['./audio/Gsharp4.mp3']
        })
    },
    {
        name: 'A4',
        sound: new Howl({
            src: ['./audio/A4.mp3']
        })
    },
    {
        name: 'A#4',
        sound: new Howl({
            src: ['./audio/Asharp4.mp3']
        })
    },
    {
        name: 'B4',
        sound: new Howl({
            src: ['./audio/B4.mp3']
        })
    },
    {
        name: 'C5',
        sound: new Howl({
            src: ['./audio/C5.mp3']
        })
    },
    {
        name: 'C#5',
        sound: new Howl({
            src: ['./audio/Csharp5.mp3']
        })
    },
    {
        name: 'D5',
        sound: new Howl({
            src: ['./audio/D5.mp3']
        })
    },
    {
        name: 'D#5',
        sound: new Howl({
            src: ['./audio/Dsharp5.mp3']
        })
    },
    {
        name: 'E5',
        sound: new Howl({
            src: ['./audio/E5.mp3']
        })
    },
    {
        name: 'F5',
        sound: new Howl({
            src: ['./audio/F5.mp3']
        })
    },
    {
        name: 'F#5',
        sound: new Howl({
            src: ['./audio/Fsharp5.mp3']
        })
    },
    {
        name: 'G5',
        sound: new Howl({
            src: ['./audio/G5.mp3']
        })
    },
    {
        name: 'G#5',
        sound: new Howl({
            src: ['./audio/Gsharp5.mp3']
        })
    },
    {
        name: 'A5',
        sound: new Howl({
            src: ['./audio/A5.mp3']
        })
    },
    {
        name: 'A#5',
        sound: new Howl({
            src: ['./audio/Asharp5.mp3']
        })
    },
    {
        name: 'B5',
        sound: new Howl({
            src: ['./audio/B5.mp3']
        })
    },
    {
        name: 'C6',
        sound: new Howl({
            src: ['./audio/C6.mp3']
        })
    }
]

export {NoteData as default}