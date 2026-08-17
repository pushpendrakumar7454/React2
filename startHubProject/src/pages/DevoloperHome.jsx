import React from 'react'
import DeveloperHero from '../components/DeveloperHero'
import DeveloperStats from '../components/DeveloperStats'
import DeveloperExplore from '../components/DeveloperExplore'
import RecommendedStartups from '../components/RecommendedStartups'
import LatestStartups from '../components/LatestStartups'

const DevoloperHome = () => {
    return (
        <div className='min-h-screen bg-slate-950 p-6'>
             <DeveloperHero/>
             <DeveloperStats/>
             <RecommendedStartups/>
             <LatestStartups/>
        </div>
    )
}

export default DevoloperHome
