import React from 'react'
import { Navbar } from './_components/navbar';
import { Footer } from './_components/footer';

const marketingLayout = ({
    children
} : {
    children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
        <Navbar />
      <main className="flex-grow pt-40 pb-20 bg-slate-100">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default marketingLayout ;
