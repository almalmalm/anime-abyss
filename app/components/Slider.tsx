import React, { useState } from 'react'
import { Card } from './Card'
import { ShevronLeft } from './ShevronLeft'
import { ShevronRight } from './ShevronRight'

export const Slider = () => {
    const cards = ['1', '2', '3', '4']
    const [firstCardIndex, setFirstCardIndex] = useState(0)
    const cardsNew = rotateArray(cards, firstCardIndex)
    function rotateArray(cards, index) {
        // Make sure the index is within the bounds of the array
        if (index < 0 || index >= cards.length) {
            return 'Index out of bounds'
        }

        // Split the array into two parts
        const part1 = cards.slice(index) // From index to the end
        const part2 = cards.slice(0, index) // From the beginning to index

        // Combine the two parts
        return part1.concat(part2)
    }

    return (
        <div className="slider">
            <button
                onClick={() =>
                    setFirstCardIndex(
                        firstCardIndex <= 2 ? firstCardIndex + 1 : 0
                    )
                }
            >
                <ShevronLeft />
            </button>
            {cardsNew.map((card, i) => (
                <div key={i}>
                    <Card title={card} />
                </div>
            ))}
            <button
                onClick={() =>
                    setFirstCardIndex(
                        firstCardIndex >= 1 ? firstCardIndex - 1 : 3
                    )
                }
            >
                <ShevronRight />
            </button>
        </div>
    )
}
