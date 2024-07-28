import React from 'react'
import OrgControl from './_components/OrgControl';

const organisatonIdlayout = ({
    children
} : {
    children: React.ReactNode;
}) => {
  return (
    <>
    <OrgControl />
    {children}
    </>
  )
}

export default organisatonIdlayout
