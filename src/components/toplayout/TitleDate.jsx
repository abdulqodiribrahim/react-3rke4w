import React, {Component} from "react";
import "./TitleDate.css";

class TitleDate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title : props.title,
            date : this.dateNow()
        }
    }

    dateNow =() => {
        let newDate = new Date();
        newDate = newDate.toDateString();
        let day = newDate.split(" ")[0];
        let date = newDate.split(" ")[2];
        let month = newDate.split(" ")[1];
        let year = newDate.split(" ")[3];
        console.log(`${date} ${month} ${year}, ${day}`)
        return `${date} ${month} ${year}, ${day}`
    }

    render() {
        const {title, date} = this.state
        return(
            <>
                <div className={"row"}>
                    <div className={"col-10"}>
                        <div className={"titlePage py-3 align-content-center"}>{title}</div>
                    </div>
                    {/*<div className={"col-3"}>*/}
                    {/*    <div className={"dateText py-4 align-content-center"}>{date}</div>*/}
                    {/*</div>*/}
                    <hr/>
                </div>
            </>
        )
    }
}
export default TitleDate;