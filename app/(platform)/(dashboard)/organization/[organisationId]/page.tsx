// "use client";
// import { OrganizationSwitcher } from '@clerk/nextjs';
// import { auth } from '@clerk/nextjs/server';
// import React from 'react'

import { Info } from "./_components/Info";

const organizationPage = async () => {
  return (
    <div className="w-full mb-20">
      <Info />
    </div>
  );
};

export default organizationPage
