
let data1 = [
    {
        noTransaksi : '18104005',
        tglTransaksi : 'Orang',
        jenisPembelian : '10',
        noInvoice : 'Pcs',
        jenisNota : '53233',
        jtHari : 'Administration',
        tgljT : '10/12/2021',
        kodeSupplier : '18104005',
        namaSupplier : 'Orang',
        alamat : '10',
        subTotal : 'Pcs',
        discount : '53233',
        jumlahDiscount : 'Administration',
        biayaLain : '10/12/2021',
        hargaBersih : '18104005',
        cash : 'Orang',
        transfer : 'Orang',
        check : '10',
        totalBayar : '53233',
        kembali : 'Administration',
        hutang : '10/12/2021',
        noCek : '18104005',
        namaBank : '53233',
        atasNama : 'Administration',
        tglCek : '10/12/2021',
        tglCair : 'Administration',
        tglEntry : '10/12/2021',
        userEntry : '18104005'
    }
]

let data2 = [
    {
        kodeBarang : '10/12/2021',
        namaBarang : 'A102',
        qty : '10',
        satuan : 'Pcs',
        harga : '10000',
        discount : '10',
        discountRP : '1000',
        total : '100000'
    }
]

function AddKey(data) {
    let addKey = [];

    for (let i = 0; i < data.length; i++) {
        let index = i
        data[i].no = ++index;
        addKey[i] = data[i];
    }
    console.log(addKey)
    return addKey;
}

export const PembelianDataTable1 = AddKey(data1);

export const PembelianDataTable2 = AddKey(data2);