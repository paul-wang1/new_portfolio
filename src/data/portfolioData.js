// ========================================
// PORTFOLIO DATA CONFIGURATION
// ========================================
// This file contains all the content for your portfolio website.
// To update your portfolio, simply edit the values below.
// No need to touch any component files!

export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#contact' }
];

export const personalInfo = {
  name: "Paul Wang",
  title: "Computer Engineering Student",
  university: "Tufts University",
  major: "Computer Engineering",
  minor: "Computer Science & Embedded Systems",
  graduationDate: "May 2027",
  currentYear: "Junior",
  email: "paul.wang@tufts.edu",
  linkedin: "https://www.linkedin.com/in/paul-wang-5b077528b",
  github: "https://github.com/paul-wang1",

  // Hero section tagline - customize this to highlight what you do
  tagline: "Building engineering solutions with embedded systems and great people",

  // Brief bio for the About section
  bio: [
    "I'm a junior at Tufts University pursuing Computer Engineering with a minor in Computer Science and Embedded Sys, graduating in May 2027. My passion lies in robotics, embedded systems, and IoT development—particularly in creating technology that makes a real-world impact.",
    "As Tech Lead & Treasurer for Engineers Without Borders Malawi Project, I'm deploying IoT monitoring systems in rural Malawi while managing over $50,000 across multiple development initiatives. I love working at the intersection of hardware and software, from designing custom PCBs to writing firmware that powers real-world applications.",
    "When I'm not coding or soldering, you can find me leading hardware projects at The IDEA Lab or competing with the Tufts Club Tennis team as Vice President."
  ],

  // Resume file (place your PDF in the public folder)
  resumeFile: "/files/projects/Resume-2025.pdf" // Update this when you add your resume PDF
};

// ========================================
// SOCIAL LINKS
// ========================================
// Social media links displayed in the Hero section
export const socialLinks = [
  {
    name: "GitHub",
    icon: "github",
    url: personalInfo.github
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: personalInfo.linkedin
  },
  {
    name: "Email",
    icon: "email",
    url: `mailto:${personalInfo.email}`
  }
];

// ========================================
// ABOUT ME PAGE CONTENT
// ========================================
// Personal, casual content for the dedicated About Me page
// This is separate from the professional bio

export const aboutMe = {
  // Page title
  title: "About Me",
  subtitle: "Beyond the Engineering",

  // Personal bio - more casual and personal than the main bio
  personalBio: [
    "I grew up in Cary, North Carolina, and I'm currently studying Computer Engineering at Tufts University. Outside of classes and projects, I serve as Tech Lead and Treasurer for Engineers Without Borders and Vice President of the Club Tennis team. When I'm not working on technical stuff, I enjoy rock climbing, cooking with friends, and competing in tennis tournaments. At the end of the day, I just like spending time with people I care about—whether that's on the court, in the kitchen, or out on an adventure."
  ],

  // Photos for the About Me page
  // Add your photos to /public/images/about/
  photos: [
    {
      path: "/images/about/sectionals.png",
      caption: "Playing tennis at Club Tennis nationals"
    },
    {
      path: "/images/about/climbing.jpg",
      caption: "Climbing with friends!"
    },
    {
      path: "/images/about/cooking.png",
      caption: "Cooking chicken shwarma with a friend back home"
    }
  ],

  // Hobbies and interests
  hobbies: [
    "Tennis",
    "Squash",
    "Cooking",
    "Aspiring Beli Eats Creator",
    "Lebron Superfan",
    "Tarheel"
  ],

  // Fun facts (optional)
  funFacts: [
  ]
};

// ========================================
// EXPERIENCE & LEADERSHIP
// ========================================
// Add your leadership roles, work experience, and extracurriculars here
export const experience = [
  {
    id: 1,
    type: "leadership",
    role: "Tech Lead & Treasurer",
    organization: "Engineers Without Borders - Malawi Project",
    location: "Tufts University",
    period: "2023 - Present",
    description: [
      "Lead technical development of IoT water monitoring systems deployed in rural Malawi",
      "Manage over $50,000 in project budgets across multiple development initiatives",
      "Coordinate cross-functional teams of engineers for international development projects",
      "Design and implement cellular-connected sensor systems for remote infrastructure monitoring"
    ]
  },
  {
    id: 2,
    type: "leadership",
    role: "Vice President",
    organization: "Tufts Club Tennis",
    location: "Tufts University",
    period: "2023 - Present",
    description: [
      "Organize competitive matches and training sessions for club members",
      "Coordinate team logistics and tournament participation",
      "Foster an inclusive community for tennis enthusiasts of all skill levels"
    ]
  },
  {
    id: 3,
    type: "extracurricular",
    role: "Hardware Projects & Overall Project Lead",
    organization: "The IDEA Lab",
    location: "Tufts University",
    period: "2022 - Present",
    description: [
      "Develop hands-on engineering projects combining hardware and software",
      "Collaborate on PCB design, embedded systems, and IoT applications",
      "Mentor peers in hardware prototyping and maker skills"
    ]
  }
];

// ========================================
// PROJECTS
// ========================================
// To add a new project:
// 1. Copy the template below
// 2. Fill in all the fields
// 3. Add it to the projects array
// 4. Projects are displayed in the order they appear here

// ========================================
// PROJECTS DATA STRUCTURE
// ========================================
// Each project now supports comprehensive content including:
// - Basic info (title, type for tagging)
// - Brief description for card display
// - Detailed content for project page (problem, solution, implementation)
// - Media (hero image, inline images with captions, YouTube videos, PDFs)
// - Tech stack (free-form array)
// - Links (GitHub, live demo, etc.)

