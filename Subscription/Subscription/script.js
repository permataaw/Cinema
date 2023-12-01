const catalogItems = [
    { id: 1, name: "Standart", nomenclature:"Rp 45.000", kelangkaan: "1 Device only", taksonomi: "Standart Definition", bahaya: "720p 60fps",kegunaan: "Konsumsi Non Herbal", image: "", deskripsi: "Ketersediaan HD (720p), Full HD (1080p), Ultra HD (4K), dan HDR tergantung pada layanan internet dan kemampuan perangkatmu. Tidak semua konten tersedia dalam semua resolusi. Lihat Ketentuan Penggunaan untuk rincian selengkapnya."},
    { id: 2, name: "Pro", nomenclature:"Rp 90.000", kelangkaan: "4 Device", taksonomi: "High Definition", bahaya: "1080p 60fps", kegunaan: "Non Konsumsi", image: "pro.png", deskripsi: "Ketersediaan HD (720p), Full HD (1080p), Ultra HD (4K), dan HDR tergantung pada layanan internet dan kemampuan perangkatmu. Tidak semua konten tersedia dalam semua resolusi. Lihat Ketentuan Penggunaan untuk rincian selengkapnya." },
    { id: 3, name: "Family", nomenclature:"Rp 150.000",kelangkaan: "4 Device & Sharing ", taksonomi: "High Definition", bahaya: "4k 60fps", kegunaan: "Konsumsi Non Herbal", image: "image3.jpg", deskripsi: "Ketersediaan HD (720p), Full HD (1080p), Ultra HD (4K), dan HDR tergantung pada layanan internet dan kemampuan perangkatmu. Tidak semua konten tersedia dalam semua resolusi. Lihat Ketentuan Penggunaan untuk rincian selengkapnya." },
   
  ];  

  
  

  const searchInput = document.getElementById('searchInput');
  const filterKelangkaan = document.getElementById('filterKelangkaan');
  const filterTaksonomi = document.getElementById('filterTaksonomi');
  const filterBahaya = document.getElementById('filterBahaya');
  const filterKegunaan = document.getElementById('filterKegunaan');
  const catalogContainer = document.querySelector('.catalog');
  
  // Tampilkan semua item katalog secara default
  displayCatalogItems(catalogItems);

  
  function updateCatalog() {
  
    const filteredItems = catalogItems.filter(item => {
     
     
  
      return matchesSearch && matchesKelangkaan && matchesTaksonomi && matchesBahaya && matchesKegunaan;
    });
  
    displayCatalogItems(filteredItems);
  }
  
  function displayCatalogItems(items) {
    catalogContainer.innerHTML = '';
  
    items.forEach(item => {
      const catalogItem = document.createElement('div');
      catalogItem.classList.add('card');
      catalogItem.innerHTML = `
        <img src="img/image${item.id}.jpg" alt="${item.name}" class="image${item.id}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <h6><i>${item.nomenclature}<i></h6>
          <div class="text">
          <div class="simbol"><p>${item.kelangkaan}</p></div>
          <div class="simbol"><p>${item.taksonomi}</p></div>
          <div class="simbol"><p>${item.bahaya}</p></div>
        
          </div>
          <div class="desc">
          <p class="deskripsi">${item.deskripsi}</p>
          </div>
          
        </div>
      `;
      catalogContainer.appendChild(catalogItem);
    });
  }

  document.getElementById("contact").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  });
  









  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollBtn").style.display = "block";
    } else {
      document.getElementById("scrollBtn").style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  



  
  