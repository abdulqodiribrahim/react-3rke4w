let data1 = [
    {
        noTransaksi : '18104005',
        tanggal : '10/10/10',
        dari : '5555',
        kodeKaryawan : '5555',
        namaKaryawan : 'Bagus',
        totalGaji : 'Bagus',
        keterangan : 'Bagus',
        userEntry : 'Purwokerto',
        tglEntry: '90.000'
    }
]

let data2 = [
    {
        kodePegawai : '0001',
        namaPegawai : 'A102',
        jumlah : 'A102',
        potongan : '000',
        bonus : '000',
        totalGaji: '5000',
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

export const PembayaranHarianDataTable1 = AddKey(data1);

export const PembayaranHarianDataTable2 = AddKey(data2);
