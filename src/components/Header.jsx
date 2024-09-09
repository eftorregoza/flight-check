import React from "react"

const Header = () => {
    return (
      <header className="flex gap-2 justify-between border-0 border-slate-600">
        <h1>Header</h1>
        <ul className="flex gap-2">
            <li>Search</li>
            <li>About</li>
        </ul>
      </header>
    )
}

export default Header