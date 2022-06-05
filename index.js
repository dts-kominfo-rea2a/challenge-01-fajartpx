// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let favoriteRestaurant1= ['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi'];
let favoriteRestaurant2=["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];

let firstUser = {
    name : "Monica",
    gender : "Female",
    age : 17,
    email : "monica@dingdong.com",
    favoriteColor: new Set([
         'Yellow', 'Pink', 'White', 'Purple',
    ]),

    isHavePet : 'Yes',

    education : [
        { name : "SD 01", city : "Jakarta", graduate : "2016"},
        { name : "SMP 02", city : "Jakarta", graduate : "2019"},
        { name : "SMA 31", city : "Tangerang"},
        ]
    ,
    
    favoriteRestaurant: new Set(favoriteRestaurant1),

};

let secondUser = {
    name : "Wendy",
    gender : "Male",
    age : 23,
    email : "wendy@dingdong.com",
    favoriteColor: new Set([
         'Blue', 'Black', 'Gray',
    ]),

    isHavePet : 'No',

    education : [
        { name : "SD 02", city : "Jakarta", graduate : "2010"},
        { name : "SMP 03", city : "Bogor", graduate : "2013"},
        { name : "SMA 01", city : "Surabaya", graduate : "2016"},
        { name : "Universitas Maju", city : "Tangerang"},
    ],
    
    favoriteRestaurant: new Set(favoriteRestaurant2),
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};