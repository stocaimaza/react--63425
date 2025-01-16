import React from 'react'

const Caja = ({titulo, children}) => {
  return (
    <div>
        <h1> {titulo} </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum distinctio qui quis quo ad ut eligendi laborum assumenda a voluptas quas voluptate nesciunt modi, rem eius architecto autem veritatis.</p>
        {children}
    </div>
  )
}

export default Caja