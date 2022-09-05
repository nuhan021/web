import { Outlet, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./css/Layout.css";
const Layout = () => {
    return (
        <>
            <div className="navbar" id="navbar">
        <div className="profile"></div>
        <h2 className="name">Nuhan Chowdhury</h2>
        <p>UI/UX/DESIGNER <span style={{ color: 'black' }}>IN BANGLADESH</span></p>
        <nav>
          <ul className="nav_ul">
            <li className='nav_li active2'>
              <NavLink className='nav_link' to="/"><Icon icon="ant-design:home-filled" /> Home</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/about" ><Icon icon="ic:baseline-roundabout-right" /> about</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/experience"><iconify-icon icon="eos-icons:job"></iconify-icon>experience</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/blog"><Icon icon="carbon:blog" /> blog</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/services"><iconify-icon icon="carbon:cloud-satellite-services"></iconify-icon>services</NavLink>
            </li>
            
            <li className='nav_li'>
              <NavLink className='nav_link' to="/contact"><Icon icon="fluent:contact-card-48-filled" /> Contact</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/skills"><iconify-icon icon="foundation:social-skillshare"></iconify-icon>skills</NavLink>
            </li>
          </ul>
        </nav>

        <footer> <small>&copy; Copyright 2018, All rights reserved by Nuhan Chowdhury</small> </footer>  

        <div className="icons">
        <Icon icon="fa:facebook-official" />
        <Icon icon="fa-brands:instagram-square" />
        <Icon icon="ant-design:whats-app-outlined" />
        <Icon icon="fa:github-square" />
        <Icon icon="fa:twitter-square" />
        </div>
      </div>

            <Outlet />
        </>
    )
};

export default Layout;