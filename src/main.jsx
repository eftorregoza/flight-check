import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'

import '@fontsource/inter/100.css';  // Thin
import '@fontsource/inter/200.css';  // Extra Light
import '@fontsource/inter/300.css';  // Light
import '@fontsource/inter/400.css';  // Regular
import '@fontsource/inter/500.css';  // Medium
import '@fontsource/inter/600.css';  // Semi Bold
import '@fontsource/inter/700.css';  // Bold
import '@fontsource/inter/800.css';  // Extra Bold
import '@fontsource/inter/900.css';  // Black

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: (<h1>Not Found</h1>),
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
