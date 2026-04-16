// Service data
export interface ProcessStep {
  title: string;
  description: string;
}

export interface ResultImage {
  src: string;
  alt: string;
}

export interface ResultsSection {
  title?: string;
  images: ResultImage[];
  caption: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string | null;
  imageAlt: string;
  imageCaption: string;
  includes: string[];
  process: ProcessStep[];
  results?: ResultsSection;
  faqs: { q: string; a: string }[];
  meta: {
    title: string;
    description: string;
  };
}

export const services: ServiceData[] = [
  {
    slug: "roof-soft-wash",
    title: "Roof Soft Wash",
    tagline: "Kill moss at the root , without damaging your shingles.",
    description:
      "High-pressure roof cleaning is one of the most common ways homeowners end up with cracked shingles, leaks, and voided warranties. We don't do that. We use a professional low-pressure soft-wash system that applies a moss-killing treatment directly to the growth. It eliminates algae and moss at the root , not just the surface. The results last significantly longer, and your roof stays structurally sound.",
    image: "/images/service-roof-soft-wash.jpg",
    imageAlt: "Roof shingles with heavy moss growth before soft wash",
    imageCaption: "Moss growth across shingles",
    includes: [
      "Low-pressure soft-wash application",
      "Professional-grade moss and algae treatment at the root",
      "Safe for asphalt, composite, tile, cedar shake, and metal roofs",
      "No risk of shingle cracking or water infiltration",
      "Pre-treatment of heavy moss and lichen buildup",
      "Full gutter rinse after treatment",
      "No damage guarantee",
    ],
    process: [
      {
        title: "Property Walkthrough",
        description:
          "Before anything starts, I walk the perimeter and assess the roof condition , moss density, shingle type, any areas that need extra attention or caution. I'll point out what I see and explain the plan.",
      },
      {
        title: "Prep & Protection",
        description:
          "I cover and pre-rinse any landscaping, outdoor furniture, and sensitive surfaces below the roofline. Windows and siding get a protective rinse so nothing gets stained by runoff.",
      },
      {
        title: "Soft-Wash Application",
        description:
          "The treatment solution goes on at low pressure , typically under 100 PSI. It sits on the moss and algae long enough to kill the root system, not just the visible growth. No scrubbing, no blasting, no contact that could damage shingles.",
      },
      {
        title: "Rinse & Cleanup",
        description:
          "Everything gets a thorough rinse , the roof, the gutters, the siding below, and any areas where treatment may have run off. I clean up the property and walk you through the results before I leave.",
      },
    ],
    results: {
      title: "Condition before service",
      images: [
        { src: "/images/service-roof-2.jpg", alt: "Roof with heavy moss growth before soft wash" },
        { src: "/images/service-roof-3.jpg", alt: "Shingles covered in moss and algae before treatment" },
      ],
      caption: "Typical Oregon roofs we're called out to treat.",
    },
    faqs: [
      {
        q: "Will soft washing damage my shingles?",
        a: "No. Soft washing uses low pressure , typically under 100 PSI , which is safe for all shingle types. High-pressure washing is what causes damage, and we never use it on roofs.",
      },
      {
        q: "How long do soft wash results last?",
        a: "Typically 1-3 years depending on tree cover, shade, and moisture exposure. Homes with heavy tree canopy may see moss return sooner.",
      },
      {
        q: "Do you treat the moss or just wash it off?",
        a: "We treat it. Our solution kills moss and algae at the root system, not just the surface. That's why results last longer than a pressure blast.",
      },
    ],
    meta: {
      title: "Roof Soft Wash in Oregon | Moss & Algae Removal | Pristine ProWash",
      description:
        "Professional low-pressure roof soft washing across Oregon. We kill moss and algae at the root without damaging shingles. Safe, effective, guaranteed. Free estimates.",
    },
  },
  {
    slug: "house-wash",
    title: "House Wash",
    tagline: "Restore your home's curb appeal in one visit.",
    description:
      "Oregon's damp climate puts your siding to work. Rain, shade, and moisture that never fully dries , algae, mildew, and green growth take hold fast. Once it starts, it spreads across your entire exterior and your house starts looking older than it is. Our house wash uses the correct pressure and eco-friendly detergents for your specific siding type , vinyl, wood, stucco, or fiber cement , so the result is clean siding, not damaged siding.",
    image: "/images/service-house-wash.jpg",
    imageAlt: "House siding covered in algae and mildew before washing",
    imageCaption: "",
    includes: [
      "Full exterior wash from ground to roofline",
      "Soffit and fascia cleaning",
      "Pre-rinse and post-rinse for a streak-free finish",
      "Biodegradable, eco-friendly detergents",
      "Soft-wash method on painted and delicate surfaces",
      "Window frame and trim rinse",
      "Landscaping protection throughout the job",
    ],
    process: [
      {
        title: "Walkthrough & Assessment",
        description:
          "I walk the full perimeter of the house with you, note the siding type and condition, and flag any areas that need special attention , peeling paint, older wood, delicate trim.",
      },
      {
        title: "Prep & Protection",
        description:
          "Landscaping gets pre-rinsed and covered where needed. Windows are closed, outdoor furniture is moved or covered, and I make sure nothing gets hit by overspray or runoff.",
      },
      {
        title: "Wash",
        description:
          "I work section by section from top to bottom, applying detergent at the right concentration for your siding material and using soft-wash technique on anything painted or delicate. Stubborn spots get individual attention.",
      },
      {
        title: "Final Rinse & Walkthrough",
        description:
          "The entire exterior gets a thorough final rinse. I clean up any debris, put furniture back if I moved it, and walk the property with you so you can see the full result before I leave.",
      },
    ],
    faqs: [
      {
        q: "What siding types can you wash?",
        a: "All of them , vinyl, wood, painted wood, stucco, fiber cement, and brick. We adjust our method and pressure for each material.",
      },
      {
        q: "Will the detergent hurt my plants?",
        a: "No. We use biodegradable, plant-safe detergents and pre-rinse landscaping before we start. Your plants are protected.",
      },
      {
        q: "How often should I have my house washed in Oregon?",
        a: "Once a year is ideal. Oregon's moisture means algae and mildew grow year-round, especially on north-facing walls.",
      },
    ],
    meta: {
      title: "House Wash in Oregon | Exterior Siding Cleaning | Pristine ProWash",
      description:
        "Professional house washing for all siding types across Oregon. Eco-friendly detergents, soft-wash methods, no damage guaranteed. Free estimates.",
    },
  },
  {
    slug: "driveway-concrete",
    title: "Driveway & Concrete",
    tagline: "Strip years of staining, moss, and grime from hard surfaces.",
    description:
      "Concrete driveways, walkways, and patios take a beating over time. Moss fills the pores, oil soaks in where cars sit, tire marks build up layer by layer, and after a few years you stop noticing how bad it looks because it happened gradually. We use a commercial rotary surface cleaner that moves across the concrete at consistent pressure , which is how you get an even result with no streaking, no zebra lines, and no missed patches.",
    image: "/images/service-driveway.jpg",
    imageAlt: "Driveway covered in moss and staining before pressure washing",
    imageCaption: "Years of staining & moss on concrete",
    includes: [
      "Commercial rotary surface cleaner for even, uniform results",
      "Pre-treatment of oil stains, heavy staining, and deep-set grime",
      "Driveways, sidewalks, patios, pool decks, and parking areas",
      "Edge detailing and post-rinse",
      "Moss and algae pre-treatment to slow regrowth",
      "Cleanup of all debris and rinse water",
    ],
    process: [
      {
        title: "Surface Assessment",
        description:
          "I check the condition of the concrete , cracks, settled sections, oil spots, moss coverage , and note anything that needs pre-treatment or extra passes.",
      },
      {
        title: "Pre-Treatment",
        description:
          "Heavy oil stains and deep moss get a targeted degreaser or treatment applied before the main clean. This breaks down stubborn buildup so it actually comes out during surface cleaning instead of just getting lighter.",
      },
      {
        title: "Surface Clean",
        description:
          "The rotary surface cleaner covers the full area at consistent distance and pressure. I work in overlapping passes to make sure every square foot gets the same result , no lines, no streaks, no spots where the cleaner skipped.",
      },
      {
        title: "Edge Detail & Rinse",
        description:
          "Edges along the garage, garden beds, and sidewalk joints get hand-detailed with a wand. Then the entire area gets a final rinse to flush debris and dirty water off the property.",
      },
    ],
    results: {
      images: [
        { src: "/images/ba-driveway-before.jpg", alt: "Driveway before pressure washing" },
        { src: "/images/ba-driveway-after.jpg", alt: "Driveway after pressure washing" },
      ],
      caption: "Real driveway cleaning results from Oregon properties.",
    },
    faqs: [
      {
        q: "Can you remove oil stains from concrete?",
        a: "Yes. We pre-treat oil stains before surface cleaning. Most stains come out completely; very old or deep-set oil stains may lighten significantly.",
      },
      {
        q: "Will pressure washing damage my concrete?",
        a: "No. Concrete is one of the few surfaces that can handle full-pressure cleaning. We use a commercial surface cleaner for even results.",
      },
      {
        q: "Do you clean sidewalks and patios too?",
        a: "Yes , driveways, sidewalks, patios, pool decks, parking areas, and any other concrete or paver surface.",
      },
    ],
    meta: {
      title: "Driveway & Concrete Cleaning in Oregon | Pristine ProWash",
      description:
        "Professional driveway and concrete pressure washing across Oregon. Oil stain removal, moss treatment, streak-free results. Free estimates.",
    },
  },
  {
    slug: "deck-cleaning",
    title: "Deck Cleaning",
    tagline: "Bring your deck back to life before sealing or staining.",
    description:
      "Left alone for a season or two in Oregon, any deck , wood or composite , turns gray, slippery, and algae-covered. It stops being somewhere you want to spend time. We pressure wash decks at the correct PSI for the material , enough to strip the buildup, not enough to splinter the wood or gouge composite boards. When we're done, the surface is clean, dry, and ready for whatever comes next.",
    image: "/images/service-deck.jpg",
    imageAlt: "Weathered deck with algae and discoloration before cleaning",
    imageCaption: "Weathered deck before restoration",
    includes: [
      "Pressure settings matched to wood and composite materials",
      "Algae, mildew, and gray weathering removal",
      "Deck boards, railings, steps, and all deck surfaces",
      "Pre-wash inspection for damaged or soft boards",
      "Surface left ready for immediate stain, sealant, or bare-foot use",
      "Landscaping protection below and around the deck",
    ],
    process: [
      {
        title: "Inspection",
        description:
          "I check the deck condition before turning anything on , soft boards, popped nails, loose railings, rot. If I find anything concerning, I'll flag it before we start so there are no surprises.",
      },
      {
        title: "Prep",
        description:
          "Furniture gets moved or covered. Plants and landscaping below the deck get pre-rinsed and protected. I set the pressure washer to the correct PSI for your deck material.",
      },
      {
        title: "Wash",
        description:
          "I work board by board, maintaining consistent distance and speed so the cleaning is even across the entire deck. Railings, steps, and edges get individual attention. No skipped spots, no uneven patches.",
      },
      {
        title: "Rinse & Review",
        description:
          "Final rinse to clear all debris. I walk the deck with you so you can see the full result. If you're planning to stain or seal, the surface is ready to go.",
      },
    ],
    faqs: [
      {
        q: "Is pressure washing safe for wood decks?",
        a: "Yes, at the right pressure. We dial the PSI down specifically for wood to clean without splintering or damaging the grain.",
      },
      {
        q: "Can I stain my deck right after you clean it?",
        a: "Yes. We leave the surface clean and ready for immediate stain or sealant application.",
      },
      {
        q: "Do you clean composite decks?",
        a: "Yes. Composite requires a different approach than wood and we adjust accordingly.",
      },
    ],
    meta: {
      title: "Deck Cleaning in Oregon | Wood & Composite | Pristine ProWash",
      description:
        "Professional deck cleaning for wood and composite decks across Oregon. Algae removal, stain prep, no damage. Free estimates.",
    },
  },
  {
    slug: "fence-cleaning",
    title: "Fence Cleaning",
    tagline: "Make a tired fence look like it was just installed.",
    description:
      "Every fence material collects grime differently. Wood gets that green-black algae on the shaded side. Vinyl turns gray and chalky. Chain-link gets caked with dirt and overgrowth residue. All of it makes your property look neglected, and all of it accelerates the material breaking down. We match the cleaning method to whatever your fence is made of , so the whole fence line comes out consistent and clean, not just the easy sections.",
    image: "/images/service-fence.jpg",
    imageAlt: "Fence covered in algae and discoloration before cleaning",
    imageCaption: "Algae & discoloration on fence panels",
    includes: [
      "Wood, vinyl, chain-link, and composite fencing",
      "Algae, mildew, gray weathering, and discoloration removal",
      "Full panel cleaning , posts, caps, and rails included",
      "Soft-wash option for painted or older fences",
      "Wood fences left clean and ready for staining or painting",
      "Gate hardware and hinge areas cleaned",
    ],
    process: [
      {
        title: "Assessment",
        description:
          "I walk the full fence line and check the material condition , wood rot, loose boards, paint condition, vinyl discoloration patterns. This determines the pressure and method I'll use.",
      },
      {
        title: "Prep",
        description:
          "Plants along the fence line get pre-rinsed. If there are items stored against the fence , firewood, garden tools, planters , I'll move them or work around them carefully.",
      },
      {
        title: "Wash",
        description:
          "Each panel gets cleaned at the correct pressure for the material. Wood gets enough pressure to strip algae without raising the grain. Vinyl gets a soft-wash that restores the original color. I work the full length including posts and caps , not just the flat panels.",
      },
      {
        title: "Final Check",
        description:
          "I walk the fence line again to make sure everything is consistent. Missed spots or uneven sections get a second pass before I pack up.",
      },
    ],
    faqs: [
      {
        q: "Do you clean all fence types?",
        a: "Yes , wood, vinyl, chain-link, and composite. Each material gets a different cleaning method.",
      },
      {
        q: "Will cleaning my fence prep it for staining?",
        a: "Yes. Wood fences are left clean and ready for stain or paint.",
      },
      {
        q: "How do you clean vinyl fences without damage?",
        a: "Soft-wash method with low pressure and a detergent that restores the original color without scratching.",
      },
    ],
    meta: {
      title: "Fence Cleaning in Oregon | Wood, Vinyl & Chain-Link | Pristine ProWash",
      description:
        "Professional fence cleaning for wood, vinyl, and chain-link fences across Oregon. Algae removal, stain prep, no damage. Free estimates.",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
