let data1 = [
    {
        noTransaksi : '0000',
        tglTransaksi : '10/10/10',
        noDokumen : '5555',
        kategori1 : 'A',
        kategori2 : 'B',
        totalHarga : '90.000',
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
        jumlahHarga : '5000',
        keterangan : 'ababa',
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

export const PengeluaranLainDataTable1 = AddKey(data1);

export const PengeluaranLainDataTable2 = AddKey(data2);
