let data = [
    {
        noTransaksi : '0000',
        kodeCustomer : 'Monitor LG 24 inch',
        namaCustomer : 'Monitor LG 24 inch',
        saldoAwal : '0812315613213',
        saldoAkhir : 'Jl. Hos Notosuwiryo Teluk Purwokerto',
        grandTotal : '0812315613213',
        keterangan : 'Mahasiswa yang sedang mencari ilmu',
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

export const SaldoAwalPiutangData = AddKey();