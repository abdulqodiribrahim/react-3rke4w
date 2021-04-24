import React, {Component} from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./Register.css";
import {withRouter} from "react-router-dom";

class Register extends Component{
    constructor(props) {
        super(props);
        this.state={
            fullname : "",
            phone :"",
            email :"",
            password : "",
            passwordState : "password",
            iconPassword : "/asset/iconHide.png"
        }
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

    gotoLogin = () => {
        this.props.history.push("/")
    }

    render() {
        const {fullname, phone, email, password} = this.state;
        return(
            <div className={"containerCC"}>
                <MDBContainer className={"mdbContainerCC"}>
                    <MDBRow center className={"rowCC"}>
                        <MDBCol className={"p-5"} lg={"5"}>
                            <div className={"px-5 colCC"}>
                                <h2 className={"text-center strong textCC my-5"}> Register </h2>
                                {/*Fullname*/}
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
                                                type={"text"}
                                                name={"fullname"}
                                                value={fullname}
                                                onChange={this.onChange}
                                            />
                                            <label className="form-label" htmlFor="formControlLg">Fullname</label>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                {/*Phone Number*/}
                                <MDBRow className={"inputCC my-3"}>
                                    <MDBCol md={"1"}>
                                        <img width={"30px"} height={"30px"} src={"/asset/iconPhone.png"}/>
                                    </MDBCol>
                                    <MDBCol md={"11"}>
                                        <div className={"mx-2 form-outline form-white"}>
                                            <input
                                                id="formControlLg"
                                                color={"white"}
                                                className={"form-control "}
                                                type={"tel"}
                                                name={"phone"}
                                                value={phone}
                                                onChange={this.onChange}
                                            />
                                            <label className="form-label" htmlFor="formControlLg">Phone Number</label>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                {/*Email*/}
                                <MDBRow className={"inputCC my-3"}>
                                    <MDBCol md={"1"}>
                                        <img width={"30px"} height={"30px"} src={"/asset/iconEmail.png"}/>
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
                                            <label className="form-label" htmlFor="formControlLg">Email</label>
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
                                        <img
                                            alt={"img"}
                                            src={this.state.iconPassword}
                                            onClick={this.unhide}
                                        />
                                    </MDBCol>
                                </MDBRow>

                                <div className={"my-5"} align={"center"}>
                                    <MDBBtn className="signup-btn" gradient="blue">Sign Up</MDBBtn>
                                    <MDBBtn className={"signin-btn"} onClick={this.gotoLogin}>Sign In</MDBBtn>
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
        )
    }
}

export default withRouter(Register);