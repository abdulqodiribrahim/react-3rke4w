import React, {Component} from "react";
import {Button, Input, Modal} from "antd";
import Draggable from "react-draggable";

class BarangSearch extends Component{
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
                            onFocus={() => {}}
                            onBlur={() => {}}
                            // end
                        >
                            {/*Tittle Modal */}
                            <div className="title">Cari Barang<hr className="titleHR"/></div>

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
                            Kode Barang
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <Input placeholder="Enter..." bordered={false} />
                            </div>
                        </div>
                    </div>
                    {/*Nama*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Nama Barang
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <Input placeholder="Enter..." bordered={false} />
                            </div>
                        </div>
                    </div>
                    {/*Merk*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Merk
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <Input placeholder="Enter..." bordered={false}/>
                            </div>
                        </div>
                    </div>
                    {/*Type*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Type
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <TextArea placeholder="Enter..." rows={4} />
                            </div>
                        </div>
                    </div>
                    {/*Golongan*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Golongan
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <Input placeholder="Enter..." bordered={false}/>
                            </div>
                        </div>
                    </div>
                    {/*Kode Supplier*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Kode Supplier
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <Input type={"email"} placeholder="Enter..." bordered={false}/>
                            </div>
                        </div>
                    </div>
                    {/*Nama Supplier*/}
                    <div className={"row backModal"}>
                        <div className={"col-2"}>
                            Nama Supplier
                        </div>
                        <div className={"col-10"}>
                            <div className={"inputContain"}>
                                <Input type={"phone"} placeholder="Enter..." bordered={false}/>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        );
    }
}

export default BarangSearch;