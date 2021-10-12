function validateForm() {
    if (document.forms["formPendaftaran"]["namadepan"].value == "") {
        alert("Nama depan Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["namadepan"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["namabelakang"].value == "") {
        alert("Nama belakang Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["namabelakang"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["NRP"].value == "") {
        alert("NRP Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["NRP"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["email"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["domisili"].value == "") {
        alert("Domisili Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["domisili"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["nomorhp"].value == "") {
        alert("Nomor HP Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nomorhp"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["fakultas"].selectedIndex < 1) {
        alert("Pilih Fakultas.");
        document.forms["formPendaftaran"]["fakultas"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["jurusan"].selectedIndex < 1) {
        alert("Pilih Jurusan.");
        document.forms["formPendaftaran"]["jurusan"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["keteranganvaksin"].selectedIndex < 1) {
        alert("Keterangan Vaksin Tidak boleh Kosong");
        document.forms["formPendaftaran"]["keteranganvaksin"].focus();
        return false;
    }
}
function validateFileupload(fileName) {
    var allowed_extensions = new Array("jpg", "png", "pdf");
    var file_extension = fileName.split(".").pop().toLowerCase(); // split function will split the filename by dot(.), and pop function will pop the last element from the array which will give you the extension as well. If there will be no extension then it will return the filename.

    for (var i = 0; i <= allowed_extensions.length; i++) {
        if (allowed_extensions[i] == file_extension) {
            return true; // valid file extension
        }
    }
    alert("File sertifikat harus jpg, png, atau pdf !");
    return false;
}