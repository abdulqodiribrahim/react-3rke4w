import React, {Component} from "react";
import {Button, Table} from "antd";
import {StockOpnameDataTable1, StockOpnameDataTable2} from "./StockOpnameData";
import StockOpnameAdd from "./modal/StockOpnameAdd";
import StockOpnameEdit from "./modal/StockOpnameEdit";
import StockOpnameSearch from "./modal/StockOpnameSearch";

class StockOpnameContain extends Component{
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
            title: 'Keterangan',
            dataIndex: 'keterangan',
            key: 'keterangan',

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
            title: 'Satuan',
            dataIndex: 'satuan',
            key: 'satuan',
        },
        {
            title: 'Stock Awal',
            dataIndex: 'stockAwal',
            key: 'stockAwal',
        },
        {
            title: 'Plus(+)',
            dataIndex: 'plus',
            key: 'plus',
        },
        {
            title: 'Minus(-)',
            dataIndex: 'minus',
            key: 'minus',
        },
        {
            title: 'Stock Akhir',
            dataIndex: 'stockAkhir',
            key: 'stockAkhir',
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
                        dataSource={StockOpnameDataTable1}
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
                        dataSource={StockOpnameDataTable2}
                    />
                </div>
                <StockOpnameAdd visible={this.state.visibleAdd} toggle={this.toggleAdd}/>
                <StockOpnameEdit visible={this.state.visibleEdt} toggle={this.toggleEdit}/>
                <StockOpnameSearch visible={this.state.visibleSch} toggle={this.toggleSearch}/>
            </>
        )
    }
}

export default StockOpnameContain;