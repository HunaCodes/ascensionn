import React from 'react'

export default function Page({children,className}:Readonly<{
  children: React.ReactNode;
  className?: string
}>) {
  return (
    <div className={`snap-start h-screen ${className}`}>
        {children}
    </div>
  )
}
