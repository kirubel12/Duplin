import React from 'react'
import { Poppins } from 'next/font/google'
import Navbar from './Navbar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
  variable: '--font-poppins'
})

const layout = ({children}) => {
  return (
    <div className={`${poppins.variable} font-400 tex-4xl`}>
        <Navbar />
        <main>
            {children}
        </main>
    </div>
  )
}

export default layout