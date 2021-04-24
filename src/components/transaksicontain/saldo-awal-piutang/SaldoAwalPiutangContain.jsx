import React, {Component} from "react";
import {Button, Table} from "antd";
import 'antd/dist/antd.css';
import "../TransaksiContainBody.css"
import {SaldoAwalPiutangData} from "./SaldoAwalPiutangData";
import SaldoAwalPiutangAdd from "./modal/SaldoAwalPiutangAdd";
import SaldoAwalPiutangEdit from "./modal/SaldoAwalPiutangEdit";
import SaldoAwalPiutangSearch from "./modal/SaldoAwalPiutangSearch";

class SaldoAwalPiutangContain extends Component{
    constructor(props) {
        super(props);
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
            title: 'Saldo Awal',
            dataIndex: 'saldoAwal',
            key: 'saldoAwal',
        },
        {
            title: 'Saldo Akhir',
            dataIndex: 'saldoAkhir',
            key: 'saldoAkhir',
        },
        {
            title: 'Grand Total',
            dataIndex: 'grandTotal',
            key: 'grandTotal',
        },
        {
            title: 'Keterangan',
            dataIndex: 'keterangan',
            key: 'keterangan',
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
                    <button className={"btn btn-sm btnCC "}>Preview</button>
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
                        dataSource={SaldoAwalPiutangData}
                    />
                </div>
                <SaldoAwalPiutangAdd visible={this.state.visibleAdd} toggle={this.toggleAdd}/>
                <SaldoAwalPiutangEdit visible={this.state.visibleEdt} toggle={this.toggleEdit}/>
                <SaldoAwalPiutangSearch visible={this.state.visibleSch} toggle={this.toggleSearch}/>
            </>
        )
    }
}

export default SaldoAwalPiutangContain;