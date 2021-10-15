import React from 'react'
import { Buttons } from './components/Buttons'
import { Card } from './components/Card'
import { NavBar } from './components/NavBar'

export const RecipesApp = () => {
    return (
        <div className="container">
        <div className="background"></div>
            <NavBar />
            


            <div className="title">
                <h1>Descubre nuevas recetas de tu gusto a un sólo click</h1>
                
                <div className="btn__container">
                    <Buttons />
                </div>
            </div>

            <Card />

            
            

        </div>
    )
}
