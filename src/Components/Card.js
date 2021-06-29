import React from 'react'

const Card = ({  currentPerson }) => {
  return (
    <div class="card">
      <div className='img-containerCard'>
        <img src={currentPerson.avatar} alt={currentPerson.name} className='person-img' />
      </div>
      <h3>{currentPerson.name}</h3>
      <h4>{currentPerson.gender}</h4>
      <p>{currentPerson.phone}</p>
      <p>{currentPerson.email}</p>
      <p className="addressText">{currentPerson.address}</p>
      {/* <p>{contacts.about}</p> */}
    </div>
  )
}

export default Card;