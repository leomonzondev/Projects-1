import React from 'react'
import { Card } from './components/Card'
import { NavBar } from './components/NavBar'

export const RecipesApp = () => {
    return (
        <div className="container">
            <NavBar />


            <div className="title">
                <h1>Descubre nuevas recetas de tu gusto a un sólo click</h1>
            </div>

            <Card />
            

        </div>
    )
}
