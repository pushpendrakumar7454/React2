import React from 'react'
import DeveloperHero from '../components/DeveloperHero'
import DeveloperStats from '../components/DeveloperStats'
import DeveloperExplore from '../components/DeveloperExplore'

const DevoloperHome = () => {
    return (
        <div className='min-h-screen bg-slate-950 p-6'>
             <DeveloperHero/>
             <DeveloperStats/>
             <DeveloperExplore/>
        </div>
    )
}

export default DevoloperHome
