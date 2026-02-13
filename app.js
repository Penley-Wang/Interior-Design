"use strict";

/**
 * 作品資料：只需要改這裡（標題、封面、內容、更多圖）
 *
 * ⚠️ 圖片路徑統一使用 ./images/projects/
 * 例：
 *   ./images/projects/p1-cover.jpg
 *   ./images/projects/p1-1.jpg
 */
const PROJECTS = [
  {
    id: "p1",
    title: "日光留白｜小宅改造",
    type: "住宅",
    area: "18坪",
    location: "台北",
    year: "2025",
    cover: "./images/projects/p1-cover.jpg",
    summary:
      "以動線壓縮與收納整合為策略，將公共區保持通透，提升日照進入深度與使用彈性。",
    tags: ["動線優化", "系統櫃", "光環境", "耐用材料"],
    gallery: [
      "./images/projects/p1-1.jpg",
      "./images/projects/p1-2.jpg",
      "./images/projects/p1-3.jpg",
      "./images/projects/p1-4.jpg",
    ],
  },
  {
    id: "p2",
    title: "木質層次｜餐飲小店",
    type: "商業",
    area: "12坪",
    location: "新北",
    year: "2024",
    cover: "./images/projects/p2-cover.jpg",
    summary:
      "以材料觸感與照明層次建立品牌氛圍，強調可維護性與施工效率，縮短停業期。",
    tags: ["品牌氛圍", "燈光分層", "易維護", "預算控制"],
    gallery: [
      "./images/projects/p2-1.jpg",
      "./images/projects/p2-2.jpg",
      "./images/projects/p2-3.jpg",
    ],
  },
  {
    id: "p3",
    title: "秩序與柔和｜兩房一廳",
    type: "住宅",
    area: "24坪",
    location: "桃園",
    year: "2023",
    cover: "./images/projects/p3-cover.jpg",
    summary:
      "以尺度化收納與隱藏式機能牆控制視覺噪音；軟裝採用低飽和材質，形成柔和過渡。",
    tags: ["收納整合", "低飽和", "機能牆", "尺度控制"],
    gallery: [
      "./images/projects/p3-1.jpg",
      "./images/projects/p3-2.jpg",
      "./images/projects/p3-3.jpg",
      "./images/projects/p3-4.jpg",
      "./images/projects/p3-5.jpg",
    ],
  },
];

// ====== 共用 ======
const yearEl = document.getElementById("year");

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function initFooterYear() {
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ====== index.html：渲染作品列表 ======
function renderWorksList() {
  const worksGrid = document.getElementById("worksGrid");
  if (!worksGrid) return;

  worksGrid.innerHTML = PROJECTS.map((p) => {
    const url = `./project.html?id=${encodeURIComponent(p.id)}`;
    return `
      <a class="work-card" href="${escapeHtml(url)}" aria-label="開啟作品：${escapeHtml(p.title)}">
        <div class="work-thumb">
          <img src="${escapeHtml(p.cover)}" alt="${escapeHtml(p.title)} 封面" loading="lazy" decoding="async">
        </div>
        <div class="work-body">
          <h3 class="work-title">${escapeHtml(p.title)}</h3>
          <div class="work-meta">
            <span>${escapeHtml(p.type)}</span>
            <span>·</span>
            <span>${escapeHtml(p.area)}</span>
            <span>·</span>
            <span>${escapeHtml(p.year)}</span>
          </div>
        </div>
      </a>
    `;
  }).join("");
}

// ====== project.html：渲染作品詳情 ======
function renderProjectDetail() {
  const titleEl = document.getElementById("projectTitle");
  if (!titleEl) return; // 不在 project.html

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const project = PROJECTS.find((p) => p.id === id);

  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      // 若使用者有上一頁（從列表點進來），就 back
      if (history.length > 1) history.back();
      else location.href = "./index.html#works";
    });
  }

  if (!project) {
    document.title = "找不到作品｜隅所室內設計事務所";
    titleEl.textContent = "找不到此作品";
    const descEl = document.getElementById("projectDesc");
    if (descEl) descEl.textContent = "請回到作品列表重新選擇。";
    return;
  }

  document.title = `作品｜${project.title}`;

  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectDesc").textContent = project.summary;

  const coverEl = document.getElementById("projectCover");
  coverEl.src = project.cover;
  coverEl.alt = `${project.title} 封面`;

  document.getElementById("projectType").textContent = project.type;
  document.getElementById("projectArea").textContent = project.area;
  document.getElementById("projectLocation").textContent = project.location;
  document.getElementById("projectYear").textContent = project.year;

  const tagsEl = document.getElementById("projectTags");
  tagsEl.innerHTML = project.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");

  const galleryEl = document.getElementById("projectGallery");
  galleryEl.innerHTML = project.gallery
    .map((src, idx) => {
      return `
        <div class="gallery-item">
          <img src="${escapeHtml(src)}" alt="${escapeHtml(project.title)} 圖片 ${idx + 1}" loading="lazy" decoding="async">
        </div>
      `;
    })
    .join("");
}

// ====== init ======
function init() {
  initFooterYear();
  renderWorksList();
  renderProjectDetail();
}

init();
