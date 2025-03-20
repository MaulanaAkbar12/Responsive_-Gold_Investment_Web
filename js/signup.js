document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman

  // Ambil data dari form
  let name = document.getElementById("name").value.trim();
  let nik = document.getElementById("nik").value.trim();
  let address = document.getElementById("address").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let dob = document.getElementById("dob").value;
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Validasi jika ada field yang kosong
  if (!name || !nik || !address || !phone || !dob || !username || !email || !password) {
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Harap isi semua kolom!",
      });
      return;
  }

  // Validasi email menggunakan regex
  let emailPattern = /^[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
      Swal.fire({
          icon: "error",
          title: "Email tidak valid",
          text: "Harap masukkan email yang benar!",
      });
      return;
  }

  // Simpan data ke localStorage (simulasi backend)
  localStorage.setItem(
      "user",
      JSON.stringify({ name, nik, address, phone, dob, username, email, password })
  );

  // Notifikasi sukses dengan SweetAlert
  Swal.fire({
      icon: "success",
      title: "Pendaftaran Berhasil!",
      text: "Akun Anda telah berhasil dibuat.",
      showConfirmButton: false,
      timer: 2000
  });

  // Redirect ke halaman login setelah sukses
  setTimeout(() => {
      window.location.href = "signin.html";
  }, 2000);
});