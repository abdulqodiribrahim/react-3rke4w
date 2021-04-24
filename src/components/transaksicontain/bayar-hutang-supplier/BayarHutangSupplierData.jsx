
let data1 = [
    {
        noTransaksi : '18104005',
        tglTransaksi : 'Orang',
        noDokumen : '100',
        kodeSupplier : '18104005',
        namaSupplier : 'Orang',
        alamat : '10',
        totalHutang : '53233',
    }
]

let data2 = [
    {
        noBeli : '10/12/2021',
        noDokumen : 'A102',
        tglBeli : '10',
        totalBeli : '10',
        totalBayar : '10',
        totalHutang : '10',
        bayar : 'Pcs',
        sisaHutang : '10000',
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

export const BayarHutangSupplierDataTable1 = AddKey(data1);

export const BayarHutangSupplierDataTable2 = AddKey(data2);