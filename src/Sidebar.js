import React from 'react';
import './App.css';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar backgroundColor="#ff6700" className="side">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked" className="active">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Work" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="briefcase">Work Experience & Skills</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tasks" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tasks">Tasks</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Myproject" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="cubes">MyProject</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Leaves" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="calendar">Leaves and Leave Bank</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Bankdetails" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="university">Bank Details</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Logout" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="times">LogOut</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;