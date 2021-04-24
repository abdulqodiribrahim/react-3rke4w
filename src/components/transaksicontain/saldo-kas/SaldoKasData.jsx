let data = [
    {
        noTransaksi : '0000',
        tanggalProduksi : 'Monitor LG 24 inch',
        jenis : '0812315613213',
        jumlah : 'Jl. Hos Notosuwiryo Teluk Purwokerto',
        keterangan : 'Mahasiswa yang sedang mencari ilmu',
        userEntry : 'Administration',
        tanggalEntry : '10/12/2021'
    }
]

function AddKey() {
    let addKey = [];

    for (let i = 0; i < data.length; i++) {
        let index = i
        data[i].no = ++index;
        addKey[i] = data[i];
    }
    console.log(addKey)
    return addKey;
}

export const SaldoKasData = AddKey();