import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./layouts/login/Login";
import Register from "./layouts/register/Register";
import Gudang from "./layouts/master-data/gudang/Gudang";
import Pegawai from "./layouts/master-data/pegawai/Pegawai";
import Supplier from "./layouts/master-data/supplier/Supplier";
import Customer from "./layouts/master-data/customer/Customer"
import Golongan from "./layouts/master-data/golongan/Golongan";
import Area from "./layouts/master-data/area/Area";
import Satuan from "./layouts/master-data/satuan/Satuan";
import Sales from "./layouts/master-data/sales/Sales";
import KategoriPengeluaran from "./layouts/master-data/kategori_pengeluaran/KategoriPengeluaran";
import Barang from "./layouts/master-data/barang/Barang";
import Produksi from "./layouts/master-data/produksi/Produksi";
import SaldoKas from "./layouts/transaksi/saldo-kas/SaldoKas";
import Pembelian from "./layouts/transaksi/pembelian/Pembelian";
import Penjualan from "./layouts/transaksi/penjualan/Penjualan";
import ReturnPembelian from "./layouts/transaksi/return-pembelian/ReturnPembelian";
import ReturnPenjualan from "./layouts/transaksi/return-penjualan/ReturnPenjualan";
import PembayaranFee from "./layouts/transaksi/pembayaran-fee/PembayaranFee";
import SaldoAwalPiutang from "./layouts/transaksi/saldo-awal-piutang/SaldoAwalPiutang";
import BayarHutangSupplier from "./layouts/transaksi/bayar-hutang-supplier/BayarHutangSupplier";
import BayarHutangCustomer from "./layouts/transaksi/bayar-hutang-customer/BayarHutangCustomer";
import MutasiBarang from "./layouts/transaksi/mutasi-barang/MutasiBarang";
import StockOpname from "./layouts/transaksi/stock-opname/StockOpname";
import PengeluaranLain from "./layouts/transaksi/pengeluaran-lain/PengeluaranLain";
import Cutting from "./layouts/transaksi/payroll/cutting/Cutting";
import Embordery from "./layouts/transaksi/payroll/embordery/Embordery";
import Sewing from "./layouts/transaksi/payroll/sewing/Sewing";
import Finishing from "./layouts/transaksi/payroll/finishing/Finishing";
import PembayaranHarian from "./layouts/transaksi/payroll/pembayaran-harian/PembayaranHarian";

function App() {
    return (
        <BrowserRouter>
            <Switch>

                {/*Transaksi*/}
                <Route path={"/transaksi/payroll/pembayaran-harian"} component={PembayaranHarian}/>
                <Route path={"/transaksi/payroll/finishing"} component={Finishing}/>
                <Route path={"/transaksi/payroll/sewing"} component={Sewing}/>
                <Route path={"/transaksi/payroll/embordery"} component={Embordery}/>
                <Route path={"/transaksi/payroll/cutting"} component={Cutting}/>
                {/*<Route path={"/transaksi/payroll"} component={Payroll}/>*/}
                <Route path={"/transaksi/pengeluaran-lain"} component={PengeluaranLain}/>
                <Route path={"/transaksi/stock-opname"} component={StockOpname}/>
                <Route path={"/transaksi/mutasi-barang"} component={MutasiBarang}/>
                <Route path={"/transaksi/bayar-hutang-customer"} component={BayarHutangCustomer}/>
                <Route path={"/transaksi/bayar-hutang-supplier"} component={BayarHutangSupplier}/>
                <Route path={"/transaksi/saldo-awal-piutang"} component={SaldoAwalPiutang}/>
                <Route path={"/transaksi/pembayaran-fee"} component={PembayaranFee}/>
                <Route path={"/transaksi/return-penjualan"} component={ReturnPenjualan}/>
                <Route path={"/transaksi/return-pembelian"} component={ReturnPembelian}/>
                <Route path={"/transaksi/penjualan"} component={Penjualan}/>
                <Route path={"/transaksi/pembelian"} component={Pembelian}/>
                <Route path={"/transaksi/saldo-kas"} component={SaldoKas}/>

                {/*Master Data*/}
                <Route path="/master-data/produksi" component={Produksi}/>
                <Route path="/master-data/kategori-pengeluaran" component={KategoriPengeluaran}/>
                <Route path="/master-data/barang" component={Barang}/>
                <Route path="/master-data/satuan" component={Satuan}/>
                <Route path="/master-data/sales" component={Sales}/>
                <Route path="/master-data/area" component={Area}/>
                <Route path="/master-data/golongan" component={Golongan}/>
                <Route path="/master-data/customer" component={Customer}/>
                <Route path="/master-data/supplier" component={Supplier}/>
                <Route path="/master-data/gudang" component={Gudang}/>
                <Route path="/master-data/pegawai" component={Pegawai}/>

                {/*Auth*/}
                <Route path="/register" component={Register}/>
                <Route path="/" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
