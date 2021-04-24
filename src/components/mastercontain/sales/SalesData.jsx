let data = [
    {
        kodeCustomer : '18104005',
        namaCustomer : 'Bagus Bayu Sasongko',
        alamat : 'Jl. Hos Notowsuwiryo gang 2A teluk purwokerto ',
        kota : 'Purwokerto',
        kodePos : '53233',
        email : 'bagusbs226@gmail.com',
        telepon : '082314828727',
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

export const SalesData = AddKey();
