import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//Menu
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SidebarLabelActive = styled.span`
  margin-left: 16px;
  color : #ffffff
`;

//SubMenu
const DropdownLink = styled(Link)`
  background: #1C2340;
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

function whichMenu (menu, curMenu, item) {
    console.log(menu)
    console.log(curMenu)

    if (menu == curMenu){
        return (
            <>
                {item.icon}
                <SidebarLabelActive>{item.title}</SidebarLabelActive>
            </>
        )
    }else{
        return (
            <>
                <img width={"11"}/>
                <SidebarLabel>{item.title}</SidebarLabel>
            </>
        )
    }
}

const Submenu = ({ item, activePage, menu, curMenu }) => {
    let [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink onClick={item.subNav && showSubnav}>
                {console.log(item.subNav && showSubnav)}
                {console.log(item.subNav && subnav)}
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
            </SidebarLink>

            {subnav &&
            item.subNav.map((item, index) => {
                return (
                    <DropdownLink key={index} to={item.path} >
                        {index == activePage
                            ?
                               whichMenu(menu, curMenu, item)
                            :
                                <>
                                    <img width={"11"}/>
                                    <SidebarLabel>{item.title}</SidebarLabel>
                                </>
                            }
                    </DropdownLink>
                );
            })}
        </>
    );
};

export default Submenu;