export const projects = [
  {
    // BASIC INFO
    id: 2,
    slug: "iot-temperature-monitoring",
    title: "Wireless IoT Temperature Monitoring Probe",
    type: "IoT & Embedded Systems",

    // CARD DISPLAY (shown on main projects page)
    description: "Battery-powered wireless temperature probe with custom ESP32 PCB, deployed on Tufts campus for long-term environmental monitoring.",

    // HERO IMAGE (main image for project page)
    heroImage: "/images/projects/iot-temperature-pcb/hero.JPG",

    // DETAILED CONTENT (for project page)
    problem: "Long-term environmental monitoring requires autonomous sensor nodes that can reliably collect and transmit data over extended periods without maintenance. Traditional solutions either consume excessive power, lack weatherproofing for outdoor deployment, or require expensive proprietary hardware. Continuous WiFi connectivity drains batteries quickly, making year-round outdoor monitoring impractical without frequent battery replacements or external power sources.",

    solution: "A battery-optimized wireless temperature monitoring system built on a custom ESP32-C3 PCB that intelligently balances power efficiency with data collection requirements. The probe uses a batched measurement strategy—waking hourly to record temperature, storing 24 measurements locally, then connecting to WiFi once per day to transmit all data via MQTT. This minimizes power-intensive WiFi usage while maintaining hourly measurement granularity. The system features a weatherproof 3D-printed enclosure and is designed for 6+ months of autonomous outdoor operation on AA batteries.",

    implementation: `Designed and built a complete IoT temperature monitoring system from PCB design through deployment, consisting of hardware, firmware, and mechanical subsystems.

**Custom PCB Design (KiCad):**
- ESP32-C3-WROOM-02 module with optimized RF layout and antenna keep-out zone
- TMP112 I2C digital temperature sensor with ±2°C accuracy
- Power architecture: 4× AA batteries (6V) → protection diode → LDO regulator (3.3V)
- External 32.768 kHz crystal for accurate RTC timekeeping during deep sleep
- Dual programming interfaces (UART and JTAG headers) with ESP-Prog compatibility
- Comprehensive decoupling and power management for stable operation
- Manual reset circuitry and boot mode strapping

**Firmware Development (C++ / ESP-IDF):**
- State machine architecture for power-efficient operation (Startup → Measure → Transmit)
- Deep sleep mode between measurements to minimize power consumption
- Batched data collection: 24 hourly measurements stored in RTC memory
- One-time WiFi sync on startup using MQTT /time/epoch for accurate timestamps
- TMP112 configured for one-shot measurement mode to reduce sensor power draw
- Daily MQTT transmission of JSON-formatted temperature data
- Robust error handling for WiFi connectivity and sensor communication

**Power Optimization:**
The system achieves extended battery life through several strategies:
- Deep sleep between hourly measurements (only RTC active)
- External 32.768 kHz crystal prevents timing drift during sleep
- Batched transmissions (24 measurements/day) minimize WiFi usage
- One-shot temperature sensor mode reduces continuous power draw
- Total active time: <5 minutes per day

**Mechanical Design (CAD / 3D Printing):**
- 3D-printed PLA base housing PCB and battery pack
- Laser-cut acrylic transparent top for easy debugging and status monitoring
- Velcro mounting for secure component placement
- Weatherproof design with drainage consideration
- Fastened with flathead screws and hex bolts for easy access

**Deployment & Testing:**
- Successfully deployed on Tufts University campus
- Temperature readings validated with infrared thermometer
- Continuous operation transmitting daily batches via campus WiFi
- Dashboard monitoring showing realistic diurnal temperature patterns
- Cost per unit: $10.81 (well under $20 budget constraint)

**Key Technical Challenges Solved:**
- UART bootloader configuration (IO8 pulled high, IO9 pulled low for flash mode)
- ESP-Prog wiring discovery (Rx→Rx, Tx→Tx instead of traditional crossover)
- RTC crystal configuration via ESP-IDF menuconfig for accurate timekeeping
- Power-on-reset timing to ensure reliable startup
- Balancing measurement frequency with battery life and data resolution`,

    // MEDIA
    images: [
      {
        path: "/images/projects/iot-temperature-pcb/temp_schematic.png",
        caption: "Complete PCB schematic showing power regulation, ESP32-C3, temperature sensor, and programming interfaces"
      },
      {
        path: "/images/projects/iot-temperature-pcb/temp_pcb.png",
        caption: "PCB layout with RF keep-out zone, dual ground and 3.3V planes, and optimized crystal routing"
      },
      {
        path: "/images/projects/iot-temperature-pcb/CAD_networked.png",
        caption: "CAD design of weatherproof enclosure with mounting points and component clearance"
      },
      {
        path: "/images/projects/iot-temperature-pcb/temp_location.jpg",
        caption: "Deployed sensor on Tufts campus - protected location with ambient air exposure"
      },
      {
        path: "/images/projects/iot-temperature-pcb/temp_results.png",
        caption: "72-hour temperature readings showing realistic diurnal patterns validated against ground truth"
      }
    ],

    videos: [
      // {
      //   youtubeId: "YOUR_VIDEO_ID",
      //   caption: "System walkthrough: PCB design, firmware architecture, and deployment process"
      // }
    ],

    pdf: {
      path: "/files/projects/EE153_Final_Project_Writeup___Team_M.pdf",
      title: "Complete Technical Documentation & Design Report"
    },

    // TECH STACK
    techStack: [
      "ESP32-C3",
      "KiCad PCB Design",
      "C++",
      "ESP-IDF",
      "I2C Protocol",
      "MQTT",
      "WiFi",
      "Power Optimization",
      "Deep Sleep",
      "RTC Timekeeping",
      "3D Printing",
      "CAD",
      "UART Programming",
      "TMP112 Sensor",
      "Battery Management"
    ],

    // LINKS
    githubUrl: "https://github.com/paul-wang1/networked_probe", // Update with actual repo
    liveUrl: "",

    // DISPLAY OPTIONS
    featured: true  // This is a substantial, complete project with real-world deployment
  },
  {
    // BASIC INFO
    id: 3,
    slug: "pipelined-arm-cpu",
    title: "Pipelined ARM LEGv8 CPU Design with Hazard Detection",
    type: "Computer Architecture & Digital Design",

    // CARD DISPLAY (shown on main projects page)
    description: "Complete 5-stage pipelined ARM processor implementation in VHDL with forwarding logic and hazard detection for data and control hazards.",

    // HERO IMAGE (main image for project page)
    heroImage: "/images/projects/arm-cpu-pipeline/hero_cpu.png",

    // DETAILED CONTENT (for project page)
    problem: "Modern processors require pipelining to achieve high performance by overlapping instruction execution. However, pipelining introduces complex challenges: data hazards occur when instructions depend on results from previous instructions still in the pipeline, control hazards arise from branch instructions that change program flow, and structural hazards happen when multiple pipeline stages need the same hardware resource simultaneously. Without proper hazard detection and mitigation, a pipelined processor will produce incorrect results. The challenge is implementing a complete ARM processor that maintains correctness while maximizing instruction throughput through aggressive pipelining.",

    solution: "A complete 5-stage pipelined ARM LEGv8 processor implemented in VHDL that executes a subset of the ARM instruction set with full hazard detection and mitigation. The design progresses from a simple single-cycle processor to a naive pipelined implementation, and finally to a production-ready pipelined processor with data forwarding and pipeline stalling. The processor implements sophisticated forwarding logic that detects when later instructions need data from earlier instructions still executing, bypassing results directly from pipeline registers to avoid stalls. For unavoidable hazards like load-use dependencies, a hazard detection unit automatically stalls the pipeline and inserts bubbles (NOPs) to maintain correctness.",

    implementation: `Designed and implemented a complete ARM processor across three progressive lab assignments, building from fundamental components to a sophisticated pipelined architecture.

**Single-Cycle Processor Foundation (Lab 3)**

Built the baseline single-cycle ARM processor implementing core instructions: ADD, ADDI, B, CBZ, LDUR, STUR, SUB, SUBI. This established the fundamental datapath including Program Counter, register file, ALU, data memory, control unit, and sign extension units. The single-cycle design executes one instruction per clock cycle with no overlap, providing a simple baseline for correctness verification.

**Basic 5-Stage Pipeline (Lab 4)**

Transformed the single-cycle design into a pipelined architecture with five stages: IF (Instruction Fetch), ID (Instruction Decode), EX (Execute), MEM (Memory), and WB (Write Back). Added pipeline registers between each stage (IF/ID, ID/EX, EX/MEM, MEM/WB) to hold intermediate values. Extended instruction set to include: AND, ANDI, CBNZ, LSL, LSR, ORR, ORRI, plus NOP. This naive pipelined implementation achieves higher throughput but produces incorrect results when hazards occur—demonstrating the need for hazard detection.

**Complete Pipeline with Forwarding and Stalling (Lab 5)**

Implemented comprehensive hazard detection and mitigation through two key units:

Forwarding Unit detects when an instruction in EX stage needs data from instructions in MEM or WB stages. ForwardA and ForwardB control signals (00 = no hazard, 01 = forward from MEM/WB, 10 = forward from EX/MEM) automatically route the correct data by comparing destination registers of instructions in later stages against source registers in EX stage.

Hazard Detection Unit handles load-use hazards where an instruction immediately needs data from a LDUR. Since memory data isn't available until MEM stage, the pipeline must stall by freezing PC and IF/ID register, inserting a bubble (NOP) into ID/EX, and resuming after one cycle.

**Key Technical Implementation:**
- Modular VHDL architecture with separate entities for each component
- Comprehensive testbenches with automated verification
- DEBUG ports for observing internal processor state
- Makefile-based build system for multiple test programs
- GTKWave waveform analysis for debugging

**Challenges Solved:**
- Correct forwarding priority (EX hazard takes precedence over MEM hazard)
- Register X31 (XZR) always reads zero and is never forwarded
- Pipeline bubble insertion without corrupting state
- Branch target calculation and PC control
- Multiple test programs exposing different hazard scenarios

The final processor successfully executes complex programs with data dependencies, achieving correctness through intelligent hazard detection while maintaining the performance benefits of pipelining.`,

    // MEDIA - Just one or two key images
    images: [
      {
        path: "/images/projects/pipelined-arm-cpu/waveform-success.jpg",
        caption: "GTKWave simulation showing successful hazard detection: ForwardA and ForwardB signals correctly identifying data hazards, with final register and memory values matching expected results from test program"
      }
    ],

    videos: [],

    pdf: null,

    // TECH STACK
    techStack: [
      "VHDL",
      "GHDL Simulator",
      "GTKWave",
      "ARM LEGv8 ISA",
      "Digital Logic Design",
      "Computer Architecture",
      "Pipeline Design",
      "Hazard Detection",
      "Data Forwarding"
    ],

    // LINKS
    githubUrl: "", // Add if you have repo
    liveUrl: "",

    // DISPLAY OPTIONS
    featured: true
  },

  {
    // BASIC INFO
    id: 4,
    slug: "arduino-line-following-robot",
    title: "Arduino Line-Following Robot with WebSocket Control",
    type: "Embedded Systems & Robotics",

    // CARD DISPLAY (shown on main projects page)
    description: "Autonomous navigation robot using Arduino Uno WiFi Rev2 with custom color detection circuits, IR sensors, and WebSocket communication for coordinated multi-robot operation.",

    // HERO IMAGE (main image for project page)
    heroImage: "/images/projects/line-following-robot/hero_jd.JPG",

    // DETAILED CONTENT (for project page)
    problem: "Autonomous robot navigation requires real-time sensor processing, precise motor control, and robust communication—all while operating under power and processing constraints. Traditional line-following robots rely on simple binary sensors that can't handle complex multi-color paths or coordinate with other robots. The challenge is building a system that can autonomously navigate a multi-colored track, detect obstacles, communicate wirelessly with other robots and a control station, and adapt to varying lighting conditions and battery levels—all using discrete analog components and a microcontroller with limited computational resources.",

    solution: "A complete autonomous navigation robot built on Arduino Uno WiFi Rev2 that uses custom-designed analog circuits for color detection and obstacle avoidance. The robot employs LED-phototransistor pairs with high-value resistors (up to 1MΩ) for sensitive color discrimination, IR emitter-detector circuits for crash detection, and H-bridge motor drivers for precise differential steering. WebSocket communication enables wireless control and multi-robot coordination through team-specific server filtering. The system implements software calibration routines that adapt to changing lighting and battery conditions, making it robust for real-world operation on complex colored tracks.",

    implementation: `Designed and built a complete autonomous navigation robot from ground up, including analog sensor circuits, motor control systems, mechanical chassis, and wireless communication—demonstrating integration across electrical engineering, embedded programming, and mechanical design.

**Custom Analog Sensor Circuits**

**Color Detection System:**
- LED emitters (red, blue, yellow) paired with phototransistors for reflectance-based color sensing
- High-value pull-down resistors (up to 1MΩ) for maximum sensitivity to reflected light
- Physical light shielding to isolate sensor from ambient light and cross-talk
- Threshold-based detection using Arduino ADC (analogRead())
- Software calibration routine adapts to lighting variations and surface reflectivity

**IR Obstacle Detection:**
- IR LED emitter with 1.1-1.2kΩ current-limiting resistor
- IR phototransistor with 1MΩ pull-down for high sensitivity
- Detects proximity to obstacles and track boundaries
- Threshold tuning in software for reliable stop detection

**Battery Monitoring:**
- Resistor-LED voltage ladder for visual battery level indication
- Red LED (2V), Yellow LED (2V), Blue LED (3V) thresholds
- Analog voltage sensing for low-battery detection
- Prevents motor stalls and erratic behavior from voltage sag

**H-Bridge Motor Control**

Implemented dual H-bridge motor driver (L293D) for independent left/right motor control:
- Four logical "triangles" forming two H-bridge configurations
- Triangles 1 & 2 control left motor (forward/reverse)
- Triangles 3 & 4 control right motor (forward/reverse)
- PWM speed control via Arduino analogWrite() for smooth motion
- Digital enable signals via digitalWrite() for direction control
- Differential steering for turning: vary left/right motor speeds

Motor control states:
- Forward: Both motors forward at equal speed
- Turn Left: Right motor faster than left motor
- Turn Right: Left motor faster than right motor
- Stop: Both motors disabled

**Embedded Software Architecture**

**State Machine Navigation:**
- Main loop polls sensors at fixed rate (~100Hz)
- State transitions based on color detection:
  - Red path → Turn right
  - Blue path → Turn left
  - Yellow path → Continue straight
  - Black surface → Stop
- IR sensor triggers immediate stop state regardless of color

**Sensor Calibration System:**
- Auto-calibration routine runs at startup
- Reads sensor values over white, red, blue, yellow, black surfaces
- Computes adaptive thresholds for each color channel
- Accounts for ambient lighting and battery voltage variations
- Stores calibration in RAM for runtime use

**WebSocket Communication:**

Implemented WiFi-based remote control and coordination:
- Arduino Uno WiFi Rev2 connects to local network
- WebSocket client communicates with central server
- Team-specific server ID filtering prevents cross-talk
- Bidirectional messages for control and telemetry:
  - Receive: Start/stop commands, speed adjustments, joystick override
  - Send: Battery status, current state, sensor readings

**Multi-Robot Coordination:**
- Client-side message filtering by assigned server ID
- Prevents unauthorized control from other teams' robots
- Enables synchronized navigation with multiple bots
- Coordinated state machine transitions

**Mechanical Design & Integration**

**Chassis Evolution:**
- Initial prototypes used breadboards and loose components
- Iterative design using Onshape CAD software
- Final version laser-cut from acrylic for precision and durability
- Organized mounting locations for Arduino, breadboard, motors, battery
- Cable management channels for clean wiring layout
- Low center of gravity for stability during turns

**Component Integration:**
- Arduino Uno WiFi Rev2 as central controller
- Dual DC motors with wheels for differential drive
- 9V battery for motor power (VCC1, VCC2 rails)
- Arduino 5V regulator for sensors and logic
- Custom breadboard circuit for sensors and H-bridge
- Speaker for audio feedback (battery warnings, state changes)

**Power System Design:**
- Separate power rails: 9V for motors, 5V for logic
- Prevents motor current spikes from affecting sensors
- Decoupling capacitors on sensor power for noise reduction
- Battery voltage monitoring prevents brown-out conditions

**Key Technical Achievements:**

1. **Analog Circuit Design:** Custom LED-phototransistor circuits with proper biasing and shielding
2. **Real-Time Processing:** Sensor polling and motor control in single-threaded Arduino loop
3. **Adaptive Calibration:** Software compensation for hardware variations and environmental changes
4. **Wireless Communication:** WebSocket implementation on resource-constrained microcontroller
5. **Mechanical Integration:** Laser-cut chassis optimized for component placement and wire routing
6. **System Reliability:** Battery monitoring, error handling, and robust state machine logic

**Testing & Validation:**

- Completed autonomous navigation of multi-color test track
- Successful color discrimination under varying lighting
- Reliable IR-based stop detection
- WebSocket control with <100ms latency
- Multi-robot coordination without interference
- Battery endurance: 30+ minutes continuous operation

**Deliverables for Replication:**

Complete documentation package enabling full reproduction:
1. Hardware assembly instructions with wiring diagrams
2. Component bill of materials with part numbers
3. Arduino firmware with calibration routines
4. WebSocket server code for remote control
5. Chassis CAD files for laser cutting
6. Step-by-step setup and calibration procedures

The project demonstrates end-to-end embedded systems development from low-level analog circuit design through high-level wireless communication, resulting in a robust autonomous robot capable of complex navigation tasks.`,

    // MEDIA
    images: [
      {
        path: "/images/projects/line-following-robot/top_down.png",
        caption: "Top-down View showing IR, Speaker and Arduino Sensor"
      },
      {
        path: "/images/projects/line-following-robot/bottom_up.JPG",
        caption: "Bottom-up view showing component layout: Arduino, Color Sensing Unit , motor controllers, battery lightand power distribution"
      },
      // {
      //   path: "/images/projects/line-following-robot/schematic.jpg",
      //   caption: "Hand-drawn schematics for IR LED circuit, phototransistor detection, and color sensor configuration"
      // },
    ],

    videos: [{
      youtubeId: "2u8_Gv_4rFY",
      caption: "Successful demo of the Joint navigation",
    },
    {
      youtubeId: "TygWFg4kByU",
      caption: "Successful demo Solo Navigation",
    }
    ],

    pdf: null,

    // TECH STACK
    techStack: [
      "C/C++ (Arduino)",
      "Analog Circuit Design",
      "Phototransistors",
      "IR Sensors",
      "System Design",
      "WebSocket Engineering",
      "State Machine Programming",
    ],

    // LINKS
    githubUrl: "https://github.com/jpizzzel/Junior-Design-Project",
    liveUrl: "",

    // DISPLAY OPTIONS
    featured: true
  },

  //   {
  //     id: 5,
  //     slug: "dsp-filter-design",
  //     title: "Digital Signal Processing Filter Design",
  //     type: "Signal Processing",
  //     description: "Designed and implemented FIR filters using frequency sampling and least-squares optimization for audio processing.",
  //     heroImage: "/images/projects/dsp-filter-design/hero.jpg",
  //     problem: "Audio signals often contain unwanted noise and interference that degrades quality.",
  //     solution: "Developed custom FIR filters using DSP techniques to selectively remove noise while preserving signal integrity.",
  //     implementation: `Implemented FIR (Finite Impulse Response) filters in both MATLAB and Python using frequency sampling and least-squares optimization methods.

  // Project achievements:
  // - Frequency response analysis and visualization
  // - Performance comparison between different filter design methods
  // - Real-world application to audio signal processing
  // - Comprehensive documentation and analysis`,
  //     images: [],
  //     videos: [],
  //     pdf: null,
  //     techStack: ["MATLAB", "Python", "Digital Signal Processing", "FIR Filters", "Audio Processing", "NumPy"],
  //     githubUrl: "",
  //     liveUrl: "",
  //     featured: false
  //   },

  {
    // BASIC INFO
    id: 1,
    slug: "axis-motion-controlled-guitar-effects",
    title: "Axis: Motion-Controlled Guitar Effects Pedal",
    type: "Embedded Systems & Real-Time Audio DSP",

    // CARD DISPLAY (shown on main projects page)
    description: "Real-time embedded audio effects system with motion control using STM32H7 microcontroller, achieving sub-10ms latency through optimized I2C communication and dual-thread architecture.",

    // HERO IMAGE (main image for project page)
    heroImage: "/images/projects/axis-guitar/hero_axis.png",

    // DETAILED CONTENT (for project page)
    problem: "Traditional guitar effects pedals rely on static knobs and switches for parameter control, limiting real-time expression and forcing musicians to manually adjust settings mid-performance. While digital effects offer sophisticated processing capabilities, they typically lack intuitive, hands-free control interfaces that allow performers to dynamically modulate effect parameters without interrupting their playing. The embedded systems challenge is achieving professional audio quality (sub-10ms latency, 48kHz sample rate) while simultaneously reading motion sensors and performing real-time DSP—all on resource-constrained hardware without glitches or dropouts.",

    solution: "A headstock-mounted embedded system using the Daisy Seed microcontroller (STM32H7) that integrates motion sensing with real-time audio processing. The solution required careful embedded systems architecture: I2C sensor communication running asynchronously from the audio callback, thread-safe parameter sharing between contexts, and optimized DSP algorithms that execute within tight timing constraints. By implementing a dual-thread design that separates sensor polling from audio processing, we achieved professional audio performance while maintaining responsive gesture control—demonstrating advanced embedded systems techniques in a musical application.",

    implementation: `Built a complete real-time embedded audio system on the STM32H7-based Daisy Seed microcontroller, implementing professional-grade DSP with motion control through careful hardware-software co-design.

**Embedded Systems Architecture**

**STM32H7 Microcontroller Integration:**
- Daisy Seed platform with ARM Cortex-M7 core running at 480MHz
- Native libDaisy framework (not Arduino) for direct hardware access and performance
- Real-time operating constraints: audio callback runs at ~1000Hz, must never miss deadline
- Manual peripheral configuration for optimal performance

**I2C Communication & Sensor Interface:**
- MPU6050 IMU sensor communication via hardware I2C peripheral
- Manual register-level configuration of MPU6050:
  - Wrote to PWR_MGMT_1 register (0x6B) to wake sensor from default sleep mode
  - Configured gyroscope range (FS_SEL) and accelerometer range (AFS_SEL) registers
  - Set sample rate divider for optimal polling frequency
- Challenge: I2C transactions (10-20ms) would cause audio glitches if called in audio thread
- Solution: Asynchronous I2C reads in main loop, never in audio interrupt context

**Real-Time Audio Processing Pipeline:**
- 48kHz sample rate with 4-sample block size for sub-10ms latency
- Audio callback runs in interrupt context at highest priority
- Dual-thread architecture separating time-critical audio from sensor polling:
  - **Audio thread (ISR):** Processes audio samples, reads motion parameters via volatile variables
  - **Main thread (loop):** Polls MPU6050 via I2C, updates parameters for audio thread
- Thread-safe communication using volatile keyword for memory barriers
- No dynamic memory allocation in real-time path
- Fixed-point arithmetic for tremolo LFO to avoid floating-point overhead in critical path

**Hardware Initialization Sequence:**
Critical boot-up procedure discovered through debugging:
1. hw.Configure() - Set up hardware parameters
2. hw.Init() - Initialize peripherals  
3. Start audio callback
4. Initialize I2C and MPU6050
5. Never call hw.StartLog() - interferes with audio DMA

**Motion-to-Audio Parameter Mapping:**
- Custom Map() function for real-time sensor data conversion
- Input: Raw accelerometer/gyroscope values (16-bit signed integers)
- Processing: Compute roll and pitch angles from 3-axis accelerometer data
- Output: Effect parameters (tremolo depth 0-100%, frequency 2-12Hz)
- Update rate: ~100Hz sensor polling, interpolated smoothly in audio callback
- Noise filtering to prevent jitter from affecting audio quality

**Digital Signal Processing Implementation:**
- Tremolo effect: Amplitude modulation with motion-controlled LFO
  - Depth controlled by pitch angle (forward/backward tilt)
  - Rate controlled by roll angle (left/right tilt)
- Dual flanger: Time-varying delay with feedback
  - Smooth parameter interpolation to avoid zipper noise
- All DSP runs in audio callback with deterministic execution time
- Profiled to ensure callback completes within block period (83μs at 48kHz)

**Power Management & Hardware Design:**
- Battery-powered operation for pedalboard integration
- Power regulation circuit for stable 3.3V supply to Daisy Seed and MPU6050
- Audio codec configuration for line-level input/output
- Proper decoupling capacitors and ground plane design to minimize audio noise

**Critical Embedded Systems Challenges Solved:**

1. **Audio Glitch Prevention:** Strict separation of I2C (slow, blocking) from audio callback (fast, real-time)
2. **Timing Determinism:** Ensured audio callback always completes in <83μs regardless of motion input
3. **Interrupt Priority:** Audio DMA at highest priority, I2C at lower priority to prevent preemption
4. **Memory Barriers:** Volatile variables for lock-free inter-thread communication
5. **Sensor Initialization:** Proper MPU6050 wake-up sequence and register configuration
6. **Low Latency:** 4-sample block size pushes limits of DMA buffer management

**Testing & Validation:**
- Oscilloscope measurements confirmed <10ms latency (input to output)
- Audio analyzer verified 48kHz sample rate with no dropouts
- Logic analyzer captured I2C transactions to debug communication
- Performed stress testing with rapid motion changes
- Validated deterministic timing using timer interrupts

**Mechanical Integration:**
- 3D-printed enclosure houses embedded system components
- Iterative prototyping with Snark tuner ball-and-socket mount
- Design considerations for I2C wire routing and sensor orientation
- Compact form factor driven by embedded hardware constraints

This project demonstrates advanced embedded systems concepts: real-time constraints, interrupt-driven architecture, hardware peripheral configuration, thread-safe communication, and deterministic timing—all applied to a creative musical application requiring professional audio quality.`,

    // MEDIA
    images: [
      {
        path: "/images/projects/axis-guitar/axis_block_diagram.png",
        caption: "System architecture showing daisy integration, I2C sensor communication, and real-time audio processing pipeline"
      },
      {
        path: "/images/projects/axis-guitar/axis_prototype.JPG",
        caption: "Embedded hardware integration: Daisy Seed microcontroller, MPU6050 IMU sensor conencted to another daisy seed as test input"
      }
    ],

    videos: [
      {
        youtubeId: "UEvisS6WOZI",  // YouTube video ID from URL
        caption: "Demo Video of IMU interfacing with the tremolo effect"
      }
    ],

    pdf: {
      path: "/files/projects/Axis_final.pdf",
      title: "End of Semester Presentation"
    },

    // TECH STACK
    techStack: [
      "Daisy Seed",
      "C++",
      "MPU6050 IMU",
      "I2C Protocol",
      "Real-time DSP",
      "Hardware Peripheral Configuration",
      "Audio Codec Integration",
      "Embedded Systems Design"
    ],

    // LINKS
    githubUrl: "https://github.com/paul-wang1/axis_project",
    liveUrl: "",

    // DISPLAY OPTIONS
    featured: true
  },

  {
    // BASIC INFO
    id: 5,
    slug: "fpga-guitar-hero",
    title: "FPGA Guitar Hero: Hardware-Based Arcade Game",
    type: "FPGA & Digital Design",

    // CARD DISPLAY (shown on main projects page)
    description: "Complete Guitar Hero game implemented on FPGA with VGA graphics, real-time audio synthesis, and physical guitar controller interface playing Nirvana's 'Smells Like Teen Spirit' solo.",

    // HERO IMAGE (main image for project page)
    heroImage: "/images/projects/fpga-guitar-hero/hero_fpga.jpg",

    // DETAILED CONTENT (for project page)
    problem: "Modern rhythm games like Guitar Hero require powerful processors and operating systems to handle real-time graphics rendering, audio synthesis, precise timing synchronization, and user input processing. Implementing such a game purely in hardware presents significant challenges: generating stable VGA video output at 60Hz while simultaneously managing falling note animations, synthesizing multiple musical tones in real-time, detecting and debouncing button inputs from a guitar controller, and maintaining perfect timing synchronization between visual cues and audio output—all without an operating system or software framework, using only digital logic running on an FPGA.",

    solution: "A complete hardware implementation of Guitar Hero built entirely in VHDL on an FPGA development board. The system uses pure digital logic to handle VGA video generation at 640x480@60Hz, square wave audio synthesis for nine different musical notes, guitar controller input processing, and real-time scoring—all running at hardware speeds without an operating system. Players use a physical PlayStation guitar controller to play the guitar solo from Nirvana's 'Smells Like Teen Spirit' by pressing the correct button combinations as notes fall down the screen. The game features custom-designed graphics with start/end screens, falling note blocks synchronized to music, real-time score tracking, and audio tone generation that produces the actual guitar solo when played correctly.",

    implementation: `Designed and implemented a complete rhythm game system in VHDL with four major subsystems: state machine control, VGA graphics, audio synthesis, and controller interfacing.

**System Architecture & State Machine**

Implemented three-state finite state machine controlling game flow:
- **START_SCREEN:** Title display, waits for all guitar buttons pressed
- **GAME_STATE:** Active gameplay with falling notes and scoring
- **END_SCREEN_STATE:** Score display, returns to start on strummer press

State machine embedded in pattern generator module to prevent cross-module bugs. Different button combinations for each transition prevent accidental state skipping. Top module coordinates VGA sync signals, RGB multiplexing, controller inputs, and audio tone selection across all subsystems.

**VGA Graphics System**

**Display & Timing:**
VGA scans 640x480 pixels at 60Hz (25.125 MHz pixel clock). Frame counter increments once per complete screen scan, serving as master timing reference for entire game.

**Falling Note Blocks:**
Implemented rhythm mechanics with hardware-timed note blocks synchronized to song tempo:
- Song tempo: 60 frames per quarter note (half-speed for playability)
- Created 23+ block instances (eighth, quarter, dotted quarter notes across 5 columns)
- Each block has fixed x-position and dynamic y-position updated every frame
- Blocks activate when frame counter matches scheduled time in song
- Block height: 40 pixels (doubled for visibility)
- Backup blocks required: cannot reactivate same block while falling

Critical timing issue solved: Same block cannot be displayed twice simultaneously. Solution used backup instances, reduced tempo, and increased block height.

**Background Graphics with Python Automation:**
Designed custom start/end screens and numeric digits using automated pipeline:
- Created 60x80 pixel art (downsized to conserve FPGA resources)
- Python script converts PNG to VHDL case statements (13-bit address → 6-bit RGB)
- Data compression: Excludes most frequent color, uses "when others" clause
- Reduced code from 4,800 to ~3,000 lines for backgrounds, 200-400 for digits
- Upscaling: Used MSBs of coordinates (x(9 downto 3), y(8 downto 3)) for 8x scaling

**Real-Time Scoring System:**
Debounced point-awarding prevents multiple counts per note press:
- D flip-flop compares previous vs. current button state
- is_new_key flag prevents repeat awards during sustained press
- Point awarded only when: (1) new key detected, (2) matches expected note
- Counter converted to decimal digits, displayed as sprites on end screen
- Without debouncing, 60Hz clock would award 30 points per half-second hold

**Audio Synthesis**

**Musical Note Implementation:**
Transcribed guitar solo into 9 unique notes, mapped to button combinations (5 single buttons + 4 dual-button chords). Calculated counter values for square wave generation:

Counter limit = (25,125,000 Hz) / (note frequency × 2)

Example: C note (523 Hz up one octave) = 45,866 counter limit

**Square Wave Generator:**
Toggles audio output HIGH when count < limit, LOW when count < 2×limit, creating square waves at correct frequencies. Different button combinations select different counter limits, producing different tones.

**Guitar Controller Interface**

PlayStation Guitar Hero controller connected via pull-up resistor circuit:
- 330Ω resistors default FPGA inputs to HIGH (5V)
- Button press shorts to ground → FPGA reads LOW
- 5-bit input vector encodes button states (inverted logic: pressed = '0')
- Green button excluded due to hardware failure

**Key Challenges Solved**

1. **Resource Optimization:** Downsampled graphics 60x80, upscaled with MSBs
2. **Block Timing Conflicts:** Created backup instances, reduced tempo 50%
3. **Score Debouncing:** State-change detection with is_new_key flag
4. **Synchronization:** Used 60Hz VGA frame rate as master clock
5. **FPGA Constraints:** Aggressive compression of background data

**Results**

Successfully implemented complete rhythm game with:
- Stable 640x480@60Hz VGA output
- 71 total notes in half-speed guitar solo
- Average player score: 15-20 points (top 10%: 50+ points)
- Clean audio synthesis with correct pitch
- Sub-17ms input latency

Project demonstrates advanced FPGA design: VGA generation, real-time audio synthesis, hardware state machines, and external device interfacing—all in pure digital logic without software.`,

    // MEDIA
    images: [
      {
        path: "/images/projects/fpga-guitar-hero/fpga_block.png",
        caption: "Team with completed FPGA Guitar Hero system showing VGA display and PlayStation guitar controller"
      },
      {
        path: "/images/projects/fpga-guitar-hero/showcase.JPG",
        caption: "Us at the showcase with people trying our game"
      }
    ],

    videos: [{
      youtubeId: "dUTquBx2ELU",
      caption: "Demo of our working game at the end-of-semester showcase"
    }
    ],

    pdf: {
      path: "/files/projects/es4_final_report.pdf",
      title: "Final Report and Documentation"
    },

    // TECH STACK
    techStack: [
      "VHDL",
      "FPGA",
      "Quartus",
      "VGA Protocol",
      "Digital Logic Design",
      "Finite State Machines",
      "Square Wave Synthesis",
      "Hardware Timing",
      "Python (Image Processing)",
      "Real-Time Systems"
    ],

    // LINKS
    githubUrl: "https://github.com/paul-wang1/GuitarHero",
    liveUrl: "",

    // DISPLAY OPTIONS
    featured: true
  },
  {
    // BASIC INFO
    id: 6,
    slug: "iot-water-monitoring",
    title: "IoT Water Tank Monitoring System",
    type: "IoT & Embedded Systems",

    // CARD DISPLAY (shown on main projects page)
    description: "Deployed ESP32-based cellular water monitoring system with hourly readings and daily cloud uploads for rural Malawi water infrastructure.",

    // HERO IMAGE (main image for project page)
    heroImage: "/images/projects/iot-water-monitoring/hero_ewb.JPG",

    // DETAILED CONTENT (for project page)
    problem: "Rural communities in Malawi lack real-time monitoring of water infrastructure, making it difficult to manage resources and respond to issues quickly in areas with limited cellular connectivity and unreliable power.",

    solution: "Built an ESP32-C3 based IoT system with Blues Notecard cellular connectivity, enabling automated water level monitoring with hourly readings, local SD card data logging, and daily cloud uploads to Notehub for remote access.",

    implementation: `The system uses an ultrasonic sensor (NewPing) for water level detection and deep sleep power management to extend battery life. An ESP32-C3 microcontroller wakes hourly to take readings, stores data locally on SD card, and uploads a full day's data (24 readings) via cellular at midnight.

Key technical achievements:
- Deep sleep implementation reducing power consumption to ~10μA between readings
- Robust UART communication between ESP32 and Blues Notecard for cellular data transmission
- SD card redundancy with FILE_APPEND to prevent data loss during connectivity issues
- RTC time synchronization from cellular network for accurate daily scheduling
- JSON array formatting for efficient data payload transmission
- Error handling with automatic retry on SD card, Notecard, or time sync failures
- Field-tested deployment managing >$50k in water infrastructure projects

Technical Implementation:
- ESP32 wakes from deep sleep every hour via timer interrupt
- Ultrasonic sensor measures water level distance
- Reading appended to SD card with "Distance_cm: X" format
- RTC_DATA_ATTR preserves reading count and day tracking across sleep cycles
- At day rollover (detected via Notecard's cellular-synced time), uploads all readings as JSON array
- Blues Notecard handles cellular connection and queues data for Notehub cloud platform
- After successful upload, clears SD card and resets counter for new day`,

    // MEDIA
    images: [
      // Add images as you take them
      // {
      //   path: "/images/projects/iot-water-monitoring/system-diagram.jpg",
      //   caption: "System architecture showing ESP32, ultrasonic sensor, SD card, and Blues Notecard"
      // },
      // {
      //   path: "/images/projects/iot-water-monitoring/deployment.jpg",
      //   caption: "Deployed system monitoring water tank in Malawi"
      // }
    ],

    videos: [
      // {
      //   youtubeId: "dQw4w9WgXcQ",
      //   caption: "System demonstration showing hourly readings and data upload"
      // }
    ],

    pdf: null,

    // TECH STACK
    techStack: [
      "ESP32-C3", 
      "Blues Notecard (Cellular IoT)", 
      "SD Card (SPI)", 
      "Deep Sleep Power Management",
      "UART Communication",
      "Notehub Cloud Platform",
      "C++ (Arduino Framework)",
      ],

    // LINKS
    githubUrl: "https://github.com/tuftsewb/Malawi-S25-DISH-WaterSensing", // Add your actual GitHub link
    liveUrl: "",  // Could add Notehub dashboard link if public

    // DISPLAY OPTIONS
    featured: true
}
];

