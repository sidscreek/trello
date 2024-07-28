"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useOrganizationList } from "@clerk/nextjs"
const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if(!setActive) return;

    setActive({
        organization: params.organisationId as string,
    });
  }, [setActive, params.organisationId]) //this effect will only be called once organizationId changes 

  return null;
}

export default OrgControl
