"use client";

const LOGO_ASCII = `
  ███╗   ██╗██╗  ██╗
  ████╗  ██║██║ ██╔╝
  ██╔██╗ ██║█████╔╝
  ██║╚██╗██║██╔═██╗
  ██║ ╚████║██║  ██╗
  ╚═╝  ╚═══╝╚═╝  ╚═╝
`;

const styles = {
  logo: "color: #8B7AB8; font-weight: bold; font-size: 14px; font-family: monospace;",
  title: "color: #8B7AB8; font-weight: bold; font-size: 16px;",
  subtitle: "color: #71717A; font-size: 14px;",
  command: "color: #9F8DCB; font-weight: bold;",
  text: "color: #A1A1AA;",
  highlight: "color: #8B7AB8; font-weight: bold;",
};

interface ConsoleCommands {
  help: () => void;
  about: () => void;
  projects: () => void;
  contact: () => void;
  skills: () => void;
  snake: () => void;
  achievements: () => void;
  hire: () => void;
}

export function initConsoleEasterEgg() {
  // Logo
  console.log("%c" + LOGO_ASCII, styles.logo);

  // Welcome message
  console.log(
    "%c👋 Hey there, curious developer!",
    styles.title
  );
  console.log(
    "%cYou found the secret console commands.",
    styles.subtitle
  );
  console.log("");

  // Commands info
  console.log(
    "%cType %cnk.help()%c to see available commands",
    styles.text,
    styles.command,
    styles.text
  );
  console.log("");

  // Create global commands
  const commands: ConsoleCommands = {
    help() {
      console.log("%c📖 Available Commands:", styles.title);
      console.log("");
      console.log("%cnk.about()%c        - Learn more about me", styles.command, styles.text);
      console.log("%cnk.projects()%c     - See my projects", styles.command, styles.text);
      console.log("%cnk.skills()%c       - View my skills", styles.command, styles.text);
      console.log("%cnk.contact()%c      - Get my contact info", styles.command, styles.text);
      console.log("%cnk.snake()%c        - Play Snake game! 🐍", styles.command, styles.text);
      console.log("%cnk.achievements()%c - View achievements 🏆", styles.command, styles.text);
      console.log("%cnk.hire()%c         - Let's work together!", styles.command, styles.text);
      console.log("");
    },

    about() {
      console.log("%c👨‍💻 About Némo Kardassevitch", styles.title);
      console.log("");
      console.log(
        "%cISMIN engineering student (Mines Saint-Étienne) specializing in microelectronics and computer science.",
        styles.text
      );
      console.log(
        "%cCurrently on exchange at Seoul National University 🇰🇷",
        styles.text
      );
      console.log("");
      console.log("%cRole:%c Software & Electronics Engineer", styles.highlight, styles.text);
      console.log("%cLocation:%c France (currently in Seoul)", styles.highlight, styles.text);
      console.log("");
    },

    projects() {
      console.log("%c🚀 Featured Projects", styles.title);
      console.log("");
      console.log("%c1. nkardas.fr", styles.command);
      console.log("   Portfolio with Next.js 15, React 19, Tailwind CSS v4", styles.text);
      console.log("");
      console.log("%c2. More projects coming soon...", styles.text);
      console.log("   Visit %c/projects%c to see all my work!", styles.command, styles.text);
      console.log("");
    },

    skills() {
      console.log("%c🛠️ Technical Skills", styles.title);
      console.log("");
      console.log("%cWeb:%c JavaScript, TypeScript, React, Next.js, Node.js", styles.highlight, styles.text);
      console.log("%cElectronics:%c Verilog, Arduino, STM32, PCB Design", styles.highlight, styles.text);
      console.log("%cLanguages:%c Python, C/C++, PHP, SQL, Swift", styles.highlight, styles.text);
      console.log("%cTools:%c Git, Docker, Linux", styles.highlight, styles.text);
      console.log("");
    },

    contact() {
      console.log("%c📬 Get in Touch", styles.title);
      console.log("");
      console.log("%cEmail:%c contact@nkardas.fr", styles.highlight, styles.text);
      console.log("%cGitHub:%c github.com/nkardas", styles.highlight, styles.text);
      console.log("%cLinkedIn:%c linkedin.com/in/nemokardassevitch", styles.highlight, styles.text);
      console.log("");
    },

    snake() {
      console.log("%c🐍 Starting Snake Game...", styles.title);
      console.log("");

      const win = window as Window & { openSnake?: () => void };
      if (typeof win.openSnake === "function") {
        win.openSnake();
        console.log("%cGame opened! Use arrow keys to play.", styles.text);
      } else {
        console.log("%cError: Game not loaded yet. Try again in a moment.", styles.text);
      }
      console.log("");
    },

    achievements() {
      console.log("%c🏆 Opening Achievements...", styles.title);
      console.log("");

      const win = window as Window & { openAchievements?: () => void };
      if (typeof win.openAchievements === "function") {
        win.openAchievements();
        console.log("%cAchievements panel opened!", styles.text);
      } else {
        console.log("%cError: Achievements not loaded yet. Try again in a moment.", styles.text);
      }
      console.log("");
    },

    hire() {
      console.log("%c💼 Let's Work Together!", styles.title);
      console.log("");
      console.log(
        "%cI'm open to freelance opportunities and interesting projects!",
        styles.text
      );
      console.log("");
      console.log("%cReach out:%c contact@nkardas.fr", styles.highlight, styles.text);
      console.log("%cOr visit:%c /contact", styles.highlight, styles.command);
      console.log("");
      console.log("%c🚀 Let's build something amazing together!", styles.subtitle);
      console.log("");
    },
  };

  // Attach to window
  (window as Window & { nk?: typeof commands }).nk = commands;

  // Footer
  console.log("%c─".repeat(50), "color: #27272A;");
  console.log(
    "%cMade with %c♥%c by Némo Kardassevitch",
    styles.text,
    "color: #8B7AB8;",
    styles.text
  );
  console.log("%c─".repeat(50), "color: #27272A;");
  console.log("");
}
