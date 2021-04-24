let data = [
    {
        kodeBarang : '18104005',
        namaBarang : 'Bagus Bayu Sasongko',
        merk : 'Jl. Hos Notowsuwiryo gang 2A teluk purwokerto',
        type : 'Purwokerto',
        golongan : '53233',
        satuan : 'kg',
        kodeSupplier : '0001',
        hargaBeli : '100000',
        hargaJual1 : '1000000',
        hargaJual2 : '1000000',
        hargaJual3 : '1000000',
        hargaJual4 : '1000000',
        maximalStock : '99',
        minimalStock : '1',
        keterangan : 'Bagus',
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

export const BarangData = AddKey();
