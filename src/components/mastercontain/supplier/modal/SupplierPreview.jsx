import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {SupplierData} from "../SupplierData";

export class SupplierPreview extends Component{
    columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key : 'no',
        },
        {
            title: 'Kode Supplier',
            dataIndex: 'kodeSupplier',
            key: 'kodeSupplier'
        },
        {
            title: 'Nama Supplier',
            dataIndex: 'namaSupplier',
            key: 'namaSupplier',
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
            title: 'Telepon',
            dataIndex: 'telepon',
            key: 'telepon',
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
                    <h4 style={{paddingTop: "15px", textAlign: "center"}}>Daftar Supplier</h4>
                </div>
                {/*Table*/}
                <div className="col-12">
                    <Table
                        rowClassName = "ant-table-row-preview"
                        bordered = 'true'
                        size = "small"
                        columns={this.columns}
                        dataSource={SupplierData}
                        pagination={{ pageSize: SupplierData.length, position: ['none', 'none']}}
                    />
                </div>
            </div>
        )
    }
}