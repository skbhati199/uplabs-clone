import React from 'react'
import SidebarItem from './sidebar-item'

export default function Sidebar() {
  return (
    <div>
      <SidebarItem title='Profile Setting' url='/users/edit' />
      <SidebarItem title='Email Setting' url='/users/email_setting' />
      <SidebarItem title='Billing Setting' url='/users/billing' />
    </div>
  )
}
