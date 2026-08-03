import React from 'react'
import Dashboard from '../components/Dashboard'
import StartupFeed from "../components/StartupFeed";

const Home = () => {
    return (
        <div className='bg-slate-950'>
            <Dashboard/>
            <StartupFeed/>
        </div>
    )
}

export default Home
