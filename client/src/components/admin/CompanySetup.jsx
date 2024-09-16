import React from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'

const CompanySetup = () => {
  return (
    <div>
        <Navbar/>
        <div className='max-w-xl mx-auto my-10'>
            <form action="">
                <div className='flex items-center gap-5 p-8'>
                <Button variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold">
                    <ArrowLeft/>
                    <span>Back</span>
                </Button>
                <h1 className='font-bold text-xl'>Company Setup</h1>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CompanySetup