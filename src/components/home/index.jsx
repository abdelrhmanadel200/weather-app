import React from 'react'
import { useAuth } from '../../index.jsx'

const Home = () => {
    const { currentUser } = useAuth()
    return (
        <div className='text-2xl font-bold pt-14'></div>
    )
}

export default Home
