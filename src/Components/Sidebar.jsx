import React, { Component } from 'react'
import './Sidebar.css'

export default class Sidebar extends Component {

  ShowMenu = () => {
    console.log('click')
    document.getElementById("sidebar").classList.toggle('active')

  }

  render() {
    return (

      <>
        <div className="TopNav">
          <button id='btn' onClick={() => this.ShowMenu(this)}>
            <span class="material-icons-sharp icons">
              menu
            </span>
          </button>
        </div>

        <div className='sidebar' id='sidebar'>
          <ul>
            <li>
              <span class="material-icons-sharp icons">
                dashboard
              </span>
              Dashboard
            </li>
            <li>
              <span class="material-icons-sharp icons">
                bar_chart
              </span>
              Sales
            </li>
            <li >
              <span class="material-icons-sharp icons">
                real_estate_agent
              </span>
              Sales</li>
            <li id='notification'>
              Notifications
              <span class="material-icons-sharp icons" >
                notifications
              </span>
              <small id='notiNumber'>
                +99
              </small>
            </li>
            <li>
              <span class="material-icons-sharp icons">
                account_circle
              </span>
              Profile</li>
            <li>
              <span class="material-icons-sharp icons">
                settings
              </span>
              Settings</li>
            <li >
              <span class="material-icons-sharp icons">
                keyboard_return
              </span>
              Log Out</li>
          </ul>
        </div>
      </>
    )
  }
}
