"use client";

import { SiGithub as Github } from "@icons-pack/react-simple-icons";
import { Linkedin, Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export const Navbar = () => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const navItems = [
    { href: "/work", label: "Work" },
    { href: "/gallery", label: "Gallery" },
    { href: "/music", label: "Music" },
  ];

  const getActiveItem = () => {
    return navItems.find((item) => pathname === item.href)?.href || null;
  };

  const activeItem = getActiveItem();
  const indicatorItem = hoveredItem || activeItem;

  useEffect(() => {
    if (indicatorItem && navRef.current && itemRefs.current[indicatorItem]) {
      const navRect = navRef.current.getBoundingClientRect();
      const itemRect = itemRefs.current[indicatorItem]!.getBoundingClientRect();

      setIndicatorStyle({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
      });
    }
  }, [indicatorItem]);

  // Lock body scroll when sheet open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  // Focus close button when opening (basic focus management)
  useEffect(() => {
    if (mobileOpen) {
      // Delay to ensure element is mounted
      const t = setTimeout(() => closeBtnRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [mobileOpen]);

  // Auto-close on route change (e.g., Back/Forward navigation)
  useEffect(() => {
    if (mobileOpen) setMobileOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const Logo = (
    <svg
      width="35.25"
      height="54"
      viewBox="0 0 47 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-primary"
    >
      <path d="M32.584 59.576C30.856 59.576 29.368 59.336 28.12 58.856C26.904 58.376 25.704 57.672 24.52 56.744L22.792 59H21.592V48.92H22.84C23.224 50.456 23.816 51.928 24.616 53.336C25.416 54.712 26.488 55.848 27.832 56.744C29.208 57.64 30.92 58.088 32.968 58.088C34.792 58.088 36.296 57.752 37.48 57.08C38.696 56.376 39.592 55.496 40.168 54.44C40.776 53.352 41.08 52.232 41.08 51.08C41.08 50.056 40.856 49.16 40.408 48.392C39.992 47.624 39.368 46.968 38.536 46.424C37.704 45.848 36.728 45.352 35.608 44.936C34.488 44.52 33.224 44.152 31.816 43.832C29.512 43.288 27.624 42.52 26.152 41.528C24.712 40.536 23.64 39.336 22.936 37.928C22.232 36.488 21.88 34.824 21.88 32.936C21.88 30.6 22.392 28.648 23.416 27.08C24.44 25.48 25.784 24.28 27.448 23.48C29.112 22.648 30.888 22.232 32.776 22.232C34.312 22.232 35.64 22.456 36.76 22.904C37.912 23.32 39.08 23.992 40.264 24.92L41.512 22.808H42.712V32.6L41.512 32.648C40.744 29.608 39.608 27.352 38.104 25.88C36.6 24.408 34.76 23.672 32.584 23.672C31.272 23.672 30.04 23.944 28.888 24.488C27.768 25.032 26.872 25.768 26.2 26.696C25.528 27.592 25.192 28.632 25.192 29.816C25.192 30.808 25.4 31.64 25.816 32.312C26.232 32.952 26.824 33.496 27.592 33.944C28.36 34.392 29.256 34.776 30.28 35.096C31.336 35.416 32.488 35.752 33.736 36.104C36.04 36.712 37.96 37.512 39.496 38.504C41.032 39.464 42.184 40.712 42.952 42.248C43.752 43.752 44.152 45.624 44.152 47.864C44.152 51.48 43.144 54.344 41.128 56.456C39.144 58.536 36.296 59.576 32.584 59.576Z" />
      <path d="M23.944 43.28L15.112 16.88H14.92L14.584 15.488L16.888 7.232H18.328L30.376 43.28H23.944ZM0.232 44V42.8H11.752V44H0.232ZM9.592 32.672V31.472H25.144V32.672H9.592ZM18.184 44V42.8H34.648V44H18.184ZM4.36 43.28L16.888 7.232H18.328L15.4 15.488L5.944 43.28H4.36Z" />
    </svg>
  );

  return (
    <div className="absolute top-0 flex flex-row items-center justify-center min-w-full mt-5">
      <nav className="flex flex-row items-center justify-between xl:w-3/5 w-4/5">
        <div className="flex flex-row items-center gap-6 md:gap-10 text-lg w-full">
          <Link href="/" aria-label="Home">
            {Logo}
          </Link>
          <nav
            ref={navRef}
            className="hidden md:flex relative rounded-full p-1"
          >
            {/* Animated background indicator */}
            <div
              className={`absolute inset-y-1 bg-card dark:bg-neutral-800/80 rounded-full transition-all duration-300 ease-out ${
                indicatorItem ? "opacity-100" : "opacity-0"
              }`}
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
              }}
            />

            {navItems.map((item) => (
              <Link
                key={item.href}
                ref={(el) => {
                  itemRefs.current[item.href] = el;
                }}
                href={item.href}
                className={`lexend relative z-10 px-5 py-2 rounded-full transition-all duration-200 ease-out text-center ${
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile trigger */}
          <div className="ml-auto flex items-center md:hidden">
            <Button
              variant="default"
              size="icon"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="hidden md:flex flex-row items-center gap-3 md:gap-5">
          <div className="flex flex-row gap-2">
            <Button variant="default" size="icon" asChild>
              <Link
                href="https://github.com/alexsparkes"
                aria-label="Github"
                target="_blank"
              >
                <Github />
              </Link>
            </Button>
            <Button variant="default" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/alex-sparkes/"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin />
              </Link>
            </Button>
            <ModeToggle />
            {/*<Button className="lexend gap-3" size="lg" asChild>
          <Link href="">
            Download CV
            <Download className="w-4 h-4" />
          </Link>
        </Button>*/}
          </div>
        </div>
      </nav>

      {/* Mobile full-screen sheet (Framer Motion) */}
      <AnimatePresence>
        {mobileOpen && (
          <div
            key="mobile-root"
            id="mobile-nav"
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              aria-hidden="true"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              className="absolute inset-y-0 left-0 bg-background transform-gpu shadow-2xl"
              role="dialog"
              aria-modal="true"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 260, damping: 28, mass: 0.9 }
              }
              style={{
                willChange: "transform",
                // Leave a small interactive gap on the right for closing via backdrop
                width: "calc(100% - max(24px, env(safe-area-inset-right)))",
              }}
              onPanEnd={(_, info) => {
                if (info.offset.x < -80 || info.velocity.x < -400) {
                  setMobileOpen(false);
                }
              }}
            >
              <div
                className="flex h-full flex-col p-6"
                style={{
                  paddingTop: "max(1.5rem, env(safe-area-inset-top))",
                  paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
                  paddingLeft: "max(1.5rem, env(safe-area-inset-left))",
                  paddingRight: "max(1.5rem, env(safe-area-inset-right))",
                }}
              >
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    aria-label="Home"
                    onClick={() => setMobileOpen(false)}
                  >
                    {Logo}
                  </Link>
                  <Button
                    variant="default"
                    size="icon"
                    aria-label="Close menu"
                    onClick={() => setMobileOpen(false)}
                    ref={closeBtnRef}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-10 flex-1">
                  <div className="flex flex-col">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`lexend block rounded-xl px-4 py-4 text-2xl transition-colors ${
                          pathname === item.href
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Button variant="default" size="icon" asChild>
                      <Link
                        href="https://github.com/alexsparkes"
                        aria-label="Github"
                        target="_blank"
                        onClick={() => setMobileOpen(false)}
                      >
                        <Github />
                      </Link>
                    </Button>
                    <Button variant="default" size="icon" asChild>
                      <Link
                        href="https://www.linkedin.com/in/alex-sparkes/"
                        aria-label="LinkedIn"
                        target="_blank"
                        onClick={() => setMobileOpen(false)}
                      >
                        <Linkedin />
                      </Link>
                    </Button>
                    <div className="ml-auto">
                      <ModeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
