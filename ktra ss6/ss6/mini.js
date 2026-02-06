let libraries = ["Toán", "Văn", "Anh"];

const ADMIN_USER = "admin";
const ADMIN_PASS = "12345";
let loginCount = 0;
let isLogin = false;

while (loginCount < 3) {
    let username = prompt("Nhập tên đăng nhập:");
    let password = prompt("Nhập mật khẩu:");

    if (username === ADMIN_USER && password === ADMIN_PASS) {
        alert("Đăng nhập thành công!");
        isLogin = true;
        break;
    } else {
        loginCount++;
        alert(`Sai thông tin! Bạn còn ${3 - loginCount} lần thử.`);
    }
}

if (!isLogin) {
    alert("Tài khoản đã bị khóa!");
}

let running = true;

while (running) {
    let choice = prompt(`
=== QUẢN LÝ THƯ VIỆN ===
1. Nhập thêm lô sách mới
2. Hiển thị danh sách sách
3. Tìm kiếm sách
4. Cập nhật tên sách
5. Đảo ngược thứ tự kệ sách
6. Nhập kho từ nguồn khác
7. Thoát chương trình
Mời bạn chọn (1-7):
    `);

    switch (choice) {
        case "1": {
            let input = prompt("Nhập tên sách (phân cách bằng dấu phẩy):");
            if (!input) break;

            let newBooks = input.split(",");
            let count = 0;

            for (let book of newBooks) {
                let cleanBook = book.trim();
                if (cleanBook !== "") {
                    libraries.push(cleanBook);
                    count++;
                }
            }

            alert(`Đã thêm ${count} cuốn sách vào kho`);
            break;
        }

        case "2": {
            console.clear();
            console.log("DANH SÁCH SÁCH TRONG THƯ VIỆN:");
            for (let i = 0; i < libraries.length; i++) {
                console.log(`${i + 1}. ${libraries[i]}`);
            }
            break;
        }

        case "3": {
            let keyword = prompt("Nhập tên sách cần tìm:");
            if (!keyword) break;

            let index = libraries
                .map(b => b.toLowerCase())
                .indexOf(keyword.toLowerCase());

            if (index !== -1) {
                alert(`Tìm thấy tại vị trí: ${index + 1}`);
            } else {
                alert("Không tìm thấy sách");
            }
            break;
        }

        case "4": {
            let oldName = prompt("Nhập tên sách cũ:");
            if (!oldName) break;

            let index = libraries.indexOf(oldName);
            if (index === -1) {
                alert("Sách không tồn tại!");
                break;
            }

            let newName = prompt("Nhập tên sách mới:");
            if (!newName) break;

            libraries[index] = newName;
            alert("Cập nhật sách thành công!");
            break;
        }

        case "5": {
            libraries.reverse();
            console.clear();
            console.log("DANH SÁCH SAU KHI ĐẢO NGƯỢC:");
            for (let i = 0; i < libraries.length; i++) {
                console.log(`${i + 1}. ${libraries[i]}`);
            }
            break;
        }

        case "6": {
            let otherBranch = ["Lý", "Hóa", "Sinh"];
            libraries = libraries.concat(otherBranch);
            alert("Đã gộp kho sách thành công!");
            break;
        }
        case "7":
            alert("Hẹn gặp lại!");
            running = false;
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
    }
}
