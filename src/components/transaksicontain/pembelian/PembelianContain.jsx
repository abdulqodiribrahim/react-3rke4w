import React, {Component} from "react";
import 'antd/dist/antd.css';
import "../TransaksiContainBody.css"
import {Button, Table} from "antd";
import {PembelianDataTable1, PembelianDataTable2} from "./PembelianData";
import PembelianAdd from "./modal/PembelianAdd";
import PembelianEdit from "./modal/PembelianEdit";
import PembelianSearchTable1 from "./modal/PembelianSearchTable1";
import PembelianSearchTable2 from "./modal/PembelianSearchTable2";
import ReactToPrint from "react-to-print";
import {PembelianPreview} from "./modal/PembelianPreview";

class PembelianContain extends Component{
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
            title: 'Jenis Pembelian',
            dataIndex: 'jenisPembelian',
            key: 'jenisPembelian',
        },
        {
            title: 'No. Invoice',
            dataIndex: 'noInvoice',
            key: 'noInvoice',
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
            title: 'Kode Supplier',
            dataIndex: 'kodeSupplier',
            key: 'kodeSupplier',
        },
        {
            title: 'Nama Supplier',
            dataIndex: 'namaSupplier',
            key : 'namaSupplier',
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
                        dataSource={PembelianDataTable1}
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
                        dataSource={PembelianDataTable2}
                    />
                </div>
                <PembelianAdd visible={this.state.visibleAdd} toggle={this.toggleAdd}/>
                <PembelianEdit visible={this.state.visibleEdt} toggle={this.toggleEdit}/>
                <PembelianSearchTable1 visible={this.state.visibleSchT1} toggle={this.toggleSearchTable1}/>
                <PembelianSearchTable2 visible={this.state.visibleSchT2} toggle={this.toggleSearchTable2}/>
                {/*Call class Preview*/}
                <div style={{display: 'none'}}><PembelianPreview ref={(el) => (this.componentRef = el)}/></div>
            </>
        )
    }
}

export default PembelianContain;