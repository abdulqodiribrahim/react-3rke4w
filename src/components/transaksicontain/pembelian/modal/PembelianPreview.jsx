import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {PembelianDataTable1} from "../PembelianData";

export class PembelianPreview extends Component{
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
                    <h4 style={{paddingTop: "15px", textAlign: "center"}}>Daftar Pembelian</h4>
                </div>
                {/*Table*/}
                <div className="col-12">
                    <Table
                        rowClassName = "ant-table-row-preview"
                        bordered = 'true'
                        size = "small"
                        columns={this.columns}
                        dataSource={PembelianDataTable1}
                        pagination={{ pageSize: PembelianDataTable1.length, position: ['none', 'none']}}
                    />
                </div>
            </div>
        )
    }
}