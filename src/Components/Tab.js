import React from 'react';

const Tab = ({ contacts , setCurrentPerson , currentPerson , lastPerson}) => {
  return (
    <>
      {contacts.map((contact, index) => {
        const { uid, name, status, avatar, phone, email } = contact;
        return (
          <div key={index}>
            <article className="person" onClick={() => setCurrentPerson(uid)} 
            style={{background : `${uid === currentPerson.uid || lastPerson.uid === uid ? '#edf2f7' : ''}` }}
            >
              <img src={avatar} alt={name} />
              <div>
                <h4>{name}</h4>
                <h5>{status} </h5>
                <p className="data">Phone : {phone}</p>
                <p className="data">Mail: {email}</p>
              </div>
            </article>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default Tab;