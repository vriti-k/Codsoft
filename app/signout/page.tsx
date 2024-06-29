"use client";

import { SignedOut } from '@clerk/nextjs';
import React from 'react'

function page() {
  return (
    <div>
      <SignedOut/>
    </div>
  )
}

export default page
