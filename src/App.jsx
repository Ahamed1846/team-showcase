import React from 'react'
import TeamMemberCard from './components/TeamMemberCard'

let members = [
  { name: "Ahamed", job: "SDE-2" },
  { name: "Ahamed", job: "SDE-2" },
  { name: "Ahamed", job: "SDE-2" },
  { name: "Ahamed", job: "SDE-2" },
  { name: "Ahamed", job: "SDE-2" },
  { name: "Ahamed", job: "SDE-2" },
  { name: "Ahamed", job: "SDE-2" },
]

function App() {
  return (
    <div className="bg">
      {members.map((mem) =>
        <TeamMemberCard name={mem.name} job={mem.job} />
      )}

    </div>
  )
}

export default App