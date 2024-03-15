import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import styled from 'styled-components'
import { loginSuccess, logout } from '../state/userSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

// ICONS
import cartIcon from '../icons/cart.png'
import profIcon from '../icons/prof.jpg' 
import dropdown from '../icons/dropdown.png' 
import searchIcon from '../icons/search.png'
import burgerIcon from '../icons/burger.png'
import logo from '../icons/logo.png'
import userIcon from '../icons/user-icon.jpg'

// COMPONENTS
import DropDownContainerPopup from './DropDownContainerPopup'
import CategoryDropdown from './CategoryDropdown'
import BackgroundClose from './BackgroundClose'
import RecentDropDown from './RecentDropDown'
import MobileIconSlide from './MobileIconSlide'
import MobileSearchDropdown from './MobileSearchDropdown'
import AuthorDashboardRestrictionPopup from './AuthorDashboardRestrictionPopup'
import BurgerPopup from './BurgerPopup'

// STYLES
import {
    NavbarContainer,
    LeftContainer,
    MiddleContainer,
    InputSearch,
    Recent,
    RightContainerDesktop,
    LinkContainer,
    Links,
    CategoryLink,
    CategoryPopup,
    ButtonsContainer,
    LoginButton,
    SignupButton,
    UserContainer,
    UserContainerForDesktop,
    CartIcon,
    UserIcon,
    UserDetailsContainer,
    Username,
    Role,
    DropdownIconContainer,
    DropdownIcon,
    UserIconDropDown,
    SearchIconContainer,
    SearchSlide,
    BurgerContainer,
    Burger,
    Logo
} from '../styles/Navbar.style'

const BackgroundCloser = styled.div`
    width:100%;
    height:100vh;
    background-color: black;
    z-index: 19;
    position: fixed;
    top:0;
    left:0;
    opacity:.4;
`


