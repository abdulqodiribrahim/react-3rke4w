import React, {Component} from "react";
import {Button, DatePicker, Input, message, Modal, Select, Table, Upload} from "antd";
import Draggable from "react-draggable";

class PembelianEdit extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        loading : false,
        visible: false,
        disabled: true,
        bounds: { left: 0, top: 0, bottom: 0, right: 0 },
    };

    draggleRef = React.createRef();

    handleOk = e => {
        console.log(e);
        this.props.toggle();
    };

    handleCancel = e => {
        console.log(e);
        this.props.toggle();
    };

    onStart = (event, uiData) => {
        const { clientWidth, clientHeight } = window?.document?.documentElement;
        const targetRect = this.draggleRef?.current?.getBoundingClientRect();
        this.setState({
            bounds: {
                left: -targetRect?.left + uiData?.x,
                right: clientWidth - (targetRect?.right - uiData?.x),
                top: -targetRect?.top + uiData?.y,
                bottom: clientHeight - (targetRect?.bottom - uiData?.y),
            },
        });
    };

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    columns1=[
        {
            title: 'No',
            dataIndex: 'no',
            key : 'no',
        },
        {
            title: 'Kode Barang',
            dataIndex: 'kodeBarang',
            key : 'kodeBarang',
        },
        {
            title: 'Nama Barang',
            dataIndex: 'namaBarang',
            key : 'namaBarang',
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            key : 'qty',
        },
        {
            title: 'Satuan',
            dataIndex: 'satuan',
            key : 'satuan',
        },
        {
            title: 'Harga',
            dataIndex: 'harga',
            key : 'harga',
        },
        {
            title: 'Discount(%)',
            dataIndex: 'discount',
            key : 'discount',
        },
        {
            title: 'Jumlah Discount(%)',
            dataIndex: 'jumlahDiscount',
            key : 'jumlahDiscount',
        },
        {
            title: 'Total Harga',
            dataIndex: 'totalHarga',
            key : 'totalHarga',
        }
    ];

    render() {
        const { bounds, disabled, } = this.state;
        const { visible } = this.props;
        const { Search } = Input;
        const { Option } = Select;
        return (
            <>
                <Modal
                    width="1500px"
                    height="770px"
                    title={
                        <div
                            style={{
                                width: '100%',
                                cursor: 'move',
                            }}
                            onMouseOver={() => {
                                if (disabled) {
                                    this.setState({
                                        disabled: false,
                                    });
                                }
                            }}
                            onMouseOut={() => {
                                this.setState({
                                    disabled: true,
                                });
                            }}
                            onFocus={() => {}}
                            onBlur={() => {}}
                            // end
                        >
                            {/*Tittle Modal */}
                            <div className="title">Edit Transaksi Pembelian<hr className="titleHR"/></div>

                        </div>
                    }
                    footer={[
                        <Button shape="round" key="back" onClick={this.handleCancel}>
                            Tutup
                        </Button>,
                        <Button shape="round" key="submit" type="primary" onClick={this.handleOk}>
                            Simpan
                        </Button>
                    ]}
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    modalRender={modal => (
                        <Draggable
                            disabled={disabled}
                            bounds={bounds}
                            onStart={(event, uiData) => this.onStart(event, uiData)}
                        >
                            <div ref={this.draggleRef}>{modal}</div>
                        </Draggable>
                    )}
                >
                    {/*Body Modal*/}
                    {/*Pembelian 1*/}
                    <div className="row backModal">
                        <div className="col-12">
                            <div className="row backModal border">
                                {/*Line 1*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        No. Transaksi
                                    </div>
                                    <div className="col-4">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Kode Gudang
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Search placeholder="Enter..." onSearch="" enterButton allowClear bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>

                                {/*Line 2*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        Tgl. Transaksi
                                    </div>
                                    <div className="col-4">
                                        <div className={"inputContain"}>
                                            <DatePicker
                                                style={{color: 'white'}}
                                                format="DD/MM/YYYY"
                                                bordered={false}
                                                onChange={""} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Jatuh Tempo
                                    </div>
                                    <div className="col-5">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Hari
                                    </div>
                                </div>

                                {/*Line 3*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        Jenis Pembelian
                                    </div>
                                    <div className="col-4">
                                        <div className={"inputContain"}>
                                            <Select
                                                showSearch
                                                style={{ width: "100%" }}
                                                placeholder="Enter..."
                                                optionFilterProp="children"
                                                bordered={false}
                                                filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                <Option value="manager">Bahan Baku</Option>
                                                <Option value="developer">Bahan Lembek</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Tgl. Jth. Tempo
                                    </div>
                                    <div className="col-6">
                                        <div className={"inputContain"}>
                                            <DatePicker
                                                style={{color: 'white'}}
                                                format="DD/MM/YYYY"
                                                bordered={false}
                                                onChange={""} />
                                        </div>
                                    </div>
                                </div>

                                {/*Line 4*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        No. Inv Supplier
                                    </div>
                                    <div className="col-4">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Kode Supplier
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Search placeholder="Enter..." onSearch="" enterButton allowClear bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>

                                {/*Line 5*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        Jenis Nota
                                    </div>
                                    <div className="col-4">
                                        <div className={"inputContain"}>
                                            <Select
                                                showSearch
                                                style={{ width: "100%" }}
                                                placeholder="Enter..."
                                                optionFilterProp="children"
                                                bordered={false}
                                                filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                <Option value="manager">Bahan Baku</Option>
                                                <Option value="developer">Bahan Lembek</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Tgl. Jth. Tempo
                                    </div>
                                    <div className="col-6">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/*Table1 */}
                    <div className="row backModal">
                        {/*Table 1*/}
                        <div className="col-12">
                            <div className="row backModal border">
                                <div className="col-12">
                                    <div className={"titleTable"}>
                                        <h6 className={"titleText"}>Table 1</h6>
                                    </div>
                                    <Table
                                        size = "middle"
                                        columns={this.columns1}
                                        pagination={{ position: "bottomRight" }}
                                        scroll={{x:300}}
                                        dataSource=""
                                    />
                                    <div align={"right"}>
                                        <a className="titleText"> Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Pembelian 2 */}
                    <div className="row backModal">
                        <div className="col-12">
                            <div className="row backModal border">
                                {/*Line 1*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        Sub Total
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Rp." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Pembayaran :
                                    </div>
                                    <div className="col-3">
                                    </div>
                                    <div className="col-1">
                                        Harga Bersih
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Rp." bordered={false} />
                                        </div>
                                    </div>
                                </div>

                                {/*Line 2*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        Discount
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="..%" bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Cash
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="0" bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Total Bayar
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Rp." bordered={false} />
                                        </div>
                                    </div>
                                </div>

                                {/*Line 3*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        Jumlah Disc
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Rp." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Transfer
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="0" bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Kembali
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Rp." bordered={false} />
                                        </div>
                                    </div>
                                </div>

                                {/*Line 4*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        Biaya Lain
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Rp." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Cek
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="0" bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Hutang
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Rp." bordered={false} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/*Pembelian 3 */}
                    <div className="row backModal">
                        <div className="col-12">
                            <div className="row backModal border">
                                {/*Line 1*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        No. Cek
                                    </div>
                                    <div className="col-4">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Tanggal Cek
                                    </div>
                                    <div className="col-6">
                                        <div className={"inputContain"}>
                                            <DatePicker
                                                style={{color: 'white'}}
                                                format="DD/MM/YYYY"
                                                bordered={false}
                                                onChange={""} />
                                        </div>
                                    </div>
                                </div>

                                {/*Line 2*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        Nama Bank
                                    </div>
                                    <div className="col-4">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Tanggal Cair
                                    </div>
                                    <div className="col-6">
                                        <div className={"inputContain"}>
                                            <DatePicker
                                                style={{color: 'white'}}
                                                format="DD/MM/YYYY"
                                                bordered={false}
                                                onChange={""} />
                                        </div>
                                    </div>
                                </div>

                                {/*Line 3*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        Atas Nama
                                    </div>
                                    <div className="col-4">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>
            </>
        )
    }
}

export default PembelianEdit;