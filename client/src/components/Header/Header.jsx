import React, {useState} from 'react' 
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { Link, NavLink } from 'react-router-dom'
import useHeaderColor from '../../hooks/useHeaderColor'
import { useAuth0 } from '@auth0/auth0-react'
import ProfileMenu from '../ProfileMenu/ProfileMenu'
import { MantineProvider } from '@mantine/core'
import AddPropertyModal from '../AddPropertyModal/AddPropertyModal'
import useAuthCheck from '../../hooks/useAuthCheck.jsx'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false);
  const {loginWithRedirect, isAuthenticated, user, logout} = useAuth0()
  const {validateLogin} = useAuthCheck()

  const handleAddPropertyClick = () => {
    if(validateLogin()) {
      setModalOpened(true);
    }

  }
  
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <=800) {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'> 
            <Link to ="/">
            <img src='./logo.png' alt='logo' width={100}/>
            </Link>
        <MantineProvider>
            <OutsideClickHandler
            onOutsideClick={() =>{
              setMenuOpened(false)
            }}
            >
            <div className='flexCenter h-menu'
            style={getMenuStyles (menuOpened) }
            >
              <NavLink to ="/properties">Properties</NavLink>
              <a href='mailto: bob@gmail.com'>Contact</a>

              {/*add property button 
              <div onClick={handleAddPropertyClick}>Add Property</div>
              <AddPropertyModal
              opened= {modalOpened}
              setOpened ={setModalOpened}
              /> NOT PERFECT RIGHT NOW*/}


          
              {/*login button */}
              
              {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}

            </div>
            </OutsideClickHandler>
            </MantineProvider>

            <div className="menu-icon" onClick={()=> setMenuOpened((prev) =>! prev)}>
              <BiMenuAltRight size={30}/>
            </div>

        </div>

       
    </section>
  )
}

export default Header;


