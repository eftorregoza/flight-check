import { usseState, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital, faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'

// Photo by Oleksandr P: https://www.pexels.com/photo/white-and-blue-passenger-plane-passing-above-green-tree-covered-hill-1003864/

const Home = () => {

    const [form, setForm] = useState({
        searchFlight: 'OOOOO'
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Submitted')
    }

    return (
        <>
            <section className='x--section' id='x--section-search-heading'>
                <div className="text-center">
                    {/* <p className='shadow-gray-800'></p> */}
                    <h1 className='text-emerald-100 [text-shadow:_2px_2px_4px_#1f2937]'>Search Your Flight</h1>
                    <p className='text-gray-300 text-sm lg:text-lg mt-2 [text-shadow:_2px_2px_4px_#1f2937] '>Find the best domestic flights in the Philippines or track your flight details in real-time</p>
                </div>
            </section>
            <section className="x--section">
                <section className="x--section-container">
                    <form onSubmit={handleSubmit} className='x--form-flight-search'>
                        <div className="x--questions-container">
                            <div className='x--form-row'>
                                <div className="x--question x--inline">
                                    <label htmlFor="search">
                                        <h3 className='leading-none text-lg md:text-xl lg:text-2xl'>Search by airline</h3>
                                    </label>
                                    <div className="x--question-input">
                                        <input type="text"
                                            name="searchFlight"
                                            id="search-flight"
                                            value={form.searchFlight}
                                            onChange={handleChange}
                                        />
                                        <div className="x--question-help">
                                            <p>e.g. 5J 567</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='x--form-row mt-2'>
                            <div className="x--actions text-center">
                                <button
                                    type="submit"
                                    className='x--button x--button-primary'
                                ><FontAwesomeIcon icon={faMagnifyingGlassLocation}/> Check Flight Details</button>
                            </div>
                        </div>
                    </form>
                </section>
            </section>
            <main className='x--section'>
                <section className="x--section-container">
                    <h2>Search results</h2>
                    <div id="x--search-results-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum minus quo natus sapiente minima sit quia libero blanditiis eos iure, nulla architecto magni, qui labore officiis aliquam consequatur. Ea?</p>
                    </div>
                </section>
            </main>
            {false && (
                <div>
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quae ipsa in reprehenderit iure suscipit esse impedit? Quibusdam commodi nisi qui accusantium repudiandae a fuga alias. Ea totam itaque illum!</p>
                </div>
            )}
        </>
    )
}

export default Home