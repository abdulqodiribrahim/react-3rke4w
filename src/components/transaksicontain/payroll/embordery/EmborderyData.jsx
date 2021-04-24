let data1 = [
    {
        noTransaksi : '18104005',
        tanggal : '10/10/10',
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
        awalCutting : '000',
        awalBordir : '000',
        qty: '5000',
        akhirCutting : '000',
        akhirBordir : '000',
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

export const EmborderyDataTable1 = AddKey(data1);

export const EmborderyDataTable2 = AddKey(data2);

