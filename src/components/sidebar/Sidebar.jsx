import React, {Component, useState} from 'react';
import { SidebarData } from './SidebarData';
import styled from 'styled-components';
import SubMenu from './Submenu';
import "./Sidebar.css"

const SidebarNav = styled.nav`
    font-size: 18px;
    background: linear-gradient(0.32deg, #1C2340 100%, #1C0F54 0%);
    filter: drop-shadow(0px -5px 25px rgba(0, 3, 32, 0.5));
    height: 100vh;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    position: relative;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const HoriLine = styled.hr`
    position:relative;
    display:block
    background : #e1e9fc; 
    text-align: center;
    border-width: 10px;
    border-height : 10px;
    margin-left:1rem;
    width: 85%;
`;

const FooterWrap = styled.div`
    background: linear-gradient(0.32deg, #1C2340 100%, #1C0F54 0%);
    width : 100%;    
    color: #e1e9fc;
    padding-bottom : 20px;
    padding-left: 20px;
    justify-content: space-between;
    list-style: none;
    &:hover {
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

class Sidebar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fullname : "",
            email : "",
            isActive : props.isActive,
            curMenu : props.curMenu
        }
    }

    render() {
        const {fullname, email, isActive, curMenu} = this.state
        return (
            <>
                {console.log(isActive)}
                <SidebarNav sidebar>
                    <SidebarWrap>
                        {/*Logo*/}
                        <div className={"py-4"} align={"center"}>
                            <img src={"/asset/logoSM.png"}/>
                        </div>

                        {/*Profile*/}
                        <div className={"container mb-4 py-3"} style={{backgroundColor: "#32395E"}}>
                            <div className={"row"}>
                                <div className={"col-3"}>
                                    <img
                                        className={"rounded-circle"}
                                        src={"https://avatars.githubusercontent.com/u/45727096?s=460&u=f4680d3788d290c9512540579d24370a64c71bf2&v=4"}
                                        style={{height:"50px", width:"50px", textAlign: "center"}}
                                    />
                                </div>
                                <div className={"col-9"}>
                                    <div className={"fullnameCC"}>Bagus Bayu Sasongko</div>
                                    <div className={"emailCC"}>bagusbs226@gmail.com</div>
                                </div>
                            </div>
                        </div>

                        {SidebarData.map((item, index) => {
                            return <SubMenu activePage={isActive} menu={item.title} curMenu={curMenu} item={item} key={index} />;
                        })}
                        <HoriLine/>

                        {/*Footer*/}
                        <FooterWrap>
                            <img src={"/asset/iconLogout.png"}/>
                            <SidebarLabel>Logout</SidebarLabel>
                        </FooterWrap>
                    </SidebarWrap>
                </SidebarNav>

            </>
        )
    }
}

export default Sidebar;