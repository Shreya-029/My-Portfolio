/* =========================================================
   SHREYA SINHA — PORTFOLIO INTERACTIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------
     GSAP SETUP
     --------------------------------------------------------- */

  if (typeof gsap === "undefined") {
    console.warn("GSAP failed to load.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);


  /* ---------------------------------------------------------
     CUSTOM CURSOR
     --------------------------------------------------------- */

  const cursor = document.querySelector(".cursor");

  if (cursor && window.innerWidth > 650) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    gsap.ticker.add(() => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;

      gsap.set(cursor, {
        x: cursorX,
        y: cursorY
      });
    });

    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, .skill-item"
    );

    interactiveElements.forEach((element) => {

      element.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 2.2,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });

    });
  }


  /* ---------------------------------------------------------
     NAVIGATION
     --------------------------------------------------------- */

  const nav = document.querySelector(".nav-wrap");

  if (nav) {
    ScrollTrigger.create({
      start: "top -80",
      onUpdate: (self) => {

        if (self.direction === 1) {
          nav.classList.add("nav-scrolled");
        } else {
          nav.classList.remove("nav-scrolled");
        }

      }
    });
  }


  /* ---------------------------------------------------------
     HERO ANIMATION
     --------------------------------------------------------- */

  const heroItems = document.querySelectorAll(
    ".hero .kicker, .hero h1, .hero .hero-intro, .hero .hero-arrow"
  );

  if (heroItems.length) {

    gsap.from(heroItems, {
      y: 60,
      opacity: 0,
      duration: 1.1,
      stagger: 0.12,
      ease: "power4.out",
      delay: 0.2
    });

  }


  /* ---------------------------------------------------------
     HERO NAME — SLIGHT MOVEMENT
     --------------------------------------------------------- */

  const heroTitle = document.querySelector(".hero h1");

  if (heroTitle) {

    heroTitle.addEventListener("mousemove", (e) => {

      const rect = heroTitle.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(heroTitle, {
        x: x * 8,
        y: y * 5,
        duration: 0.5,
        ease: "power2.out"
      });

    });

    heroTitle.addEventListener("mouseleave", () => {

      gsap.to(heroTitle, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)"
      });

    });

  }


  /* ---------------------------------------------------------
     SCROLL REVEALS
     --------------------------------------------------------- */

  const revealElements = document.querySelectorAll(
    ".section-head, " +
    ".project-card, " +
    ".experience-item, " +
    ".about-copy, " +
    ".education-item, " +
    ".skill-item, " +
    ".credential-item, " +
    ".contact-inner"
  );

  revealElements.forEach((element) => {

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          toggleActions: "play none none reverse"
        }
      }
    );

  });


  /* ---------------------------------------------------------
     SECTION HEADINGS
     --------------------------------------------------------- */

  document.querySelectorAll(".section-head").forEach((heading) => {

    gsap.from(heading, {

      x: -50,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",

      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }

    });

  });


  /* ---------------------------------------------------------
     PROJECT CARDS
     --------------------------------------------------------- */

  document.querySelectorAll(".project-card").forEach((card) => {

    const visual = card.querySelector(".project-visual");

    card.addEventListener("mouseenter", () => {

      gsap.to(card, {
        y: -8,
        duration: 0.4,
        ease: "power3.out"
      });

      if (visual) {
        gsap.to(visual, {
          scale: 1.025,
          duration: 0.6,
          ease: "power3.out"
        });
      }

    });

    card.addEventListener("mouseleave", () => {

      gsap.to(card, {
        y: 0,
        duration: 0.4,
        ease: "power3.out"
      });

      if (visual) {
        gsap.to(visual, {
          scale: 1,
          duration: 0.6,
          ease: "power3.out"
        });
      }

    });

  });


  /* ---------------------------------------------------------
     RAG VISUAL ANIMATION
     --------------------------------------------------------- */

  const ragVisual = document.querySelector(".rag-visual");

  if (ragVisual) {

    const ragNodes = ragVisual.querySelectorAll(
      ".rag-node, .rag-box, .rag-dot"
    );

    if (ragNodes.length) {

      gsap.to(ragNodes, {
        y: -6,
        duration: 1.8,
        stagger: {
          each: 0.15,
          repeat: -1,
          yoyo: true
        },
        ease: "sine.inOut"
      });

    }

  }


  /* ---------------------------------------------------------
     SENTIMENT VISUAL ANIMATION
     --------------------------------------------------------- */

  const sentimentBars = document.querySelectorAll(
    ".sentiment-bar"
  );

  if (sentimentBars.length) {

    sentimentBars.forEach((bar, index) => {

      const targetHeight = bar.style.height;

      bar.style.height = "0%";

      gsap.to(bar, {

        height: targetHeight,

        duration: 1.2,
        delay: index * 0.08,
        ease: "power3.out",

        scrollTrigger: {
          trigger: bar,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }

      });

    });

  }


  /* ---------------------------------------------------------
     MARQUEE
     --------------------------------------------------------- */

  const marquee = document.querySelector(".marquee-track");

  if (marquee) {

    let marqueeAnimation = gsap.to(marquee, {

      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1

    });

    marquee.addEventListener("mouseenter", () => {
      marqueeAnimation.timeScale(0.25);
    });

    marquee.addEventListener("mouseleave", () => {
      marqueeAnimation.timeScale(1);
    });

  }


  /* ---------------------------------------------------------
     SKILL ITEMS
     --------------------------------------------------------- */

  document.querySelectorAll(".skill-item").forEach((skill) => {

    skill.addEventListener("mouseenter", () => {

      gsap.to(skill, {
        x: 8,
        duration: 0.3,
        ease: "power2.out"
      });

    });

    skill.addEventListener("mouseleave", () => {

      gsap.to(skill, {
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      });

    });

  });


  /* ---------------------------------------------------------
     EDUCATION ITEMS
     --------------------------------------------------------- */

  document.querySelectorAll(".education-item").forEach((item) => {

    item.addEventListener("mouseenter", () => {

      gsap.to(item, {
        x: 10,
        duration: 0.35,
        ease: "power2.out"
      });

    });

    item.addEventListener("mouseleave", () => {

      gsap.to(item, {
        x: 0,
        duration: 0.35,
        ease: "power2.out"
      });

    });

  });


  /* ---------------------------------------------------------
     CONTACT EMAIL HOVER
     --------------------------------------------------------- */

  const email = document.querySelector(".contact-email");

  if (email) {

    email.addEventListener("mouseenter", () => {

      gsap.to(email, {
        letterSpacing: "0.03em",
        duration: 0.35,
        ease: "power2.out"
      });

    });

    email.addEventListener("mouseleave", () => {

      gsap.to(email, {
        letterSpacing: "",
        duration: 0.35,
        ease: "power2.out"
      });

    });

  }


  /* ---------------------------------------------------------
     SMOOTH ANCHOR SCROLL
     --------------------------------------------------------- */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (e) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* ---------------------------------------------------------
     ACTIVE NAV LINK
     --------------------------------------------------------- */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-wrap a[href^='#']");

  sections.forEach((section) => {

    ScrollTrigger.create({

      trigger: section,
      start: "top 45%",
      end: "bottom 45%",

      onEnter: () => setActiveLink(section.id),
      onEnterBack: () => setActiveLink(section.id)

    });

  });

  function setActiveLink(id) {

    navLinks.forEach((link) => {

      link.classList.remove("active");

      if (link.getAttribute("href") === `#${id}`) {
        link.classList.add("active");
      }

    });

  }


  /* ---------------------------------------------------------
     FOOTER YEAR
     --------------------------------------------------------- */

  const year = document.querySelector(".footer-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* ---------------------------------------------------------
     REFRESH SCROLLTRIGGER
     --------------------------------------------------------- */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

});