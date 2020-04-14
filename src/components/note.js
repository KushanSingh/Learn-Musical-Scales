import React, { useState, useEffect, useRef } from 'react'

export default function Note({className, name, sound, keyPressed}) {
    const [isHeld, setIsHeld] = useState(false)
    const btnRef = useRef(null)
    const playSound = () => {
        if (keyPressed.includes(name)) {
            if(!isHeld) {
                setIsHeld(true)
                var id = sound.play()
                sound.on('play', function() {
                    sound.fade(1, 0, 2500, id)
                })
            }
            btnRef.current.classList.add('highlight')
        } else {
            setIsHeld(false)
            btnRef.current.classList.remove('highlight')
        }
    }
    useEffect(() => {
        playSound()
    })
    return (
        <div ref={btnRef} key={name} name={name} sound={sound} className={className}>
            {name}
        </div>
    )
}