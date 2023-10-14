import React from 'react'
import dynamic from 'next/dynamic';
const WhiteLabel = dynamic(()=>import("@/components/WhiteLabel"));

const Page = () => {
  return (
    <WhiteLabel/>
  )
}

export default Page