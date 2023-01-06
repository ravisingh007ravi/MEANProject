import React from 'react'
import { MenuData } from './MenuData.js'
import './style.css'

const Index = (props) => {
  return (
    <div className='NavbarItem'>
      <h1 className='logo'>{props.Ravi}
        <i className='fab fa-react'></i>
      </h1>
      <ul className='menu'>
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.CName}>
                <i className={item.icon}></i>{item.titlle}
              </a>
            </li>)
        })}

      </ul>

    </div>
  );
}

export default Index
