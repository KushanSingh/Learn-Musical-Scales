import React from 'react'
import Notes from './notes'

export default class Piano extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            octaves: 5,
            scaleValue: '',
            scaleType: ''
        }
        this.scaleKey = null
        this.addOctaves = this.addOctaves.bind(this)
        this.reduceOctaves = this.reduceOctaves.bind(this)
        this.getStartNote = this.getStartNote.bind(this)
        this.getScaleType = this.getScaleType.bind(this)
    }
    addOctaves() {
        if(this.state.octaves < 5) {
            this.setState({
                octaves: this.state.octaves + 1
            })
        }
    }
    reduceOctaves() {
        if(this.state.octaves > 3) {
            this.setState({
                octaves: this.state.octaves - 1
            })
        }
    }
    getStartNote(event) {
        event.target.blur()
        this.setState({
            scaleValue: event.target.value
        })
        this.scaleKey = event.target.value + 1
    }
    getScaleType(event) {
        event.target.blur()
        this.setState({
            scaleType: event.target.value
        })
    }
    render() {
        return (
            <div className="piano">
                <div className='pianoHeader'>
                    <button onClick={this.addOctaves}> Add Octaves </button>
                    <button onClick={this.reduceOctaves}> Reduce Octaves </button>
                    <select value={this.state.scaleValue} name="key" onChange={this.getStartNote}>
                        <option disabled value=""> Select a key! </option>
                        <option value="C"> C </option>
                        <option value="C#"> C# </option>
                        <option value="D"> D </option>
                        <option value="E"> E </option>
                        <option value="F"> F </option>
                        <option value="F#"> F# </option>
                        <option value="G"> G </option>
                        <option value="G#"> G# </option>
                        <option value="A"> A </option>
                        <option value="A#"> A# </option>
                        <option value="B"> B </option>
                    </select>
                    <select value={this.state.scaleType} name="scaleType" onChange={this.getScaleType}>
                        <option disabled value=""> Select a mode! </option>
                        <option value="ionian"> Major/Ionian </option>
                        <option value="dorian"> Dorian </option>
                        <option value="phrygian"> Phrygian </option>
                        <option value="lydian"> Lydian </option>
                        <option value="mixolydian"> Mixolydian </option>
                        <option value="aeolian"> Minor/Aeolian </option>
                        <option value="locrian"> Locrian </option>
                    </select>
                </div>
                <Notes octaves={this.state.octaves} scaleKey={this.scaleKey} scaleType={this.state.scaleType} />
            </div>
        )
    }
}
