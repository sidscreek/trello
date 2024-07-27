import React from 'react'

const testLayout = ({
    children,
} : { 
    children: React.ReactNode;
}) => {
  return (
    //this will be applied to all the children elements 
    <div className='h-full'>
        <div>
            This is a navabr
        </div>
        <hr />
      {children}
    </div>
  )
}

export default testLayout
