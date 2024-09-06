import { useState, useEffect } from 'react'

export default function App() {

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
    <div className='flex gap-5 flex-col'>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id earum, consectetur excepturi provident qui commodi natus nisi dignissimos. Illo earum est culpa iure facere error, laborum id eius voluptatibus.</p>
      <div className="w-11 h-5 bg-orange-500 "></div>
      <div>
        <button className='mt-5 p-2 border-2 border-slate-800' onClick={handleDarkMode}>Toggle Mode</button>
      </div>
    </div>
  )
}
