/* ===========================
   SenImmo - JavaScript Principal
   =========================== */

// Sample Data
const properties = [
  {
    id: 1,
    type: "maison",
    transaction: "vente",
    title: "Belle villa moderne avec piscine",
    price: 85000000,
    location: "Almadies, Dakar",
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    description: "Magnifique villa moderne située dans le quartier prisé des Almadies. Cette propriété dispose d'un grand salon lumineux, d'une cuisine équipée, de 4 chambres spacieuses dont une suite parentale, de 3 salles de bain, d'un jardin paysagé avec piscine et d'un garage double. Idéale pour une famille recherchant confort et prestige dans l'un des meilleurs quartiers de Dakar.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
    ],
    agent: "Mamadou Diallo",
    phone: "+221771234567",
    email: "mamadou@senimmo.sn",
    date: "2026-03-10",
    featured: true
  },
  {
    id: 2,
    type: "chambre",
    transaction: "location",
    title: "Chambre meublée climatisée Mermoz",
    price: 250000,
    location: "Mermoz, Dakar",
    bedrooms: 1,
    bathrooms: 1,
    area: 25,
    description: "Chambre meublée et climatisée disponible à Mermoz. Parfaite pour étudiants ou jeunes professionnels. Accès à une cuisine partagée et à une salle de bain privative. Quartier calme et sécurisé, à proximité des transports en commun et des commerces.",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=500&fit=crop"
    ],
    agent: "Fatou Sow",
    phone: "+221779876543",
    email: "fatou@senimmo.sn",
    date: "2026-03-09",
    featured: true
  },
  {
    id: 3,
    type: "terrain",
    transaction: "vente",
    title: "Terrain 500m² viabilisé à Diamniadio",
    price: 15000000,
    location: "Diamniadio, Dakar",
    bedrooms: 0,
    bathrooms: 0,
    area: 500,
    description: "Terrain de 500m² entièrement viabilisé situé dans la nouvelle ville de Diamniadio. Titre foncier individuel. Accès direct à la route principale. Zone en plein développement avec toutes les commodités à proximité. Excellent investissement pour construction résidentielle ou commerciale.",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&h=500&fit=crop"
    ],
    agent: "Ousmane Ndiaye",
    phone: "+221776543210",
    email: "ousmane@senimmo.sn",
    date: "2026-03-08",
    featured: true
  },
  {
    id: 4,
    type: "maison",
    transaction: "location",
    title: "Appartement F3 standing Plateau",
    price: 450000,
    location: "Plateau, Dakar",
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    description: "Bel appartement F3 de standing au cœur du Plateau. Entièrement rénové, il comprend un séjour spacieux, une cuisine moderne, 2 chambres et une salle de bain. Immeuble sécurisé avec gardien, ascenseur et parking souterrain.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
    ],
    agent: "Aïssatou Ba",
    phone: "+221778901234",
    email: "aissatou@senimmo.sn",
    date: "2026-03-07",
    featured: false
  },
  {
    id: 5,
    type: "maison",
    transaction: "vente",
    title: "Maison traditionnelle rénovée Gorée",
    price: 120000000,
    location: "Île de Gorée, Dakar",
    bedrooms: 5,
    bathrooms: 3,
    area: 280,
    description: "Exceptionnelle maison traditionnelle entièrement rénovée sur l'île de Gorée. Architecture coloniale préservée avec tout le confort moderne. 5 chambres, 3 salles de bain, terrasse avec vue sur l'océan, cour intérieure. Un bien rare et unique.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop"
    ],
    agent: "Ibrahima Fall",
    phone: "+221775678901",
    email: "ibrahima@senimmo.sn",
    date: "2026-03-06",
    featured: true
  },
  {
    id: 6,
    type: "terrain",
    transaction: "vente",
    title: "Terrain constructible 1000m² Saly",
    price: 25000000,
    location: "Saly, Mbour",
    bedrooms: 0,
    bathrooms: 0,
    area: 1000,
    description: "Grand terrain constructible de 1000m² à Saly Portudal. Situé dans une zone résidentielle calme, à 5 minutes de la plage. Titre foncier disponible. Idéal pour projet de villa, résidence touristique ou investissement locatif.",
    images: [
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop"
    ],
    agent: "Cheikh Mbaye",
    phone: "+221773456789",
    email: "cheikh@senimmo.sn",
    date: "2026-03-05",
    featured: false
  },
  {
    id: 7,
    type: "chambre",
    transaction: "location",
    title: "Studio moderne meublé Sacré-Cœur",
    price: 350000,
    location: "Sacré-Cœur, Dakar",
    bedrooms: 1,
    bathrooms: 1,
    area: 35,
    description: "Studio moderne entièrement meublé et équipé au Sacré-Cœur. Climatisation, WiFi, cuisine équipée, salle de bain moderne. Résidence sécurisée. Proche de l'université et des centres commerciaux.",
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=500&fit=crop"
    ],
    agent: "Mariama Sy",
    phone: "+221772345678",
    email: "mariama@senimmo.sn",
    date: "2026-03-04",
    featured: false
  },
  {
    id: 8,
    type: "maison",
    transaction: "vente",
    title: "Villa luxe avec vue mer Ngor",
    price: 200000000,
    location: "Ngor, Dakar",
    bedrooms: 6,
    bathrooms: 4,
    area: 500,
    description: "Villa de luxe exceptionnelle avec vue panoramique sur la mer à Ngor. 6 chambres avec salles de bain attenantes, grand salon, salle à manger, cuisine haut de gamme, piscine à débordement, jardin tropical, garage pour 3 véhicules. Finitions premium.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop"
    ],
    agent: "Abdoulaye Diop",
    phone: "+221770123456",
    email: "abdoulaye@senimmo.sn",
    date: "2026-03-03",
    featured: true
  },
  {
    id: 9,
    type: "chambre",
    transaction: "location",
    title: "Chambre colocation étudiante UCAD",
    price: 150000,
    location: "Fann, Dakar",
    bedrooms: 1,
    bathrooms: 1,
    area: 18,
    description: "Chambre disponible en colocation à proximité de l'UCAD. Idéale pour étudiant. Salle de bain et cuisine partagées. Environnement calme et studieux. Charges incluses dans le loyer.",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=500&fit=crop"
    ],
    agent: "Awa Dieng",
    phone: "+221776789012",
    email: "awa@senimmo.sn",
    date: "2026-03-02",
    featured: false
  }
];

