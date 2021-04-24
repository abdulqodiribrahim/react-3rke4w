import React, {Component} from "react";
import 'antd/dist/antd.css';
import "../MasterContainerBody.css"
import {Button, Table} from "antd";
import SatuanAdd from "./modal/SatuanAdd";
import SatuanEdit from "./modal/SatuanEdit";
import SatuanSearch from "./modal/SatuanSearch";
import {SatuanData} from "./SatuanData";
import ReactToPrint from "react-to-print";
import {SatuanPreview} from "./modal/SatuanPreview";

class SatuanContain extends Component{
    constructor(props) {
        super(props);
        this.componenRef = React.createRef();
        this.state = {
            visibleAdd : false,
            visibleEdt : false,
            visibleSch : false,
        }
    }

    toggleAdd = () => {
        this.setState({
            visibleAdd : !this.state.visibleAdd
        });
    }

    toggleEdit = () => {
        this.setState({
            visibleEdt : !this.state.visibleEdt
        });
    }

    toggleSearch = () => {
        this.setState({
            visibleSch : !this.state.visibleSch
        });
    }

    columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key : 'no',
        },
        {
            title: 'Satuan',
            dataIndex: 'satuan',
            key: 'satuan',

        },
        {
            title: 'User Entry',
            dataIndex: 'userEntry',
            key: 'userEntry',
        },
        {
            title: 'Tanggal Entry',
            dataIndex: 'tanggalEntry',
            key: 'tanggalEntry',
        }
    ];

    render() {
        return(
            <>
                {/*Button*/}
                <div className={"layoutBtnGC px-5"}>
                    <button className={"btn btn-sm btnCC "} onClick={this.toggleAdd}>Tambah</button>
                    <button className={"btn btn-sm btnCC "} onClick={this.toggleEdit}>Edit</button>
                    <button className={"btn btn-sm btnCC "}>Hapus</button>
                    {/*Button Preview*/}
                    <ReactToPrint
                        trigger={() => <button className={"btn btn-sm btnCC "}>Preview</button>}
                        content={() => this.componentRef}
                    />
                </div>
                {/*Title*/}
                <div className={"titleContain"}>
                    <h5 className={"titleText"}>Latest Orders</h5>
                    <Button className={"btn search"} type="primary" ghost="true" size={"large"} shape="circle" onClick={this.toggleSearch}>
                        <img src={"/asset/iconSearch.svg"}/>
                    </Button>
                </div>
                {/*Table*/}
                <div className={"tableAntDiv"}>
                    <Table
                        rowClassName="ant-table-row-custom"
                        size = "middle"
                        columns={this.columns}
                        pagination={{ position: "bottomRight" }}
                        scroll={{x:300}}
                        dataSource={SatuanData}
                    />
                </div>
                <SatuanAdd visible={this.state.visibleAdd} toggle={this.toggleAdd}/>
                <SatuanEdit visible={this.state.visibleEdt} toggle={this.toggleEdit}/>
                <SatuanSearch visible={this.state.visibleSch} toggle={this.toggleSearch}/>
                {/*Call class Preview*/}
                <div style={{display: 'none'}}><SatuanPreview ref={(el) => (this.componentRef = el)}/></div>
            </>
        )
    }
}

export default SatuanContain;