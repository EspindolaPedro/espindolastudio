/**
 * Menu Mobile - Hamburger com abas e Solicitar projeto
 * Design minimalista com setas diagonais
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Servicos", href: "#servicos" },
  { label: "Arquitetura", href: "#arquitetura" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const arrowVariants = {
    initial: { x: 0, y: 0 },
    hover: { x: 3, y: -3, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="mobile-menu-trigger"
        style={{
          scale: isOpen ? "0.7" : "1",
        }}
        aria-label="Abrir menu"
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0}}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          animate={{ rotate: isOpen ? -45 : 0, top: isOpen ? -11 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0,  }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, }}

            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="mobile-menu__content">
              {/* Navigation Items */}
              <nav className="mobile-menu__nav">
                {navItems.map((item) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className="mobile-menu__link"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.label}</span>
                      <motion.svg
                        className="mobile-menu__arrow"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        variants={arrowVariants}
                        whileHover="hover"
                      >
                        <path
                          d="M5 19L19 5M19 5H9M19 5V15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </motion.svg>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Divider */}
              <div className="mobile-menu__divider" />

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="mobile-menu__cta">
                <Link
                  href="#contato"
                  className="mobile-menu__button"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Solicitar projeto</span>
                  <motion.svg
                    className="mobile-menu__arrow"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    variants={arrowVariants}
                    whileHover="hover"
                  >
                    <path
                      d="M5 19L19 5M19 5H9M19 5V15"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
