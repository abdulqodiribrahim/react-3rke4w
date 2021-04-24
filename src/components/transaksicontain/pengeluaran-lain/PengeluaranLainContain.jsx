import React, {Component} from "react";
import {Button, Table} from "antd";
import {PengeluaranLainDataTable1, PengeluaranLainDataTable2} from "./PengeluaranLainData";
import PengeluaranLainAdd from "./modal/PengeluaranLainAdd";
import PengeluaranLainEdit from "./modal/PengeluaranLainEdit";
import PengeluaranLainSearch from "./modal/PengeluaranLainSearch";

class PengeluaranLainContain extends Component{
    constructor(props) {
        super(props);
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

    column1 = [
        {
            title: 'No',
            dataIndex: 'no',
            key : 'no',
        },
        {
            title: 'No.Transaksi',
            dataIndex: 'noTransaksi',
            key: 'noTransaksi',

        },
        {
            title: 'Tgl.Transaksi',
            dataIndex: 'tglTransaksi',
            key: 'tglTransaksi',
        },
        {
            title: 'No. Dokumen',
            dataIndex: 'noDokumen',
            key: 'noDokumen',
        },
        {
            title: 'Kategori 1',
            dataIndex: 'kategori1',
            key : 'kategori1',
        },
        {
            title: 'Kategori 2',
            dataIndex: 'kategori2',
            key : 'kategori2',
        },
        {
            title: 'Total Harga',
            dataIndex: 'totalHarga',
            key: 'totalHarga',

        },
        {
            title: 'Tgl Entry',
            dataIndex: 'tglEntry',
            key: 'tglEntry',
        },
        {
            title: 'User Entry',
            dataIndex: 'userEntry',
            key: 'userEntry',
        }
    ];

    column2 =[
        {
            title: 'No',
            dataIndex: 'no',
            key : 'no',
        },
        {
            title: 'Kode Barang',
            dataIndex: 'kodeBarang',
            key: 'kodeBarang',

        },
        {
            title: 'Nama Barang',
            dataIndex: 'namaBarang',
            key: 'namaBarang',
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            key: 'qty',
        },
        {
            title: 'Satuan',
            dataIndex: 'satuan',
            key: 'satuan',
        },
        {
            title: 'Harga',
            dataIndex: 'harga',
            key: 'harga',
        },
        {
            title: 'Jumlah Harga',
            dataIndex: 'jumlahHarga',
            key: 'jumlahHarga',
        },
        {
            title: 'Keterangan',
            dataIndex: 'keterangan',
            key: 'keterangan',
        }
    ]

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
                {/*Table 1*/}
                {/*Title*/}
                <div className={"titleContain"}>
                    <h5 className={"titleText"}>Table 1</h5>
                    <Button className={"btn search"} type="primary" ghost="true" size={"large"} shape="circle" onClick={this.toggleSearch}>
                        <img src={"/asset/iconSearch.svg"}/>
                    </Button>
                </div>
                {/*Table*/}
                <div className={"tableAntDiv"}>
                    <Table
                        rowClassName="ant-table-row-custom"
                        size = "middle"
                        columns={this.column1}
                        pagination={{ position: "bottomRight" }}
                        scroll={{x:300}}
                        dataSource={PengeluaranLainDataTable1}
                    />
                </div>

                {/*Table 2*/}
                {/*Title*/}
                <div className={"titleContain"}>
                    <h5 className={"titleText"}>Table 2</h5>
                    <Button className={"btn search"} type="primary" ghost="true" size={"large"} shape="circle" onClick={this.toggleSearch}>
                        <img src={"/asset/iconSearch.svg"}/>
                    </Button>
                </div>
                {/*Table*/}
                <div className={"tableAntDiv"}>
                    <Table
                        rowClassName="ant-table-row-custom"
                        size = "middle"
                        columns={this.column2}
                        pagination={{ position: "bottomRight" }}
                        scroll={{x:300}}
                        dataSource={PengeluaranLainDataTable2}
                    />
                </div>
                <PengeluaranLainAdd visible={this.state.visibleAdd} toggle={this.toggleAdd}/>
                <PengeluaranLainEdit visible={this.state.visibleEdt} toggle={this.toggleEdit}/>
                <PengeluaranLainSearch visible={this.state.visibleSch} toggle={this.toggleSearch}/>
            </>
        )
    }
}

export default PengeluaranLainContain;