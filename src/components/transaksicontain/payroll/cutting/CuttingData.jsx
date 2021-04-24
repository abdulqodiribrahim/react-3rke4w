let data1 = [
    {
        noTransaksi : '18104005',
        tglTransaksi : 'Orang',
        kodeGudang : '5555',
        kodeKaryawan : '5555',
        namaKaryawan : 'Bagus',
        keterangan : 'Purwokerto',
        total: '90.000'
    }
]

let data2 = [
    {
        kodeBarang : '0001',
        namaBarang : 'A102',
        stock : '10/10/10',
        stockAwal : 'Pcs',
        qty: '5000',
        stockAkhir : '5000',
        harga : '5000',
        totalHarga : '5000'
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

export const CuttingDataTable1 = AddKey(data1);

export const CuttingDataTable2 = AddKey(data2);
