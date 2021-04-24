import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {BarangData} from "../BarangData";

export class BarangPreview extends Component{
    columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key : 'no',
        },
        {
            title: 'Kode Barang',
            dataIndex: 'kodeBarang',
            key: 'kodeBarang'
        },
        {
            title: 'Nama Barang',
            dataIndex: 'namaBarang',
            key: 'namaBarang',
            tableLayout: 'auto'
        },
        {
            title: 'Gololongan',
            dataIndex: 'golongan',
            key: 'golongan',
        },
        {
            title: 'Merk',
            dataIndex: 'merk',
            key: 'merk',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Satuan',
            dataIndex: 'satuan',
            key: 'satuan',
        },
        {
            title: 'Harga Beli',
            dataIndex: 'hargaBeli',
            key: 'hargaBeli',
        },
        {
            title: 'Harga Jual 1',
            dataIndex: 'hargaJual1',
            key: 'hargaJual1',
        },
        {
            title: 'Harga Jual 2',
            dataIndex: 'hargaJual2',
            key: 'hargaJual2',
        },
        {
            title: 'Harga Jual 3',
            dataIndex: 'hargaJual3',
            key: 'hargaJual3',
        },
        {
            title: 'Harga Jual 4',
            dataIndex: 'hargaJual4',
            key: 'hargaJual4',
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
                <div className="col-8">
                    <h4 style={{paddingTop: "15px", textAlign: "center"}}>Daftar Barang</h4>
                </div>
                {/*Table*/}
                <div className="col-12">
                    <Table
                        rowClassName = "ant-table-row-preview"
                        bordered = 'true'
                        size = "small"
                        columns={this.columns}
                        dataSource={BarangData}
                        pagination={{ pageSize: BarangData.length, position: ['none', 'none']}}
                    />
                </div>
            </div>
        )
    }
}