// Format price in FCFA
function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
}

// Format date
function formatDate(dateStr) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(dateStr).toLocaleDateString('fr-FR', options);
}

// Time ago
function timeAgo(dateStr) {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Aujourd'hui";
  if (diffDays === 1) return "Hier";
  if (diffDays < 7) return `Il y a ${diffDays} jours`;
  if (diffDays < 30) return `Il y a ${Math.floor(diffDays / 7)} semaine(s)`;
  return `Il y a ${Math.floor(diffDays / 30)} mois`;
}

// Save to localStorage
function saveProperties() {
  localStorage.setItem('senimmo_properties', JSON.stringify(properties));
}

// Load from localStorage
function loadProperties() {
  const saved = localStorage.getItem('senimmo_properties');
  if (saved) {
    const parsed = JSON.parse(saved);
    properties.length = 0;
    parsed.forEach(p => properties.push(p));
  }
}

// Get favorites
function getFavorites() {
  const saved = localStorage.getItem('senimmo_favorites');
  return saved ? JSON.parse(saved) : [];
}

// Toggle favorite
function toggleFavorite(id) {
  let favs = getFavorites();
  const index = favs.indexOf(id);
  if (index > -1) {
    favs.splice(index, 1);
  } else {
    favs.push(id);
  }
  localStorage.setItem('senimmo_favorites', JSON.stringify(favs));
  return favs.includes(id);
}