function Navbar(query) {
    // COMPONENTS STATE
    const [openDropdownContainer, setOpenDropdownContainer] = useState(false)
    const [openCategoryDropdown, setOpenCategoryDropdown] = useState(false)
    const [openRecentSearch,setOpenRecentSearch] = useState(false);
    const [openMobileIconSlide, setOpenMobileIconSlide] = useState(false)
    const [openMobileSearchDropdown, setOpenMobileSearchDropdown] = useState(false)

    const [openBurgerDropdown, setOpenBurgerDropdown] = useState(false)

    const [searchValue, setSearchValue] = useState('');

    const [restrictPopup, setRestrictPopup] = useState(false)

    
    // REDUX
    const user = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // SEARCH FUNCTION
    const searchEnterFunction = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search?query=${searchValue}`)
            setOpenRecentSearch(false)
        }
    }


  return (
    <>
    {restrictPopup &&
    <>
    <BackgroundCloser onClick={e => setRestrictPopup(false)} />
    <AuthorDashboardRestrictionPopup setRestrictPopup={setRestrictPopup}  />
    </>
    }
    <NavbarContainer>
            {/* LEFT CONTAINER START */}
            <LeftContainer>
                <Logo src={logo} />
            </LeftContainer>
            {/* LEFT CONRAINER END */}
            
            {/* MIDDLE CONTAINER */}
            <MiddleContainer>
                {/* search input */}
                <InputSearch placeholder='Search Course' value={searchValue}  onChange={e => setSearchValue(e.target.value)} onKeyDown={searchEnterFunction} />
                {/* onClick={e => setOpenRecentSearch(true)} */}
                {openRecentSearch && <RecentDropDown as={motion.div} animate={{y:0,opacity:1}} initial={{y:-10,opacity:0}} transition={{delay:0.1,duration:0.1}} />}
            </MiddleContainer>
            {/* MIDDLE CONTAINER END */}

            {/* RIGHT CONTAINER START */}
            <RightContainerDesktop>
                {/* links */}
                <LinkContainer>
                    {/* home */}
                    <Link to='/'>
                        <Links to='/'>Home</Links>
                    </Link>
                    {/* about us */}
                    <Links>About Us</Links>
                </LinkContainer>
                {/* links end */}

                {/* categories */}
                {/* <CategoryLink onClick={e => setOpenCategoryDropdown(true)}>
                    Category
                </CategoryLink> */}

                {/* MOBILE SEARCH */}
                <SearchIconContainer onClick={e => setOpenMobileSearchDropdown(true)}>
                    <SearchSlide src={searchIcon} />
                </SearchIconContainer>
                <UserContainer>
                {/* MOBILE SEARCH END */}

                {user ? 
                // LOGGED IN START
                <>
                <UserContainerForDesktop>
                {/* <CartIcon src={cartIcon} /> */}
                <UserIcon src={userIcon} />
                <UserDetailsContainer>
                    <Username>{user?.username}</Username>
                    <Role>{user?.role}</Role>
                </UserDetailsContainer>
                    
                <DropdownIconContainer onClick={e => setOpenDropdownContainer(true)}>
                    <DropdownIcon src={dropdown} />
                </DropdownIconContainer>
                </UserContainerForDesktop>
                <UserIconDropDown src={userIcon} onClick={e => setOpenMobileIconSlide(true)}/>
                </>
                // LOGGED IN END
                :
                // LOGGED OUT START
                <ButtonsContainer>
                    {/* DESKTOP */}
                     <LoginButton to='/login'>Login</LoginButton>
                     <SignupButton to='/signup'>Signup</SignupButton>

                     {/* MOBILE AND TABLET */}
                     <BurgerContainer onClick={e => setOpenBurgerDropdown(true)}>
                         <Burger src={burgerIcon} />
                     </BurgerContainer>

                     {/* BURGER POPUP */}
                     {openBurgerDropdown && 
                     <BurgerPopup setOpenBurgerDropdown={setOpenBurgerDropdown} />
                     }
                     
                </ButtonsContainer>
                // LOGGED OUT END
                }

            </UserContainer>
            </RightContainerDesktop>
            {/* RIGHT CONTAINER END */}

            {/* POPUPS */}
            
            {/* BACKGROUND CLOSE */}
            {openDropdownContainer || openCategoryDropdown || openRecentSearch
            ? 
            <BackgroundClose 
                setOpenDropdownContainer={setOpenDropdownContainer}
                setOpenCategoryDropdown={setOpenCategoryDropdown}
                setOpenRecentSearch={setOpenRecentSearch}
                /> 
            : ''}
            {/* DROPDOWN DESKTOPMODE */}
            {openDropdownContainer 
            &&
            <DropDownContainerPopup setRestrictPopup={setRestrictPopup} setOpenDropdownContainer={setOpenDropdownContainer} as={motion.div} animate={{x:0,opacity:1,}} initial={{x:10,opacity:.6}} transition={{delay:0.1,duration:0.2,type:'spring',stiffness:500}}/> 
            }

            {/* CATEGORY DROPDOWN */}
            {openCategoryDropdown
                &&
                <CategoryDropdown as={motion.div} animate={{y:0,opacity:1}} initial={{y:-10,opacity:0}} transition={{delay:0.1,duration:0.1}}/> 
            }

            {/* MOBILE ICON DROPDOWN */}
            {openMobileIconSlide && <MobileIconSlide setRestrictPopup={setRestrictPopup} setOpenMobileIconSlide={setOpenMobileIconSlide} as={motion.div} animate={{y:0,opacity:1}} initial={{y:-20,opacity:0}} transition={{delay:0.1,duration:0.1}}/>}

            {/* MOBILE SEARCH DROPDOWN */}
            {openMobileSearchDropdown && <MobileSearchDropdown searchValue={searchValue} setSearchValue={setSearchValue} setOpenMobileSearchDropdown={setOpenMobileSearchDropdown} as={motion.div} animate={{y:0,opacity:1}} initial={{y:-20,opacity:0}} transition={{delay:0.1,duration:0.1}}/>}
            
        </NavbarContainer>
    </>
        
  )
}

export default Navbar