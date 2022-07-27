import { icons } from 'react-icons'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {BiUserCircle} from 'react-icons/bi'
import {TbMessage} from 'react-icons/tb'
import { useState } from 'react'


export default function Navbar(){
    const [activeClass, setActiveClass] = useState('#')
    return(
    <div>
        <nav>
                <p>EKD</p>
                <div className='nav1'>
                    <ul>
                        <li><a href='#' className={activeClass === '#' ? 'active' :''} ><AiOutlineHome/></a></li>
                        <li><a href='#Projects' onClick={()=>setActiveClass(activeClass === '#Project')} className={activeClass ==='#Project' ? 'active' :''}><MdWorkOutline/></a></li>
                        <li><a href='#About' onClick={()=>setActiveClass(activeClass === '#About')} className={activeClass === '#About' ? 'active' : ''}><BiUserCircle/></a></li>
                        <li><a href='#Contact' onClick={()=>setActiveClass(activeClass ==='#Contact')} className={activeClass === '#Contact' ? 'active' : ''}><TbMessage/></a></li>
                    </ul>
                </div>

                <ul>   
                    <li><a href="#">Home</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>

    </div>)
}