// ========================================
// HELPER FUNCTIONS
// ========================================
// Function to get a project by its slug (used for routing)
export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

// ========================================
// CUSTOMIZATION TIPS
// ========================================
/*

ADDING A NEW PROJECT:
---------------------
Copy this template and add it to the projects array:

{
  id: 6, // Increment the ID
  title: "Your Project Title",
  category: "Category (e.g., Robotics, IoT, etc.)",
  description: "Detailed description of your project, what it does, and how you built it.",
  impact: "What impact did this project have? (optional)",
  technologies: ["Tech1", "Tech2", "Tech3"],
  githubUrl: "https://github.com/yourusername/repo", // Optional
  featured: true // Set to true to highlight this project
}


UPDATING YOUR INFO:
-------------------
- Edit the personalInfo object to update your contact details and bio
- Update the tagline to change your hero section headline
- Modify the bio array to update your about section


ADDING EXPERIENCE:
------------------
Add new experience objects to the experience array with:
- role, organization, period, location, description array, and type


UPDATING SKILLS:
----------------
Add new skills to the appropriate category in the skills object,
or create new categories as needed


CHANGING COLORS:
----------------
The color scheme is defined in tailwind.config.js
Look for the "primary" color palette to customize


NEED HELP?
----------
Check the README.md file for detailed instructions on:
- Running the development server
- Building for production
- Deploying to Vercel/Netlify
- Advanced customization options

*/
