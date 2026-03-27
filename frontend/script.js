const API = "http://localhost:5000/api/games";

let allGames = [];
let currentFilter = "";

// Element References
const gamesContainer = document.getElementById("games");
const searchInput = document.getElementById("search");
const formTitle = document.getElementById("title");
const formPlatform = document.getElementById("platform");
const formGenre = document.getElementById("genre");
const formImage = document.getElementById("image");
const formStatus = document.getElementById("status");
const formRating = document.getElementById("rating");
const formHours = document.getElementById("hoursPlayed");

// Show loading initially
function showLoading() {
  gamesContainer.innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <p>Loading your library...</p>
    </div>
  `;
}

// Load games
async function loadGames() {
  showLoading();
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error("Failed to fetch games");
    allGames = await res.json();
    renderGames();
  } catch (err) {
    console.error("Error:", err);
    gamesContainer.innerHTML = `
      <div class="loading" style="color: #ef4444;">
        <i class="fa-solid fa-triangle-exclamation" style="font-size: 2rem; margin-bottom: 1rem;"></i>
        <p>Could not connect to the GammingHubba servers. Please ensure the backend is running.</p>
      </div>
    `;
  }
}

// Add game
async function addGame() {
  const titleVal = formTitle.value.trim();
  if (!titleVal) {
    alert("Please enter a game title!");
    return;
  }

  const game = {
    title: titleVal,
    platform: formPlatform.value || "Unknown",
    genre: formGenre.value || "General",
    status: formStatus.value,
    rating: parseInt(formRating.value) || 0,
    hoursPlayed: parseInt(formHours?.value) || 0,
    image: formImage.value || "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  };

  try {
    // Optimistic UI update could go here, but doing reload for simplicity
    const btn = document.querySelector('.primary-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Adding...`;
    
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(game)
    });

    // Clear form
    formTitle.value = "";
    formPlatform.value = "";
    formGenre.value = "";
    formImage.value = "";
    formRating.value = "";
    if (formHours) formHours.value = "";
    
    btn.innerHTML = originalText;
    
    loadGames();
  } catch (err) {
    console.error("Failed to add game", err);
  }
}

// Delete game
async function deleteGame(id) {
  if (!confirm("Are you sure you want to remove this game from your GammingHubba Library?")) return;
  
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "DELETE"
    });
    
    if (res.ok) {
      // Remove from frontend array
      allGames = allGames.filter(g => g._id !== id);
      renderGames();
    }
  } catch (err) {
    console.error("Error deleting game", err);
  }
}

// Set Filter from Tabs
function setFilter(status, btnElement) {
  currentFilter = status;
  
  // Update active tab styling
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  btnElement.classList.add('active');
  
  renderGames();
}

// Handle global search filtering
function filterGames() {
  renderGames();
}

// Display
function renderGames() {
  const searchValue = searchInput.value.toLowerCase();

  const filtered = allGames.filter(g =>
    g.title.toLowerCase().includes(searchValue) &&
    (currentFilter === "" || g.status === currentFilter)
  );
  
  if (filtered.length === 0) {
    gamesContainer.innerHTML = `
      <div class="loading">
        <i class="fa-solid fa-ghost" style="font-size: 2rem; margin-bottom: 1rem;"></i>
        <p>No games found in this sector...</p>
      </div>
    `;
    return;
  }

  gamesContainer.innerHTML = filtered.map(g => {
    // Create badges for statuses dynamically based on actual status
    const statusClass = `status-${g.status.toLowerCase()}`;
    // Handle the mongodb _id format
    const gameId = g._id || g.id;
    
    return `
      <div class="card">
        <div class="card-img-container">
          <img src="${g.image}" alt="${g.title} cover" onerror="this.src='https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
          <button class="delete-btn" onclick="deleteGame('${gameId}')" title="Remove game">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
        <div class="card-content">
          <div class="card-header">
            <h3>${g.title}</h3>
            <div class="rating"><i class="fa-solid fa-star"></i> ${g.rating}</div>
          </div>
          <div class="platform-genre">
            <span><i class="fa-solid fa-desktop"></i> ${g.platform}</span>
            <span><i class="fa-solid fa-tag"></i> ${g.genre}</span>
            <span><i class="fa-regular fa-clock"></i> ${g.hoursPlayed || 0}h</span>
          </div>
          <div>
            <span class="status-badge ${statusClass}">
              ${g.status}
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Initialize
loadGames();