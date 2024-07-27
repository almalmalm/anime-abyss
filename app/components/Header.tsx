import React from 'react'
import { Logo } from './Logo'
import { Search } from './Search'
import { Person } from './Person'

export const Header = () => {
    return (
        <div className="header">
            <Logo />
            <div className="menu">
                <Search />
                <Person />
            </div>
        </div>
    )
}
