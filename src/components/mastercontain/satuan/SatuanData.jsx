let data = [
    {
        satuan : 'Pcs',
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

export const SatuanData = AddKey();