document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Data dummy untuk login
    const dummyUsers = [
        { email: "user1@gmail.com", password: "password123" },
        { email: "user2@gmail.com", password: "pass456" },
        { email: "admin@gmail.com", password: "admin123" }
    ];

    // Validasi jika ada field yang kosong
    if (!email || !password) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Harap isi semua kolom!",
        });
        return;
    }

    // Periksa apakah email dan password cocok dengan salah satu dummy user
    let isValidUser = dummyUsers.some(user => user.email === email && user.password === password);

    if (isValidUser) {
        Swal.fire({
            icon: "success",
            title: "Login Berhasil!",
            text: "Anda akan diarahkan ke halaman utama.",
            showConfirmButton: false,
            timer: 2000
        });

        // Redirect ke halaman utama setelah sukses login
        setTimeout(() => {
            window.location.href = "user.html";
        }, 2000);
    } else {
        Swal.fire({
            icon: "error",
            title: "Login Gagal!",
            text: "Email atau password salah!",
        });
    }
});