// Generate property card HTML
function createPropertyCard(property) {
  const favs = getFavorites();
  const isFav = favs.includes(property.id);
  const badgeClass = property.transaction === 'vente' ? 'badge-sale' : 'badge-rent';
  const badgeText = property.transaction === 'vente' ? 'Vente' : 'Location';
  const priceLabel = property.transaction === 'location' ? '/mois' : '';

  return `
    <div class="col-md-6 col-lg-4 mb-4 fade-in property-item" 
         data-type="${property.type}" 
         data-transaction="${property.transaction}"
         data-price="${property.price}"
         data-location="${property.location}"
         data-bedrooms="${property.bedrooms}">
      <div class="property-card">
        <div class="property-card-img">
          <a href="annonce.html?id=${property.id}">
            <img src="${property.images[0]}" alt="${property.title}" loading="lazy">
          </a>
          <span class="property-badge ${badgeClass}">${badgeText}</span>
          <button class="property-favorite ${isFav ? 'active' : ''}" onclick="event.preventDefault(); handleFavorite(this, ${property.id})">
            <i class="bi bi-heart${isFav ? '-fill' : ''}"></i>
          </button>
        </div>
        <div class="property-card-body">
          <div class="property-price">${formatPrice(property.price)} <span>${priceLabel}</span></div>
          <h5 class="property-title">
            <a href="annonce.html?id=${property.id}">${property.title}</a>
          </h5>
          <div class="property-location">
            <i class="bi bi-geo-alt-fill"></i> ${property.location}
          </div>
          <div class="property-features">
            ${property.bedrooms > 0 ? `<div class="property-feature"><i class="bi bi-door-open"></i> ${property.bedrooms} Ch.</div>` : ''}
            ${property.bathrooms > 0 ? `<div class="property-feature"><i class="bi bi-droplet"></i> ${property.bathrooms} SdB</div>` : ''}
            <div class="property-feature"><i class="bi bi-arrows-angle-expand"></i> ${property.area} m²</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Handle favorite click
function handleFavorite(btn, id) {
  const isFav = toggleFavorite(id);
  btn.classList.toggle('active', isFav);
  btn.innerHTML = `<i class="bi bi-heart${isFav ? '-fill' : ''}"></i>`;
  showToast(isFav ? 'Ajouté aux favoris !' : 'Retiré des favoris');
}

// Show toast notification
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-custom';
  toast.style.borderLeftColor = type === 'success' ? 'var(--secondary)' : 'var(--danger)';
  toast.innerHTML = `
    <i class="bi bi-check-circle-fill" style="color: ${type === 'success' ? 'var(--secondary)' : 'var(--danger)'}; font-size: 1.2rem;"></i>
    <span style="font-weight: 500;">${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===========================
// Page: Accueil
// ===========================
function initHomePage() {
  // Featured properties
  const container = document.getElementById('featured-properties');
  if (container) {
    const featured = properties.filter(p => p.featured).slice(0, 6);
    container.innerHTML = featured.map(p => createPropertyCard(p)).join('');
  }

  // Search form
  const searchForm = document.getElementById('hero-search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const type = document.getElementById('search-type').value;
      const location = document.getElementById('search-location').value;
      const budget = document.getElementById('search-budget').value;
      let url = 'annonces.html?';
      if (type) url += `type=${type}&`;
      if (location) url += `location=${encodeURIComponent(location)}&`;
      if (budget) url += `budget=${budget}&`;
      window.location.href = url;
    });
  }

  // Category clicks
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
      const type = this.dataset.type;
      window.location.href = `annonces.html?type=${type}`;
    });
  });
}

