import React from 'react'
import DeveloperHero from '../components/DeveloperHero'
import DeveloperStats from '../components/DeveloperStats'

const DevoloperHome = () => {
    return (
        <div className='min-h-screen bg-slate-950 p-6'>
             <DeveloperHero/>
             <DeveloperStats/>
        </div>
    )
}

export default DevoloperHome
