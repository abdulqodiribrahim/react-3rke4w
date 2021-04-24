import React, {Component} from "react";
import 'antd/dist/antd.css';
import "../MasterContainerBody.css"
import {Button, Table} from "antd";
import {SalesData} from "./SalesData";
import SalesAdd from "./modal/SalesAdd";
import SalesEdit from "./modal/SalesEdit";
import SalesSearch from "./modal/SalesSearch";
import ReactToPrint from "react-to-print";
import {SalesPreview} from "./modal/SalesPreview";


class SalesContain extends Component{
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
            title: 'Kode Customer',
            dataIndex: 'kodeCustomer',
            key: 'kodeCustomer',

        },
        {
            title: 'Nama Customer',
            dataIndex: 'namaCustomer',
            key: 'namaCustomer',
        },
        {
            title: 'Alamat',
            dataIndex: 'alamat',
            key: 'alamat',
        },
        {
            title: 'Kota',
            dataIndex: 'kota',
            key: 'kota',
        },
        {
            title: 'Kode Pos',
            dataIndex: 'kodePos',
            key: 'kodePos',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Telepon',
            dataIndex: 'telepon',
            key: 'telepon',
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
                        dataSource={SalesData}
                    />
                </div>
                <SalesAdd visible={this.state.visibleAdd} toggle={this.toggleAdd}/>
                <SalesEdit visible={this.state.visibleEdt} toggle={this.toggleEdit}/>
                <SalesSearch visible={this.state.visibleSch} toggle={this.toggleSearch}/>
                {/*Call class Preview*/}
                <div style={{display: 'none'}}><SalesPreview ref={(el) => (this.componentRef = el)}/></div>
            </>
        )
    }
}

export default SalesContain;