// ===========================
// Page: Annonces (List)
// ===========================
function initAnnoncesPage() {
  const container = document.getElementById('properties-grid');
  if (!container) return;

  // Parse URL params for initial filters
  const params = new URLSearchParams(window.location.search);
  const initialType = params.get('type') || '';
  const initialLocation = params.get('location') || '';
  const initialBudget = params.get('budget') || '';

  // Set initial filter values
  if (initialType) {
    const typeSelect = document.getElementById('filter-type');
    if (typeSelect) typeSelect.value = initialType;
  }
  if (initialLocation) {
    const locInput = document.getElementById('filter-location');
    if (locInput) locInput.value = initialLocation;
  }
  if (initialBudget) {
    const budgetSelect = document.getElementById('filter-budget');
    if (budgetSelect) budgetSelect.value = initialBudget;
  }

  function renderProperties() {
    const type = document.getElementById('filter-type')?.value || '';
    const transaction = document.getElementById('filter-transaction')?.value || '';
    const location = document.getElementById('filter-location')?.value?.toLowerCase() || '';
    const budget = document.getElementById('filter-budget')?.value || '';
    const bedrooms = document.getElementById('filter-bedrooms')?.value || '';
    const sort = document.getElementById('sort-select')?.value || 'date-desc';

    let filtered = [...properties];

    if (type) filtered = filtered.filter(p => p.type === type);
    if (transaction) filtered = filtered.filter(p => p.transaction === transaction);
    if (location) filtered = filtered.filter(p => p.location.toLowerCase().includes(location));
    if (bedrooms) filtered = filtered.filter(p => p.bedrooms >= parseInt(bedrooms));
    if (budget) {
      const [min, max] = budget.split('-').map(Number);
      filtered = filtered.filter(p => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }

    // Sort
    switch(sort) {
      case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
      case 'date-desc': filtered.sort((a, b) => new Date(b.date) - new Date(a.date)); break;
      case 'date-asc': filtered.sort((a, b) => new Date(a.date) - new Date(b.date)); break;
    }

    // Update count
    const countEl = document.getElementById('results-count');
    if (countEl) countEl.textContent = `${filtered.length} annonce(s) trouvée(s)`;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="bi bi-search" style="font-size: 3rem; color: var(--gray-400);"></i>
          <h5 class="mt-3" style="color: var(--gray-600);">Aucune annonce trouvée</h5>
          <p style="color: var(--gray-500);">Essayez de modifier vos critères de recherche</p>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(p => createPropertyCard(p)).join('');
    }

    // Trigger animations
    observeFadeIn();
  }

  // Filter events
  document.querySelectorAll('.filter-bar select, .filter-bar input').forEach(el => {
    el.addEventListener('change', renderProperties);
    el.addEventListener('input', renderProperties);
  });

  document.getElementById('sort-select')?.addEventListener('change', renderProperties);

  // Reset filters
  document.getElementById('btn-reset-filters')?.addEventListener('click', function() {
    document.querySelectorAll('.filter-bar select').forEach(s => s.value = '');
    document.querySelectorAll('.filter-bar input').forEach(i => i.value = '');
    renderProperties();
  });

  // Initial render
  renderProperties();
}

