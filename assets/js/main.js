/* ================================
   🌙 THEME + LANGUAGE + NAVIGATION
=================================== */
const root = document.documentElement;
const pref =
  localStorage.getItem("theme") ??
  (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (pref === "dark") root.classList.add("dark");
document.documentElement.lang = localStorage.getItem("lang") || "vi";

const I18N = {
  vi: {
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.experience": "Kinh nghiệm",
    "nav.projects": "Dự án",
    "nav.contact": "Liên hệ",
    "hero.badge": "Sẵn sàng bùng nổ",
    "hero.subtitle":
      "Nhanh, mượt, có gu. Ưu tiên CWV, A11y, motion tinh — đẹp & hiệu quả.",
    "hero.cta.projects": "Xem dự án",
    "hero.cta.contact": "Liên hệ",
    "hero.stats.years": "Năm KN",
    "hero.stats.projects": "Dự án",
    "hero.stats.awards": "Giải thưởng",

    "about.title": "Về tôi",
    "about.text":
      "Mình là <strong>Phan Chau Khanh Duy</strong>, 21 tuổi, sống tại <strong>TP.HCM</strong>. <br>Tốt nghiệp loại Giỏi tại <strong>Cao đẳng FPT Polytechnic</strong>, chuyên ngành <strong>Công nghệ thông tin – Lập trình Website (Front-end)</strong>.",
    "about.emailLabel": "Email:",
    "about.phoneLabel": "Số điện thoại",
    "about.locLabel": "Nơi ở:",
    "about.dateLabel": "Sinh năm:",
    "about.locValue": "TP.HCM, Việt Nam",

    "about.focus": "Tập trung",
    "about.focus.performance": "Performance",
    "about.focus.performanceDesc": "CWV, split, lazy.",
    "about.focus.a11y": "A11y",
    "about.focus.a11yDesc": "ARIA, keyboard-first.",
    "about.focus.motion": "Motion",
    "about.focus.motionDesc": "Micro-interaction có ý nghĩa.",

    "skills.title": "Kỹ năng",

    "exp.title": "Kinh nghiệm",
    "experience.title": "Kinh nghiệm",

    /* EXPERIENCE */
    "exp.1.role": "Web Developer — Vietnam Furniture Resources",
    "exp.1.time": "10/2023 – nay • TP.HCM",
    "exp.1.li1": "Xây dựng và tối ưu giao diện web nội bộ cho hệ thống ERP và ticket.",
    "exp.1.li2": "Tích hợp và fetch API từ hệ thống ERP để hiển thị dữ liệu động.",
    "exp.1.li3": "Thiết kế và chuyển file design sang HTML/CSS để gửi email marketing.",
    "exp.1.li4": "Tối ưu CSS, responsive layout và hiệu năng trang.",
    "exp.1.tech":
      "⚙️ Công nghệ & công cụ: HTML, CSS, Bootstrap, Tailwind, JavaScript, PHP (Yii Framework), Git, Figma, OpenCart, Laravel, ReactJS, Angular, InDesign, Illustrator, Photoshop",

    "exp.2.role": "Freelancer — Web Developer & Web Designer",
    "exp.2.time": "02/2023 – nay • TP.HCM",
    "exp.2.li1": "Thiết kế UI/UX web & landing page trên Figma (wireframe, prototype, responsive).",
    "exp.2.li2": "Front-end: HTML/CSS/JS; xây dựng landing page/website với React/Next/Angular, component & form.",
    "exp.2.li3": "Back-end: PHP/Laravel hoặc NodeJS; phát triển API, xử lý CRUD/auth; DB MySQL/MongoDB.",
    "exp.2.li4": "Tối ưu SEO/hiệu năng; deploy domain/SSL; tích hợp tracking (GA/GTM) & bảo trì.",
    "exp.2.tech":
      "🎨 Công nghệ & công cụ: Figma, Adobe InDesign, HTML, CSS, JavaScript/TypeScript, React.js, Next.js, Angular, Node.js, PHP, Laravel, Tailwind CSS, Bootstrap, Git/GitHub, RESTful API, MySQL, MongoDB, SEO cơ bản, Deployment (Domain/SSL/VPS/Hosting), Tracking (GA/GTM).",

    "exp.3.role": "Freelance",
    "exp.3.time": "2024 – nay • Toàn cầu",
    "exp.3.li1": "Thực hiện các dự án front-end, landing page và portfolio website.",
    "exp.3.li2": "Thiết kế UI/UX và giao diện theo yêu cầu với Tailwind hoặc ReactJS.",
    "exp.3.li3": "Thiết kế banner, catalogue và mockup sản phẩm cho marketing.",
    "exp.3.li4": "Tối ưu UI/UX và hiệu năng website cho khách hàng toàn cầu.",
    "exp.3.tech":
      "🧰 Công nghệ & phần mềm: Figma, Photoshop, Illustrator, ReactJS, Tailwind CSS, GitHub",

    /* PROJECTS */
    "proj.title": "Dự án nổi bật",
    "proj.viewAll": "Xem tất cả",
    "proj.p1.title": "Hotel",
    "proj.p2.title": "Hotel",
    "proj.p3.title": "Movie Cinema",
    "proj.p1.desc": "Hotel Travel Booking",
    "proj.p2.desc": "LoveBox Hotel",
    "proj.p3.desc": "Movie Cinema Booking Ticket",
    "proj.stack.hotel": "ReactJs • Tailwind",
    "proj.stack.movie": "ReactJs • MySql • Figma",

    "contact.title": "Liên hệ",
    "contact.text":
      "Ưu tiên consumer, SaaS, fintech & giáo dục. On-site HCMC hoặc remote.",
    "form.name": "Họ tên",
    "form.email": "Email",
    "form.message": "Nội dung",
    "form.orEmail": "hoặc email: phanchaukhanhduy@gmail.com",
    "form.submit": "Gửi",

    "footer.built": "Built with Tailwind.",
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.badge": "Ready to ship",
    "hero.subtitle": "Fast, smooth, tasteful. CWV, A11y & subtle motion.",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Contact",
    "hero.stats.years": "Years Exp",
    "hero.stats.projects": "Projects",
    "hero.stats.awards": "Awards",

    "about.title": "About me",
    "about.text":
      "I'm <strong>Phan Chau Khanh Duy</strong>, 21 years old, living in <strong>Ho Chi Minh City</strong>. <br>Graduated with distinction from <strong>FPT Polytechnic</strong>, majoring in <strong>Information Technology – Web Programming (Front-end)</strong>.",
    "about.emailLabel": "Email:",
    "about.phoneLabel": "Phone Number:",
    "about.dateLabel": "Birthday:",
    "about.locLabel": "Location:",
    "about.locValue": "HCMC, Vietnam",

    "about.focus": "Focus",
    "about.focus.performance": "Performance",
    "about.focus.performanceDesc": "CWV, split, lazy.",
    "about.focus.a11y": "A11y",
    "about.focus.a11yDesc": "ARIA, keyboard-first.",
    "about.focus.motion": "Motion",
    "about.focus.motionDesc": "Meaningful micro-interactions.",

    "skills.title": "Skills",

    "exp.title": "Experience",
    "experience.title": "Experience",

    /* EXPERIENCE */
    "exp.1.role": "Web Developer — Vietnam Furniture Resources",
    "exp.1.time": "10/2023 – Present • HCM City",
    "exp.1.li1": "Built and optimized internal web UI for ERP and ticket systems.",
    "exp.1.li2": "Integrated and fetched APIs from ERP system for dynamic data.",
    "exp.1.li3": "Designed and converted marketing email layouts to HTML/CSS.",
    "exp.1.li4": "Optimized CSS, responsive layout and page performance.",
    "exp.1.tech":
      "⚙️ Tech Stack & Tools: HTML, CSS, Bootstrap, Tailwind, JavaScript, PHP (Yii Framework), Git, Figma, OpenCart, Laravel, ReactJS, Angular, InDesign, Illustrator, Photoshop",

    "exp.2.role": "Freelancer — Web Developer & Web Designer",
    "exp.2.time": "02/2023 – Present • HCM City",
    "exp.2.li1": "Design UI/UX for websites & landing pages in Figma (wireframes, prototypes, responsive layouts).",
    "exp.2.li2": "Front-end: HTML/CSS/JS; build landing pages/websites with React/Next/Angular, reusable components & forms.",
    "exp.2.li3": "Back-end: PHP/Laravel or NodeJS; develop APIs, handle CRUD/auth; work with MySQL/MongoDB.",
    "exp.2.li4": "Optimize SEO/performance; deploy with domain/SSL; integrate tracking (GA/GTM) & provide maintenance.",
    "exp.2.tech":
      "🎨 Tech Stack & Tools: Figma, Adobe InDesign, HTML, CSS, JavaScript/TypeScript, React.js, Next.js, Angular, Node.js, PHP, Laravel, Tailwind CSS, Bootstrap, Git/GitHub, RESTful APIs, MySQL, MongoDB, Basic SEO, Deployment (Domain/SSL/VPS/Hosting), Analytics/Tracking (GA/GTM)",

    "exp.3.role": "Freelance",
    "exp.3.time": "2024 – Present • Global",
    "exp.3.li1": "Created front-end, landing pages and portfolio websites.",
    "exp.3.li2": "Designed UI/UX using Tailwind or ReactJS based on client needs.",
    "exp.3.li3": "Designed banners, catalogues and product mockups for marketing.",
    "exp.3.li4": "Optimized UI/UX and performance for global clients.",
    "exp.3.tech":
      "🧰 Technologies: Figma, Photoshop, Illustrator, ReactJS, Tailwind CSS, GitHub",

    /* PROJECTS */
    "proj.title": "Featured projects",
    "proj.viewAll": "View all",
    "proj.p1.title": "Hotel",
    "proj.p2.title": "Hotel",
    "proj.p3.title": "Movie Cinema",
    "proj.p1.desc": "Hotel Travel Booking",
    "proj.p2.desc": "LoveBox Hotel",
    "proj.p3.desc": "Movie Cinema Booking Ticket",
    "proj.stack.hotel": "ReactJs • Tailwind",
    "proj.stack.movie": "ReactJs • MySql • Figma",

    "contact.title": "Contact",
    "contact.text":
      "Prefer consumer, SaaS, fintech & education. On-site HCMC or remote.",
    "form.name": "Full name",
    "form.email": "Email",
    "form.message": "Message",
    "form.orEmail": "or email: phanchaukhanhduy@gmail.com",
    "form.submit": "Send",

    "footer.built": "Built with Tailwind.",
  },
};


const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];

