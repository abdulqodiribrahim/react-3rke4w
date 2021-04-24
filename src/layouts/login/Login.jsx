import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";

import "mdbreact/dist/css/mdb.css";
import {MDBContainer, MDBCol, MDBRow, MDBInput, MDBBtn} from "mdbreact";
import "./Login.css";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            email : "",
            password : "",
            passwordState : "password",
            iconPassword : "/asset/iconHide.png"
        };
    }

    onChange = (e) => {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    unhide = (e) => {
        console.log("klik")
        if(this.state.passwordState == "password"){
            this.setState({
                passwordState: "text",
                iconPassword : "/asset/iconUnhide.png"
            })
        }else {
            this.setState({
                passwordState: "password",
                iconPassword : "/asset/iconHide.png"
            })
        }
    }

    gotoRegister = () =>{
        this.props.history.push("/register");
    }

    gotoGudang = () =>{
        this.props.history.push("/master-data/gudang");
    }

    render() {
        const{email, password} = this.state;
        return (
            <div className={"containerCC"}>
                <MDBContainer className={"mdbContainerCC"}>
                    <MDBRow center className={"rowCC"}>
                        <MDBCol className={"p-5"} lg={"5"}>
                            <div className={"px-5 colCC"}>
                                <h2 className={"text-center strong textCC my-5"}> Welcome ! </h2>
                                {/*Email*/}
                                <MDBRow className={"inputCC my-3"}>
                                    <MDBCol md={"1"}>
                                        <img width={"30px"} height={"30px"} src={"/asset/iconUser.png"}/>
                                    </MDBCol>
                                    <MDBCol md={"11"}>
                                        <div className={"mx-2 form-outline form-white"}>
                                            <input
                                                id="formControlLg"
                                                color={"white"}
                                                className={"form-control "}
                                                type={"email"}
                                                name={"email"}
                                                value={email}
                                                onChange={this.onChange}
                                            />
                                            <label className="form-label" htmlFor="formControlLg">Email or Login</label>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                {/*Password*/}
                                <MDBRow className={"inputCC my-3"}>
                                    <MDBCol middle md={"1"}>
                                        <img width={"30px"} height={"30px"} src={"/asset/iconPassword.png"}/> </MDBCol>
                                    <MDBCol md={"9"}>
                                        <div className={"mx-2 form-outline form-white"}>
                                            <input
                                                id="formControlLg"
                                                color={"white"}
                                                className={"form-control"}
                                                type={this.state.passwordState}
                                                name={"password"}
                                                value={password}
                                                onChange={this.onChange}
                                            />
                                            <label className="form-label" htmlFor="formControlLg">Password</label>
                                        </div>
                                    </MDBCol>
                                    <MDBCol middle md={"2"}>
                                        <img src={this.state.iconPassword} onClick={this.unhide}/>
                                    </MDBCol>
                                </MDBRow>
                                {/*Button*/}
                                <div className={"my-5"} align={"center"}>
                                    <MDBBtn className="signup-btn" onClick={this.gotoRegister}>Sign Up</MDBBtn>
                                    <MDBBtn className={"signin-btn"} gradient="blue" onClick={this.gotoGudang}>Sign In</MDBBtn>
                                </div>
                                {/*Forgot Password*/}
                                <div align={"center"}>
                                    <a> Forgot your password?</a>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol className={"centerCC"} middle lg="7">
                            <img src={"/asset/Logo.png"}/>
                            <h4 className={"my-3 textCC"} >Your currency Dashboard</h4>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>

        );
    }

}

export default withRouter(Login);