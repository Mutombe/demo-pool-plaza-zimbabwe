export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "One Life Aqua",
    legalName: "Pool Plaza Zimbabwe",
    tagline: "One Life. Live It Fully.",
    description:
      "Pool Plaza Zimbabwe is Harare's premier aquatic and recreation facility. Featuring Olympic-standard pools, fitness areas, and event spaces, we provide a complete wellness and entertainment destination.",
    phone: "+263 77 239 3600",
    phoneRaw: "+263772393600",
    whatsappNumber: "263772393600",
    email: "info@onelifeaqua.co.zw",
    address: "10 Dorset Rd E, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.3,
    ratingRounded: 4,
    reviewCount: 33,
    established: "2017",
    yearsExperience: "7+",
    projectsCompleted: "500+",
    employees: "25+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "one-life-aqua-recreation-centre-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/onelifezw/?locale=ga_IE",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "One",
    logoLine2: "Life Aqua",
  },

  hero: {
    badge: "Harare's Premier Aquatic & Recreation Destination",
    titleParts: [
      { text: "ONE LIFE " },
      { text: "LIVE IT", highlight: true },
      { text: " FULLY." },
    ],
    subtitle:
      "Olympic-standard pools, modern fitness facilities, and premium event spaces. One Life Aqua is where Harare comes to swim, train, celebrate, and unwind.",
    ctaPrimary: "Join Today",
    ctaSecondary: "View Facilities",
    trustBadge: "500+ Events & 5,000+ Members",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&q=85", alt: "One Life Aqua professional image 1" },
      { url: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&q=85", alt: "One Life Aqua professional image 2" },
      { url: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&q=85", alt: "One Life Aqua showcase" },
    ],
  },

  stats: [
    { number: "5000+", label: "Active Members" },
    { number: "7+", label: "Years Running" },
    { number: "3", label: "Pool Facilities" },
    { number: "33", label: "Google Reviews" },
  ],

  servicesPreview: [
    {
      title: "Swimming Pools",
      desc: "Olympic-standard lap pool, recreational pool, and children's splash pool with heated options and qualified lifeguards.",
      icon: "Buildings",
    },
    {
      title: "Swimming Lessons",
      desc: "Certified swim instructors for all ages and levels. From baby splash classes to competitive stroke refinement.",
      icon: "Star",
    },
    {
      title: "Fitness Centre",
      desc: "Fully equipped gym with cardio machines, free weights, and dedicated group fitness studios.",
      icon: "Heart",
    },
    {
      title: "Event Venue",
      desc: "Poolside and indoor event spaces for birthday parties, corporate functions, and private celebrations.",
      icon: "Lightbulb",
    },
    {
      title: "Kids Programmes",
      desc: "Holiday camps, swim squads, and after-school programmes that combine fitness, fun, and water safety.",
      icon: "Leaf",
    },
    {
      title: "Wellness & Recovery",
      desc: "Sauna, steam room, and relaxation areas for post-workout recovery and holistic wellness.",
      icon: "Wrench",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Swimming Pools",
        slug: "swimming-pools",
        desc: "Olympic-standard lap pool, recreational pool, and children's splash pool with heated options and qualified lifeguards.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
      },
      {
        title: "Swimming Lessons",
        slug: "swimming-lessons",
        desc: "Certified swim instructors for all ages and levels. From baby splash classes to competitive stroke refinement.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
      },
      {
        title: "Fitness Centre",
        slug: "fitness-centre",
        desc: "Fully equipped gym with cardio machines, free weights, and dedicated group fitness studios.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
      },
      {
        title: "Event Venue",
        slug: "event-venue",
        desc: "Poolside and indoor event spaces for birthday parties, corporate functions, and private celebrations.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
      },
      {
        title: "Kids Programmes",
        slug: "kids-programmes",
        desc: "Holiday camps, swim squads, and after-school programmes that combine fitness, fun, and water safety.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
      },
      {
        title: "Wellness & Recovery",
        slug: "wellness-and-recovery",
        desc: "Sauna, steam room, and relaxation areas for post-workout recovery and holistic wellness.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial One",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in swimming pools.",
        client: "Commercial Client",
        services: ["Swimming Pools", "Swimming Lessons"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential One",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in swimming lessons.",
        client: "Residential Client",
        services: ["Swimming Lessons", "Fitness Centre"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial One",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in fitness centre.",
        client: "Industrial Client",
        services: ["Fitness Centre", "Event Venue"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional One",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in event venue.",
        client: "Institutional Client",
        services: ["Event Venue", "Kids Programmes"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial One",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in kids programmes.",
        client: "Commercial Client",
        services: ["Kids Programmes", "Wellness & Recovery"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential One",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in wellness & recovery.",
        client: "Residential Client",
        services: ["Wellness & Recovery", "Swimming Pools"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "One Life Aqua is the best swimming facility in Harare. The pool is always clean, the staff are professional, and my kids have improved so much with their lessons.",
      name: "Caroline Murefu",
      role: "Parent & Member",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "I train here five days a week. The lap pool is excellent and the gym has everything I need. It is worth every cent of the membership.",
      name: "Tawanda Chikura",
      role: "Competitive Swimmer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "We hosted my son's birthday pool party here and it was fantastic. The team organized everything and the kids had an absolute blast.",
      name: "Fungai Mlambo",
      role: "Party Host",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "The best recreation centre in Harare. Clean facilities, great staff, and a family-friendly atmosphere that keeps us coming back every week.",
      name: "David Matambanadzo",
      role: "Family Member",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Pool Plaza Zimbabwe was built on the principle that every person deserves access to world-class aquatic and fitness facilities. Since opening on Dorset Road, we have served over 5,000 members and hosted hundreds of events.",
      "Our facilities are designed to international standards, with water quality monitoring, certified instructors, and modern equipment. Whether you are training for competition, learning to swim, or hosting a pool party, One Life Aqua delivers.",
    ],
    values: [
      { title: "International Standards", desc: "Olympic-sized lap pool with lanes, timing equipment, and water quality that meets FINA standards." },
      { title: "All Ages Welcome", desc: "From baby splash classes to senior aqua aerobics. Programmes designed for every age and ability." },
      { title: "Beyond the Pool", desc: "Full gym, group fitness classes, wellness facilities, and event spaces make us a complete destination." },
      { title: "Safety First", desc: "Qualified lifeguards on duty at all times. CPR-trained staff and strict safety protocols throughout." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "One Life Aqua is the best swimming facility in Harare. The pool is always clean, the staff are professional, and my kids have improved so much with their lessons.", name: "Caroline Murefu", role: "Parent & Member", rating: 5 },
      { text: "I train here five days a week. The lap pool is excellent and the gym has everything I need. It is worth every cent of the membership.", name: "Tawanda Chikura", role: "Competitive Swimmer", rating: 5 },
      { text: "We hosted my son's birthday pool party here and it was fantastic. The team organized everything and the kids had an absolute blast.", name: "Fungai Mlambo", role: "Party Host", rating: 5 },
      { text: "The best recreation centre in Harare. Clean facilities, great staff, and a family-friendly atmosphere that keeps us coming back every week.", name: "David Matambanadzo", role: "Family Member", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "One Life Aqua",
        address: "10 Dorset Rd E, Harare, Zimbabwe",
        phone: "+263 77 239 3600",
        email: "info@onelifeaqua.co.zw",
      },
    ],
  },

  homeCta: {
    title: "DIVE INTO LIFE",
    subtitle: "World-class pools, professional training, and unforgettable events. Your One Life Aqua experience starts today.",
    ctaPrimary: "Join Today",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello One Life Aqua! I would like membership/booking information.",
    backgroundImage: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&q=85",
  },

  footer: {
    description: "Pool Plaza Zimbabwe is Harare's premier aquatic and recreation facility. Featuring Olympic-standard pools, fitness areas, and event spac...",
    copyright: "One Life Aqua",
  },
};

export default siteData;
