export type Project = {
  title: string
  date: string
  description: string
  tags: string[]
  link?: string
  image?: string
  imagePosition?: string
}

export const projects: Project[] = [
  {
    title: "Expense Tracker Web App",
    date: "Feb – Apr 2026",
    description: "Dynamic full-stack personal finance SPA using the TALL stack. Integrated Google Gemini AI API to generate smart budget recommendations from 3-month spending trends, with a Livewire real-time dashboard and dynamic charts.",
    tags: ["PHP", "Laravel", "Livewire", "MySQL", "Tailwind CSS", "Alpine.js"],
    link: "https://github.com/HuMangax/expense-tracking-application",
    image: "/images/projects/expense-tracker.png",
  },
  {
    title: "Animal Database Website",
    date: "Sept – Dec 2025",
    description: "Full-stack adoption record management system using React, Node.js, and SQL. Users can search and update 100+ entries, with optimized UI/UX and comprehensive end-to-end integration testing.",
    tags: ["TypeScript", "React", "Node.js", "SQL", "CSS"],
    link: "https://github.com/HuMangax/Animal-Rescue-Database-Website",
    image: "/images/projects/animal-database.png",
  },
  {
    title: "Overdrive (Asteroid Game)",
    date: "May - June 2026",
    description: "Cover of the classic arcade game with a twist — players collect power-ups as difficulty scales progressively.",
    tags: ["Game dev",  "Unity", "C#", "Personal project"],
    link: "https://github.com/HuMangax/Overdrive",
    image: "/images/projects/asteroid-game2.png",
  },
  {
    title: "Tetris Game",
    date: "Jan - Feb 2026",
    description: "Classic Tetris with a strategic twist — players can store a block and swap it with the current falling block at any time.",
    tags: ["Game dev", "Unity", "C#", "Personal project"],
    image: "/images/projects/tetris-game.png",
    imagePosition: "center bottom",
  },
  {
    title: "Minesweeper Game",
    date: "Sept - Dec 2024",
    description: "Developed a Minesweeper game in Java using OOP principles, featuring a dynamic bomb randomizer, brute-force tile-uncovering algorithm, and a multi-screen Java Swing UI.",
    tags: ["Java", "JUnit", "JSwing", "OOP", "School project"],
    //image: "/images/projects/minesweeper-game.png",
  }
]