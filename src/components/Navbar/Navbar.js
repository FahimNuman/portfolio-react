import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/image/logo-fahim-icon.png';

const Navbar = () => {
    return (
        <div className='mx-auto shadow-2xl border border-spacing-1 border-cyan-400 p-5 rounded-md  mb-10'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/'> <img src={logo} alt="" /></Link>

                
                </div>
                <div className="flex-none ">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><Link to="/blog">Blog</Link></li>
                        
                        <li><Link>About</Link></li>

                        <li><Link>Skill</Link></li>
                        <li tabIndex={0}>
                            <Link>
                                
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-base-100">
                                <li><Link>Login</Link></li>
                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;