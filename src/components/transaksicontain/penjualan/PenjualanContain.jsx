import React, {Component} from "react";
import 'antd/dist/antd.css';
import "../TransaksiContainBody.css"
import {Button, Table} from "antd";
import {PenjualanDataTable1, PenjualanDataTable2} from "./PenjualanData";
import PenjualanAdd from "./modal/PenjualanAdd";
import PenjualanEdit from "./modal/PenjualanEdit";
import PenjualanSearchTable1 from "./modal/PenjualanSearchTable1";
import PenjualanSearchTable2 from "./modal/PenjualanSearchTable2";
import ReactToPrint from "react-to-print";
import {PenjualanPreview} from "./modal/PenjualanPreview";


class PenjualanContain extends Component{
    constructor(props) {
        super(props);
        this.componenRef = React.createRef();
        this.state = {
            visibleAdd : false,
            visibleEdt : false,
            visibleSchT1 : false,
            visibleSchT2 : false,
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

    toggleSearchTable1 = () => {
        this.setState({
            visibleSchT1 : !this.state.visibleSchT1
        });
    }

    toggleSearchTable2 = () => {
        this.setState({
            visibleSchT2 : !this.state.visibleSchT2
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
            title: 'No.Dokumen',
            dataIndex: 'noDokumen',
            key: 'noDokumen',
        },
        {
            title: 'Jenis Nota',
            dataIndex: 'jenisNota',
            key: 'jenisNota',
        },
        {
            title: 'JT(Hari)',
            dataIndex: 'jtHari',
            key: 'jtHari',
        },
        {
            title: 'Tgl.JT',
            dataIndex: 'tgljT',
            key: 'tgljT',
        },
        {
            title: 'Kode Sales',
            dataIndex: 'kodeSales',
            key: 'kodeSales',
        },
        {
            title: 'Nama Sales',
            dataIndex: 'namaSales',
            key : 'namaSales',
        },
        {
            title: 'Area',
            dataIndex: 'area',
            key: 'area',

        },
        {
            title: 'Kode Customer',
            dataIndex: 'kodeCustomer',
            key : 'kodeCustomer',
        },
        {
            title: 'Alamat',
            dataIndex: 'alamat',
            key: 'alamat',

        },
        {
            title: 'Sub Total',
            dataIndex: 'subTotal',
            key: 'subTotal',
        },
        {
            title: 'Discount(%)',
            dataIndex: 'discount',
            key: 'discount',
        },
        {
            title: 'Jumlah Discount (RP)',
            dataIndex: 'jumlahDiscount',
            key: 'jumlahDiscount',
        },
        {
            title: 'Biaya Lain',
            dataIndex: 'biayaLain',
            key: 'biayaLain',
        },
        {
            title: 'Harga Bersih',
            dataIndex: 'hargaBersih',
            key: 'hargaBersih',
        },
        {
            title: 'Cash',
            dataIndex: 'cash',
            key: 'cash',
        },
        {
            title: 'Transfer',
            dataIndex: 'transfer',
            key: 'transfer',
        },
        {
            title: 'Check',
            dataIndex: 'check',
            key: 'check',
        },
        {
            title: 'Total Bayar',
            dataIndex: 'totalBayar',
            key: 'totalBayar',
        },
        {
            title: 'Kembali',
            dataIndex: 'kembali',
            key : 'kembali',
        },
        {
            title: 'Hutang',
            dataIndex: 'hutang',
            key: 'hutang',

        },
        {
            title: 'No.Cek',
            dataIndex: 'noCek',
            key: 'noCek',
        },
        {
            title: 'Nama Bank',
            dataIndex: 'namaBank',
            key: 'namaBank',
        },
        {
            title: 'Atas Nama',
            dataIndex: 'atasNama',
            key: 'atasNama',
        },
        {
            title: 'Tgl.Cek',
            dataIndex: 'tglCek',
            key: 'tglCek',
        },
        {
            title: 'Tgl.Cair',
            dataIndex: 'tglCair',
            key: 'tglCair',
        },
        {
            title: 'Tgl.Entry',
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
            title: 'Discount(%)',
            dataIndex: 'discount',
            key: 'discount',
        },
        {
            title: 'Discount(RP)',
            dataIndex: 'discountRP',
            key: 'discountRP',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
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
                    {/*Button Preview*/}
                    <ReactToPrint
                        trigger={() => <button className={"btn btn-sm btnCC "}>Preview</button>}
                        content={() => this.componentRef}
                    />
                </div>
                {/*Table 1*/}
                {/*Title*/}
                <div className={"titleContain"}>
                    <h5 className={"titleText"}>Table 1</h5>
                    <Button className={"btn search"} type="primary" ghost="true" size={"large"} shape="circle" onClick={this.toggleSearchTable1}>
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
                        dataSource={PenjualanDataTable1}
                    />
                </div>

                {/*Table 2*/}
                {/*Title*/}
                <div className={"titleContain"}>
                    <h5 className={"titleText"}>Table 2</h5>
                    <Button className={"btn search"} type="primary" ghost="true" size={"large"} shape="circle" onClick={this.toggleSearchTable2}>
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
                        dataSource={PenjualanDataTable2}
                    />
                </div>
                <PenjualanAdd visible={this.state.visibleAdd} toggle={this.toggleAdd}/>
                <PenjualanEdit visible={this.state.visibleEdt} toggle={this.toggleEdit}/>
                <PenjualanSearchTable1 visible={this.state.visibleSchT1} toggle={this.toggleSearchTable1}/>
                <PenjualanSearchTable2 visible={this.state.visibleSchT2} toggle={this.toggleSearchTable2}/>
                {/*Call class Preview*/}
                <div style={{display: 'none'}}><PenjualanPreview ref={(el) => (this.componentRef = el)}/></div>
            </>
        )
    }
}

export default PenjualanContain;