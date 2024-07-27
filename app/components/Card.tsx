import React from 'react'
import { CardTitle } from './CardTitle'

export const Card = ({ title }) => {
    return (
        <div className="card">
            <span>{title}</span>
            <CardTitle />
        </div>
    )
}
