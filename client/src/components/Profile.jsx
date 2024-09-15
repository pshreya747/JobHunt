import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import { Badge } from './ui/badge'
import UpdateProfileDialog from './UpdateProfileDialog '
import { useSelector } from 'react-redux'




const skills=["Html","CSS","Javascript","ReactJs"]
const isResume = true;

const Profile = () => {
    const [open, setOpen]= useState(false);
    const { user } = useSelector(store => store.auth); 
    
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-x-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"></AvatarImage>
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.bio}</p>
                        </div>
                    </div>
                    <Button  onClick={()=>{setOpen(true)}} className="text-right" variant="outline"><Pen /></Button>
                </div> 
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                    {
                       user?.profile?.skills.length!=0 ? user?.profile?.skills.map((item,index)=>(<Badge key={index}>{item}</Badge>)): <span>NA</span>
                    }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className='text-md font-bold'>Resume</Label>
                    {
                        isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 hover:underline cursor-pointer'> {user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                    }
                </div>
                <div className='max-w-4xl mx-auto bg-white  rounded-2xl'>
                    <h1 className='font-boldtext-lg my-5'>Applied Jobs</h1>
                    <AppliedJobTable/>
                </div>
                 <UpdateProfileDialog  open={open} setOpen={setOpen}/>
            </div>
        </div>
    )
}

export default Profile