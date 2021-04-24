import React, {Component} from "react";
import 'antd/dist/antd.css';
import "../TransaksiContainBody.css"
import {Button, Table} from "antd";
import {ReturnPembelianDataTable1, ReturnPembelianDataTable2} from "./ReturnPembelianData";
import ReturnPembelianAdd from "./modal/ReturnPembelianAdd";
import ReturnPembelianEdit from "./modal/ReturnPembelianEdit";
import ReturnPembelianSearchTable1 from "./modal/ReturnPembelianSearchTable1";
import ReturnPembelianSearchTable2 from "./modal/ReturnPembelianSearchTable2";
import ReactToPrint from "react-to-print";
import {ReturnPembelianPreview} from "./modal/ReturnPembelianPreview";

class ReturnPembelianContain extends Component{
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
            title: 'No.Dokumen',
            dataIndex: 'noDokumen',
            key: 'noDokumen',

        },
        {
            title: 'Sub Total',
            dataIndex: 'subTotal',
            key: 'subTotal',
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
            title: 'Qty Beli',
            dataIndex: 'qtyBeli',
            key: 'qtyBeli',
        },
        {
            title: 'Qty Sudah Return',
            dataIndex: 'qtySudahReturn',
            key: 'qtySudahReturn',
        },
        {
            title: 'Qty Sisa',
            dataIndex: 'qtySisa',
            key: 'qtySisa',
        },
        {
            title: 'Qty Return',
            dataIndex: 'qtyReturn',
            key: 'qtyReturn',
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
            title: 'Jumlah Discount(RP)',
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
                        dataSource={ReturnPembelianDataTable1}
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
                        dataSource={ReturnPembelianDataTable2}
                    />
                </div>
                <ReturnPembelianAdd visible={this.state.visibleAdd} toggle={this.toggleAdd}/>
                <ReturnPembelianEdit visible={this.state.visibleEdt} toggle={this.toggleEdit}/>
                <ReturnPembelianSearchTable1 visible={this.state.visibleSchT1} toggle={this.toggleSearchTable1}/>
                <ReturnPembelianSearchTable2 visible={this.state.visibleSchT2} toggle={this.toggleSearchTable2}/>
                {/*Call class Preview*/}
                <div style={{display: 'none'}}><ReturnPembelianPreview ref={(el) => (this.componentRef = el)}/></div>
            </>
        )
    }
}

export default ReturnPembelianContain;