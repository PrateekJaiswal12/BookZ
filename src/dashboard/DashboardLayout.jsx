import React from 'react'
import { Outlet } from 'react-router-dom'
import DashBar from "./DashBar"

const DashboardLayout = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row'>
        <DashBar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout
