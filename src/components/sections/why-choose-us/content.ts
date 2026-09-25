import { 
  ConnectedTexture, 
  EngineeringTexture, 
  CommunicationTexture 
} from "./textures/TextureAssets";

export const WHY_US_CONTENT = {
  header: {
    kicker: "Why Work With Brivya",
    headingPrimary: "Different disciplines.",
    headingSecondary: "One standard of work.",
    thesis:
      "A website, an advertising campaign, and an internal business tool may serve different purposes. We bring the same care to each: understand the problem, choose the right approach, and make the details count.",
  },
  cards: [
    {
      id: "opt-connect",
      title: "01 — Connected Thinking",
      desc: "We consider how websites, digital advertising, and internal systems work together, rather than treating each as an isolated project.",
      baseThemeClass: "bg-[#EEF2F6] border-[#CBDDF6]",
      gradientLayer: "from-[#F1F5F9] via-[#E8EDF4] to-[#DFE7EF]",
      iconHighlight: "bg-[#E3EDFA] text-[#0A5FD7] border-[#0A5FD7]/15",
      accentBar: "#0A5FD7",
      vectorId: "network",
      backgroundArtifact: ConnectedTexture
    },
    {
      id: "opt-practical",
      title: "02 — Practical Engineering",
      desc: "From cloud infrastructure to AI automation and custom add-ons, we focus on technology that's useful, dependable, and straightforward to maintain.",
      baseThemeClass: "bg-[#D6F8E4] border-[#A5E8C3]",
      gradientLayer: "from-[#D5F2E1] via-[#CEEDE1] to-[#CAE7E3]",
      iconHighlight: "bg-[#CDF7DE] text-[#059669] border-[#059669]/15",
      accentBar: "#10B981",
      vectorId: "infrastructure",
      backgroundArtifact: EngineeringTexture
    },
    {
      id: "opt-clear",
      title: "03 — Clear Communication",
      desc: "We believe good partnerships depend on honest conversations, well-defined expectations, and decisions that make sense to the people paying for the work.",
      baseThemeClass: "bg-[#F1E5F8] border-[#D5C2EA]",
      gradientLayer: "from-[#F3EBFA] via-[#ECE1F5] to-[#E5E5F1]",
      iconHighlight: "bg-[#EAE1F5] text-[#9333EA] border-[#9333EA]/15",
      accentBar: "#9333EA",
      vectorId: "discussion",
      backgroundArtifact: CommunicationTexture
    }
  ]
} as const;

export type WhyUsCardData = typeof WHY_US_CONTENT.cards[0];