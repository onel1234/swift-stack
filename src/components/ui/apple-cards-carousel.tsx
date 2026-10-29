"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

export type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 6);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile() ? 300 : 400;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile() ? 300 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 280 : 360;
      const gap = isMobile() ? 16 : 24;
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div style={{ position: "relative", width: "100%" }}>
        {/* Horizontal scrollable track with touch momentum & scroll snap */}
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="carousel-track"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            overflowX: "auto",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.45,
                  delay: 0.06 * index,
                  ease: "easeOut",
                },
              }}
              key={"card-wrap-" + index}
              className="carousel-item-wrapper"
              style={{ flexShrink: 0 }}
            >
              {item}
            </motion.div>
          ))}
          {/* End spacing spacer */}
          <div className="carousel-end-spacer" style={{ flexShrink: 0 }} />
        </div>

        {/* Carousel controls - arrows */}
        <div className="carousel-controls-bar">
          <button
            onClick={scrollLeft}
            disabled={isMounted ? !canScrollLeft : undefined}
            suppressHydrationWarning
            aria-label="Previous project"
            className="carousel-nav-btn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button
            onClick={scrollRight}
            disabled={isMounted ? !canScrollRight : undefined}
            suppressHydrationWarning
            aria-label="Next project"
            className="carousel-nav-btn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <style>{`
        .carousel-track {
          gap: 1.5rem;
          padding: 1.25rem 2rem 2.5rem;
          scroll-snap-type: x mandatory;
        }
        .carousel-track::-webkit-scrollbar {
          display: none;
        }
        .carousel-item-wrapper {
          scroll-snap-align: start;
          scroll-snap-stop: normal;
        }
        .carousel-end-spacer {
          width: 2rem;
        }
        .carousel-controls-bar {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 0.75rem;
          padding: 0 2rem;
          margin-top: 0.5rem;
        }
        .carousel-nav-btn {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: #0f0f11;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .carousel-nav-btn:hover:not(:disabled) {
          background-color: #222226;
          transform: scale(1.05);
        }
        .carousel-nav-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .carousel-track {
            gap: 1rem;
            padding: 0.75rem 1.25rem 1.75rem;
          }
          .carousel-end-spacer {
            width: 1rem;
          }
          .carousel-controls-bar {
            padding: 0 1.25rem;
            gap: 0.6rem;
            margin-top: 0.25rem;
          }
          .carousel-nav-btn {
            width: 2.75rem;
            height: 2.75rem;
          }
        }
      `}</style>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardType;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="apple-modal-overlay">
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="apple-modal-backdrop"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={layout ? `card-${card.title}` : undefined}
              ref={containerRef}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="apple-modal-content-card"
            >
              {/* Sticky Top Close Button */}
              <div className="modal-top-bar">
                <button
                  onClick={handleClose}
                  aria-label="Close modal"
                  className="modal-close-btn"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="modal-inner-padding">
                <p className="modal-category-text">{card.category}</p>
                <motion.h3
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className="modal-title-text"
                >
                  {card.title}
                </motion.h3>

                {/* Modal Inner Content */}
                <div style={{ marginTop: "1rem" }}>{card.content}</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card Button on the Carousel */}
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="apple-card-item"
      >
        {/* Dark gradient overlays */}
        <div className="card-gradient-overlay" />

        {/* Card Background Image */}
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 80vw, 360px"
          className="card-bg-img"
        />

        {/* Card Header Content */}
        <div className="card-header-content">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="card-category-label"
          >
            {card.category}
          </motion.p>
          <motion.h4
            layoutId={layout ? `title-${card.title}` : undefined}
            className="card-title-text"
          >
            {card.title}
          </motion.h4>
        </div>

        {/* Card Footer Content: Explore Pill */}
        <div className="card-footer-content">
          <span className="card-action-pill">
            View Project ↗
          </span>
        </div>
      </motion.button>

      <style>{`
        /* Card in Carousel */
        .apple-card-item {
          border-radius: 2rem;
          background-color: #111216;
          height: 32rem;
          width: 22rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
          z-index: 10;
          cursor: pointer;
          border: none;
          text-align: left;
          box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.35);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .apple-card-item:hover {
          box-shadow: 0 20px 44px -10px rgba(0, 0, 0, 0.45);
        }
        .card-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.88) 0%,
            rgba(0, 0, 0, 0.3) 35%,
            rgba(0, 0, 0, 0.15) 60%,
            rgba(0, 0, 0, 0.88) 100%
          );
          z-index: 15;
          pointer-events: none;
        }
        .apple-card-item:hover .card-bg-img {
          transform: scale(1.05);
        }
        .card-header-content {
          position: relative;
          z-index: 20;
          padding: 2rem 1.75rem;
          width: 100%;
        }
        .card-category-label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin: 0;
        }
        .card-title-text {
          color: #ffffff;
          font-size: 1.75rem;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin: 0.6rem 0 0;
          max-width: 18rem;
        }
        .card-footer-content {
          position: relative;
          z-index: 20;
          padding: 1.75rem;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .card-action-pill {
          background-color: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #ffffff;
          font-size: 0.8125rem;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        /* Modal Overlay & Card */
        .apple-modal-overlay {
          position: fixed;
          inset: 0;
          height: 100vh;
          z-index: 9999;
          overflow: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .apple-modal-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        .apple-modal-content-card {
          max-width: 52rem;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          background-color: #ffffff;
          border-radius: 2rem;
          position: relative;
          z-index: 10000;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.5);
          color: #0f0f11;
        }
        .modal-top-bar {
          position: sticky;
          top: 0;
          z-index: 30;
          display: flex;
          justify-content: flex-end;
          padding: 1.25rem 1.25rem 0.5rem;
          pointer-events: none;
        }
        .modal-close-btn {
          pointer-events: auto;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          background-color: rgba(15, 15, 17, 0.85);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .modal-close-btn:hover {
          transform: scale(1.08);
          background-color: #000000;
        }
        .modal-inner-padding {
          padding: 0 2rem 2.5rem;
          margin-top: -0.5rem;
        }
        .modal-category-text {
          font-size: 0.8125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(15, 15, 17, 0.6);
          margin-bottom: 0.5rem;
        }
        .modal-title-text {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-size: clamp(1.75rem, 3.5vw, 2.75rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 0 1.5rem;
          color: #0f0f11;
        }

        /* Mobile Responsive Adjustments */
        @media (max-width: 768px) {
          .apple-card-item {
            width: clamp(260px, 80vw, 320px) !important;
            height: clamp(380px, 60vh, 440px) !important;
            border-radius: 1.75rem !important;
          }
          .card-header-content {
            padding: 1.5rem 1.25rem !important;
          }
          .card-category-label {
            font-size: 0.7rem !important;
          }
          .card-title-text {
            font-size: 1.35rem !important;
            line-height: 1.25 !important;
            margin-top: 0.4rem !important;
            max-width: 100% !important;
          }
          .card-footer-content {
            padding: 1.25rem !important;
          }
          .card-action-pill {
            font-size: 0.75rem !important;
            padding: 0.4rem 0.85rem !important;
          }

          /* Modal on mobile */
          .apple-modal-overlay {
            padding: 0.5rem !important;
            align-items: flex-end !important;
          }
          .apple-modal-content-card {
            border-radius: 1.5rem !important;
            max-height: 92vh !important;
            margin-bottom: 0 !important;
          }
          .modal-top-bar {
            padding: 1rem 1rem 0.25rem !important;
          }
          .modal-close-btn {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          .modal-inner-padding {
            padding: 0 1.25rem 2rem !important;
          }
          .modal-title-text {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .apple-card-item {
            width: 78vw !important;
            height: 380px !important;
          }
        }
      `}</style>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={className}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a card"}
      style={{
        ...((rest.style as React.CSSProperties) || {}),
        filter: isLoading ? "blur(8px)" : "none",
        transition:
          "filter 0.4s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        objectFit: "cover",
      }}
      {...rest}
    />
  );
};
