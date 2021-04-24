import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {GudangData} from "../GudangData";

export class GudangPreview extends Component{
    columns = [
        {
            title: '#',
            dataIndex: 'no',
            key : 'no',
        },
        {
            title: 'Kode Gudang',
            dataIndex: 'kodeGudang',
            key: 'kodeGudang'
        },
        {
            title: 'Nama Gudang',
            dataIndex: 'namaGudang',
            key: 'namaGudang',
            tableLayout: 'auto'
        },
        {
            title: 'Kontak Person',
            dataIndex: 'kontakPerson',
            key: 'kontakPerson',
        },
        {
            title: 'Alamat',
            dataIndex: 'alamat',
            key: 'alamat',
        },
        {
            title: 'Kota',
            dataIndex: 'kota',
            key: 'kota',
        },
        {
            title: 'Kode Pos',
            dataIndex: 'kodePos',
            key: 'kodePos',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Telepon',
            dataIndex: 'telepon',
            key: 'telepon',
        },
        {
            title: 'Faximile',
            dataIndex: 'faximile',
            key: 'faximile',
        },
        {
            title: 'Keterangan',
            dataIndex: 'keterangan',
            key: 'keterangan',
        }
    ];

    render() {
        return(
            <div className="row">
                {/*Left Tittle*/}
                <div className="col-4">
                    <h6>PRYAMITRA MANDIRI</h6>
                    <p style={{color: "#000000"}}>
                        Creative Production Mandiri
                        Jl. Jaya Dwiwangsa No. 93
                    </p>
                </div>
                {/*Title Preview*/}
                <div className="col-8">
                    <h4 style={{paddingTop: "15px", textAlign: "center"}}>Daftar Gudang</h4>
                </div>
                {/*Table*/}
                <div className="col-12">
                    <Table
                        rowClassName = "ant-table-row-preview"
                        bordered = 'true'
                        size = "small"
                        columns={this.columns}
                        dataSource={GudangData}
                        pagination={{ pageSize: GudangData.length, position: ['none', 'none']}}
                    />
                </div>
            </div>
        )
    }
}