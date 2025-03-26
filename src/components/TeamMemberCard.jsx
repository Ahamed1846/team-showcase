import React from 'react'

function TeamMemberCard({name,job}) {
  return (
    <div className='bgCard'>
        <p>{name}</p>
        <p>{job}</p>
    </div>
  )
}

export default TeamMemberCard