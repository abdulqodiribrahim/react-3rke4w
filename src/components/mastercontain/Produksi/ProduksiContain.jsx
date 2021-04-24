import React, {Component} from "react";
import {Button, Table} from "antd";
import {ProduksiDataTable1, ProduksiDataTable2} from "./ProduksiData";
import ProduksiAdd from "./modal/ProduksiAdd";
import ProduksiEdit from "./modal/ProduksiEdit";
import ProduksiSearch from "./modal/ProduksiSearch";
import ReactToPrint from "react-to-print";
import {ProduksiPreview} from "./modal/ProduksiPreview";

class ProduksiContain extends Component{
    constructor(props) {
        super(props);
        this.componenRef = React.createRef();
        this.state = {
            visibleAdd : false,
            visibleEdt : false,
            visibleSch : false,
        }
    }

    toggleAdd = () => {
        this.setState({
            visibleAdd : !this.state.visibleAdd
        });
    }

    toggleEdit = () => {
        this.setState({
            visibleEdt : !this.state.visibleEdt
        });
    }

    toggleSearch = () => {
        this.setState({
            visibleSch : !this.state.visibleSch
        });
    }

    column1 = [
        {
            title: 'No',
            dataIndex: 'no',
            key : 'no',
        },
        {
            title: 'Kode Bahan',
            dataIndex: 'kodeBahan',
            key: 'kodeBahan',

        },
        {
            title: 'Nama Bahan',
            dataIndex: 'namaBahan',
            key: 'namaBahan',
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            key: 'qty',
        },
        {
            title: 'Satuan',
            dataIndex: 'satuan',
            key: 'satuan',
        },
        {
            title: 'Harga Beli',
            dataIndex: 'hargaBeli',
            key: 'hargaBeli',
        },
        {
            title: 'User Entry',
            dataIndex: 'userEntry',
            key: 'userEntry',
        }
    ];

    column2 =[
        {
            title: 'No',
            dataIndex: 'no',
            key : 'no',
        },
        {
            title: 'Tanggal Produksi',
            dataIndex: 'tanggalProduksi',
            key: 'tanggalProduksi',

        },
        {
            title: 'Kode Produksi',
            dataIndex: 'kodeProduksi',
            key: 'kodeProduksi',
        },
        {
            title: 'Nama Produksi',
            dataIndex: 'namaProduksi',
            key: 'namaProduksi',
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            key: 'qty',
        },
        {
            title: 'Satuan',
            dataIndex: 'satuan',
            key: 'satuan',
        },
        {
            title: 'Harga Beli',
            dataIndex: 'hargaBeli',
            key: 'hargaBeli',
        },
        {
            title: 'User Entry',
            dataIndex: 'userEntry',
            key: 'userEntry',
        },
        {
            title: 'Tanggal Entry',
            dataIndex: 'tanggalEntry',
            key: 'tanggalEntry',
        }
    ]

    render() {
        return(
            <>
                {/*Button*/}
                <div className={"layoutBtnGC px-5"}>
                    <button className={"btn btn-sm btnCC "} onClick={this.toggleAdd}>Tambah</button>
                    <button className={"btn btn-sm btnCC "} onClick={this.toggleEdit}>Edit</button>
                    <button className={"btn btn-sm btnCC "}>Hapus</button>
                    {/*Button Preview*/}
                    <ReactToPrint
                        trigger={() => <button className={"btn btn-sm btnCC "}>Preview</button>}
                        content={() => this.componentRef}
                    />
                </div>
                {/*Table 1*/}
                {/*Title*/}
                <div className={"titleContain"}>
                    <h5 className={"titleText"}>Table 1</h5>
                    <Button className={"btn search"} type="primary" ghost="true" size={"large"} shape="circle" onClick={this.toggleSearch}>
                        <img src={"/asset/iconSearch.svg"}/>
                    </Button>
                </div>
                {/*Table*/}
                <div className={"tableAntDiv"}>
                    <Table
                        rowClassName="ant-table-row-custom"
                        size = "middle"
                        columns={this.column1}
                        pagination={{ position: "bottomRight" }}
                        scroll={{x:300}}
                        dataSource={ProduksiDataTable1}
                    />
                </div>

                {/*Table 2*/}
                {/*Title*/}
                <div className={"titleContain"}>
                    <h5 className={"titleText"}>Table 2</h5>
                    <Button className={"btn search"} type="primary" ghost="true" size={"large"} shape="circle" onClick={this.toggleSearch}>
                        <img src={"/asset/iconSearch.svg"}/>
                    </Button>
                </div>
                {/*Table*/}
                <div className={"tableAntDiv"}>
                    <Table
                        rowClassName="ant-table-row-custom"
                        size = "middle"
                        columns={this.column2}
                        pagination={{ position: "bottomRight" }}
                        scroll={{x:300}}
                        dataSource={ProduksiDataTable2}
                    />
                </div>
                <ProduksiAdd visible={this.state.visibleAdd} toggle={this.toggleAdd}/>
                <ProduksiEdit visible={this.state.visibleEdt} toggle={this.toggleEdit}/>
                <ProduksiSearch visible={this.state.visibleSch} toggle={this.toggleSearch}/>
                {/*Call class Preview*/}
                <div style={{display: 'none'}}><ProduksiPreview ref={(el) => (this.componentRef = el)}/></div>
            </>
        )
    }
}

export default ProduksiContain;