function setLang(l) {
  const d = I18N[l];
  $$("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (d[k] !== undefined) {
      if (/<[^>]+>/.test(d[k])) el.innerHTML = d[k];
      else el.textContent = d[k];
    }
  });
  document.documentElement.lang = l;
  localStorage.setItem("lang", l);
  $("#btnEN")?.classList.toggle("active", l === "en");
  $("#btnVI")?.classList.toggle("active", l === "vi");
}

window.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = $("#themeSwitch");
  const btnEN = $("#btnEN");
  const btnVI = $("#btnVI");

  const initTheme =
    localStorage.getItem("theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.classList.toggle("dark", initTheme === "dark");
  if (themeSwitch) themeSwitch.checked = initTheme === "dark";

  const initLang = localStorage.getItem("lang") || "vi";
  setLang(initLang);

  themeSwitch?.addEventListener("change", () => {
    const isDark = themeSwitch.checked;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  btnEN?.addEventListener("click", () => setLang("en"));
  btnVI?.addEventListener("click", () => setLang("vi"));

  $("#year") && ($("#year").textContent = new Date().getFullYear());
});

/* ============ NAVIGATION / ISLAND ============ */
window.addEventListener("DOMContentLoaded", () => {
  const island = $("#island"),
    islandToggle = $("#islandToggle"),
    islandMenu = $("#islandMenu"),
    islandPanel = $("#islandPanel");

  if (!island || !islandToggle) return;

  function setIsland(open) {
    island.classList.toggle("island--open", open);
    island.classList.toggle("island--closed", !open);
    islandToggle.setAttribute("aria-expanded", String(open));
    if (innerWidth >= 768) {
      islandMenu.style.display = open ? "flex" : "none";
    } else {
      islandPanel.classList.toggle("hidden", !open);
    }
  }
  setIsland(false);

  islandToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    setIsland(!island.classList.contains("island--open"));
  });
  addEventListener("click", (e) => {
    if (!island.contains(e.target) && !islandPanel.contains(e.target))
      setIsland(false);
  });
  addEventListener("resize", () => setIsland(false));

  function goTo(sel) {
    const el = document.querySelector(sel);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsland(false);
  }

  $$("[data-scroll]").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      goTo(a.getAttribute("data-scroll"));
    })
  );

  const ids = [
    "#home",
    "#about",
    "#skills",
    "#experience",
    "#projects",
    "#contact",
  ];
  const io = new IntersectionObserver(
    (ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) {
          const id = "#" + en.target.id;
          $$("#islandMenu .nav-a, #islandPanel .nav-a").forEach((a) =>
            a.classList.toggle("active", a.getAttribute("data-scroll") === id)
          );
        }
      });
    },
    { rootMargin: "-55% 0px -45% 0px", threshold: 0.01 }
  );
  ids.forEach((id) => {
    const el = document.querySelector(id);
    if (el) io.observe(el);
  });
});

