let data = [
    {
        noTransaksi : '0000',
        kodeCustomer : 'Monitor LG 24 inch',
        namaCustomer : '0812315613213',
        dari : 'Jl. Hos Notosuwiryo Teluk Purwokerto',
        sampai : 'Mahasiswa yang sedang mencari ilmu',
        grandTotal : 'Administration',
        fee : '10/12/2021',
        penerimaan : 'Mahasiswa yang sedang mencari ilmu',
        keterangan : 'Administration'
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

export const PembayaranFeeData = AddKey();