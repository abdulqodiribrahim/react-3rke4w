import React, {Component} from "react";
import {Button, Table} from "antd";
import 'antd/dist/antd.css';
import "../TransaksiContainBody.css"
import {SaldoKasData} from "./SaldoKasData";
import SaldoKasAdd from "./modal/SaldoKasAdd";
import SaldoKasEdit from "./modal/SaldoKasEdit";
import SaldoKasSearch from "./modal/SaldoKasSearch";
import ReactToPrint from "react-to-print";
import {SaldoKasPreview} from "./modal/SaldoKasPreview";

class SaldoKasContain extends Component{
    constructor(props) {
        super(props);
        this.componenRef = React.createRef();
        this.state = {
            visibleAdd : false,
            visibleEdt : false,
            visibleSch : false,
        }
    }

    funTambah = () =>{

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
            title: '#',
            dataIndex: 'no',
            key : 'no',
        },
        {
            title: 'No Transaksi',
            dataIndex: 'noTransaksi',
            key: 'noTransaksi',

        },
        {
            title: 'Tanggal Produksi',
            dataIndex: 'tanggalProduksi',
            key: 'tanggalProduksi',
        },
        {
            title: 'Jenis',
            dataIndex: 'jenis',
            key: 'jenis',
        },
        {
            title: 'Jumlah',
            dataIndex: 'jumlah',
            key: 'jumlah',
        },
        {
            title: 'Keterangan',
            dataIndex: 'keterangan',
            key: 'keterangan',
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
                <div>
                    <Table
                        rowClassName="ant-table-row-custom"
                        size = "middle"
                        columns={this.columns}
                        pagination={{ position: "bottomRight" }}
                        scroll={{x:300}}
                        dataSource={SaldoKasData}
                    />
                </div>
                <SaldoKasAdd visible={this.state.visibleAdd} toggle={this.toggleAdd}/>
                <SaldoKasEdit visible={this.state.visibleEdt} toggle={this.toggleEdit}/>
                <SaldoKasSearch visible={this.state.visibleSch} toggle={this.toggleSearch}/>
                {/*Call class Preview*/}
                <div style={{display: 'none'}}><SaldoKasPreview ref={(el) => (this.componentRef = el)}/></div>
            </>
        )
    }
}
export default SaldoKasContain;