/* ============ EMAILJS FORM ============ */
window.addEventListener("DOMContentLoaded", () => {
  if (typeof emailjs !== "undefined") {
    emailjs.init("IqJ4jX6ETicc5oahF"); // 🔑 public key

    const form = document.getElementById("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        emailjs
          .sendForm("service_yskpcmg", "template_t0ji4yj", this)
          .then(() => {
            alert("✅ Đã gửi thành công! Mình sẽ phản hồi sớm nhất.");
            e.target.reset();
          })
          .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("❌ Có lỗi khi gửi, vui lòng thử lại sau.");
          });
      });
    }
  }
});

/* ============ SERVICE WORKER ============ */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(() => console.log("✅ Service Worker registered!"))
    .catch((err) => console.log("❌ SW registration failed:", err));
}

/* ============ DEVTOOLS & COPY PROTECTION ============ */
(function () {
  const DETECT_THRESHOLD = 160;
  function showBanner(msg) {
    const b = document.createElement("div");
    b.className = "__protect_banner";
    b.innerHTML = `<span>${msg || "🔒 Vui lòng không sao chép nội dung."}</span>`;
    const btn = document.createElement("button");
    btn.textContent = "Đóng";
    btn.onclick = () => b.remove();
    b.appendChild(btn);
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 4000);
  }

  console.log(
    "%cTemplate © 2025 — Phan Chau Khanh Duy",
    "background:#111;color:#C8F560;padding:6px 8px;border-radius:4px;font-weight:700;"
  );

  document.addEventListener(
    "keydown",
    function (e) {
      const key = e.key ? e.key.toLowerCase() : "";
      if (
        (e.ctrlKey && key === "u") ||
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (key === "i" || key === "j")) ||
        (e.ctrlKey && key === "s")
      ) {
        e.preventDefault();
        e.stopPropagation();
        showBanner("⚠️ Mã nguồn được bảo vệ. Đừng tò mò nha 😄");
      }
    },
    { capture: true }
  );

  document.addEventListener(
    "contextmenu",
    function (e) {
      const tag = e.target?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      e.preventDefault();
      showBanner("🖱️ Chức năng chuột phải đã bị khóa.");
    },
    { capture: true }
  );

  let devtoolsOpen = false;
  function checkDevtools() {
    const widthDiff = Math.abs(window.outerWidth - window.innerWidth);
    const heightDiff = Math.abs(window.outerHeight - window.innerHeight);
    const isOpen = widthDiff > DETECT_THRESHOLD || heightDiff > DETECT_THRESHOLD;
    if (isOpen && !devtoolsOpen) {
      devtoolsOpen = true;
      showBanner("🚨 Đừng mở DevTools nha 😅");
    } else if (!isOpen) {
      devtoolsOpen = false;
    }
  }
  setInterval(checkDevtools, 1000);
})();

