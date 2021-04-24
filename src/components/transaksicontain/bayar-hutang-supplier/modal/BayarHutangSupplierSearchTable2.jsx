import React, {Component} from "react";
import {Button, Input, Modal, Select} from "antd";
import Draggable from "react-draggable";

class BayarHutangSupplierSearchTable2 extends Component{
    constructor(props) {
        super(props);
    }

    state = {
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

    render() {
        const { bounds, disabled} = this.state;
        const { visible } = this.props;
        const { Search } = Input;
        const { Option } = Select;
        return (
            <>
                <Modal
                    width="1200px"
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
                            <div className="title">Cari Bayar Hutang Supplier <hr className="titleHR"/></div>

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
                                {/*Line 1.1*/}
                                <div className="row backModal">
                                    <div className={"col-4"}>
                                        Sub Total
                                    </div>
                                    <div className="col-4">
                                        Biaya Lain
                                    </div>
                                    <div className="col-4">
                                        Bayar
                                    </div>
                                </div>

                                {/*Line 1.2*/}
                                <div className="row backModal">
                                    <div className={"col-4"}>
                                        <div className={"inputContain"}>
                                            <Input placeholder="Enter..." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Rp." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Rp." bordered={false} />
                                        </div>
                                    </div>
                                </div>

                                {/*Line 2.1*/}
                                <div className="row backModal">
                                    <div className={"col-4"}>
                                        Discount
                                    </div>
                                    <div className="col-4">
                                        Harga Bersih
                                    </div>
                                    <div className="col-4">
                                        Kembali
                                    </div>
                                </div>

                                {/*Line 2.2*/}
                                <div className="row backModal">
                                    <div className={"col-4"}>
                                        <div className={"inputContain"}>
                                            <Input placeholder="%." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Rp." bordered={false} />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className={"inputContain"}>
                                            <Input placeholder="Rp." bordered={false} />
                                        </div>
                                    </div>
                                </div>

                                {/*Line 3.1*/}
                                <div className="row backModal">
                                    <div className={"col-4"}>
                                        Jumlah Discount
                                    </div>
                                </div>

                                {/*Line 3.2*/}
                                <div className="row backModal">
                                    <div className={"col-4"}>
                                        <div className={"inputContain"}>
                                            <Input placeholder="%." bordered={false} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        );
    }
}

export default BayarHutangSupplierSearchTable2;