import React from 'react'
import {Avatar, Menu} from "@mantine/core"

const profileMenu = ({user, logout}) => {
  return (
    <Menu>
        <Menu.Target>
            <Avatar src={user?.picture} alt="user Image" radius={"xl"}/>
        </Menu.Target>

        <Menu.Dropdown onClick={() => {
          localStorage.clear()
          logout()
        }}>
            Logout
        </Menu.Dropdown>
    </Menu>
    
  )
}

export default profileMenu