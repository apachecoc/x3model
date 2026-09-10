const profiles = [
  {
    name: "Ambar",
    city: "Santiago",
    category: "VIP",
    tier: "Black",
    age: 26,
    status: "Disponible",
    bio: "Perfil premium con agenda selectiva, fotos verificadas y atencion editorial cuidada.",
    gradient: "linear-gradient(150deg, #2b0f16 0%, #8f1e38 48%, #d9ad67 100%)",
  },
  {
    name: "Maia",
    city: "Vina del Mar",
    category: "Contenido",
    tier: "Diamond",
    age: 24,
    status: "Nueva",
    bio: "Creadora visual, sesiones privadas y contenido con aprobacion previa.",
    gradient: "linear-gradient(150deg, #111827 0%, #305169 48%, #d9ad67 100%)",
  },
  {
    name: "Isis",
    city: "Concepcion",
    category: "Virtual",
    tier: "Gold",
    age: 28,
    status: "Online",
    bio: "Comunicacion virtual, perfil discreto y disponibilidad por ventanas horarias.",
    gradient: "linear-gradient(150deg, #1f1b2e 0%, #69468f 50%, #d9ad67 100%)",
  },
  {
    name: "Renata",
    city: "Santiago",
    category: "Eventos",
    tier: "Diamond",
    age: 29,
    status: "Verificada",
    bio: "Presencia para activaciones, eventos privados y colaboraciones de marca.",
    gradient: "linear-gradient(150deg, #151515 0%, #5b1f1f 50%, #cc8f52 100%)",
  },
  {
    name: "Cora",
    city: "Valparaiso",
    category: "Masajes",
    tier: "Gold",
    age: 31,
    status: "Disponible",
    bio: "Perfil orientado a bienestar, agenda controlada y comunicacion moderada.",
    gradient: "linear-gradient(150deg, #101820 0%, #356859 50%, #d8b36a 100%)",
  },
  {
    name: "Luna",
    city: "Santiago",
    category: "Virtual",
    tier: "Black",
    age: 25,
    status: "Top",
    bio: "Perfil destacado para experiencias digitales y colaboraciones con alto alcance.",
    gradient: "linear-gradient(150deg, #210f22 0%, #b91f35 48%, #f2c879 100%)",
  },
  {
    name: "Nerea",
    city: "Vina del Mar",
    category: "VIP",
    tier: "Diamond",
    age: 27,
    status: "Verificada",
    bio: "Publicacion premium con galeria privada, reseña editorial y agenda limitada.",
    gradient: "linear-gradient(150deg, #09111f 0%, #7b2336 45%, #d9ad67 100%)",
  },
  {
    name: "Sasha",
    city: "Concepcion",
    category: "Contenido",
    tier: "Gold",
    age: 30,
    status: "Nueva",
    bio: "Creadora independiente con enfoque audiovisual y contacto bajo revision.",
    gradient: "linear-gradient(150deg, #171717 0%, #704214 50%, #d9ad67 100%)",
  },
];

const zones = [
  ["Santiago Centro", "VIP, virtual, eventos"],
  ["Las Condes", "Perfiles premium y agenda privada"],
  ["Providencia", "Nuevas publicaciones verificadas"],
  ["Vina del Mar", "Contenido, turismo y eventos"],
  ["Valparaiso", "Creadoras independientes"],
  ["Concepcion", "Perfiles nuevos y destacados"],
];

const state = {
  name: "",
  city: "todas",
  category: "todas",
  tier: "todos",
};

const grid = document.querySelector("#profile-grid");
const panel = document.querySelector("#profile-panel");
const panelContent = document.querySelector("#panel-content");
const formStatus = document.querySelector("#form-status");

