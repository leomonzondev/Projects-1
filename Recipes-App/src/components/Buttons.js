import React from 'react'
import { handleClick } from '../modules/handleClick'

export const Buttons = () => {
    return (
        <div>
            <button className="btn__principal" onClick={ handleClick }>1</button>
            <button className="btn__principal">2</button>
            <button className="btn__principal">3</button>
            <button className="btn__principal">4</button>
            <button className="btn__principal">5</button>
            <button className="btn__principal">6</button>
            <button className="btn__principal">7</button>
            <button className="btn__principal">8</button>
            <button className="btn__principal">9</button>
            <button className="btn__principal">10</button>

        </div>
    )
}
