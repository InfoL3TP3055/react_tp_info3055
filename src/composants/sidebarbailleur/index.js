import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';


  export class Sidebarbailleur extends React.Component {
  render() {
  return (
    <div >
          <div className="pt-5 "></div>
   <div style={{ display: 'flex', height: '120vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="black">
        <CDBSidebarHeader style={{backgroundColor:'#4CAF50' }} prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit'}}>
            Bailleur
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/listlocataire" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Mes locataires</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/propriete" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Mes propriétés</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/locaux" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Mes locaux</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Contrats</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Factures</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }} >
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    </div>
  );
}
}

