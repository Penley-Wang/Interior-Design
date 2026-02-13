"use strict";

/**
 * 作品数据：你只需要改这里即可（标题、封面、详情、更多图）。
 * 注意：图片路径与实际 assets 目录一致。
 */
const PROJECTS = [
  {
    id: "p1",
    title: "日光留白｜小宅改造",
    type: "住宅",
    area: "18坪",
    location: "台北",
    year: "2025",
    cover: "./assets/projects/p1-cover.jpg",
    summary:
      "以動線壓縮與收納整合為策略，將公共區保持通透，提升日照進入深度與使用弹性。",
    tags: ["動線優化", "系統櫃", "光環境", "耐用材料"],
    gallery: [
      "./assets/projects/p1-1.jpg",
      "./assets/projects/p1-2.jpg",
      "./assets/projects/p1-3.jpg",
      "./assets/projects/p1-4.jpg",
    ],
  },
  {
    id: "p2",
    title: "木質層次｜餐飲小店",
    type: "商業",
    area: "12坪",
    location: "新北",
    year: "2024",
    cover: "./assets/projects/p2-cover.jpg",
    summary:
      "以材料觸感與照明層次建立品牌氛圍，強調可維護性與施工效率，縮短停業期。",
    tags: ["品牌氛圍", "燈光分層", "易維護", "預算控制"],
    gallery: [
      "./assets/projects/p2-1.jpg",
      "./assets/projects/p2-2.jpg",
      "./assets/projects/p2-3.jpg",
    ],
  },
  {
    id: "p3",
    title: "秩序與柔和｜兩房一廳",
    type: "住宅",
    area: "24坪",
    location: "桃園",
    year: "2023",
    cover: "./assets/projects/p3-cover.jpg",
    summary:
      "以尺度化收納與隱藏式機能牆控制視覺噪音；軟裝採用低飽和材質，形成柔和過度。",
    tags: ["收纳整合", "低飽和", "機能牆", "尺度控制"],
    gallery: [
      "./assets/projects/p3-1.jpg",
      "./assets/projects/p3-2.jpg",
      "./assets/projects/p3-3.jpg",
      "./assets/projects/p3-4.jpg",
      "./assets/projects/p3-5.jpg",
    ],
  },
];

// ====== DOM ======
const worksGrid = document.getElementById("worksGrid");

const modalBackdrop = document.getElementById("modalBackdrop");
const modalCloseBtn = document.getElementById("modalCloseBtn");

const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalCover = document.getElementById("modalCover");

const modalType = document.getElementById("modalType");
const modalArea = document.getElementById("modalArea");
const modalLocation = document.getElementById("modalLocation");
const modalYear = document.getElementById("modalYear");
const modalTags = document.getElementById("modalTags");
const modalGallery = document.getElementById("modalGallery");

const yearEl = document.getElementById("year");

// ====== 渲染作品卡片 ======
function renderWorks() {
  worksGrid.innerHTML = PROJECTS.map((p) => {
    return `
      <article class="work-card" role="button" tabindex="0" data-project-id="${escapeHtml(p.id)}" aria-label="打开作品：${escapeHtml(p.title)}">
        <div class="work-thumb">
          <img src="${escapeHtml(p.cover)}" alt="${escapeHtml(p.title)} 封面" loading="lazy">
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
      </article>
    `;
  }).join("");

  // click + keyboard enter/space
  worksGrid.querySelectorAll(".work-card").forEach((card) => {
    card.addEventListener("click", () => openProject(card.dataset.projectId));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProject(card.dataset.projectId);
      }
    });
  });
}

// ====== 打开/关闭弹窗 ======
let lastFocusedEl = null;

function openProject(projectId) {
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project) return;

  lastFocusedEl = document.activeElement;

  modalTitle.textContent = project.title;
  modalDesc.textContent = project.summary;

  modalCover.src = project.cover;
  modalCover.alt = `${project.title} 封面`;

  modalType.textContent = project.type;
  modalArea.textContent = project.area;
  modalLocation.textContent = project.location;
  modalYear.textContent = project.year;

  modalTags.innerHTML = project.tags
    .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
    .join("");

  modalGallery.innerHTML = project.gallery
    .map((src, idx) => {
      return `
        <div class="gallery-item">
          <img src="${escapeHtml(src)}" alt="${escapeHtml(project.title)} 圖片 ${idx + 1}" loading="lazy">
        </div>
      `;
    })
    .join("");

  modalBackdrop.hidden = false;

  document.body.style.overflow = "hidden";
  modalCloseBtn.focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";

  // restore focus
  if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
    lastFocusedEl.focus();
  }
  lastFocusedEl = null;
}

// 点击背景关闭（点击 modal 之外区域）
modalBackdrop.addEventListener("click", (e) => {
  const modal = e.target.closest(".modal");
  if (!modal) closeModal();
});
modalCloseBtn.addEventListener("click", closeModal);

// ESC 关闭
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalBackdrop && modalBackdrop.hidden === false) {
    closeModal();
  }
});

// ====== 辅助：防止插入 HTML（基本防注入） ======
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ====== init ======
function init() {
  yearEl.textContent = new Date().getFullYear();
  renderWorks();
}

init();
