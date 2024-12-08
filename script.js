function showPage(page) {
    const pageContent = document.getElementById('page-content');
    pageContent.innerHTML = ''; // Sayfa içeriğini temizle

    if (page === 'kayıt-secim') {
        pageContent.innerHTML = `
            <h2>Kayıt Seçimi</h2>
            <button onclick="showPage('okul-kaydi')">Okul Kaydı</button>
            <button onclick="showPage('ogrenci-kaydi')">Öğrenci Kaydı</button>
        `;
    }

    if (page === 'okul-kaydi') {
        pageContent.innerHTML = `
            <h2>Okul Kaydı</h2>
            <form id="okulKaydiForm">
                <label>Okul Adı:</label><br>
                <input type="text" id="okulAdi" required><br>
                <label>İl:</label><br>
                <input type="text" id="il" required><br>
                <label>İlçe:</label><br>
                <input type="text" id="ilce" required><br>
                <label>Okul Şifresi:</label><br>
                <input type="password" id="okulSifresi" required><br>
                <button type="submit">Kaydet</button>
            </form>
        `;
    }

    if (page === 'ogrenci-kaydi') {
        pageContent.innerHTML = `
            <h2>Öğrenci Kaydı</h2>
            <form id="ogrenciKaydiForm">
                <label>Ad:</label><br>
                <input type="text" id="ad" required><br>
                <label>Soyad:</label><br>
                <input type="text" id="soyad" required><br>
                <label>Okul Numarası:</label><br>
                <input type="text" id="okulNumarasi" required><br>
                <label>E-posta:</label><br>
                <input type="email" id="email" required><br>
                <label>Telefon:</label><br>
                <input type="tel" id="telefon" required><br>
                <label>Sınıf:</label><br>
                <input type="text" id="sinif" required><br>
                <button type="submit">Kaydet</button>
            </form>
        `;
    }

    if (page === 'veri-giris') {
        pageContent.innerHTML = `
            <h2>Veri Girişi</h2>
            <form id="veriGirisForm">
                <label>Okul Adı:</label><br>
                <input type="text" id="okulAdiGiris" required><br>
                <label>Okul Şifresi:</label><br>
                <input type="password" id="okulSifresiGiris" required><br>
                <button type="submit">Giriş Yap</button>
            </form>
        `;
    }

    if (page === 'veri-goruntuleme') {
        pageContent.innerHTML = `
            <h2>Veri Görüntüleme</h2>
            <form id="veriGoruntulemeForm">
                <label>E-posta:</label><br>
                <input type="email" id="emailGoruntuleme" required><br>
                <label>Okul Numarası:</label><br>
                <input type="text" id="okulNumarasiGoruntuleme" required><br>
                <button type="submit">Veri Görüntüle</button>
            </form>
        `;
    }
}

// Okul kaydını işleme
document.getElementById('okulKaydiForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const okulAdi = document.getElementById('okulAdi').value;
    const il = document.getElementById('il').value;
    const ilce = document.getElementById('ilce').value;
    const okulSifresi = document.getElementById('okulSifresi').value;

    // Okul bilgilerini localStorage'a kaydet
    localStorage.setItem('okulAdi', okulAdi);
    localStorage.setItem('il', il);
    localStorage.setItem('ilce', ilce);
    localStorage.setItem('okulSifresi', okulSifresi);

    alert('Okul Kaydı Başarıyla Yapıldı!');
});

// Öğrenci kaydını işleme
document.getElementById('ogrenciKaydiForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const ad = document.getElementById('ad').value;
    const soyad = document.getElementById('soyad').value;
    const okulNumarasi = document.getElementById('okulNumarasi').value;
    const email = document.getElementById('email').value;
    const telefon = document.getElementById('telefon').value;
    const sinif = document.getElementById('sinif').value;

    // Öğrenci bilgilerini localStorage'a kaydet
    localStorage.setItem('ad', ad);
    localStorage.setItem('soyad', soyad);
    localStorage.setItem('okulNumarasi', okulNumarasi);
    localStorage.setItem('email', email);
    localStorage.setItem('telefon', telefon);
    localStorage.setItem('sinif', sinif);

    alert('Öğrenci Kaydı Başarıyla Yapıldı!');
});

// Veri girişi formunu işleme
document.getElementById('veriGirisForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const okulAdiGiris = document.getElementById('okulAdiGiris').value;
    const okulSifresiGiris = document.getElementById('okulSifresiGiris').value;

    // Okul bilgilerini kontrol et
    const storedOkulAdi = localStorage.getItem('okulAdi');
    const storedOkulSifresi = localStorage.getItem('okulSifresi');

    if (okulAdiGiris === storedOkulAdi && okulSifresiGiris === storedOkulSifresi) {
        // Şifre ve okul adı doğrulandı, öğrenci bilgilerini girme sayfasını göster
        showPage('veri-giris-form');
    } else {
        alert('Okul adı veya şifre yanlış!');
    }
});

// Veri giriş formunu işleme
document.getElementById('veri-giris-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Atık türü, kilogram ve öğrenci bilgilerini al
    const atikTuru = document.getElementById('atikTuru').value;
    const atikKilogram = document.getElementById('atikKilogram').value;
    const ogrenciAd = document.getElementById('ogrenciAd').value;
    const ogrenciSoyad = document.getElementById('ogrenciSoyad').value;
    const ogrenciOkulNumarasi = document.getElementById('ogrenciOkulNumarasi').value;
    const ogrenciSinif = document.getElementById('ogrenciSinif').value;
    const veriGiren = document.getElementById('veriGiren').value;

    // Veriyi localStorage'a kaydet
    const atikBilgileri = {
        atikTuru,
        atikKilogram,
        ogrenciAd,
        ogrenciSoyad,
        ogrenciOkulNumarasi,
        ogrenciSinif,
        veriGiren,
    };

    const storedVeriler = JSON.parse(localStorage.getItem('atikVerileri')) || [];
    storedVeriler.push(atikBilgileri);
    localStorage.setItem('atikVerileri', JSON.stringify(storedVeriler));

    alert('Veri başarıyla kaydedildi!');
});
