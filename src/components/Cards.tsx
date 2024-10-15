import React, { PropsWithChildren } from 'react'

type Props =  {
  children : React.ReactNode,
  bg? : string
}

const Cards = ({children, bg = 'bg-gray-100'}: PropsWithChildren<Props>): React.ReactElement => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md `}>
      {
        children
      }
    </div>
  )
}

export default Cards
