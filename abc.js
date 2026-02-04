// Cau 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Cau 2
let products = [
    new Product(1, "Bàn phím cơ", 850000, 20, "Accessories", true),
    new Product(2, "Chuột không dây", 450000, 35, "Accessories", true),
    new Product(3, "Màn hình 24 inch", 3500000, 15, "Desktop", true),
    new Product(4, "Laptop Dell XPS 13", 25000000, 10, "Laptop", true),
    new Product(5, "Ổ cứng SSD 1TB", 3000000, 25, "Desktop", true),
    new Product(6, "Tai nghe Bluetooth", 1200000, 30, "Accessories", true),
    new Product(7, "Máy in HP LaserJet", 5500000, 8, "Office", false),
];

console.log("PRODUCTS:");
console.log(products);

// Cau 3
let danhSachTenVaGia = products.map(p => ({ name: p.name, price: p.price }));
console.log("\nCâu 3:");
console.log(danhSachTenVaGia);

// Cau 4
let locSPConHang = products.filter(p => p.quantity > 0);
console.log("\nCâu 4:");
console.log(locSPConHang);

// Cau 5
let spTren30 = products.some(p => p.price > 30000000);
console.log("\nCâu 5:");
console.log(spTren30);

// Cau 6
let locSPDANGBAN = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);
console.log("\nCâu 6:");
console.log(locSPDANGBAN);

// Cau 7
let tinhTongTK = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
console.log("\nCâu 7:");
console.log(tinhTongTK.toLocaleString("vi-VN") + " VND");

// Cau 8
console.log("\nCâu 8:");
for (const p of products) {
    let status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    // LƯU Ý: Đã thêm dấu backtick (`) ở dưới để code chạy đúng
    console.log(`${p.name} - ${p.category} - ${status}`);
}

// Cau 9
console.log("\nCâu 9:");
for (const p of products) {
    console.log("---- Product ----");
    for (const key in p) {
        // LƯU Ý: Đã thêm dấu backtick (`) ở dưới
        console.log(`${key}: ${p[key]}`);
    }
}

// Cau 10
let inSPDangBanVaConHang = products
    .filter(p => p.isAvailable === true && p.quantity > 0)
    .map(p => p.name);
console.log("\nCâu 10:");
console.log(inSPDangBanVaConHang);