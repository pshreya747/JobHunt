import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'

const CompaniesTable = () => {
    const { companies=[] } = useSelector(store => store.company);
    return (
        <div>
            <Table>
                <TableCaption>A list of your registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead classname="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        companies.length<= 0 ? (<span>You haven't registered any company yet.</span> ): (
                            <>

                                {
                                    companies?.map((company) => {
                                        return (
                                            < div key={company._id}>
                                                <TableCell>
                                                    <Avatar>
                                                        <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"></AvatarImage>
                                                    </Avatar>
                                                </TableCell>
                                                <TableCell>{company.name}</TableCell>
                                                <TableCell>{company.createdAt}</TableCell>
                                                <TableCell classname='text-right cursor-pointer'>
                                                    <Popover>
                                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                                        <PopoverContent classname="w-32">
                                                            <div className='flex items-center gap-2
                             w-fit cursor-pointer'>
                                                                <Edit2 className='w-4' />
                                                                <span>Edit</span>
                                                            </div>
                                                        </PopoverContent>
                                                    </Popover>
                                                </TableCell>
                                            </div>
                                        )
                                    })
                                }

                            </>
                        )
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable