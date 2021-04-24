import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {ReturnPembelianDataTable1} from "../ReturnPembelianData";

export class ReturnPembelianPreview extends Component{
    columns = [
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

    render() {
        return(
            <div className="row" style={{padding: "15px"}}>
                {/*Left Tittle*/}
                <div className="col-4" style={{textAlign: "left"}}>
                    <h6>PRYAMITRA MANDIRI</h6>
                    <p style={{color: "#000000"}}>
                        Creative Production Mandiri<br></br>
                        Jl. Jaya Dwiwangsa No. 93
                    </p>
                </div>
                {/*Title Preview*/}
                <div className="col-4">
                    <h4 style={{paddingTop: "15px", textAlign: "center"}}>Daftar Return Pembelian</h4>
                </div>
                {/*Table*/}
                <div className="col-12">
                    <Table
                        rowClassName = "ant-table-row-preview"
                        bordered = 'true'
                        size = "small"
                        columns={this.columns}
                        dataSource={ReturnPembelianDataTable1}
                        pagination={{ pageSize: ReturnPembelianDataTable1.length, position: ['none', 'none']}}
                    />
                </div>
            </div>
        )
    }
}