// ===========================
// Page: Annonce Detail
// ===========================
function initAnnonceDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const property = properties.find(p => p.id === id);

  if (!property) {
    document.getElementById('detail-content')?.innerHTML = `
      <div class="text-center py-5">
        <i class="bi bi-exclamation-triangle" style="font-size: 3rem; color: var(--accent);"></i>
        <h4 class="mt-3">Annonce introuvable</h4>
        <a href="annonces.html" class="btn btn-search mt-3">Voir toutes les annonces</a>
      </div>
    `;
    return;
  }

  // Set page title
  document.title = `${property.title} - SenImmo`;

  // Main image
  const mainImg = document.getElementById('detail-main-image');
  if (mainImg) mainImg.src = property.images[0];

  // Thumbnails
  const thumbContainer = document.getElementById('detail-thumbnails');
  if (thumbContainer) {
    thumbContainer.innerHTML = property.images.map((img, i) => `
      <img src="${img}" class="detail-thumb ${i === 0 ? 'active' : ''}" onclick="changeMainImage(this, '${img}')" alt="Photo ${i + 1}">
    `).join('');
  }

  // Info
  const priceLabel = property.transaction === 'location' ? '/mois' : '';
  document.getElementById('detail-price').textContent = formatPrice(property.price);
  document.getElementById('detail-price-suffix').textContent = priceLabel;
  document.getElementById('detail-title').textContent = property.title;
  document.getElementById('detail-location-text').textContent = property.location;
  document.getElementById('detail-date').textContent = timeAgo(property.date);
  document.getElementById('detail-description-text').textContent = property.description;

  // Badge
  const badgeEl = document.getElementById('detail-badge');
  if (badgeEl) {
    badgeEl.textContent = property.transaction === 'vente' ? 'Vente' : 'Location';
    badgeEl.className = `property-badge ${property.transaction === 'vente' ? 'badge-sale' : 'badge-rent'}`;
    badgeEl.style.position = 'static';
    badgeEl.style.display = 'inline-block';
  }

  // Features
  const featuresGrid = document.getElementById('detail-features');
  if (featuresGrid) {
    let html = '';
    if (property.bedrooms > 0) html += `<div class="detail-feature-item"><i class="bi bi-door-open"></i><span>${property.bedrooms} Chambres</span></div>`;
    if (property.bathrooms > 0) html += `<div class="detail-feature-item"><i class="bi bi-droplet"></i><span>${property.bathrooms} Salle(s) de bain</span></div>`;
    html += `<div class="detail-feature-item"><i class="bi bi-arrows-angle-expand"></i><span>${property.area} m²</span></div>`;
    html += `<div class="detail-feature-item"><i class="bi bi-building"></i><span>${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span></div>`;
    featuresGrid.innerHTML = html;
  }

  // Agent
  document.getElementById('agent-name').textContent = property.agent;
  document.getElementById('agent-initials').textContent = property.agent.split(' ').map(n => n[0]).join('');

  // WhatsApp
  const waBtn = document.getElementById('btn-whatsapp');
  if (waBtn) {
    waBtn.href = `https://wa.me/${property.phone.replace('+', '')}?text=Bonjour, je suis intéressé(e) par votre annonce "${property.title}" sur SenImmo.`;
  }

  // Email
  const emailBtn = document.getElementById('btn-email');
  if (emailBtn) {
    emailBtn.href = `mailto:${property.email}?subject=Intéressé par: ${property.title}&body=Bonjour, je suis intéressé(e) par votre annonce "${property.title}" publiée sur SenImmo.`;
  }

  // Map
  const mapFrame = document.getElementById('map-frame');
  if (mapFrame) {
    const query = encodeURIComponent(property.location + ', Sénégal');
    mapFrame.src = `https://www.openstreetmap.org/export/embed.html?bbox=-17.5,14.5,-17.3,14.8&layer=mapnik&marker=14.6937,-17.4441`;
  }

  // PDF download
  document.getElementById('btn-download-pdf')?.addEventListener('click', function() {
    generatePDF(property);
  });

  // Similar properties
  const similarContainer = document.getElementById('similar-properties');
  if (similarContainer) {
    const similar = properties.filter(p => p.id !== property.id && p.type === property.type).slice(0, 3);
    if (similar.length > 0) {
      similarContainer.innerHTML = similar.map(p => createPropertyCard(p)).join('');
    }
  }
}

