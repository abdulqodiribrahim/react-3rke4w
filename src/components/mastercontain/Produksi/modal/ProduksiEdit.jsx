import React, {Component} from "react";
import {Button, DatePicker, Input, message, Modal, Select, Table, Upload} from "antd";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import Draggable from "react-draggable";

class ProduksiEdit extends Component{
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
            title: 'Jumlah',
            dataIndex: 'jumlah',
            key : 'jumlah',
        },
    ];

    columns2=[
        {
            title: 'No',
            dataIndex: 'no',
            key : 'no',
        },
        {
            title: 'Nama Jasa',
            dataIndex: 'namaJasa',
            key : 'namaJasa',
        },
        {
            title: 'Jasa (Rp)',
            dataIndex: 'jasa',
            key : 'jasa',
        },
        {
            title: 'Total (Rp)',
            dataIndex: 'total',
            key : 'total',
        },
    ]

    render() {
        const { bounds, disabled, } = this.state;
        const { visible } = this.props;
        const { TextArea } = Input;
        const { Search } = Input;
        const { Option } = Select;
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
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
                            <div className="title">Edit Produksi<hr className="titleHR"/></div>

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
                    {/*Produksi*/}
                    <div className="row backModal">
                        <div className="col-12">
                            <div className="row backModal border">
                                {/*Kategori*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        Kategori Produksi
                                    </div>
                                    <div className="col-5">
                                        <div className={"inputContain"}>
                                            <Search placeholder="Enter..." onSearch="" enterButton allowClear bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Tanggal Produksi
                                    </div>
                                    <div className="col-5">
                                        <div className={"inputContain"}>
                                            <DatePicker
                                                style={{color: 'white'}}
                                                format="DD/MM/YYYY"
                                                bordered={false}
                                                onChange={""} />
                                        </div>
                                    </div>
                                </div>
                                {/*Produksi*/}
                                <div className="row backModal">
                                    <div className="col-1">
                                        Nama Produksi
                                    </div>
                                    <div className="col-5">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        Kode Produksi
                                    </div>
                                    <div className="col-5">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Table1 & Gambar*/}
                    <div className="row backModal">
                        {/*Table 1*/}
                        <div className="col-8">
                            <div className="row backModal border">
                                <div className="col-12">
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
                        {/*Gambar*/}
                        <div className="col-4">
                            <div className="row backModal border">
                                <div className="col-12">
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        beforeUpload={this.beforeUpload}
                                        onChange={this.handleChange}
                                    >
                                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                    </Upload>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Table2 & Different Height*/}
                    <div className="row backModal">
                        {/*Table 1*/}
                        <div className="col-6">
                            <div className="row backModal border">
                                <div className="col-12">
                                    <div className={"titleTable"}>
                                        <h6 className={"titleText"}>Table 1</h6>
                                    </div>
                                    <Table
                                        size = "middle"
                                        columns={this.columns2}
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

                        {/*Different Height*/}
                        <div className="col-6">
                            <div className="row backModal border">
                                <div className="col-12">
                                    <div className={"titleTable"}>
                                        <h6 className={"titleText"}>Table 1</h6>
                                    </div>
                                </div>
                                {/*Total Bahan*/}
                                <div className="row backModal">
                                    <div className="col-2">
                                        Total Bahan
                                    </div>
                                    <div className={"col-10"}>
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>
                                {/*qty*/}
                                <div className="row backModal">
                                    <div className="col-2">
                                        Qty
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                    <div className={"col-7"}>
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
                                            <Option value="free">Free</Option>
                                            <Option value="premium">Premium</Option>
                                        </Select>
                                    </div>
                                </div>
                                {/*Hpp Bahan*/}
                                <div className="row backModal">
                                    <div className="col-2">
                                        Hpp Bahan
                                    </div>
                                    <div className="col-10">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>
                                {/*Total Jasa*/}
                                <div className="row backModal">
                                    <div className="col-2">
                                        Total Jasa
                                    </div>
                                    <div className="col-10">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>
                                {/*Harga Beli*/}
                                <div className="row backModal">
                                    <div className="col-2">
                                        Harga Beli
                                    </div>
                                    <div className="col-10">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>
                                {/*Harga Jual 1*/}
                                <div className="row backModal">
                                    <div className="col-2">
                                        Harga Jual 1
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>
                                {/*Harga Jual 2*/}
                                <div className="row backModal">
                                    <div className="col-2">
                                        Harga Jual 2
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>
                                {/*Harga Jual 3*/}
                                <div className="row backModal">
                                    <div className="col-2">
                                        Harga Jual 3
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>
                                {/*Harga Jual 4*/}
                                <div className="row backModal">
                                    <div className="col-2">
                                        Harga Jual 4
                                    </div>
                                    <div className="col-3">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Qty X Harga Beli*/}
                    <div className="row backModal">
                        <div className="col-12">
                            <div className="row backModal border">
                                {/*Kategori*/}
                                <div className="row backModal">
                                    <div className="col-2">
                                        Qty x Harga Beli
                                    </div>
                                    <div className="col-10">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} type={'number'}/>
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

export default ProduksiEdit;