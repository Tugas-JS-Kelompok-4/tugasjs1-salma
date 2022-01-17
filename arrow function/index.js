let mahasiswa = ['sumiarti', 'sarah', 'angelista'];
let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlhHuruf: nama.length}))
console.table(jumlahHuruf);