function changeMainImage(thumb, src) {
  document.getElementById('detail-main-image').src = src;
  document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// Generate PDF
function generatePDF(property) {
  const content = `
═══════════════════════════════════════
        SENIMMO - Fiche Annonce
═══════════════════════════════════════

Titre: ${property.title}
Type: ${property.type.toUpperCase()}
Transaction: ${property.transaction.toUpperCase()}
Prix: ${formatPrice(property.price)}${property.transaction === 'location' ? '/mois' : ''}

Localisation: ${property.location}
Surface: ${property.area} m²
${property.bedrooms > 0 ? `Chambres: ${property.bedrooms}` : ''}
${property.bathrooms > 0 ? `Salles de bain: ${property.bathrooms}` : ''}

───────────────────────────────────────
DESCRIPTION
───────────────────────────────────────
${property.description}

───────────────────────────────────────
CONTACT
───────────────────────────────────────
Agent: ${property.agent}
Téléphone: ${property.phone}
Email: ${property.email}

───────────────────────────────────────
Publié le: ${formatDate(property.date)}
Référence: SEN-${property.id.toString().padStart(4, '0')}

www.senimmo.sn
═══════════════════════════════════════
  `;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SenImmo_${property.title.replace(/\s+/g, '_')}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Fiche téléchargée avec succès !');
}

// ===========================
// Page: Publier
// ===========================
function initPublishPage() {
  const form = document.getElementById('publish-form');
  if (!form) return;

  let currentStep = 1;
  const totalSteps = 3;

  function showStep(step) {
    document.querySelectorAll('.form-step').forEach(s => s.style.display = 'none');
    document.getElementById(`step-${step}`).style.display = 'block';

    document.querySelectorAll('.step-item').forEach((item, i) => {
      item.classList.remove('active', 'completed');
      if (i + 1 < step) item.classList.add('completed');
      if (i + 1 === step) item.classList.add('active');
    });
  }

  // Next/Prev buttons
  document.querySelectorAll('.btn-next-step').forEach(btn => {
    btn.addEventListener('click', function() {
      if (validateStep(currentStep)) {
        currentStep++;
        showStep(currentStep);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  document.querySelectorAll('.btn-prev-step').forEach(btn => {
    btn.addEventListener('click', function() {
      currentStep--;
      showStep(currentStep);
    });
  });

  // Validate step
  function validateStep(step) {
    const stepEl = document.getElementById(`step-${step}`);
    const required = stepEl.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('is-invalid');
        valid = false;
      } else {
        field.classList.remove('is-invalid');
      }
    });
    if (!valid) showToast('Veuillez remplir tous les champs obligatoires', 'error');
    return valid;
  }

  // Image upload
  const uploadZone = document.getElementById('upload-zone');
  const fileInput = document.getElementById('photo-upload');
  const previewContainer = document.getElementById('upload-preview');

  if (uploadZone && fileInput) {
    uploadZone.addEventListener('click', () => fileInput.click());
    uploadZone.addEventListener('dragover', (e) => { e.preventDefault(); uploadZone.style.borderColor = 'var(--primary)'; });
    uploadZone.addEventListener('dragleave', () => { uploadZone.style.borderColor = 'var(--gray-400)'; });
    uploadZone.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadZone.style.borderColor = 'var(--gray-400)';
      handleFiles(e.dataTransfer.files);
    });
    fileInput.addEventListener('change', () => handleFiles(fileInput.files));
  }

  let uploadedFiles = [];

  function handleFiles(files) {
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/') && uploadedFiles.length < 6) {
        uploadedFiles.push(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          const div = document.createElement('div');
          div.className = 'upload-preview-item';
          div.innerHTML = `
            <img src="${e.target.result}" alt="Preview">
            <button class="remove-btn" onclick="this.parentElement.remove()"><i class="bi bi-x"></i></button>
          `;
          previewContainer.appendChild(div);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Form submit
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    const newProperty = {
      id: properties.length + 1,
      type: document.getElementById('pub-type').value,
      transaction: document.getElementById('pub-transaction').value,
      title: document.getElementById('pub-title').value,
      price: parseInt(document.getElementById('pub-price').value),
      location: document.getElementById('pub-location').value,
      bedrooms: parseInt(document.getElementById('pub-bedrooms')?.value || 0),
      bathrooms: parseInt(document.getElementById('pub-bathrooms')?.value || 0),
      area: parseInt(document.getElementById('pub-area').value),
      description: document.getElementById('pub-description').value,
      images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop"],
      agent: document.getElementById('pub-name').value,
      phone: document.getElementById('pub-phone').value,
      email: document.getElementById('pub-email').value,
      date: new Date().toISOString().split('T')[0],
      featured: false
    };

    properties.push(newProperty);
    saveProperties();

    // Show success
    document.getElementById('publish-form-container').innerHTML = `
      <div class="text-center py-5">
        <div style="width:80px;height:80px;border-radius:50%;background:var(--secondary-light);display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;">
          <i class="bi bi-check-lg" style="font-size:2.5rem;color:var(--secondary);"></i>
        </div>
        <h3 style="font-weight:700;color:var(--dark);">Annonce publiée avec succès !</h3>
        <p style="color:var(--gray-600);margin-bottom:2rem;">Votre annonce est maintenant visible par tous les utilisateurs.</p>
        <a href="annonce.html?id=${newProperty.id}" class="btn btn-search me-2"><i class="bi bi-eye"></i> Voir l'annonce</a>
        <a href="annonces.html" class="btn btn-cta" style="border:2px solid var(--primary);background:transparent;color:var(--primary);box-shadow:none;">Toutes les annonces</a>
      </div>
    `;
  });

  showStep(1);
}

// ===========================
// Page: Compte
// ===========================
function initAccountPage() {
  // My listings
  const myListings = document.getElementById('my-listings');
  if (myListings) {
    const userProperties = properties.slice(0, 3); // Demo: show first 3
    if (userProperties.length) {
      myListings.innerHTML = userProperties.map(p => createPropertyCard(p)).join('');
    } else {
      myListings.innerHTML = '<p class="text-center text-muted py-4">Aucune annonce publiée</p>';
    }
  }

  // Favorites
  const favContainer = document.getElementById('my-favorites');
  if (favContainer) {
    const favIds = getFavorites();
    const favProperties = properties.filter(p => favIds.includes(p.id));
    if (favProperties.length) {
      favContainer.innerHTML = favProperties.map(p => createPropertyCard(p)).join('');
    } else {
      favContainer.innerHTML = '<p class="text-center text-muted py-4">Aucun favori enregistré</p>';
    }
  }

  // Tab navigation
  document.querySelectorAll('.account-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.account-nav a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      const target = this.dataset.tab;
      document.querySelectorAll('.account-tab').forEach(t => t.style.display = 'none');
      document.getElementById(target)?.style.setProperty('display', 'block');
    });
  });
}

