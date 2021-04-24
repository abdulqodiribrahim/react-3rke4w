let data1 = [
    {
        noTransaksi : '18104005',
        tglTransaksi : 'Orang',
        jenis : 'Barang',
        dariGudang : 'A',
        keGudang : 'B',
        keterangan : 'Purwokerto',
        total: '90.000',
        tglEntry : '10/10/10',
        userEntry : 'Administration',
    }
]

let data2 = [
    {
        kodeBarang : '0001',
        namaBarang : 'A102',
        qty : '10/10/10',
        satuan : 'Pcs',
        harga : '5000',
        total : '5000',
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

export const MutasiBarangDataTable1 = AddKey(data1);

export const MutasiBarangDataTable2 = AddKey(data2);
