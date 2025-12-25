// ========================================
// TECHNICAL SKILLS CONFIGURATION
// ========================================
// This file contains all your technical skills organized by category.
//
// HOW TO EDIT:
// 1. To add a skill: Add the skill name to the appropriate category array
// 2. To remove a skill: Delete it from the array
// 3. To reorder skills: Cut and paste skills within the same array
// 4. To create a new category: Add a new key-value pair to the skills object
// 5. To move skills between categories: Cut from one array and paste into another
// 6. Skills are displayed in the order they appear here
//
// TIPS:
// - Keep skill names concise (1-3 words)
// - Use title case for consistency (e.g., "Python" not "python")
// - Group related skills together within categories
// - You can have as many or as few categories as you want

export const skills = {
  // PROGRAMMING LANGUAGES
  // List all programming languages you know
  "Languages": [
    "C",
    "C++",
    "Python",
    "VHDL",
    "MATLAB",
    "Rust",
    // Add more languages here
  ],

  // EMBEDDED SYSTEMS & HARDWARE
  // Microcontrollers, development boards, and hardware tools
  "Embedded Systems": [
    "ESP32",
    "Arduino",
    "STM32",
    "FPGA",
    // Add more embedded systems here
  ],

  // HARDWARE DESIGN & TOOLS
  // PCB design, CAD, manufacturing tools
  "Hardware": [
    "PCB Design",
    "KiCad",
    "3D Printing",
    "CAD",
    "Laser Cutting"
    // Add more hardware tools here
  ],

  // SOFTWARE TOOLS & TECHNOLOGIES
  // Development tools, version control, IDEs, etc.
  "Tools": [
    "Git",
    "LTSpice",
    "GHDL",
    "PlatformIO",
    // Add more tools here
  ],

  // TECHNICAL AREAS OF EXPERTISE
  // Broad technical domains and specializations
  "Areas of Expertise": [
    "Digital Signal Processing",
    "Computer Architecture",
    "Embedded Systems Design",
    "Robotics",
    "IoT Development",
    // Add more expertise areas here
  ],

  // You can add more categories below following the same format:
  /*
  "Category Name": [
    "Skill 1",
    "Skill 2",
    "Skill 3",
  ],
  */
};

// ========================================
// QUICK EDIT EXAMPLES
// ========================================
/*

EXAMPLE 1: Adding a new skill
-------------------------------
To add "Rust" to Languages:
"Languages": [
  "C",
  "C++",
  "Python",
  "Rust",  // <- Added here
  "VHDL",
  ...
]

EXAMPLE 2: Creating a new category
-----------------------------------
To add a "Frameworks" category:
"Frameworks": [
  "React",
  "Node.js",
  "TensorFlow",
],

EXAMPLE 3: Reordering skills
-----------------------------
To move "Python" to the top of Languages:
"Languages": [
  "Python",  // <- Moved from below
  "C",
  "C++",
  ...
]

EXAMPLE 4: Moving skills between categories
--------------------------------------------
To move "KiCad" from Hardware to Tools:
"Hardware": [
  "PCB Design",
  "3D Printing",  // KiCad removed from here
  "CAD",
],
"Tools": [
  "Git",
  "KiCad",  // <- Moved here
  "LaTeX",
  ...
]

*/

export default skills;
