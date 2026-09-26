import { CSSProperties } from "react";

/**
 * Centralized Design & Theme Configuration
 * Edit colors, gradients, surface shaders, and background patterns here
 * to dynamically update the entire website's visual theme.
 */

export const theme = {
  // Rich, multi-hue color palette (Sapphire, Electric Cyan, Cyber Violet, Sunset Amber, Emerald)
  colors: {
    // Backgrounds & Surfaces
    background: "#030712", // Deepest obsidian base
    surfaceDark: "#050a17", // Shaded obsidian
    surfaceNavy: "#08142c", // Deep sapphire navy
    surfaceIndigo: "#0a0e27", // Midnight indigo
    surfaceCard: "rgba(255, 255, 255, 0.03)",
    surfaceCardHover: "rgba(255, 255, 255, 0.06)",
    surfaceCardActive: "rgba(59, 130, 246, 0.08)",

    // Primary Brand & Accents
    primary: "#3b82f6", // Sapphire Blue
    primaryHover: "#2563eb",
    secondary: "#8b5cf6", // Royal Violet
    secondaryHover: "#7c3aed",
    accentCyan: "#06b6d4", // Electric Cyan
    accentTeal: "#14b8a6", // Teal
    accentAmber: "#f59e0b", // Sunset Amber
    accentRose: "#f43f5e", // Coral Rose
    accentEmerald: "#10b981", // Emerald Green

    // Text & Contrast
    textPrimary: "#ffffff",
    textSecondary: "#e2e8f0",
    textMuted: "#94a3b8",
    textDim: "#64748b",

    // Borders & Glass
    borderSubtle: "rgba(255, 255, 255, 0.07)",
    borderMedium: "rgba(255, 255, 255, 0.12)",
    borderPrimaryGlow: "rgba(59, 130, 246, 0.35)",
    borderSecondaryGlow: "rgba(139, 92, 246, 0.35)",
    borderCyanGlow: "rgba(6, 182, 212, 0.35)",
  },

  // Centralized Typography Gradients
  gradients: {
    // Multi-color gradient for headline highlights (Electric Blue -> Purple -> Cyan)
    textGradient:
      "linear-gradient(135deg, #60a5fa 0%, #c084fc 45%, #22d3ee 100%)",
    // Warm accent gradient
    warmGradient:
      "linear-gradient(135deg, #fb923c 0%, #f43f5e 50%, #c084fc 100%)",
    // Primary action button gradient
    primaryButton: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
    // High-contrast glow border
    glowBorder:
      "linear-gradient(135deg, rgba(59, 130, 246, 0.6), rgba(168, 85, 247, 0.6))",
  },

  // Centralized Background Patterns (Grid boxes, Dot matrix, Hazy mesh, Deep shading)
  patterns: {
    // "Small Little Boxes" technical blueprint graph-paper grid pattern
    gridBoxes: {
      backgroundImage: `
        linear-gradient(to right, rgba(59, 130, 246, 0.07) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(59, 130, 246, 0.07) 1px, transparent 1px)
      `,
      backgroundSize: "28px 28px",
    } as CSSProperties,

    // High-density micro grid
    microGrid: {
      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
      `,
      backgroundSize: "16px 16px",
    } as CSSProperties,

    // Dot matrix technical pattern
    dotMatrix: {
      backgroundImage:
        "radial-gradient(circle, rgba(147, 197, 253, 0.12) 1px, transparent 1px)",
      backgroundSize: "22px 22px",
    } as CSSProperties,

    // Atmospheric hazy ambient radial glow
    hazyCyanBlue: {
      background:
        "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(6, 182, 212, 0.12), transparent 75%)",
    } as CSSProperties,

    hazySapphireViolet: {
      background:
        "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.08) 50%, transparent 80%)",
    } as CSSProperties,

    // Deep shaded twilight navy background (as in Image 4)
    deepNavyShader: {
      background: "linear-gradient(180deg, #071329 0%, #040916 100%)",
    } as CSSProperties,

    // Obsidian shadow with subtle violet undertone
    obsidianVioletShader: {
      background: "linear-gradient(180deg, #060814 0%, #030712 100%)",
    } as CSSProperties,
  },

  // Pre-configured section styles for distinct segment identification
  sections: {
    hero: {
      style: {
        background:
          "radial-gradient(circle at 50% 20%, rgba(30, 58, 138, 0.22) 0%, rgba(15, 23, 42, 0.6) 45%, #030712 90%)",
      } as CSSProperties,
      badgeText: "✨ Digital Engineering & Craftsmanship",
      badgeClass: "bg-blue-500/10 border-blue-500/25 text-blue-400",
    },

    // Services uses the technical "Small Little Boxes" blueprint grid
    services: {
      className: "relative border-t border-b border-blue-500/10",
      badgeClass: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400",
    },

    // TechStack uses deep obsidian with dual-stream motion
    techStack: {
      style: {
        background:
          "linear-gradient(180deg, rgba(8, 14, 29, 0.7) 0%, rgba(3, 7, 18, 0.95) 100%)",
      } as CSSProperties,
      badgeClass: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400",
    },

    // Packages uses Dot Matrix with ambient twilight glow
    packages: {
      className: "relative border-t border-white/5",
      badgeClass: "bg-violet-500/10 border-violet-500/25 text-violet-400",
    },

    // ProjectsGallery uses deep twilight navy shading
    projects: {
      style: {
        background: "linear-gradient(180deg, #061126 0%, #030712 100%)",
      } as CSSProperties,
      badgeClass: "bg-blue-500/10 border-blue-500/25 text-blue-400",
    },

    // Contact/Footer uses rich sapphire card banner (as in Image 4)
    contactBanner: {
      style: {
        background:
          "linear-gradient(135deg, #0c234b 0%, #071733 60%, #0a1128 100%)",
        border: "1px solid rgba(96, 165, 250, 0.2)",
        boxShadow:
          "0 20px 50px -15px rgba(15, 23, 42, 0.9), 0 0 40px -10px rgba(59, 130, 246, 0.25)",
      } as CSSProperties,
    },
  },
};
