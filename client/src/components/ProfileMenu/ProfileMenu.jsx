import './ProfileMenu.css'
import React, { useState } from 'react'
import {Avatar, Button, Group, Menu, Badge} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = ({user, logout}) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  
  const handleToggleDropdown = () => {
    setDropdownOpened((prev) => !prev);
  };

  const navigate = useNavigate();


  return (
    <Menu
      opened={dropdownOpened}
      onClose={() => setDropdownOpened(false)}
      control={
        <Button onClick={handleToggleDropdown} variant="link" style={{ padding: 0 }}>
          <Avatar src={user?.picture} alt='user image' radius={"xl"} />
        </Button>
      }
      position="bottom"
      positionDependencies={['top', 'left']}
    >
      <Group>
        <Menu.Item className="avatar" onClick={() => navigate("./favourites", {replace: true})}>
    
          Favourites
        </Menu.Item>
        <Menu.Item className="avatar" onClick={() => navigate("./bookings", {replace: true})}>
          Bookings
        </Menu.Item>
        <Menu.Item
          className="avatar"
          onClick={()=>{
                localStorage.clear();
                logout()
            }}>
          Logout
        </Menu.Item>
      </Group>
    </Menu>
      
  )
}

export default ProfileMenu





// const ProfileMenu = () => {
//   const [dropdownOpened, setDropdownOpened] = useState(false);

//   const handleToggleDropdown = () => {
//     setDropdownOpened((prev) => !prev);
//   };

//   const handleLogout = () => {
//     // Implement your logout logic here
//     console.log('Logout clicked');
//   };

//   return (
    
//   );
// };

// import {Avatar, Button, Group, Dropdown, Badge} from '@mantine/core'


//<div style={{ padding: '8px 12px' }}>
{/* <Avatar size="lg" radius="lg" src="https://example.com/avatar.jpg" alt="User Avatar" />
<div style={{ marginTop: 8 }}>
  <strong>Your Name</strong>
  <Badge style={{ marginLeft: 8 }} color="teal">
    Pro
  </Badge>
</div>
</div> */}



// <Menu>
//         <Menu.Target>
//         <Button onClick={handleToggleDropdown} variant="link" style={{ padding: 0 }}>
//           <Avatar src={user?.picture} alt='user image' radius={"xl"} />
//         </Button>
            
//         </Menu.Target>
//         <Menu.Dropdown>
//             <Menu.Item>
//                 Favourites
//             </Menu.Item>
//         </Menu.Dropdown>
//       </Menu>