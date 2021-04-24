import { db } from "../../../koneksi";

function AddKey() {
    let addKey = [{}];
    let i = 0;
    // get the whole collection
    db.collection("tm_gudang")
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let index = i
                addKey[i] = doc.data();
                i++;
            })
        });
        
    console.log(addKey);
    return addKey;
}

export const GudangData = AddKey();