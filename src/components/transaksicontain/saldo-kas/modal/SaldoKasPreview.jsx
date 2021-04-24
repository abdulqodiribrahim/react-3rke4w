import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {SaldoKasData} from "../SaldoKasData";

export class SaldoKasPreview extends Component{
    columns = [
        {
            title: 'No',
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
                    <h4 style={{paddingTop: "15px", textAlign: "center"}}>Daftar Saldo Kas</h4>
                </div>
                {/*Table*/}
                <div className="col-12">
                    <Table
                        rowClassName = "ant-table-row-preview"
                        bordered = 'true'
                        size = "small"
                        columns={this.columns}
                        dataSource={SaldoKasData}
                        pagination={{ pageSize: SaldoKasData.length, position: ['none', 'none']}}
                    />
                </div>
            </div>
        )
    }
}