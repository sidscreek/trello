import { OrganizationSwitcher } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import React from 'react'

const organizationPage = () => {
    //to access any auth related information this is how you use this 
    const { userId, orgId} = auth();
  return (
    <div>
      {/* <OrganizationSwitcher 
        hidePersonal/> */}
        Orgaisation page
    </div>
  )
}

export default organizationPage
