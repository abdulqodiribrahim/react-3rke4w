let data1 = [
    {
        kodeBahan : '18104005',
        namaBahan : 'Orang',
        qty : '10',
        satuan : 'Pcs',
        hargaBeli : '53233',
        userEntry : 'Administration',
        tanggalEntry : '10/12/2021'
    }
]

let data2 = [
    {
        tanggalProduksi : '10/12/2021',
        kodeProduksi : 'A102',
        namaProduksi : 'Makanan ',
        qty : '10',
        satuan : 'Pcs',
        hargaBeli : '53233',
        userEntry : 'Administration',
        tanggalEntry : '10/12/2021'
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

export const ProduksiDataTable1 = AddKey(data1);

export const ProduksiDataTable2 = AddKey(data2);