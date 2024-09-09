import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'

const App = () => {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) ?? window.matchMedia('(prefers-color-scheme: dark)').matches)

    function handleDarkMode() {
        setDarkMode(prev => {
            localStorage.setItem('darkMode', !prev)
            return !prev
        })
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <div className='mx-auto max-w-screen-2xl p-1' id='x--page-body-content'>
            {/* <div className="w-11 h-5 bg-orange-500 "></div> */}
            <Header />
            <div className='absolute top-0 right-1/2'>
                <button
                    className='p-2 border-1 border-slate-600 text-xs'
                    onClick={handleDarkMode}
                >Toggle Mode</button>
            </div>
            <Outlet />
        </div>
    )
}

export default App