function renderProfiles() {
  const filtered = profiles.filter((profile) => {
    const matchesName = profile.name.toLowerCase().includes(state.name.toLowerCase());
    const matchesCity = state.city === "todas" || profile.city === state.city;
    const matchesCategory = state.category === "todas" || profile.category === state.category;
    const matchesTier = state.tier === "todos" || profile.tier === state.tier;
    return matchesName && matchesCity && matchesCategory && matchesTier;
  });

  if (!filtered.length) {
    grid.innerHTML = '<p class="muted">No hay perfiles para estos filtros. Prueba otra ciudad o categoria.</p>';
    return;
  }

  grid.innerHTML = filtered
    .map(
      (profile) => `
        <article class="profile-card" data-initial="${profile.name[0]}" style="--portrait-gradient: ${profile.gradient}">
          <div class="status-row">
            <span class="status-pill">${profile.status}</span>
            <span class="tier-pill">${profile.tier}</span>
          </div>
          <h3>${profile.name}</h3>
          <p>${profile.bio}</p>
          <div class="meta-row">
            <span>${profile.city}</span>
            <span>${profile.category} · ${profile.age}</span>
          </div>
          <div class="card-actions">
            <button class="primary-button" type="button" data-profile="${profile.name}">Ver perfil</button>
            <button class="ghost-button" type="button" data-open-panel="login">Contacto</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderZones() {
  const zoneGrid = document.querySelector("#zone-grid");
  zoneGrid.innerHTML = zones
    .map(
      ([name, text]) => `
      <a href="#perfiles" data-zone="${name}">
        <strong>${name}</strong>
        <span>${text}</span>
      </a>
    `,
    )
    .join("");
}

function openProfile(profile) {
  panelContent.innerHTML = `
    <div class="panel-portrait" style="--portrait-gradient: ${profile.gradient}">${profile.name[0]}</div>
    <p class="eyebrow">${profile.tier} · ${profile.category}</p>
    <h2 id="panel-title">${profile.name}</h2>
    <p class="muted">${profile.bio}</p>
    <div class="panel-list">
      <div><span>Ciudad</span><strong>${profile.city}</strong></div>
      <div><span>Edad declarada</span><strong>${profile.age}+</strong></div>
      <div><span>Estado</span><strong>${profile.status}</strong></div>
      <div><span>Revision</span><strong>Identidad pendiente de backend</strong></div>
    </div>
    <button class="primary-button full" type="button" data-open-panel="login">Solicitar contacto</button>
    <p class="muted">En produccion, este paso debe requerir cuenta, registro de consentimiento y trazabilidad.</p>
  `;
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
}

function openLoginPanel() {
  panelContent.innerHTML = `
    <p class="eyebrow">Acceso privado</p>
    <h2 id="panel-title">Ingresar a 3X</h2>
    <p class="muted">Esta maqueta deja preparado el panel para cuentas de talentos, editores y anunciantes autorizados.</p>
    <form class="apply-form">
      <label class="full">
        <span>Email</span>
        <input type="email" placeholder="tu@email.com" />
      </label>
      <label class="full">
        <span>Clave</span>
        <input type="password" placeholder="Clave" />
      </label>
      <button class="primary-button full" type="button">Entrar</button>
    </form>
  `;
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
}

function closePanel() {
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
}

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  state.name = document.querySelector("#name-filter").value.trim();
  state.city = document.querySelector("#city-filter").value;
  state.category = document.querySelector("#category-filter").value;
  renderProfiles();
  document.querySelector("#perfiles").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll("[data-tier]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-tier]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.tier = button.dataset.tier;
    renderProfiles();
  });
});

document.querySelector("#category-cloud").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  state.category = button.dataset.category;
  document.querySelector("#category-filter").value = state.category;
  document.querySelectorAll("#category-cloud button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderProfiles();
});

document.addEventListener("click", (event) => {
  const profileButton = event.target.closest("[data-profile]");
  const loginButton = event.target.closest("[data-open-panel='login']");
  const closeButton = event.target.closest("[data-close-panel]");
  const scrollButton = event.target.closest("[data-scroll-to]");

  if (profileButton) {
    const profile = profiles.find((item) => item.name === profileButton.dataset.profile);
    if (profile) openProfile(profile);
  }

  if (loginButton) openLoginPanel();
  if (closeButton) closePanel();

  if (scrollButton) {
    document.querySelector(`#${scrollButton.dataset.scrollTo}`).scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector("#zone-grid")?.addEventListener("click", (event) => {
  const zone = event.target.closest("[data-zone]");
  if (!zone) return;
  state.city = zone.dataset.zone.includes("Vina") ? "Vina del Mar" : zone.dataset.zone.includes("Concepcion") ? "Concepcion" : "Santiago";
  document.querySelector("#city-filter").value = state.city;
  renderProfiles();
});

document.querySelector("#apply-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  formStatus.textContent = `${data.alias} quedo en la bandeja editorial de prueba. El siguiente paso es conectar un backend seguro.`;
  event.currentTarget.reset();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePanel();
});

renderZones();
renderProfiles();
