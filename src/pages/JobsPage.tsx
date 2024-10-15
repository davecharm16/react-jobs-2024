import React from 'react'
import JobListings from '../components/JobListings'

const JobsPage = ():React.ReactElement => {
  
  return (
    <section className='bg-blue px-4 py-6'>
      <JobListings/>
    </section>
  )
}

export default JobsPage