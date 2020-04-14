import React from 'react';
import Note from './note'
import NoteData from '../noteData'
import WebMidi from 'webmidi'

function handleNoteOn(e, divs, midiNotesPressed) {
  var midiNote = e.note.name + (e.note.octave - 1)
  var velocity = e.velocity
  var note = NoteData.find(nd => nd.name === midiNote)
  var id = note.sound.play()
  note.sound.on('play', function() {
    note.sound.fade(velocity, 0, 2000, id)
  })
  var requiredDiv = divs.find(div => div.getAttribute('name') === midiNote)
  requiredDiv.classList.add('highlight')
  midiNotesPressed = [...midiNotesPressed, requiredDiv]
}

function handleNoteOff(e, divs, midiNotesPressed) {
  var midiNote = e.note.name + (e.note.octave - 1)
  midiNotesPressed = midiNotesPressed.filter(div => div.getAttribute('name') !== midiNote)
  var requiredDiv = divs.find(div => div.getAttribute('name') === midiNote)
  requiredDiv.classList.remove('highlight')
}


class Notes extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      keyPressed: [],
      notes: NoteData.slice(0, this.props.octaves * 12 + 1)
    }
    this.scales = []
    this.currentOctave = 1
    this.changePlayableRange = this.changePlayableRange.bind(this)
    this.getNotePressed = this.getNotePressed.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.renderNote = this.renderNote.bind(this)
    this.generateNotes = this.generateNotes.bind(this)
    this.generateScales = this.generateScales.bind(this)
  } 
  componentDidMount() {
    WebMidi.enable(function (err) {
      if (err) console.log('Error could not load')
      
      console.log('Enabled')
      // Check your midi instrument's name with the command: console.log(WebMidi.inputs)
      var input = WebMidi.getInputByName('Digital Keyboard')
      if(input === false) return
      var divs = Array.from(document.querySelectorAll('.key'))
      var midiNotesPressed = []
      input.addListener('noteon', 'all', (e) => handleNoteOn(e, divs, midiNotesPressed))
      input.addListener('noteoff', 'all', (e) => handleNoteOff(e, divs, midiNotesPressed))
    }, true)
    document.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('keyup', this.handleKeyUp)
  }
  componentDidUpdate(prevProps) {
    if(this.props.octaves !== prevProps.octaves) {
      this.setState({
        notes: NoteData.slice(0, this.props.octaves * 12 + 1)
      })
    }
  }  
  changePlayableRange = (e) => {
    if(e.key === 'z' && this.currentOctave > 1) {
      this.currentOctave -= 1
    }
    if(e.key === 'x' && this.currentOctave < this.props.octaves) {
      this.currentOctave += 1
    }
    return 
  }
  getNotePressed = (e) => {
    if(e.key === 'a') return 'C' + this.currentOctave
    if(e.key === 'w') return 'C#' + this.currentOctave
    if(e.key === 's') return 'D' + this.currentOctave
    if(e.key === 'e') return 'D#' + this.currentOctave
    if(e.key === 'd') return 'E' + this.currentOctave
    if(e.key === 'f') return 'F' + this.currentOctave
    if(e.key === 't') return 'F#' + this.currentOctave
    if(e.key === 'g') return 'G' + this.currentOctave
    if(e.key === 'y') return 'G#' + this.currentOctave
    if(e.key === 'h') return 'A' + this.currentOctave
    if(e.key === 'u') return 'A#' + this.currentOctave
    if(e.key === 'j') return 'B' + this.currentOctave
    if(e.key === 'k') return 'C' + (this.currentOctave + 1)
    if(e.key === 'o') return 'C#' + (this.currentOctave + 1)
    if(e.key === 'l') return 'D' + (this.currentOctave + 1)
    if(e.key === 'p') return 'D#' + (this.currentOctave + 1)
    if(e.key === ';') return 'E' + (this.currentOctave + 1)
    if(e.key === '\'') return 'F' + (this.currentOctave + 1)
    return null
  }
  handleKeyDown = (e) => {
    this.changePlayableRange(e)
    const key = this.getNotePressed(e)
    if (key && !e.repeat && !this.state.keyPressed.includes(key)) {
      this.setState({keyPressed: [...this.state.keyPressed, key]})
    }
  }
  handleKeyUp = (e) => {
    const temp = this.state.keyPressed.slice()
    const key = this.getNotePressed(e)
    this.setState({keyPressed: temp.filter(note => note !== key)})
  }
  renderNote = (note) => {
    var className = 'key'
    if(note.name.search("#") === -1) {
      className = className.concat(' white')
    } else {
      className = className.concat(' black')
    }
    if(this.scales.includes(note.name)) {
      className = className.concat(' scale')
    }
    return (
      <Note key={note.name} sound={note.sound} className={className} name={note.name} keyPressed={this.state.keyPressed} />
    )
  }
  generateScales = () => {
    var pattern = []
    var scale = []
    var noteIndex = this.state.notes.findIndex(note => note.name === this.props.scaleKey)
    scale.push(this.props.scaleKey)
    
    if(this.props.scaleType === "ionian")
      pattern = [2, 2, 1, 2, 2, 2, 1]
    else if(this.props.scaleType === "dorian")
      pattern = [2, 1, 2, 2, 2, 1, 2]
    else if(this.props.scaleType === "phrygian")
      pattern = [1, 2, 2, 2, 1, 2, 2]
    else if(this.props.scaleType === "lydian")
      pattern = [2, 2, 2, 1, 2, 2, 1]
    else if(this.props.scaleType === "mixolydian")
      pattern = [2, 2, 1, 2, 2, 1, 2]
    else if(this.props.scaleType === "aeolian")
      pattern = [2, 1, 2, 2, 1, 2, 2]
    else if(this.props.scaleType === "locrian")
      pattern = [1, 2, 2, 1, 2, 2, 2]

    for (let i = 0; i < this.props.octaves; i++) {
      for (let j = 0; j < pattern.length; j++) { 
        noteIndex += pattern[j]
        if(noteIndex === this.state.notes.length-1) {
          scale.push(this.state.notes[noteIndex].name)
        }
        noteIndex = noteIndex % (this.state.notes.length - 1)
        if(scale.includes(this.state.notes[noteIndex].name))
          break
        scale.push(this.state.notes[noteIndex].name)
      }
    }
    return scale
  }
  generateNotes = () => {
    const noteList = []
    if(this.props.scaleKey && this.props.scaleType)
      this.scales = this.generateScales()
    this.state.notes.forEach(note => {
      noteList.push(this.renderNote(note))
    })
    return noteList
  }
  render() {
    return (
      <section className='notes'>
        {this.generateNotes(this.state.notes)}
      </section>
    )
  }
}

export default Notes;
