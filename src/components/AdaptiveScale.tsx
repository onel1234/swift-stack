'use client';

export function AdaptiveScale() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function setScale() {
              const FONT_BASE = 16, BASE_W = 1920, COEF = 0.6666;
              const reduction = ((BASE_W - innerWidth) / BASE_W) * 100 * COEF;
              const size = FONT_BASE - (FONT_BASE * reduction) / 100;
              if (size > FONT_BASE) document.documentElement.style.fontSize = size + "px"; 
              else document.documentElement.style.removeProperty("font-size");
            }
            setScale();
            window.addEventListener("resize", setScale);
          })();
        `,
      }}
    />
  );
}
