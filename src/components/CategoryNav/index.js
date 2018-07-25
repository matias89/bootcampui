import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CategoryNav(){
    return <ul class="nav flex-column itemColorNav">
        <li class="nav-item">
			<NavLink to='/products' className='nav-link'>Todos</NavLink>
		</li>
		<li class="nav-item">
			<NavLink to='/cervezas' className='nav-link'>Cervezas</NavLink>
		</li>
		<li class="nav-item">
			<NavLink to='/fernet' className='nav-link'>Fernet</NavLink>
		</li>
		<li class="nav-item">
    		<NavLink to='/whisky' className='nav-link'>Whisky</NavLink>
		</li>
		<li class="nav-item">
			<NavLink to='/gaseosas' className='nav-link'>Gaseosas</NavLink>
		</li>
	</ul>
}