import React, {Component} from "react";
import {Button, DatePicker, Input, message, Modal, Select, Table, Upload} from "antd";
import 'antd/dist/antd.css';
import '../../MasterDialog.css';
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import Draggable from "react-draggable";

class SaldoKasEdit extends Component{
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
                            <div className="title">Edit Saldo Kas<hr className="titleHR"/></div>

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
                    {/*Tanggal*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Tanggal
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <DatePicker
                                    style={{color: 'white'}}
                                    format="DD/MM/YYYY"
                                    bordered={false}
                                    onChange={""} />
                            </div>
                        </div>
                    </div>
                    {/*Transaksi*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            No. Transaksi
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <Input placeholder="Enter..." bordered={false} />
                            </div>
                        </div>
                    </div>
                    {/*Jenis*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Jenis
                        </div>
                        <div className={"col-10"}>
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
                    </div>
                    {/*Jumlah*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Jumlah
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <TextArea placeholder="Enter..." rows={4} />
                            </div>
                        </div>
                    </div>
                    {/*Keterangan*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Keterangan
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <TextArea placeholder="Enter..." rows={4} />
                            </div>
                        </div>
                    </div>

                </Modal>
            </>
        );
    }
}

export default SaldoKasEdit;