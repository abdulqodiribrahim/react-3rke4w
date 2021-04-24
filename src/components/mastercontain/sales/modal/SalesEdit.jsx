import React, {Component} from "react";
import {Button, Checkbox, Input, Modal, Select, Table} from "antd";
import Draggable from "react-draggable";

class SalesEdit extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        visible: false,
        disabled: true,
        bounds: { left: 0, top: 0, bottom: 0, right: 0 },
    };

    draggleRef = React.createRef();

    // showModal = () => {
    //     this.setState({
    //         visible: true,
    //     });
    // };

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

    columns=[
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
            title: 'Harga',
            dataIndex: 'harga',
            key : 'harga',
        },
    ]

    render() {
        const { bounds, disabled} = this.state;
        const { visible } = this.props;
        const { TextArea } = Input;
        const { Option } = Select;
        return (
            <>
                <Modal
                    width="800px"
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
                            // fix eslintjsx-a11y/mouse-events-have-key-events
                            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
                            onFocus={() => {}}
                            onBlur={() => {}}
                            // end
                        >
                            {/*Tittle Modal */}
                            <div className="title">Edit Sales <hr className="titleHR"/></div>

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
                    {/*Title*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Kode Sales
                        </div>
                        <div className={"col-7"}>
                            <div className={"inputContain"}>
                                <Input placeholder="Enter..." bordered={false} />
                            </div>
                        </div>
                        <div className={"col-3"}>
                            <Checkbox onChange={""}>Default Sales</Checkbox>
                        </div>
                    </div>
                    {/*Nama*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Nama Sales
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <Input placeholder="Enter..." bordered={false} />
                            </div>
                        </div>
                    </div>
                    {/*Alamat*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Alamat
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <TextArea placeholder="Enter..." rows={4} />
                            </div>
                        </div>
                    </div>
                    {/*Kota*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Kota
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <Input placeholder="Enter..." bordered={false}/>
                            </div>
                        </div>
                    </div>
                    {/*Kode Pos*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Kode Pos
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <Input placeholder="Enter..." bordered={false}/>
                            </div>
                        </div>
                    </div>
                    {/*Email*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            E-mail
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <Input type={"email"} placeholder="Enter..." bordered={false}/>
                            </div>
                        </div>
                    </div>
                    {/*Telepon*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Telepon
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <Input type={"phone"} placeholder="Enter..." bordered={false}/>
                            </div>
                        </div>
                    </div>
                    {/*Golongan*/}
                    <div className={"row backModal border"}>
                        <div className={"col-2"}>
                            Golongan
                        </div>
                        <div className={"col-3"}>
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
                                    <Option value="free">Free</Option>
                                    <Option value="premium">Premium</Option>
                                </Select>
                            </div>
                        </div>
                        <div className={"col-2"}>
                            Harga
                        </div>
                        <div className={"col-3"}>
                            <div className={"inputContain"}>
                                <Input type={"phone"} placeholder="Enter..." bordered={false}/>
                            </div>
                        </div>
                        <div className={"col-2"}>
                            <Button shape="round" key="submit" type="primary" onClick="">
                                Tambah
                            </Button>
                        </div>
                    </div>
                    {/*Table*/}
                    <div className={"row backModal border tableBorder"}>
                        <div className={"titleTable"}>
                            <h6 className={"titleText"}>Table 1</h6>
                        </div>
                        <Table
                            size = "middle"
                            columns={this.columns}
                            pagination={{ position: "bottomRight" }}
                            scroll={{x:300}}
                            dataSource=""
                        />
                        <div align={"right"}>
                            <a className="titleText"> Add </a>
                        </div>
                    </div>
                    {/*Harga*/}
                    <div className={"row backModal border"}>
                        <div className={"col-2"}>
                            Harga
                        </div>
                        <div className={"col-7"}>
                            <div className={"inputContain"}>
                                <Input type={"phone"} placeholder="Enter..." bordered={false}/>
                            </div>
                        </div>
                        <div className={"col-3"}>
                            <Button shape="round" key="submit" type="primary" onClick="">
                                Update Harga
                            </Button>
                        </div>
                    </div>
                </Modal>
            </>
        );
    }
}

export default SalesEdit;