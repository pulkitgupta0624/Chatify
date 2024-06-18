import React from 'react'

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'>
            <h1>CHATIFY</h1>
        </header>

        { children }
    </>
  )
}

export default AuthLayouts