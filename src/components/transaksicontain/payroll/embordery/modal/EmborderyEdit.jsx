import React, {Component} from "react";
import {Button, DatePicker, Input, Modal, Select, Table} from "antd";
import Draggable from "react-draggable";

class EmborderyEdit extends Component{
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
            title: 'Stock Awal Cutting',
            dataIndex: 'stockAwalCutting',
            key : 'stockAwalCutting',
        },
        {
            title: 'Stock Awal Bordir',
            dataIndex: 'stockAwalBordir',
            key : 'stockAwalBordir',
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            key : 'qty',
        },
        {
            title: 'Stock Akhir Cutting',
            dataIndex: 'stockAkhirCutting',
            key : 'stockAkhirCutting',
        },
        {
            title: 'Stock Akhir Bordir',
            dataIndex: 'stockAkhirBordir',
            key : 'stockAkhirBordir',
        },
        {
            title: 'Harga',
            dataIndex: 'harga',
            key : 'harga',
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
                            <div className="title">Edit Embordir<hr className="titleHR"/></div>

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
                                        Kode Pegawai
                                    </div>
                                    <div className="col-6">
                                        <div className={"inputContain"}>
                                            <Search placeholder="Enter..." onSearch="" enterButton allowClear bordered={false} />
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
                                        Nama Pegawai
                                    </div>
                                    <div className="col-6">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>

                                {/*Line 3*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        Kode Gudang
                                    </div>
                                    <div className="col-4">
                                        <div className={"inputContain"}>
                                            <Search placeholder="Enter..." onSearch="" enterButton allowClear bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Keterangan
                                    </div>
                                    <div className="col-6">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>

                                {/*Line 4*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        Nama Gudang
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
                                    <div className="row mt-4 mb-2">
                                        <div className="col-1" align="right">
                                            Jumlah Total
                                        </div>
                                        <div className="col-4">
                                            <div className={"inputContain"}>
                                                <Input placeholder="Enter..." bordered={false} />
                                            </div>
                                        </div>
                                        <div className="col-6"/>
                                        <div className="col-1" align="right">
                                            <a className="titleText"> Add </a>
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
export default EmborderyEdit;