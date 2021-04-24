import React from 'react';

export const SidebarData = [
    {
        title: "Dashboard",
        icon : <img src={"/asset/iconDashboard.png"}/>,
        path : '/'
    },
    {
        title: 'Master Data',
        iconClosed: <img src={"/asset/polygonMenuClosed.png"}/>,
        iconOpened: <img src={"/asset/polygonMenu.png"}/>,
        subNav: [
            {
                title: 'Gudang',
                path: '/master-data/gudang',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Pegawai',
                path: '/master-data/pegawai',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Supplier',
                path: '/master-data/supplier',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Customer',
                path: '/master-data/customer',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Golongan',
                path: '/master-data/golongan',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Area',
                path: '/master-data/area',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Sales',
                path: '/master-data/sales',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Satuan',
                path: '/master-data/satuan',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Barang',
                path: '/master-data/barang',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Kategori Pengeluaran',
                path: '/master-data/kategori-pengeluaran',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Produksi',
                path: '/master-data/produksi',
                icon: <img src={"/asset/polygonSubMenu.png"}/>
            }
        ]
    },
    {
        title: 'Transaksi',
        iconClosed: <img src={"/asset/polygonMenuClosed.png"}/>,
        iconOpened: <img src={"/asset/polygonMenu.png"}/>,
        subNav: [
            {
                title: 'Saldo Kas',
                path: '/transaksi/saldo-kas',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Pembelian',
                path: '/transaksi/pembelian',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Penjualan',
                path: '/transaksi/penjualan',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Return Pembelian',
                path: '/transaksi/return-pembelian',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Return Penjualan',
                path: '/transaksi/return-penjualan',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Pembayaran Fee',
                path: '/transaksi/pembayaran-fee',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Saldo Awal Piutang',
                path: '/transaksi/saldo-awal-piutang',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Bayar Hutang Supplier',
                path: '/transaksi/bayar-hutang-supplier',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Bayar Hutang Customer',
                path: '/transaksi/bayar-hutang-customer',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Mutasi Barang',
                path: '/transaksi/mutasi-barang',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Stock Opname',
                path: '/transaksi/stock-opname',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Pengeluaran Lain-lain',
                path: '/transaksi/pengeluaran-lain',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
            },
            {
                title: 'Payroll',
                icon: <img src={"/asset/polygonSubMenu.png"}/>,
                path: '/transaksi/payroll',
                subNav : [
                    {
                        title: 'Cutting',
                        icon: <img src={"/asset/polygonSubMenu.png"}/>,
                        path: '/transaksi/payroll/cutting'
                    },
                    {
                        title: 'Embordery',
                        icon: <img src={"/asset/polygonSubMenu.png"}/>,
                        path: '/transaksi/payroll/embordery'
                    },
                    {
                        title: 'Sewing',
                        icon: <img src={"/asset/polygonSubMenu.png"}/>,
                        path: '/transaksi/payroll/sewing'
                    },
                    {
                        title: 'Finishing',
                        icon: <img src={"/asset/polygonSubMenu.png"}/>,
                        path: '/transaksi/payroll/finishing'
                    },
                    {
                        title: 'Pembayaran Harian',
                        icon: <img src={"/asset/polygonSubMenu.png"}/>,
                        path: '/transaksi/payroll/pembayaran-harian'
                    }
                ]
            },

        ]
    },

];