/* ============ HELLO INTRO ============ */
window.onload = () => {
  const hello = document.getElementById("hello");
  const main = document.getElementById("mainContent");
  const svg = document.getElementById("logo");
  const flash = document.getElementById("flash");
  if (!hello || !main || !svg || !flash) return;

  // Nếu đã hiển thị intro trong tab này → bỏ qua
  if (sessionStorage.getItem("helloShown")) {
    hello.style.display = "none";
    main.classList.add("visible");
    return;
  }

  sessionStorage.setItem("helloShown", "1");

  const pref =
    localStorage.getItem("theme") ??
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const totalTime = 2400;

  // Bắt đầu animation
  setTimeout(() => {
    svg.style.filter =
      pref === "dark"
        ? "drop-shadow(0 0 120px rgba(255,255,255,1))"
        : "drop-shadow(0 0 100px rgba(0,0,0,0.8))";
    flash.classList.add("active");
  }, totalTime);

  setTimeout(() => {
    svg.style.opacity = "0";
  }, totalTime + 200);

  setTimeout(() => {
    flash.classList.add("fadeout");
    hello.style.opacity = "0";
  }, totalTime + 600);

  setTimeout(() => {
    hello.style.display = "none";
    main.classList.add("visible");
  }, totalTime + 1200);
};