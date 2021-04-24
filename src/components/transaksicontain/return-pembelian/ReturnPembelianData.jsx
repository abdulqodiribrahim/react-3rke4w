
let data1 = [
    {
        noTransaksi : '18104005',
        tglTransaksi : 'Orang',
        kodeSupplier : '18104005',
        namaSupplier : 'Orang',
        noPembelian : '10',
        noDokumen : '100',
        subTotal : '53233',
    }
]

let data2 = [
    {
        kodeBarang : '10/12/2021',
        namaBarang : 'A102',
        qtyBeli : '10',
        qtySudahReturn : '10',
        qtySisa : '10',
        qtyReturn : '10',
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

export const ReturnPembelianDataTable1 = AddKey(data1);

export const ReturnPembelianDataTable2 = AddKey(data2);