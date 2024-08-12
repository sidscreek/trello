// "use client";
// import { OrganizationSwitcher } from '@clerk/nextjs';
// import { auth } from '@clerk/nextjs/server';
// import React from 'react'

import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";




const organizationPage = async () => {
    //to access any auth related information this is how you use this 
    // const { userId, orgId} = auth();
    // async function create(formData: FormData){
    //   "use server";
    //   const title = formData.get("title") as string;
    //   await db.board.create({
    //     data: {
    //       title,
    //     }
    //   });
    // }
  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y-4 ">
      {/* <OrganizationSwitcher 
        hidePersonal/> */}
       <form action={create}>
          <input 
            id="title"
            name="title"
            required
            placeholder="Enter a board title"
            className="border-black border p-1"
          />

          <Button type="submit">
            Submit
          </Button>
       </form>
       <div className="space-y-2">
         {boards.map((board) => (
          <div key={board.id}>
            Board title: {board.title}
          </div>
         ))}
       </div>
    </div>
  )
}

export default organizationPage
