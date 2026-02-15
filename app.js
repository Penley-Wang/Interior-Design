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
    title: "三重大有路葉官邸裝修案(亞昕純白)",
    type: "住宅",
    area: "18坪",
    location: "新北市",
    year: "2025",
    cover: "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_13.jpg",
    summary:
      "以動線壓縮與收納整合為策略，將公共區保持通透，提升日照進入深度與使用彈性。",
    tags: ["動線優化", "系統櫃", "光環境", "耐用材料"],
    gallery: [
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_1.jpg",
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_2.jpg",
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_3.jpg",
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_4.jpg",
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_5.jpg",
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_6.jpg",
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_7.jpg",
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_8.jpg",
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_9.jpg",
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_10.jpg",
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_11.jpg",
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_12.jpg",
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_13.jpg",
      "./images/三重大有路葉官邸裝修案(亞昕純白)/完工照/LINE_ALBUM_三重大有路葉官邸完工精選照_251125_14.jpg",
    ],
  },
  {
    id: "p2",
    title: "土城區學府路林官邸裝修案(皇翔快樂花園)",
    type: "商業",
    area: "12坪",
    location: "新北市",
    year: "2024",
    cover: "./images/土城區學府路林官邸裝修案（皇翔快樂花園）/完工照/LINE_ALBUM_土城區學府路林官邸完工精選照_251113_8.jpg",
    summary:
      "以材料觸感與照明層次建立品牌氛圍，強調可維護性與施工效率，縮短停業期。",
    tags: ["品牌氛圍", "燈光分層", "易維護", "預算控制"],
    gallery: [
      "./images/土城區學府路林官邸裝修案（皇翔快樂花園）/完工照/LINE_ALBUM_土城區學府路林官邸完工精選照_251113_1.jpg",
      "./images/土城區學府路林官邸裝修案（皇翔快樂花園）/完工照/LINE_ALBUM_土城區學府路林官邸完工精選照_251113_2.jpg",
      "./images/土城區學府路林官邸裝修案（皇翔快樂花園）/完工照/LINE_ALBUM_土城區學府路林官邸完工精選照_251113_3.jpg",
      "./images/土城區學府路林官邸裝修案（皇翔快樂花園）/完工照/LINE_ALBUM_土城區學府路林官邸完工精選照_251113_4.jpg",
      "./images/土城區學府路林官邸裝修案（皇翔快樂花園）/完工照/LINE_ALBUM_土城區學府路林官邸完工精選照_251113_5.jpg",
      "./images/土城區學府路林官邸裝修案（皇翔快樂花園）/完工照/LINE_ALBUM_土城區學府路林官邸完工精選照_251113_6.jpg",
      "./images/土城區學府路林官邸裝修案（皇翔快樂花園）/完工照/LINE_ALBUM_土城區學府路林官邸完工精選照_251113_7.jpg",
      "./images/土城區學府路林官邸裝修案（皇翔快樂花園）/完工照/LINE_ALBUM_土城區學府路林官邸完工精選照_251113_8.jpg",
      "./images/土城區學府路林官邸裝修案（皇翔快樂花園）/完工照/LINE_ALBUM_土城區學府路林官邸完工精選照_251113_9.jpg",
      "./images/土城區學府路林官邸裝修案（皇翔快樂花園）/完工照/LINE_ALBUM_土城區學府路林官邸完工精選照_251113_10.jpg",
      "./images/土城區學府路林官邸裝修案（皇翔快樂花園）/完工照/LINE_ALBUM_土城區學府路林官邸完工精選照_251113_11.jpg",
    ],
  },
  {
    id: "p3",
    title: "板橋松柏街",
    type: "住宅",
    area: "24坪",
    location: "新北市",
    year: "2023",
    cover: "./images/板橋松柏街/完工照/20.jpg",
    summary:
      "以尺度化收納與隱藏式機能牆控制視覺噪音；軟裝採用低飽和材質，形成柔和過渡。",
    tags: ["收納整合", "低飽和", "機能牆", "尺度控制"],
    gallery: [
      "./images/板橋松柏街/完工照/02.jpg",
      "./images/板橋松柏街/完工照/04.jpg",
      "./images/板橋松柏街/完工照/05.jpg",
      "./images/板橋松柏街/完工照/06.jpg",
      "./images/板橋松柏街/完工照/07.jpg",
      "./images/板橋松柏街/完工照/08.jpg",
      "./images/板橋松柏街/完工照/09.jpg",
      "./images/板橋松柏街/完工照/10.jpg",
      "./images/板橋松柏街/完工照/11.jpg",
      "./images/板橋松柏街/完工照/12.jpg",
      "./images/板橋松柏街/完工照/13.jpg",
      "./images/板橋松柏街/完工照/14.jpg",
      "./images/板橋松柏街/完工照/15.jpg",
      "./images/板橋松柏街/完工照/16.jpg",
      "./images/板橋松柏街/完工照/17.jpg",
      "./images/板橋松柏街/完工照/18.jpg",
      "./images/板橋松柏街/完工照/19.jpg",
      "./images/板橋松柏街/完工照/20.jpg",
      "./images/板橋松柏街/完工照/21.jpg",
      "./images/板橋松柏街/完工照/22.jpg",
      "./images/板橋松柏街/完工照/23.jpg",
      "./images/板橋松柏街/完工照/24.jpg",
      "./images/板橋松柏街/完工照/25.jpg",
      "./images/板橋松柏街/完工照/27.jpg",
      "./images/板橋松柏街/完工照/28.jpg",
      "./images/板橋松柏街/完工照/29.jpg",
      "./images/板橋松柏街/完工照/30.jpg",
      "./images/板橋松柏街/完工照/31.jpg",
      "./images/板橋松柏街/完工照/32.jpg",
      "./images/板橋松柏街/完工照/33.jpg",
      "./images/板橋松柏街/完工照/34.jpg",
    ],
  },
  {
    id: "p4",
    title: "越式河粉餐廳裝修案",
    type: "住宅",
    area: "24坪",
    location: "新北市",
    year: "2023",
    cover: "./images/越式河粉餐廳裝修案/完工照/R0000093.jpg",
    summary:
      "以尺度化收納與隱藏式機能牆控制視覺噪音；軟裝採用低飽和材質，形成柔和過渡。",
    tags: ["收納整合", "低飽和", "機能牆", "尺度控制"],
    gallery: [
      "./images/越式河粉餐廳裝修案/完工照/R0000093.jpg",
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
  // galleryEl.innerHTML = project.gallery
  //   .map((src, idx) => {
  //     return `
  //       <div class="gallery-item">
  //         <img src="${escapeHtml(src)}" alt="${escapeHtml(project.title)} 圖片 ${idx + 1}" loading="lazy" decoding="async">
  //       </div>
  //     `;
  //   })
  //   .join("");

  galleryEl.innerHTML = project.gallery
  .map((src, idx) => {
    const alt = `${project.title} 圖片 ${idx + 1}`;
    return `
      <button class="gallery-item" type="button" data-idx="${idx}" aria-label="開啟：${escapeHtml(alt)}">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async">
      </button>
    `;
  })
  .join("");

  // === Lightbox 行為 ===
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImg");
  const lbCaption = document.getElementById("lightboxCaption");
  const lbClose = document.getElementById("lightboxClose");
  const lbPrev = document.getElementById("lightboxPrev");
  const lbNext = document.getElementById("lightboxNext");

  if (!lb || !lbImg || !lbCaption || !lbClose || !lbPrev || !lbNext) return;

  let currentIdx = 0;

  function openLightbox(idx) {
    currentIdx = idx;
    const src = project.gallery[currentIdx];
    const caption = `${project.title}｜第 ${currentIdx + 1} 張 / 共 ${project.gallery.length} 張`;

    lbImg.src = src;
    lbImg.alt = `${project.title} 圖片 ${currentIdx + 1}`;
    lbCaption.textContent = caption;

    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }

  function closeLightbox() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    // 清空避免某些手機記憶體占用
    lbImg.src = "";
  }

  function prevImg() {
    openLightbox((currentIdx - 1 + project.gallery.length) % project.gallery.length);
  }

  function nextImg() {
    openLightbox((currentIdx + 1) % project.gallery.length);
  }

  // 點縮圖開啟
  galleryEl.querySelectorAll(".gallery-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx || 0);
      openLightbox(idx);
    });
  });

  // 關閉：按 X / 點背景
  lbClose.addEventListener("click", closeLightbox);
  lb.addEventListener("click", (e) => {
    if (e.target && e.target.dataset && e.target.dataset.close) closeLightbox();
  });

  // 上下張
  lbPrev.addEventListener("click", prevImg);
  lbNext.addEventListener("click", nextImg);

  // ESC 關閉
  window.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevImg();
    if (e.key === "ArrowRight") nextImg();
  });

}

// ====== init ======
function init() {
  initFooterYear();
  renderWorksList();
  renderProjectDetail();
}

init();
