"use client";

import { useEffect } from "react";

const TARGETS = [
  ".hero-copy",
  ".product-visual",
  ".section-head",
  ".compare-card",
  ".card",
  ".steps article",
  ".insight",
  ".diagnosis-grid > div",
  ".wizard",
  ".final-cta",
  ".footer-grid > div"
].join(",");

export function MotionEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = document.querySelector<HTMLElement>(".site-nav");
    const hero = document.querySelector<HTMLElement>(".hero");
    const dashboard = document.querySelector<HTMLElement>(".dashboard");

    const updateNav = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 28);
    };
    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    if (reduceMotion) {
      document.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => el.classList.add("is-visible"));
      return () => window.removeEventListener("scroll", updateNav);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const prepare = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
        if (el.dataset.motionBound === "1") return;
        el.dataset.motionBound = "1";
        el.classList.add("motion-ready");

        if (el.matches(".product-visual")) el.classList.add("motion-from-right");
        else if (el.matches(".hero-copy")) el.classList.add("motion-from-left");

        const parent = el.parentElement;
        if (parent?.matches(".cards,.steps,.insights-grid,.compare,.footer-grid")) {
          const siblings = Array.from(parent.children);
          const index = siblings.indexOf(el);
          el.style.setProperty("--motion-delay", String(Math.min(index * 85, 340)) + "ms");
        }
        observer.observe(el);
      });

      root.querySelectorAll<HTMLElement>(".pill").forEach((button) => {
        if (button.dataset.magneticBound === "1") return;
        button.dataset.magneticBound = "1";
        button.classList.add("magnetic");

        const move = (event: PointerEvent) => {
          if (event.pointerType === "touch") return;
          const rect = button.getBoundingClientRect();
          const x = (event.clientX - rect.left - rect.width / 2) * 0.14;
          const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
          button.style.setProperty("--mag-x", String(x) + "px");
          button.style.setProperty("--mag-y", String(y) + "px");
        };
        const reset = () => {
          button.style.setProperty("--mag-x", "0px");
          button.style.setProperty("--mag-y", "0px");
        };
        button.addEventListener("pointermove", move);
        button.addEventListener("pointerleave", reset);
      });

      root.querySelectorAll<HTMLElement>(".card,.insight,.compare-card,.wizard").forEach((surface) => {
        if (surface.dataset.spotBound === "1") return;
        surface.dataset.spotBound = "1";
        surface.classList.add("spotlight-surface");
        surface.addEventListener("pointermove", (event) => {
          const rect = surface.getBoundingClientRect();
          surface.style.setProperty("--spot-x", String(event.clientX - rect.left) + "px");
          surface.style.setProperty("--spot-y", String(event.clientY - rect.top) + "px");
        });
      });
    };

    prepare();

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            prepare(node);
            if (node.matches?.(TARGETS)) {
              node.classList.add("motion-ready");
              observer.observe(node);
            }
          }
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const heroMove = (event: PointerEvent) => {
      if (!hero || event.pointerType === "touch") return;
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty("--hero-x", String(x) + "%");
      hero.style.setProperty("--hero-y", String(y) + "%");
    };
    hero?.addEventListener("pointermove", heroMove);

    const dashboardMove = (event: PointerEvent) => {
      if (!dashboard || event.pointerType === "touch") return;
      const rect = dashboard.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      dashboard.style.setProperty("--dash-ry", String(-7 + px * 7) + "deg");
      dashboard.style.setProperty("--dash-rx", String(3 - py * 5) + "deg");
      dashboard.style.setProperty("--dash-y", String(py * -8) + "px");
    };
    const dashboardReset = () => {
      dashboard?.style.setProperty("--dash-ry", "-7deg");
      dashboard?.style.setProperty("--dash-rx", "3deg");
      dashboard?.style.setProperty("--dash-y", "0px");
    };
    dashboard?.addEventListener("pointermove", dashboardMove);
    dashboard?.addEventListener("pointerleave", dashboardReset);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", updateNav);
      hero?.removeEventListener("pointermove", heroMove);
      dashboard?.removeEventListener("pointermove", dashboardMove);
      dashboard?.removeEventListener("pointerleave", dashboardReset);
    };
  }, []);

  return null;
}