// ===========================
// Global Features
// ===========================

// Navbar scroll effect
function initNavbar() {
  const navbar = document.querySelector('.navbar-custom');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Back to top button
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Fade-in animation observer
function observeFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Page loader
function initLoader() {
  const loader = document.getElementById('page-loader');
  if (loader) {
    // Hide immediately if page already loaded, otherwise wait for load event
    if (document.readyState === 'complete') {
      setTimeout(() => loader.classList.add('hidden'), 300);
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('hidden'), 300);
      });
    }
    // Fallback: force hide after 2 seconds no matter what
    setTimeout(() => loader.classList.add('hidden'), 2000);
  }
}

// Counter animation
function animateCounters() {
  document.querySelectorAll('.counter').forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current).toLocaleString('fr-FR');
    }, 16);
  });
}

// ===========================
// Initialize
// ===========================
document.addEventListener('DOMContentLoaded', function() {
  loadProperties();
  initNavbar();
  initBackToTop();
  initLoader();
  observeFadeIn();

  // Detect page and initialize
  const path = window.location.pathname;
  if (path.includes('annonce.html') && !path.includes('annonces.html')) {
    initAnnonceDetailPage();
  } else if (path.includes('annonces.html')) {
    initAnnoncesPage();
  } else if (path.includes('publier.html')) {
    initPublishPage();
  } else if (path.includes('compte.html')) {
    initAccountPage();
  } else {
    initHomePage();
    // Animate counters when visible
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    });
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) statsObserver.observe(statsSection);
  }
});
