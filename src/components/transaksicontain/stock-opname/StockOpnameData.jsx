let data1 = [
    {
        noTransaksi : '18104005',
        tglTransaksi : 'Orang',
        keterangan : 'Purwokerto',
        tglEntry : '10/10/10',
        userEntry : 'Administration',
    }
]

let data2 = [
    {
        kodeBarang : '0001',
        namaBarang : 'A102',
        satuan : 'Pcs',
        stockAwal : '5000',
        plus : '0',
        minus : '0',
        stockAkhir : '1000'
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

export const StockOpnameDataTable1 = AddKey(data1);

export const StockOpnameDataTable2 = AddKey(data2);
