export type Experience = {
  role: string
  company: string
  kind: string
  date: string
  bullets: string[]
  tags: string[]
}

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "DataVisor",
    kind: "Internship",
    date: "Jan – Apr 2026",
    bullets: [
      "Designed and maintained a robust automation framework using Java and Selenium WebDriver, reducing manual regression testing time by 80%.",
      "Automated 30+ test cases, saving over 20 manual testing hours per sprint.",
      "Achieved 95% API test coverage with Postman and Cucumber, strictly validating edge cases for high-traffic endpoints.",
      "Raised test stability from 70% to 98% by resolving production issues and leveraging Claude AI to analyze test logs, cutting false-positive bug reports.",
    ],
    tags: ["Java", "Selenium", "Postman", "Cucumber", "Claude AI", "Kubernetes", "AWS", "Jenkins"],
  },
  {
    role: "Event Project Manager",
    company: "UBC Taiwan Association",
    kind: "Leadership",
    date: "Sep 2023 – Apr 2026",
    bullets: [
      "Coordinated 15+ successful events with attendance of up to 100+ UBC students, collaborating within a 10-person executive team.",
      "Managed logistics, vendor relations, and marketing for events, increasing average attendance by 25% through targeted outreach and engaging programming.",
      "Led weekly meetings and delegated tasks to a team of 5 event coordinators, ensuring smooth execution and fostering a collaborative team environment.",
    ],
    tags: ["Project Management", "Excel", "MS Office", "Event Planning", "Teamwork", "Leadership", "Communication"],
  },
  {
    role: "Shift Leader",
    company: "Pearl Fever Tea House",
    kind: "Part-time",
    date: "Sep 2023 – Jan 2026",
    bullets: [
      "Led shift operations alongside a team of 15 baristas, optimizing communication to keep customer service fast and efficient.",
      "Trained 5+ new employees on drink preparation, POS system, and customer service, improving onboarding efficiency by 30%.",
      "Managed inventory and supply orders, reducing waste by 15% through accurate demand forecasting and efficient stock management.",
    ],
    tags: ["Leadership", "Operations", "Customer Service", "Teamwork", "Communication"],
  },
]
