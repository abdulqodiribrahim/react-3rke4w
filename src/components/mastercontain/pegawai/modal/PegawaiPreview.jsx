import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {PegawaiData} from "../PegawaiData";

export class PegawaiPreview extends Component{
    columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key : 'no',
        },
        {
            title: 'Kode Pegawai',
            dataIndex: 'kodePegawai',
            key: 'kodePegawai'
        },
        {
            title: 'Nama Pegawai',
            dataIndex: 'namaPegawai',
            key: 'namaPegawai',
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
                    <h4 style={{paddingTop: "15px", textAlign: "center"}}>Daftar Pegawai</h4>
                </div>
                {/*Table*/}
                <div className="col-12">
                    <Table
                        rowClassName = "ant-table-row-preview"
                        bordered = 'true'
                        size = "small"
                        columns={this.columns}
                        dataSource={PegawaiData}
                        pagination={{ pageSize: PegawaiData.length, position: ['none', 'none']}}
                    />
                </div>
            </div>
        )
    }
}