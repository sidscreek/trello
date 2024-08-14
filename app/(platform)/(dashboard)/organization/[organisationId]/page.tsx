// "use client";
// import { OrganizationSwitcher } from '@clerk/nextjs';
// import { auth } from '@clerk/nextjs/server';
// import React from 'react'

import { Separator } from "@/components/ui/separator";
import { Info } from "./_components/Info";
import BoardList from "./_components/BoardList";

const organizationPage = async () => {
  return (
    <div className="w-full mb-20">
      <Info />
      <Separator className="my-4"/>
      <div className="px-2 md:px-4">
          <BoardList />
      </div>
    </div>
  );
};

export default organizationPage
