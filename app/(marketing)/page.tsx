import { Button } from '@/components/ui/button';
import { Medal } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import localFont from "next/font/local"
import { cn } from '@/lib/utils';

// const headingFont = localFont({
//     src: "trello/public/fonts/Barlow,Inter,Poppins,Source_Sans_3/Barlow/Barlow-Black.ttf"
// });
const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
    ],
})
const landingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
        {/* all the items we are creating will be one below another  */}
        <div className={cn(
            "flex items-center justify-center flex-col",
            textFont.className
            )}>
            <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
                <Medal className="h-6 w-6 mr-2" />
                No 1 task management app
            </div>
            <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
                Trello helps teams move and 
            </h1>
            <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit '>
                work forward .
            </div>
        </div>
        <div className={cn(
            'text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto',
            textFont.className,
            )}>
            Collaborate, manage projects, and reach new productivity peaks. From high rises to home office, the way your team works is unique - accomplish it all with Taskify.
        </div>
        <Button className='mt-6' size="lg" asChild>
            {/* using as child it will properly work with the button  */}
            <Link href="/sign-up"> 
            {/* this is how you link a button to a route  */}
                Get Trello for free
            </Link>
        </Button>
    </div>
  )
}

export default landingPage ;
