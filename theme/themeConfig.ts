import { CSSProperties } from "react";

/**
 * Centralized Design & Theme Configuration
 * Edit colors, gradients, surface shaders, and background patterns here
 * to dynamically update the entire website's visual theme.
 */

export const theme = {
  // Rich, multi-hue color palette with smooth, balanced luminance
  // Prevents eye fatigue by using smooth dark charcoal/slate instead of harsh pitch black
  colors: {
    // Backgrounds & Surfaces (smooth dark slate instead of harsh pitch black)
    background: "#0b0f19", // Smooth deep slate base
    backgroundSecondary: "#0e1422", // Soft dark slate layer
    surfaceDark: "#111827", // Smooth slate surface
    surfaceNavy: "#131d33", // Soft sapphire navy
    surfaceIndigo: "#151d38", // Soft midnight indigo
    surfaceCard: "rgba(255, 255, 255, 0.035)",
    surfaceCardHover: "rgba(255, 255, 255, 0.07)",
    surfaceCardActive: "rgba(59, 130, 246, 0.1)",

    // Primary Brand & Accents
    primary: "#3b82f6", // Sapphire Blue
    primaryHover: "#60a5fa",
    secondary: "#8b5cf6", // Royal Violet
    secondaryHover: "#a78bfa",
    accentCyan: "#06b6d4", // Electric Cyan
    accentTeal: "#14b8a6", // Teal
    accentAmber: "#f59e0b", // Sunset Amber
    accentRose: "#f43f5e", // Coral Rose
    accentEmerald: "#10b981", // Emerald Green

    // Text & Contrast (smooth, anti-glare typography that is easy on the eyes)
    textPrimary: "#f8fafc", // Soft off-white (no glare)
    textSecondary: "#cbd5e1", // Slate 300 (easy on eyes)
    textMuted: "#94a3b8", // Slate 400 (gentle)
    textDim: "#64748b", // Slate 500

    // Borders & Glass
    borderSubtle: "rgba(255, 255, 255, 0.08)",
    borderMedium: "rgba(255, 255, 255, 0.14)",
    borderPrimaryGlow: "rgba(59, 130, 246, 0.28)",
    borderSecondaryGlow: "rgba(139, 92, 246, 0.28)",
    borderCyanGlow: "rgba(6, 182, 212, 0.28)",
  },

  // Centralized Typography Gradients
  gradients: {
    // Multi-color gradient for headline highlights (Soft Sky Blue -> Lavender -> Cyan)
    textGradient:
      "linear-gradient(135deg, #93c5fd 0%, #c4b5fd 45%, #67e8f9 100%)",
    // Warm accent gradient
    warmGradient:
      "linear-gradient(135deg, #fdba74 0%, #fb7185 50%, #c4b5fd 100%)",
    // Primary action button gradient
    primaryButton: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
    // High-contrast glow border
    glowBorder:
      "linear-gradient(135deg, rgba(59, 130, 246, 0.45), rgba(168, 85, 247, 0.45))",
  },

  // Centralized Background Patterns (Grid boxes, Dot matrix, Hazy mesh, Deep shading)
  patterns: {
    // "Small Little Boxes" technical blueprint graph-paper grid pattern
    gridBoxes: {
      backgroundImage: `
        linear-gradient(to right, rgba(96, 165, 250, 0.045) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(96, 165, 250, 0.045) 1px, transparent 1px)
      `,
      backgroundSize: "28px 28px",
    } as CSSProperties,

    // High-density micro grid
    microGrid: {
      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
      `,
      backgroundSize: "16px 16px",
    } as CSSProperties,

    // Dot matrix technical pattern
    dotMatrix: {
      backgroundImage:
        "radial-gradient(circle, rgba(148, 163, 184, 0.09) 1px, transparent 1px)",
      backgroundSize: "22px 22px",
    } as CSSProperties,

    // Atmospheric hazy ambient radial glow (gentle, diffused, non-fatiguing)
    hazyCyanBlue: {
      background:
        "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(6, 182, 212, 0.08), transparent 75%)",
    } as CSSProperties,

    hazySapphireViolet: {
      background:
        "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(59, 130, 246, 0.09), rgba(139, 92, 246, 0.05) 50%, transparent 80%)",
    } as CSSProperties,

    // Smooth shaded twilight navy background
    deepNavyShader: {
      background: "linear-gradient(180deg, #0e1526 0%, #0b0f19 100%)",
    } as CSSProperties,

    // Obsidian shadow with subtle violet undertone
    obsidianVioletShader: {
      background: "linear-gradient(180deg, #0f1527 0%, #0b0f19 100%)",
    } as CSSProperties,
  },

  // Pre-configured section styles for distinct segment identification
  sections: {
    hero: {
      style: {
        background:
          "radial-gradient(ellipse 90% 70% at 50% 25%, rgba(30, 64, 175, 0.14) 0%, rgba(15, 23, 42, 0.35) 55%, #0b0f19 100%)",
      } as CSSProperties,
      badgeText: "✨ Digital Engineering & Craftsmanship",
      badgeClass: "bg-blue-500/10 border-blue-500/25 text-blue-300",
    },

    // Services uses the technical "Small Little Boxes" blueprint grid
    services: {
      className: "relative border-t border-b border-slate-800/60 bg-[#0d1322]",
      badgeClass: "bg-cyan-500/10 border-cyan-500/25 text-cyan-300",
    },

    // TechStack uses deep smooth band
    techStack: {
      style: {
        background: "linear-gradient(180deg, #0d1424 0%, #0b0f19 100%)",
      } as CSSProperties,
      badgeClass: "bg-emerald-500/10 border-emerald-500/25 text-emerald-300",
    },

    // Packages uses Dot Matrix with ambient twilight glow
    packages: {
      className: "relative border-t border-slate-800/60 bg-[#0c1220]",
      badgeClass: "bg-violet-500/10 border-violet-500/25 text-violet-300",
    },

    // ProjectsGallery uses deep twilight navy shading
    projects: {
      style: {
        background: "linear-gradient(180deg, #0e1628 0%, #0b0f19 100%)",
      } as CSSProperties,
      badgeClass: "bg-blue-500/10 border-blue-500/25 text-blue-300",
    },

    // Contact/Footer uses rich sapphire card banner
    contactBanner: {
      style: {
        background:
          "linear-gradient(135deg, #13223f 0%, #0f1a30 60%, #111a33 100%)",
        border: "1px solid rgba(96, 165, 250, 0.22)",
        boxShadow:
          "0 20px 50px -15px rgba(2, 6, 23, 0.7), 0 0 35px -10px rgba(59, 130, 246, 0.18)",
      } as CSSProperties,
    },
  },
};
