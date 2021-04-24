import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {GolonganData} from "../GolonganData";

export class GolonganPreview extends Component{
    columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key : 'no',
        },
        {
            title: 'Golongan',
            dataIndex: 'golongan',
            key: 'golongan'
        },
        {
            title: 'User Entry',
            dataIndex: 'userEntry',
            key: 'userEntry',
            tableLayout: 'auto'
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
                    <h4 style={{paddingTop: "15px", textAlign: "center"}}>Daftar Golongan</h4>
                </div>
                {/*Table*/}
                <div className="col-12">
                    <Table
                        rowClassName = "ant-table-row-preview"
                        bordered = 'true'
                        size = "small"
                        columns={this.columns}
                        dataSource={GolonganData}
                        pagination={{ pageSize: GolonganData.length, position: ['none', 'none']}}
                    />
                </div>
            </div>
        )
    }
}