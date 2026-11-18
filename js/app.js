/**
 * reBot - DLI Course Top-Level Hub JavaScript
 * Mobile Responsive Menu, Spec Toggle, Accessories Tabs & Navigation Interaction
 */

const i18nDict = {
  en: {
    // Nav
    nav_sensecraft: "SenseCraft",
    nav_wiki: "Wiki Tutorials",
    nav_demos: "GitHub",
    nav_sim: "MuJoCo Sim-to-Real",
    nav_projects: "Demo & Events",
    nav_customization: "Customization",
    nav_buynow: "Buy Now",

    // Preloader
    preloader_status: "INITIALIZING 3D KINEMATICS...",

    // Hero
    hero_title: "Build with reBot",
    hero_subtitle: "Your First Robotics Arm",
    hero_badge: "6+1 DoF Open-Source Arm",
    hero_desc: "Accelerate Physical AI Deployment in Real World",
    hero_watch_video: "Watch Video",
    hero_learn_more: "Learn More",
    spec_strip_1_val: "Up to 5 kg",
    spec_strip_1_lbl: "Payloads",
    spec_strip_2_val: "754mm",
    spec_strip_2_lbl: "Reach",
    spec_strip_3_val: "6.7kg",
    spec_strip_3_lbl: "Weight",
    spec_strip_4_val: "±0.1mm",
    spec_strip_4_lbl: "Repeatability",

    // Performance
    perf_title: "High Performance & Extensive Application",
    perf_subtitle: "Explore reBot Arm's exceptional agility, dynamic payload, and precision control",
    perf_slide1_badge: "Dexterous Control",
    perf_slide1_title: "Multi-Axis Motion & Dexterous Control",
    perf_slide1_desc: "Seamless multi-axis coordination for complex physical AI teleoperation and task execution.",
    perf_slide2_badge: "High Dynamic",
    perf_slide2_title: "High Dynamic Performance",
    perf_slide2_desc: "High-speed responsive trajectories with ultra-low latency actuation for agile robotics control.",
    perf_slide3_badge: "Payload Power",
    perf_slide3_title: "Powerful Payload Capacity",
    perf_slide3_desc: "Exceptional torque density supporting demanding research and light industrial workloads up to 2.5kg.",
    perf_slide4_badge: "±0.1mm Precision",
    perf_slide4_title: "Sub-Millimeter ±0.1mm Repeatability",
    perf_slide4_desc: "Extreme precision positioning ensuring reliable pick-and-place accuracy in repetitive automated workflows.",

    // Spec
    spec_title: "Specification",
    spec_subtitle: "Find the Right Configuration for You",
    spec_col_model: "Parameters",
    spec_lbl_showcase: "Typical Use Case",
    spec_selection_guide: "<strong>Selection Guide:</strong> Choose <strong>DM</strong> if you are a beginner, educator, or budget-conscious; choose <strong>RS</strong> for high precision, heavier payload, VLA research, and high-frequency data collection.",
    spec_l1_title: "Try Free Simulator First",
    spec_l1_desc: "Zero hardware required. Test real MuJoCo physics, forward/inverse kinematics, and robot control directly in your browser.",
    spec_l1_btn: "Launch Simulator",
    spec_badge_dof: "6 Joints + 1 Gripper",
    spec_badge_dm_payload: "1.5kg Payload",
    spec_badge_dm_motor: "DAMIAO Motors",
    spec_badge_rs_payload: "2.5kg Payload",
    spec_badge_rs_motor: "RobStride Dynamics Motors",
    spec_so_badge_dof: "5 Joints + 1 Gripper",
    spec_so_badge_payload: "0.5kg Payload",
    spec_so_badge_servo: "Bus Servo",
    spec_lbl_dof: "Degrees of Freedom",
    spec_lbl_rated_payload: "Rated Payload",
    spec_lbl_max_payload: "Max Payload",
    spec_lbl_precision: "Precision (Repeatability)",
    spec_lbl_reach: "Reach",
    spec_lbl_motors: "Actuators / Motors",
    spec_lbl_finish: "Construction & Finish",
    spec_lbl_scenarios: "Application Scenarios",
    spec_val_dmapp: "Home & Domestic Automation",
    spec_val_rsapp: "Lab / Light Industrial Scenarios",
    spec_val_soapp: "LeRobot, Teleop & Imitation",
    spec_val_soapp_card: "LeRobot, Teleoperation, and Imitation Learning",
    spec_val_finish: "Industrial CNC",
    spec_val_soact: "Feetech Serial Bus Servos",
    spec_val_soconstr: "3D-Printed Structural Parts",
    spec_view_full: "View Full Specs",
    spec_hide_full: "Hide Detailed Specs",

    // Application Scenarios
    scenarios_main_title: "Who is Using reBot Arm?",
    scenarios_main_subtitle: "From Academic Physical AI Learning to Industrial Automation Deployment",

    // Column 1: Education
    scenarios_edu_badge: "Education",
    scenarios_edu_title: "Learning Physical AI",
    scenarios_edu_short: "19-module NVIDIA Isaac × Seeed hands-on Sim-to-Real curriculum.",
    scenarios_edu_desc: "In collaboration with NVIDIA, Seeed provides the end-to-end Sim-to-Real VLA development workflow with Seeed reBot Arm and NVIDIA Isaac. Supported by the hands-on learning curriculum, it bridges cutting-edge Physical AI research and practical robotics learning in higher education.",
    scenarios_edu_stat1_val: "19",
    scenarios_edu_stat1_lbl: "Detailed Modules",
    scenarios_edu_stat2_val: "Sim-to-Real",
    scenarios_edu_stat2_lbl: "Full Pipeline",
    scenarios_edu_stat3_val: "5",
    scenarios_edu_stat3_lbl: "Core Chapters",
    scenarios_edu_stat4_val: "20+ Hours",
    scenarios_edu_stat4_lbl: "Hands-on Lab",
    scenarios_edu_btn: "Start Learning Course",
    scenarios_edu_buy_btn: "Buy reBot Whole Kit for the Course",

    // Column 2: Scientific Research
    scenarios_sci_badge: "Scientific Research",
    scenarios_sci_title: "Accelerate VLA Research",
    scenarios_sci_short: "7+ pre-adapted VLA models with native LeRobot & Isaac Sim pipelines.",
    scenarios_sci_desc: "A ready-to-run platform for Vision-Language-Action (VLA) research. Seeed reBot Arm supports verified integration with the most popular VLA baselines, accelerating the transition from research papers to real-world robotic evaluation.",
    scenarios_sci_stat1_val: "7+",
    scenarios_sci_stat1_lbl: "PRE-ADAPTED VLA MODELS",
    scenarios_sci_stat2_val: "LeRobot",
    scenarios_sci_stat2_lbl: "NATIVE DATA & TRAINING PIPELINE",
    scenarios_sci_stat3_val: "Sim-to-Real",
    scenarios_sci_stat3_lbl: "ISAAC SIM READY",
    scenarios_sci_stat4_val: "Jetson",
    scenarios_sci_stat4_lbl: "EDGE SEAMLESS INFERENCE",
    scenarios_sci_btn: "Explore VLA Research",

    // Column 3: Enterprise
    scenarios_ent_badge: "Enterprise",
    scenarios_ent_title: "Streamline Robotic Data Acquisition",
    scenarios_ent_short: "Multi-cam teleoperation to Hugging Face Parquet datasets at fleet scale.",
    scenarios_ent_desc: "Build scalable Physical AI datasets with Seeed reBot Arm. Supporting teleoperation, multi-camera capture, native LeRobot Dataset format, checkpoint-and-resume recording, and Hugging Face Hub integration for efficient data collection and model training.",
    scenarios_ent_stat1_val: "LeRobot",
    scenarios_ent_stat1_lbl: "PARQUET DATASET FORMAT",
    scenarios_ent_stat2_val: "3× 1080p",
    scenarios_ent_stat2_lbl: "MULTI-CAM @ 30FPS",
    scenarios_ent_stat3_val: "HF Hub",
    scenarios_ent_stat3_lbl: "ONE-CLICK SYNC",
    scenarios_ent_stat4_val: "VR Teleop",
    scenarios_ent_stat4_lbl: "QUEST 3 & LEADER ARM",
    scenarios_ent_btn: "Explore Open Datasets",

    // Sim Section
    sim_main_title: "Try reBot Before You Buy",
    sim_main_subtitle: "Interactive 3D MuJoCo Simulation in Your Browser",
    sim_topbar_left: "INTERACTIVE 3D SANDBOX",
    sim_topbar_right: "DIGITAL TWIN SPECS",
    sim_card_title: "MuJoCo 3D Simulation",
    sim_card_desc: "Watch reBot Arm B601-RS digital twin executing real-time 3D physics trajectories, pick-and-place tasks, and multi-camera perception.",
    sim_feat1_title: "100Hz Physics",
    sim_feat1_desc: "Real-time MuJoCo dynamics solver",
    sim_feat2_title: "Auto Trajectory",
    sim_feat2_desc: "High-precision pick & place stacking",
    sim_feat3_title: "Multi-Camera",
    sim_feat3_desc: "Wrist & overhead camera feeds",
    sim_feat4_title: "Sim-to-Real",
    sim_feat4_desc: "1:1 Kinematic model to hardware",
    sim_btn: "Open Full Web Simulator",
    sim_real_btn: "Try Real Robot (Coming Soon)",

    // SenseCraft Robotics
    sensecraft_title: "From Robot Setup to Real-World Task within 3 Hours",
    sensecraft_subtitle: "A step-by-step workflow to complete end-to-end robotic manipulation and learning in real-world — all in one NO-CODE platform.",
    sensecraft_workflow_heading: "Accelerate Your Robot Development Workflow",
    sc_step1_title: "Calibrate",
    sc_step1_desc: "Set up your robot and cameras with guided calibration for accurate data collection.",
    sc_step2_title: "Collect Data",
    sc_step2_desc: "Record robot demonstrations and build training-ready datasets through teleoperation.",
    sc_step3_title: "Train",
    sc_step3_desc: "Train VLA models in the cloud without requiring a local GPU.",
    sc_step4_title: "Deploy Model",
    sc_step4_desc: "Deploy trained policies to reBot with one-click desktop deployment and traceable workflows.",
    sc_step5_title: "Inference",
    sc_step5_desc: "Run trained policies on the edge and evaluate robot performance in real time.",
    sc_step6_title: "Grasp",
    sc_step6_desc: "Execute learned manipulation tasks and see your robot turn pre-trained policies into real-world actions.",
    sensecraft_cta: "Start Free in SenseCraft",
    sensecraft_cta_note: "Get 1,000 free credits for cloud training & inference",
    sensecraft_ui_badge: "UI Preview / GIF Placeholder",

    // University & Lab Co-Building (Screen 7)
    lab_main_title: "University & Embodied AI Lab Co-Building",
    lab_main_subtitle: "Turnkey hardware, NVIDIA-accredited curriculum, and Sim-to-Real infrastructure for higher education and research institutes",
    lab_tier1_badge: "Starter · 10–20 Units",
    lab_tier1_title: "Embodied AI Teaching Lab",
    lab_tier1_desc: "Designed for undergraduate robotics courses, kinematics labs, and hands-on Physical AI workshops.",
    lab_tier1_f1: "10–20× reBot Arm DM + 3D Depth Camera Station Kits",
    lab_tier1_f2: "19-Module NVIDIA & Seeed Physical AI Curriculum Syllabus",
    lab_tier1_f3: "Browser MuJoCo Digital Twin Classroom Simulation Access",
    lab_tier1_f4: "Faculty Onboarding Workshop & Lab Experiment Manuals",
    lab_tier2_badge: "Standard · 30–50 Units",
    lab_tier2_rec: "Most Popular",
    lab_tier2_title: "VLA & Sim-to-Real Joint Lab",
    lab_tier2_desc: "Built for department-wide teaching, graduate research, and closed-loop Sim-to-Real VLA model pipelines.",
    lab_tier2_f1: "30–50× Mixed DM/RS Stations + Star Arm 102 Teleop Kits",
    lab_tier2_f2: "reComputer Jetson Orin Edge AI Compute Nodes",
    lab_tier2_f3: "SenseCraft Cloud Training Credits Pool & Fleet Management",
    lab_tier2_f4: "Joint Lab Plaque, Co-Branded Course & On-Site Commissioning",
    lab_tier3_badge: "Advanced · 50+ Units",
    lab_tier3_title: "Embodied AI Innovation & Data Center",
    lab_tier3_desc: "Engineered for university AI institutes, large-scale robot data collection factories, and flagship research.",
    lab_tier3_f1: "50+ reBot Arm RS High-Payload Synchronized Data Stations",
    lab_tier3_f2: "NVIDIA Isaac Sim / Isaac Lab & AGX Thor Compute Architecture",
    lab_tier3_f3: "Custom End-Effector / Lift Engineering & Dedicated SLA Support",
    lab_tier3_f4: "Global Hackathon Hosting, Hardware Grants & Academic Co-Publishing",
    lab_uni_wall_title: "Trusted by Global Universities, Robotics Institutes & Innovation Labs",
    lab_uni_1: "MIT · MITERS",
    lab_uni_1_sub: "Robotics & Maker Community",
    lab_uni_2: "Tsinghua University",
    lab_uni_2_sub: "Embodied AI Research",
    lab_uni_3: "UC Berkeley",
    lab_uni_3_sub: "Robot Learning Lab",
    lab_uni_4: "ETH Zürich",
    lab_uni_4_sub: "Autonomous Systems",
    lab_uni_5: "Stanford University",
    lab_uni_5_sub: "Physical AI & VLA",
    lab_uni_6: "Shanghai Jiao Tong Univ.",
    lab_uni_6_sub: "Robotics Institute",
    lab_uni_7: "Zhejiang University",
    lab_uni_7_sub: "Control & Intelligence Lab",
    lab_uni_8: "HKUST",
    lab_uni_8_sub: "Robotics & Perception",
    lab_uni_9: "National Univ. of Singapore",
    lab_uni_9_sub: "Advanced Robotics Centre",
    lab_uni_10: "NVIDIA DLI Partner",
    lab_uni_10_sub: "Official Curriculum Ecosystem",
    lab_cta_download: "Download Lab Proposal",
    lab_cta_talk: "Talk to Education Team",

    // Developer Hub
    dev_main_title: "reBot Real User Cases",
    dev_main_subtitle: "Explore more real-world projects and creative builds from reBot global developer community.",
    dev_item01_title: "01 How to Get Started",
    dev_item01_subtitle: "Official guides for the reBot-RS robotic arm — from first boot to advanced applications",
    dev_item02_title: "01 Contribution & Gather with Global Community",
    dev_item02_subtitle: "Explore real-world projects and creative builds from global developers",
    dev_item03_title: "03 Co-Create with Seeed",
    dev_item03_subtitle: "Join Seeed's global community, project calls, and partnership programs",
    gs_link1: "Quick Start",
    gs_link2: "with LeRobot",
    gs_link3: "with Pinocchio",
    gs_link4: "Motor SDK",
    gs_link5: "with Visual Grasping",
    gs_link6: "with ROS2",
    gs_link7: "with Isaac Sim",
    gs_link8: "Web Control System",
    gs_link9: "with Agent Claw",
    gs_link10: "Beginner Course",
    gs_group_resources: "Open-Source Resources",
    gs_view_all_tutorials: "View All Resources & Tutorials",
    gs_hide_tutorials: "Hide Tutorials",
    dev_view_all_projects: "View All Projects",
    dev_fb_group_btn: "Show us your demo in Seeed Facebook group",
    diff_beginner: "Beginner",
    diff_intermediate: "Intermediate",
    diff_advanced: "Advanced",
    gs_link11: "Hardware",
    gs_link12: "URDF / Mesh",
    gs_link13: "Digital Twin",
    gs_link14: "Main Repo",
    gs_link15: "Python SDK",
    gs_link16: "ROS2 Ctrl",
    gs_link17: "LeRobot Arm",
    gs_link18: "Teleop",
    gs_link19: "Isaac Sim",
    gs_link20: "Visual Grasp",
    gs_link21: "Cam Mounts",
    cocreate_card1_title: "Physical AI Project of the Month",
    cocreate_card1_desc: "Showcase your innovative robotics builds with Seeed reBot Arm. Win hardware grants, global community spotlights, and official co-marketing support from Seeed team.",
    cocreate_card1_btn: "Submit Your Project",
    cocreate_card2_title: "Global Physical AI Workshop Partnership",
    cocreate_card2_desc: "Host a hands-on Physical AI & Embodied AI workshop at your university, lab, or hackerspace. Seeed provides reBot hardware grants, curriculum resources, and event support.",
    cocreate_card2_btn: "Apply for Workshop Host",
    cocreate_card3_title: "Embodied AI Hackathon & Events",
    cocreate_card3_desc: "Join Seeed global hackathons and developer events. Explore upcoming competition calendars, challenge tracks, hardware sponsorships, and past event recaps.",
    cocreate_card3_btn: "Check Upcoming Events",
    partners_title: "Supported Platforms & Developer Tools",

    // Accessories
    acc_title: "Build Your Own Robotics Workstation",
    acc_subtitle: "Discover ready-to-use workstation bundles and verified accessories for advanced robotic manipulation, teleoperation, and Physical AI development.",
    acc_bundles_heading: "Recommended Workstation Bundles",
    acc_jetson_heading: "Jetson-Powered Edge Computer",
    acc_camera_heading: "Camera",
    acc_actuator_heading: "Actuator",
    acc_expansion_heading: "Expansion Accessories",
    acc_tag_control: "For Robot Control",
    acc_tag_infer: "For Policy Inferencing",
    acc_view_all: "View All",
    acc_show_less: "Show Less",
    acc_bundle_buy_btn: "Buy on Seeed Studio",
    acc_bundle1_badge: "Starter Station",
    acc_bundle1_title: "Starter Station Bundle",
    acc_bundle1_item1: "reBot Arm B601-DM (Pre-assembled & calibrated)",
    acc_bundle1_item2: "Orbbec Gemini 2 3D RGB-D depth camera",
    acc_bundle1_item3: "Heavy-duty desktop quick-mount G-Clamp",
    acc_bundle1_item4: "24V power supply & certified connection cables",
    acc_bundle2_badge: "Research Station",
    acc_bundle2_title: "VLA Research & Data Collection Bundle",
    acc_bundle2_item1: "reBot Arm B601-RS (1.5kg high payload · 0.1mm precision)",
    acc_bundle2_item2: "Orbbec Gemini 2 3D RGB-D depth camera",
    acc_bundle2_item3: "reComputer J3011 Edge AI Box (Jetson Orin Nano 8GB)",
    acc_bundle2_item4: "Multi-channel synchronized data collection box & 24V power",
    acc_bundle3_badge: "Teleoperation Station",
    acc_bundle3_title: "Leader-Follower Teleoperation Bundle",
    acc_bundle3_item1: "reBot Arm B601-RS (Follower manipulator, pre-assembled)",
    acc_bundle3_item2: "Star Arm 102 (1:1 kinematic leader teleoperator)",
    acc_bundle3_item3: "Dedicated camera & arm desktop mounting bracket kit",
    acc_bundle3_item4: "Turnkey LeRobot teleoperation & imitation learning stack",
    acc_featured_heading: "Featured Core Accessories",
    acc_feat_1: "Orbbec Gemini 2 3D Camera",
    acc_feat_2: "Orbbec Gemini 336 3D Camera",
    acc_feat_3: "Intel RealSense Depth Camera D435i",
    acc_feat_4: "Star Arm 102 - For reBot B601-DM&RS Leader Arm",
    acc_feat_5: "Robotic-Arm Data Collection Box",
    acc_feat_6: "Robot Arm Camera Mount for LeRobot SO-101 & reBot B601",
    acc_feat_7: "reComputer J3011 - Edge AI Computer (Orin Nano 8GB)",
    acc_feat_8: "ReBot Soft Gripper",
    acc_more_heading: "Actuators, Power & Expansion Accessories",
    acc_view_all: "View All Accessories",
    acc_hide_all: "Hide Extra Accessories",

    // FAQ
    faq_title: "F & Q",
    faq_subtitle: "Everything you need to know about reBot Arm, open-source resources, and getting started",
    faq_q1: "Who is reBot Arm for? Can a beginner get started?",
    faq_a1: "reBot Arm is built for developers, researchers, students, and AI innovators exploring Embodied AI. Beginners can start effortlessly: try our zero-code SenseCraft platform or follow our 19-module Learning Physical AI course (20+ hours) from basic kinematics to Sim-to-Real VLA deployment. <a href=\"https://wiki.seeedstudio.com/rebot_physical_ai_course_introduction/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">Read Beginner Guide on Wiki →</a>",
    faq_q2: "What's the difference between reBot Arm DM and RS? Which one should I choose?",
    faq_a2: "The DM edition uses Damiao actuators (1.5 kg rated payload, ±0.2 mm repeatability), ideal for beginners, education, and budget-conscious setups. The RS edition uses RobStride actuators (2.5 kg rated payload, ±0.1 mm repeatability, higher torque), built for VLA research labs and high-frequency data collection. <a href=\"https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">Compare Specs on Wiki →</a>",
    faq_q3: "Is reBot Arm fully open-source? What exactly is open?",
    faq_a3: "Yes — reBot Arm is 100% open-source across hardware and software. We provide STEP/CAD files, BOM, motor firmware SDKs, URDF/MJCF digital twins, ROS 2 drivers, and LeRobot training pipelines so you can freely customize and extend the arm. <a href=\"https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">Explore Open-Source Docs on Wiki →</a>",
    faq_q4: "What programming languages and frameworks does reBot Arm support?",
    faq_a4: "reBot Arm supports Python, C++, ROS 2 Humble, and Hugging Face LeRobot out of the box. You can run zero-code workflows in SenseCraft, develop kinematics with Pinocchio, or train Sim-to-Real policies in MuJoCo and NVIDIA Isaac Sim. <a href=\"https://wiki.seeedstudio.com/rebot_arm_b601_rs_lerobot/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">View Framework Guides on Wiki →</a>",
    faq_q5: "Which depth cameras are compatible? Do I need to buy one separately?",
    faq_a5: "reBot Arm is officially validated with Orbbec Gemini 2, Orbbec Gemini 336, Intel RealSense D435i, RealSense D405, and standard UVC USB cameras. Cameras are available separately or in station bundles with 3D-printable wrist and top mounts. <a href=\"https://wiki.seeedstudio.com/rebot_arm_b601_rs_grasping_demo/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">See Camera Setup on Wiki →</a>",
    faq_q6: "What kind of computer do I need? Any GPU requirements?",
    faq_a6: "Any modern laptop handles basic control, teleoperation, and our browser-based MuJoCo simulator. For local VLA/ACT policy training and inference, we recommend an NVIDIA GPU (8GB+ VRAM) or our reComputer J3011 (Jetson Orin Nano 8GB) edge box. <a href=\"https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">Check System Requirements on Wiki →</a>",
    faq_q7: "What's included in the Learning Physical AI course? Is it free with the arm?",
    faq_a7: "Co-developed with NVIDIA DLI, the course features 19 hands-on modules across 5 chapters (20+ hours), covering 3D vision, ROS 2, Isaac Sim, and VLA deployment. Core documentation is open on our Wiki, or you can grab the Arm + Course bundle. <a href=\"https://wiki.seeedstudio.com/rebot_physical_ai_course_introduction/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">Browse Full Syllabus on Wiki →</a>",
    faq_q8: "Are there tutorials and community support available?",
    faq_a8: "Yes! We maintain step-by-step Wiki documentation for both DM and RS editions, covering calibration, ROS 2, LeRobot, and Isaac Sim. Our engineering team and global community provide active support on GitHub Issues and Discord. <a href=\"https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">Visit Official reBot Wiki →</a>",
    faq_q9: "What is sim-to-real? Can I try reBot Arm without buying the hardware first?",
    faq_a9: "Sim-to-Real lets you train and validate control policies in physics simulation before deploying to physical hardware. You can test the interactive reBot digital twin right now in our free browser-based MuJoCo simulator — zero hardware required. <a href=\"https://wiki.seeedstudio.com/rebot_arm_b601_rs_web_simulator_developer_guide/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">Read Simulator Guide on Wiki →</a>",
    faq_q10: "What's the shipping and warranty policy?",
    faq_a10: "We ship globally within 3–5 business days (typical delivery in 7–14 days). Every reBot Arm includes a 1-year limited warranty covering manufacturing defects, plus full access to open-source replacement part files and technical support. <a href=\"https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">Check Support Details on Wiki →</a>",

    // News (live blog feed)
    news_title: "Latest News",
    news_subtitle: "Fresh updates from the Seeed Studio Blog — product news, events, and more",
    news_loading: "Loading latest news...",
    news_error: "Couldn't load the news feed right now. Click to retry, or check the full blog.",
    news_viewall: "Subscribe to Seeed Newsletter for Latest Updates",
    news_readmore: "Read More",

    // Community & Footer
    community_title: "Community & Developer Channels",
    footer_copyright: "© 2026 Seeed Studio & NVIDIA DLI | reBot Arm Project"
  },
  zh: {
    // Nav
    nav_sensecraft: "SenseCraft 软件",
    nav_wiki: "Wiki 教程",
    nav_demos: "GitHub",
    nav_sim: "MuJoCo 仿真到现实",
    nav_projects: "演示与活动",
    nav_customization: "定制服务",
    nav_buynow: "立即购买",

    // Preloader
    preloader_status: "正在初始化 3D 运动学...",

    // Hero
    hero_title: "基于 reBot 构建",
    hero_subtitle: "你的第一台具身智能机械臂",
    hero_badge: "6+1 自由度开源机械臂",
    hero_desc: "加速物理 AI 在真实世界的落地部署",
    hero_watch_video: "观看视频",
    hero_learn_more: "了解更多",
    spec_strip_1_val: "最高 5 kg",
    spec_strip_1_lbl: "负载能力",
    spec_strip_2_val: "754mm",
    spec_strip_2_lbl: "工作半径",
    spec_strip_3_val: "6.7kg",
    spec_strip_3_lbl: "整机重量",
    spec_strip_4_val: "±0.1mm",
    spec_strip_4_lbl: "重复定位精度",

    // Performance
    perf_title: "高性能与广泛应用场景",
    perf_subtitle: "探索 reBot 机械臂的灵巧运动、高动态负载与亚毫米级精确定位",
    perf_slide1_badge: "灵巧控制",
    perf_slide1_title: "多轴联动与灵巧控制",
    perf_slide1_desc: "顺畅的多轴协调控制，支持复杂物理 AI 遥操作与多样化任务执行。",
    perf_slide2_badge: "高动态响应",
    perf_slide2_title: "高动态运动性能",
    perf_slide2_desc: "高速响应的轨迹控制与极低延迟执行，赋予机械臂卓越的敏捷运动能力。",
    perf_slide3_badge: "强劲负载",
    perf_slide3_title: "强劲负载承载能力",
    perf_slide3_desc: "卓越的扭矩密度，支持最高 2.5kg 的科研与轻工业级高强度作业需求。",
    perf_slide4_badge: "±0.1mm 精度",
    perf_slide4_title: "±0.1mm 亚毫米级重复定位精度",
    perf_slide4_desc: "极致精细的定位精度，保障高重复度自动化流程中的稳定可靠抓取与放置。",

    // Spec
    spec_title: "规格参数",
    spec_subtitle: "选择最适合你的配置",
    spec_col_model: "对比项目",
    spec_lbl_showcase: "典型场景展示",
    spec_selection_guide: "<strong>选型指南：</strong>选 <strong>DM</strong> 如果你是初学者 / 教学 / 预算有限；选 <strong>RS</strong> 如果需要精度、负载、做 VLA 与数采。",
    spec_l1_title: "先免费试仿真",
    spec_l1_desc: "无需购买实体机械臂，零成本在浏览器中体验 MuJoCo 真实物理引擎与正逆运动学控制",
    spec_l1_btn: "立即体验仿真",
    spec_badge_dof: "6 关节 + 1 夹爪",
    spec_badge_dm_payload: "1.5kg 额定负载",
    spec_badge_dm_motor: "达妙电机",
    spec_badge_rs_payload: "2.5kg 额定负载",
    spec_badge_rs_motor: "RobStride 动力电机",
    spec_so_badge_dof: "5 关节 + 1 夹爪",
    spec_so_badge_payload: "0.5kg 负载",
    spec_so_badge_servo: "总线舵机",
    spec_lbl_dof: "自由度",
    spec_lbl_rated_payload: "额定负载",
    spec_lbl_max_payload: "最大负载",
    spec_lbl_precision: "重复定位精度",
    spec_lbl_reach: "工作臂展",
    spec_lbl_motors: "电机 / 执行器",
    spec_lbl_finish: "结构与工艺",
    spec_lbl_scenarios: "应用场景",
    spec_val_dmapp: "家庭与日常自动化",
    spec_val_rsapp: "实验室与轻工业场景",
    spec_val_soapp: "LeRobot、遥操作与模仿学习",
    spec_val_soapp_card: "LeRobot、遥操作与模仿学习",
    spec_val_finish: "工业级 CNC 加工",
    spec_val_soact: "Feetech 串行总线舵机",
    spec_val_soconstr: "3D 打印结构件",
    spec_view_full: "展开完整规格参数",
    spec_hide_full: "收起完整规格参数",

    // Application Scenarios
    scenarios_main_title: "谁在使用 reBot Arm？",
    scenarios_main_subtitle: "从高校物理 AI 教学到工业自动化部署落地",

    // Column 1: Education
    scenarios_edu_badge: "教育与培训",
    scenarios_edu_title: "学习物理 AI",
    scenarios_edu_short: "NVIDIA Isaac × Seeed 联合打造 19 模块 Sim-to-Real 实操课程。",
    scenarios_edu_desc: "Seeed 与 NVIDIA 联合打造基于 Seeed reBot Arm 与 NVIDIA Isaac 的端到端 Sim-to-Real VLA 开发工作流，配套实操教学课程，架起前沿物理 AI 研究与高校机器人实践教学之间的桥梁。",
    scenarios_edu_stat1_val: "19 个",
    scenarios_edu_stat1_lbl: "详细实操模块",
    scenarios_edu_stat2_val: "Sim-to-Real",
    scenarios_edu_stat2_lbl: "全流程贯通",
    scenarios_edu_stat3_val: "5 大",
    scenarios_edu_stat3_lbl: "核心课程章节",
    scenarios_edu_stat4_val: "20+ 小时",
    scenarios_edu_stat4_lbl: "动手实验时长",
    scenarios_edu_btn: "开始学习课程",
    scenarios_edu_buy_btn: "购买 reBot 课程整机套装",

    // Column 2: Scientific Research
    scenarios_sci_badge: "前沿科学研究",
    scenarios_sci_title: "加速 VLA 模型研究",
    scenarios_sci_short: "预适配 7+ 主流 VLA 模型，原生打通 LeRobot 与 Isaac Sim 流程。",
    scenarios_sci_desc: "开箱即用的视觉-语言-动作 (VLA) 研究平台。Seeed reBot Arm 已验证并全面适配主流 VLA 基线模型，大幅加速从科研论文到真实机器人实机评估的转化进程。",
    scenarios_sci_stat1_val: "7+",
    scenarios_sci_stat1_lbl: "已预适配 VLA 模型",
    scenarios_sci_stat2_val: "LeRobot",
    scenarios_sci_stat2_lbl: "原生数据与训练流程",
    scenarios_sci_stat3_val: "Sim-to-Real",
    scenarios_sci_stat3_lbl: "支持 ISAAC SIM 仿真",
    scenarios_sci_stat4_val: "Jetson",
    scenarios_sci_stat4_lbl: "边缘无缝推理",
    scenarios_sci_btn: "探索科研方案",

    // Column 3: Enterprise
    scenarios_ent_badge: "企业级应用",
    scenarios_ent_title: "精简高效的机器人数据采集",
    scenarios_ent_short: "支持多视角遥操数采，一键生成并同步 Hugging Face Parquet 数据集。",
    scenarios_ent_desc: "借助 Seeed reBot Arm 构建可扩展的物理 AI 数据集。支持遥操作、多摄像头同步采集、原生 LeRobot 数据集格式、断点续录及 Hugging Face Hub 一键同步，实现高效数据采集与模型训练。",
    scenarios_ent_stat1_val: "LeRobot",
    scenarios_ent_stat1_lbl: "PARQUET 数据集格式",
    scenarios_ent_stat2_val: "3× 1080p",
    scenarios_ent_stat2_lbl: "多视角 @ 30FPS",
    scenarios_ent_stat3_val: "HF Hub",
    scenarios_ent_stat3_lbl: "一键同步云端",
    scenarios_ent_stat4_val: "VR 遥操作",
    scenarios_ent_stat4_lbl: "QUEST 3 & 主从臂",
    scenarios_ent_btn: "获取开源数据集",

    // Sim Section
    sim_main_title: "购买前在线试用 reBot",
    sim_main_subtitle: "在浏览器中实时运行 3D MuJoCo 物理仿真",
    sim_topbar_left: "交互式 3D 物理沙盒",
    sim_topbar_right: "数字孪生技术规格",
    sim_card_title: "MuJoCo 3D 仿真与遥操作",
    sim_card_desc: "实时体验 reBot Arm B601-RS 数字孪生体在 3D 物理环境中的轨迹规划、抓取堆叠与多视角感知。",
    sim_feat1_title: "100Hz 物理引擎",
    sim_feat1_desc: "实时 MuJoCo 动力学求解器",
    sim_feat2_title: "自动轨迹规划",
    sim_feat2_desc: "高精度抓取与堆叠放置",
    sim_feat3_title: "多视角摄像头",
    sim_feat3_desc: "腕部与顶部摄像头视角",
    sim_feat4_title: "Sim-to-Real 映射",
    sim_feat4_desc: "1:1 仿真模型与真实硬件映射",
    sim_btn: "打开完整网页仿真器",
    sim_real_btn: "在线试用真机（即将上线）",

    // SenseCraft Robotics
    sensecraft_title: "3 小时内从机械臂配置到真实任务落地",
    sensecraft_subtitle: "手把手引导您在一个零代码（NO-CODE）平台内，完成端到端的真实世界机器人操作与具身学习工作流。",
    sensecraft_workflow_heading: "加速您的机器人开发全流程",
    sc_step1_title: "设备标定 (Calibrate)",
    sc_step1_desc: "引导式完成机械臂与相机标定，确保高精度数据采集。",
    sc_step2_title: "数据采集 (Collect Data)",
    sc_step2_desc: "通过遥操作录制机械臂示教轨迹，构建可直接用于训练的数据集。",
    sc_step3_title: "云端训练 (Train)",
    sc_step3_desc: "无需本地高配 GPU，直接在云端高效训练 VLA 模型。",
    sc_step4_title: "策略部署 (Deploy Model)",
    sc_step4_desc: "桌面端一键下发训练好的策略至 reBot，全程可追溯。",
    sc_step5_title: "实时推理 (Inference)",
    sc_step5_desc: "在边缘端实时运行已训练策略，即时评估机械臂执行表现。",
    sc_step6_title: "真机抓取 (Grasp)",
    sc_step6_desc: "执行习得的操作任务，见证机械臂将预训练策略转化为真实动作。",
    sensecraft_cta: "免费体验 SenseCraft",
    sensecraft_cta_note: "注册即送 1,000 免费云端训练与推理积分",
    sensecraft_ui_badge: "真实界面 / GIF 占位图",

    // University & Lab Co-Building (Screen 7)
    lab_main_title: "高校具身智能实验室共建方案",
    lab_main_subtitle: "面向高校院系与科研机构的交钥匙硬件、NVIDIA 联合认证课程体系与 Sim-to-Real 实验平台",
    lab_tier1_badge: "Starter · 10–20 台",
    lab_tier1_title: "具身智能基础教学实验室",
    lab_tier1_desc: "适用于本科机器人课程、运动学教学实验与物理 AI 动手实训工坊。",
    lab_tier1_f1: "10–20 套 reBot Arm DM + 3D 深度相机教学工作站",
    lab_tier1_f2: "19 模块 NVIDIA × Seeed 物理 AI 标准课程大纲与讲义",
    lab_tier1_f3: "网页端 MuJoCo 数字孪生仿真课堂教学授权",
    lab_tier1_f4: "师资培训工作坊与全套实验指导手册",
    lab_tier2_badge: "Standard · 30–50 台",
    lab_tier2_rec: "主流推荐",
    lab_tier2_title: "VLA 与 Sim-to-Real 联合实验室",
    lab_tier2_desc: "适用于院系级规模化教学、研究生课题攻关与 Sim-to-Real 闭环算法验证。",
    lab_tier2_f1: "30–50 套 DM/RS 混合工作站 + Star Arm 102 主从遥操套件",
    lab_tier2_f2: "reComputer Jetson Orin 边缘 AI 算力节点配置",
    lab_tier2_f3: "SenseCraft 云端训练积分池与实验室设备集群管理",
    lab_tier2_f4: "联合实验室授牌、产学研课程共建与现场交付调试",
    lab_tier3_badge: "Advanced · 50+ 台",
    lab_tier3_title: "具身智能创新与大规模数采中心",
    lab_tier3_desc: "专为校级具身智能研究院、大规模机器人数据采集中心与前沿联合科研打造。",
    lab_tier3_f1: "50+ 套 reBot Arm RS 高负载多路同步数采工作站",
    lab_tier3_f2: "NVIDIA Isaac Sim / Isaac Lab 与 AGX Thor 高算力集群支持",
    lab_tier3_f3: "末端执行器/升降平台定制开发与专属工程师 SLA 保障",
    lab_tier3_f4: "全球黑客松承办权、硬件科研基金与学术论文联合推广",
    lab_uni_wall_title: "全球合作高校、机器人研究院与创新实验室",
    lab_uni_1: "麻省理工 MIT · MITERS",
    lab_uni_1_sub: "机器人与创客社区",
    lab_uni_2: "清华大学",
    lab_uni_2_sub: "具身智能与机器人课题组",
    lab_uni_3: "加州大学伯克利分校",
    lab_uni_3_sub: "机器人学习实验室",
    lab_uni_4: "苏黎世联邦理工 ETH",
    lab_uni_4_sub: "自主系统研究所",
    lab_uni_5: "斯坦福大学",
    lab_uni_5_sub: "物理 AI 与 VLA 研究",
    lab_uni_6: "上海交通大学",
    lab_uni_6_sub: "机器人研究所",
    lab_uni_7: "浙江大学",
    lab_uni_7_sub: "控制与智能系统实验室",
    lab_uni_8: "香港科技大学 HKUST",
    lab_uni_8_sub: "机器人与感知实验室",
    lab_uni_9: "新加坡国立大学 NUS",
    lab_uni_9_sub: "先进机器人研究中心",
    lab_uni_10: "NVIDIA DLI 生态伙伴",
    lab_uni_10_sub: "官方联合课程体系",
    lab_cta_download: "下载实验室建设方案",
    lab_cta_talk: "联系教育合作团队",

    // Developer Hub
    dev_main_title: "reBot 真实用户案例",
    dev_main_subtitle: "探索来自 reBot 全球开发者社区的更多真实项目与创意构建。",
    dev_item01_title: "01 如何快速入门",
    dev_item01_subtitle: "reBot-RS 机械臂官方指南——从首次开机到进阶应用",
    dev_item02_title: "01 参与贡献,汇聚全球社区",
    dev_item02_subtitle: "探索全球开发者基于 reBot 打造的真实应用与创意项目",
    dev_item03_title: "03 与 Seeed 联合共创",
    dev_item03_subtitle: "加入 Seeed 全球社区、项目征集与合作伙伴计划",
    gs_link1: "快速入门",
    gs_link2: "LeRobot 集成",
    gs_link3: "Pinocchio 仿真",
    gs_link4: "电机 SDK",
    gs_link5: "视觉抓取",
    gs_link6: "ROS2 集成",
    gs_link7: "Isaac Sim 仿真",
    gs_link8: "网页控制系统",
    gs_link9: "Agent Claw 夹爪",
    gs_link10: "入门课程",
    gs_group_resources: "开源资源",
    gs_view_all_tutorials: "查看全部资源与教程",
    gs_hide_tutorials: "收起更多教程",
    dev_view_all_projects: "查看全部项目",
    dev_fb_group_btn: "在 Seeed Facebook 群组分享你的演示",
    diff_beginner: "入门",
    diff_intermediate: "进阶",
    diff_advanced: "高阶",
    gs_link11: "硬件资料",
    gs_link12: "URDF / Mesh",
    gs_link13: "数字孪生",
    gs_link14: "主代码仓",
    gs_link15: "Python SDK",
    gs_link16: "ROS2 控制器",
    gs_link17: "LeRobot 机械臂",
    gs_link18: "遥操作适配",
    gs_link19: "Isaac Sim",
    gs_link20: "视觉抓取",
    gs_link21: "相机支架",
    cocreate_card1_title: "物理 AI 月度项目征集",
    cocreate_card1_desc: "展示你基于 Seeed reBot Arm 创作的创新机器人项目，赢取硬件赞助、全球社区聚光灯展示及 Seeed 官方联合推广支持。",
    cocreate_card1_btn: "提交你的项目",
    cocreate_card2_title: "全球物理 AI 工作坊合作伙伴计划",
    cocreate_card2_desc: "在你的大学、实验室或创客空间举办物理 AI 与具身智能动手工作坊，Seeed 提供 reBot 硬件支持、课程资源及活动赞助。",
    cocreate_card2_btn: "申请举办工作坊",
    cocreate_card3_title: "具身智能黑客松与开发者活动",
    cocreate_card3_desc: "参与 Seeed 全球黑客松与开发者社区活动，查看最新赛事日程、挑战赛道、硬件赞助及往期活动回顾。",
    cocreate_card3_btn: "查看近期活动",
    partners_title: "支持的平台与开发者工具",

    // Accessories
    acc_title: "打造您的专属机器人工作站",
    acc_subtitle: "探索开箱即用的工作站套件与官方验证配件，赋能高阶机器人操作、遥操作与物理 AI 开发。",
    acc_bundles_heading: "推荐工作站套装",
    acc_jetson_heading: "Jetson 边缘计算主机",
    acc_camera_heading: "视觉相机",
    acc_actuator_heading: "关节执行器",
    acc_expansion_heading: "扩展配件",
    acc_tag_control: "用于机械臂控制",
    acc_tag_infer: "用于策略推理",
    acc_view_all: "展开全部",
    acc_show_less: "收起",
    acc_bundle_buy_btn: "在 Seeed 官方商城购买",
    acc_bundle1_badge: "入门工作站",
    acc_bundle1_title: "具身智能入门工作站套装",
    acc_bundle1_item1: "出厂预装调校完毕的 reBot Arm B601-DM 机械臂整机",
    acc_bundle1_item2: "奥比中光 Gemini 2 3D 深度立体相机",
    acc_bundle1_item3: "重载桌面快捷加固固定 G 型夹具",
    acc_bundle1_item4: "24V 标配稳压电源与专用线缆包",
    acc_bundle2_badge: "科研数采站",
    acc_bundle2_title: "VLA 科研与多路数采工作站套装",
    acc_bundle2_item1: "reBot Arm B601-RS（1.5kg 高负载 · 0.1mm 重复定位精度）",
    acc_bundle2_item2: "奥比中光 Gemini 2 3D 深度立体相机",
    acc_bundle2_item3: "reComputer J3011 边缘 AI 计算盒 (Orin Nano 8GB)",
    acc_bundle2_item4: "机械臂多路同步数据采集盒与 24V 专用稳压电源",
    acc_bundle3_badge: "遥操工作站",
    acc_bundle3_title: "主从同构遥操作工作站套装",
    acc_bundle3_item1: "reBot Arm B601-RS 从臂（整机预装与精密标定）",
    acc_bundle3_item2: "Star Arm 102 专属 1:1 主臂遥操控制器",
    acc_bundle3_item3: "LeRobot 专用结构支架（相机与机械臂安装支架）",
    acc_bundle3_item4: "开箱即用的高频模仿学习遥操软件栈与算法环境",
    acc_featured_heading: "精选核心配件",
    acc_feat_1: "奥比中光 Gemini 2 3D 深度相机",
    acc_feat_2: "奥比中光 Gemini 336 3D 深度相机",
    acc_feat_3: "英特尔 RealSense 深度相机 D435i",
    acc_feat_4: "Star Arm 102 - reBot B601-DM&RS 主臂遥操器",
    acc_feat_5: "机械臂多路同步数据采集盒",
    acc_feat_6: "LeRobot SO-101 & reBot B601 专属相机支架",
    acc_feat_7: "reComputer J3011 边缘 AI 计算盒 (Orin Nano 8GB)",
    acc_feat_8: "ReBot 柔性夹爪 (Soft Gripper)",
    acc_more_heading: "电机执行器、电源与扩展配件",
    acc_view_all: "查看全部配件",
    acc_hide_all: "收起更多配件",

    // FAQ
    faq_title: "常见问题",
    faq_subtitle: "关于 reBot Arm、开源资源与快速入门的一切解答",
    faq_q1: "reBot Arm 适合哪些人群？零基础初学者可以上手吗？",
    faq_a1: "reBot Arm 专为探索具身智能的开发者、科研人员、高校学生与 AI 创新者打造。零基础新手也能轻松上手：既可通过 SenseCraft 零代码平台快速体验，也能跟随包含 19 个实操模块（20+ 小时）的《学习物理 AI》课程，从基础运动学直通 Sim-to-Real VLA 部署。<a href=\"https://wiki.seeedstudio.com/rebot_physical_ai_course_introduction/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">查看 Wiki 入门指南 →</a>",
    faq_q2: "reBot Arm DM 和 RS 版本有什么区别？我应该选择哪一个？",
    faq_a2: "DM 版采用达妙执行器（1.5 kg 额定负载，±0.2 mm 重复定位精度），适合初学者、教学与高性价比入门；RS 版采用 RobStride 动力执行器（2.5 kg 额定负载，±0.1 mm 精度，更高扭矩），专为 VLA 科研实验室与高频数采打造。<a href=\"https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">查看 Wiki 硬件选型对比 →</a>",
    faq_q3: "reBot Arm 是完全开源的吗？具体开源了哪些部分？",
    faq_a3: "是的，reBot Arm 软硬件 100% 开源。我们开放了全部 STEP/CAD 结构图纸、BOM 清单、电机底层 SDK、URDF/MJCF 数字孪生模型、ROS 2 驱动与 LeRobot 训练代码，支持自由定制与二次开发。<a href=\"https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">查看 Wiki 开源资料详情 →</a>",
    faq_q4: "reBot Arm 支持哪些编程语言和开发框架？",
    faq_a4: "reBot Arm 原生支持 Python、C++、ROS 2 Humble 与 Hugging Face LeRobot 框架。您既可使用 SenseCraft 零代码操作，也能基于 Pinocchio 开发运动学，或在 MuJoCo 与 NVIDIA Isaac Sim 中训练 Sim-to-Real 策略。<a href=\"https://wiki.seeedstudio.com/rebot_arm_b601_rs_lerobot/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">查看 Wiki 开发框架教程 →</a>",
    faq_q5: "兼容哪些深度相机？需要单独购买吗？",
    faq_a5: "reBot Arm 已官方适配验证奥比中光 Gemini 2、Gemini 336、英特尔 RealSense D435i、D405 及标准 UVC USB 相机。相机可单独选购或随工作站套装购买，并提供腕部/顶部开源支架图纸。<a href=\"https://wiki.seeedstudio.com/rebot_arm_b601_rs_grasping_demo/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">查看 Wiki 视觉相机配置指南 →</a>",
    faq_q6: "使用 reBot Arm 需要什么配置的电脑？有 GPU 要求吗？",
    faq_a6: "普通现代笔记本电脑即可满足基础控制、遥操作与网页端 MuJoCo 仿真。若需在本地进行 VLA/ACT 模型训练与推理，建议配备 NVIDIA GPU（8GB+ 显存）或搭配 reComputer J3011（Orin Nano 8GB）边缘计算盒。<a href=\"https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">查看 Wiki 软硬件环境要求 →</a>",
    faq_q7: "《物理 AI 课程》包含什么内容？买机械臂免费送吗？",
    faq_a7: "该课程与 NVIDIA 联合打造，涵盖 5 大章节 19 个实操模块（20+ 小时），贯通 3D 视觉、ROS 2、Isaac Sim 与 VLA 部署。核心教程文档已在 Wiki 开放，您也可直接选购“机械臂 + 课程”优惠套装。<a href=\"https://wiki.seeedstudio.com/rebot_physical_ai_course_introduction/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">前往 Wiki 查看完整课程大纲 →</a>",
    faq_q8: "有配套教程和社区支持吗？",
    faq_a8: "当然有！我们为 DM 和 RS 版本维护了详尽的分步 Wiki 文档，覆盖标定、ROS 2、LeRobot 与 Isaac Sim。Seeed 工程师团队与全球开发者社区也会在 GitHub 与 Discord 提供实时技术支持。<a href=\"https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">访问 reBot 官方 Wiki 文档中心 →</a>",
    faq_q9: "什么是 Sim-to-Real 仿真到现实？在购买硬件前可以先体验吗？",
    faq_a9: "Sim-to-Real 支持先在物理仿真中训练并验证控制策略，再无缝迁移至真实机械臂。无需购买硬件或配置环境，您现在即可在网页端免费体验交互式 MuJoCo 数字孪生仿真器。<a href=\"https://wiki.seeedstudio.com/rebot_arm_b601_rs_web_simulator_developer_guide/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">查看 Wiki 网页仿真器开发指南 →</a>",
    faq_q10: "发货与质保政策是什么样的？",
    faq_a10: "我们支持全球发货，订单通常在 3–5 个工作日内发出（多数地区 7–14 天送达）。每台 reBot Arm 均享 1 年有限硬件质保、开源结构件图纸以及官方技术团队支持。<a href=\"https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"faq-wiki-link\">查看 Wiki 售后与技术支持说明 →</a>",

    // News (live blog feed)
    news_title: "最新动态",
    news_subtitle: "Seeed Studio 博客实时更新 — 产品新闻、活动资讯与更多",
    news_loading: "正在加载最新动态...",
    news_error: "暂时无法加载新闻列表，点击重试，或前往博客查看完整内容。",
    news_viewall: "订阅 Seeed 机器人简报获取最新动态",
    news_readmore: "阅读全文",

    // Community & Footer
    community_title: "社区与开发者频道",
    footer_copyright: "© 2026 Seeed Studio & NVIDIA DLI | reBot Arm 项目"
  }
};

/* ==========================================================================
   News Feed — live fetch from the Seeed Studio Blog (WordPress REST API).
   Tags: 5679 = "robot-arm", 5540 = "reBot" (comma = OR). The endpoint
   sends permissive CORS headers, so it works directly from this static site.
   Posts are cached in sessionStorage for 10 minutes; the feed refreshes on
   every revisit. Falls back to a friendly error state (click to retry).
   ========================================================================== */
const NEWS_FEED_CONFIG = {
  endpoint: 'https://www.seeedstudio.com/blog/wp-json/wp/v2/posts?tags=5679,5540&per_page=4&_embed=1',
  snapshotUrl: './news_feed.json',
  fallbackUrl: 'https://www.seeedstudio.com/blog/tag/rebot/',
  cacheKey: 'rebot-news-feed-v2',
  cacheTtlMs: 10 * 60 * 1000,
  cardCount: 4
};

function stripHtmlTags(html) {
  const div = document.createElement('div');
  div.innerHTML = html || '';
  return (div.textContent || '').replace(/\s+/g, ' ').trim();
}

function resolveNewsImage(post) {
  const embedded = post._embedded && post._embedded['wp:featuredmedia'];
  if (embedded && embedded[0] && embedded[0].media_details && embedded[0].media_details.sizes) {
    const s = embedded[0].media_details.sizes;
    const pick = s.medium_large || s.medium || s.large || s.full;
    if (pick && pick.source_url) return pick.source_url;
  }
  const urls = post.featured_image_urls || {};
  const pick2 = urls.medium_large || urls.medium || urls.large || urls.full;
  if (Array.isArray(pick2) && pick2[0]) return pick2[0];
  return null;
}

function formatNewsDate(isoDate, lang) {
  try {
    const d = new Date(isoDate);
    if (isNaN(d.getTime())) return isoDate.slice(0, 10);
    return d.toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  } catch (_) {
    return isoDate.slice(0, 10);
  }
}

function isRendered(obj) {
  // WordPress REST objects carry { rendered }; snapshot posts carry plain strings.
  return obj && typeof obj === 'object' && 'rendered' in obj ? obj.rendered : obj;
}

function renderNewsCards(posts) {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  const isZh = (window.currentLang === 'zh') || document.body.classList.contains('lang-zh');
  const readMoreLabel = (i18nDict[isZh ? 'zh' : 'en'] && i18nDict[isZh ? 'zh' : 'en'].news_readmore) || 'Read More';
  const featuredLabel = isZh ? '精选动态' : 'Featured';
  const frag = document.createDocumentFragment();

  // Exactly 1 Big + 3 Small (4 cards total)
  const displayPosts = posts.slice(0, 4);

  displayPosts.forEach((post, index) => {
    const isFeatured = (index === 0);
    const imgUrl = (typeof post.image === 'string' && post.image) || resolveNewsImage(post);
    const title = stripHtmlTags(isRendered(post.title)) || 'Untitled';
    let excerpt = stripHtmlTags(isRendered(post.excerpt));
    if (!excerpt) {
      const body = isRendered(post.content);
      excerpt = stripHtmlTags(body).slice(0, 200);
    }
    const date = formatNewsDate(post.date, isZh ? 'zh' : 'en');

    const card = document.createElement('a');
    card.className = `news-card ${isFeatured ? 'featured' : 'compact'}`;
    card.href = post.link || NEWS_FEED_CONFIG.fallbackUrl;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    const media = document.createElement('div');
    media.className = 'news-card-media';
    if (imgUrl) {
      const im = document.createElement('img');
      im.src = imgUrl;
      im.alt = title;
      im.loading = 'lazy';
      im.decoding = 'async';
      media.appendChild(im);
    } else {
      const ph = document.createElement('div');
      ph.className = 'news-card-placeholder';
      ph.innerHTML = '<i class="fas fa-newspaper"></i>';
      media.appendChild(ph);
    }

    if (isFeatured) {
      const badge = document.createElement('span');
      badge.className = 'news-featured-badge';
      badge.innerHTML = `<i class="fas fa-bolt"></i> ${featuredLabel}`;
      media.appendChild(badge);
    }

    const body = document.createElement('div');
    body.className = 'news-card-body';
    body.innerHTML =
      '<span class="news-card-date"></span>' +
      '<h3 class="news-card-title"></h3>' +
      (excerpt ? '<p class="news-card-excerpt"></p>' : '') +
      '<span class="news-card-more"><span></span><i class="fas fa-arrow-right"></i></span>';
    body.querySelector('.news-card-date').textContent = date;
    body.querySelector('.news-card-title').textContent = title;
    const excerptEl = body.querySelector('.news-card-excerpt');
    if (excerptEl) excerptEl.textContent = excerpt;
    body.querySelector('.news-card-more span').textContent = readMoreLabel;

    card.appendChild(media);
    card.appendChild(body);
    frag.appendChild(card);
  });

  grid.appendChild(frag);
}

function renderNewsSkeletons(count = 4) {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  const frag = document.createDocumentFragment();
  const total = Math.min(count, 4);
  for (let i = 0; i < total; i++) {
    const isFeatured = (i === 0);
    const sk = document.createElement('div');
    sk.className = `news-skeleton ${isFeatured ? 'featured' : 'compact'}`;
    sk.innerHTML =
      '<div class="news-skeleton-media"></div>' +
      '<div class="news-skeleton-body">' +
      '<div class="news-skeleton-line w-40"></div>' +
      '<div class="news-skeleton-line"></div>' +
      '<div class="news-skeleton-line w-60"></div>' +
      '</div>';
    frag.appendChild(sk);
  }
  grid.appendChild(frag);
}

function clearNewsGrid() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  grid.querySelectorAll('.news-skeleton, .news-card').forEach(el => el.remove());
}

function initNewsFeed() {
  const grid = document.getElementById('news-grid');
  const loadingEl = document.getElementById('news-status-loading');
  const errorEl = document.getElementById('news-status-error');
  if (!grid) return;

  const showLoading = () => { if (loadingEl) loadingEl.hidden = false; if (errorEl) errorEl.hidden = true; };
  const showError = () => { if (loadingEl) loadingEl.hidden = true; if (errorEl) errorEl.hidden = false; };
  const showContent = () => { if (loadingEl) loadingEl.hidden = true; if (errorEl) errorEl.hidden = true; };

  const onFail = () => { clearNewsGrid(); showError(); };

  const render = posts => {
    clearNewsGrid();
    if (!Array.isArray(posts) || posts.length === 0) { onFail(); return; }
    showContent();
    renderNewsCards(posts);
  };

  if (errorEl && !errorEl._newsRetryBound) {
    errorEl._newsRetryBound = true;
    errorEl.addEventListener('click', load);
  }

  function load() {
    clearNewsGrid();
    showLoading();
    renderNewsSkeletons(NEWS_FEED_CONFIG.cardCount);

    // 1) fresh session cache (avoids refetching while the visitor is browsing)
    let cached = null;
    try {
      const raw = sessionStorage.getItem(NEWS_FEED_CONFIG.cacheKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.posts) && (Date.now() - parsed.ts) < NEWS_FEED_CONFIG.cacheTtlMs) {
          cached = parsed.posts;
        }
      }
    } catch (_) { /* private mode / quota — fall through to network */ }

    if (cached) { render(cached); return; }

    // 2) live fetch — when the blog's CORS headers are not browser-friendly
    //    (or the API is down), fall back to the bundled snapshot news_feed.json
    //    (refreshed by sync_news_feed.js), and only then show the error state.
    //    The live attempt gets a short timeout: a CORS-blocked request can take
    //    many seconds to fail on its own, and the snapshot should render fast.
    const fetchJson = (url, timeoutMs) => new Promise((resolve, reject) => {
      const ctrl2 = (typeof AbortController !== 'undefined') ? new AbortController() : null;
      const t = ctrl2 ? setTimeout(() => ctrl2.abort(), timeoutMs) : null;
      fetch(url, ctrl2 ? { signal: ctrl2.signal } : {})
        .then(resp => {
          if (!resp.ok) throw new Error('HTTP ' + resp.status);
          return resp.json();
        })
        .then(posts => { if (t) clearTimeout(t); resolve(posts); })
        .catch(err => { if (t) clearTimeout(t); reject(err); });
    });

    const saveCache = posts => {
      try {
        sessionStorage.setItem(NEWS_FEED_CONFIG.cacheKey, JSON.stringify({ ts: Date.now(), posts }));
      } catch (_) { /* quota exceeded — non-fatal */ }
    };

    const validPosts = posts => Array.isArray(posts) && posts.length > 0;

    fetchJson(NEWS_FEED_CONFIG.endpoint, 5000)
      .then(posts => {
        if (!validPosts(posts)) throw new Error('Bad payload');
        saveCache(posts);
        return posts;
      })
      .catch(() => fetchJson(NEWS_FEED_CONFIG.snapshotUrl, 8000).then(data => {
        // snapshot file is { generated, source, posts: [...] } — unwrap it
        if (Array.isArray(data)) return data;
        if (data && Array.isArray(data.posts)) return data.posts;
        throw new Error('Bad snapshot payload');
      }))
      .then(posts => {
        if (!validPosts(posts)) throw new Error('Bad payload');
        render(posts);
      })
      .catch(() => onFail());
  }

  load();
}

function initApp() {
  setupLanguageSelector();
  setupNavLinks();
  setupMobileMenu();
  setupSpecToggle();
  setupAccessoriesTabs();
  setup3DCardSpotlight();
  setupScrollAndEntranceAnimations();
  initDliCardAsciiBg();
  initHeroVideoBackground();
  initVideoViewportController();
  initSqueezeCarousel();
  initHeroSpecsCounter();
  initSenseCraftWorkflow();

  // Defer non-critical background scripts until the browser is idle, so the
  // Hero 3D entrance animation gets 100% CPU/GPU headroom on startup.
  const deferredInits = () => {
    setupNeuralParticleCanvas();
    initSmartBuyButton();
    initLazySimIframe();
    initSimJengaArmAnimation();
    initNewsFeed();
  };
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(deferredInits, { timeout: 5000 });
  } else {
    setTimeout(deferredInits, 2500);
  }
}

// Bootstraps initApp at the right moment for both sync and `defer` scripts.
// NOTE: with `defer`, readyState is 'interactive' during script evaluation,
// so initApp must NOT run synchronously here — top-level `let` bindings below
// (e.g. updateSqueezeLanguage) would still be in TDZ and throw ReferenceError.
if (document.readyState === 'complete') {
  initApp();
} else {
  document.addEventListener('DOMContentLoaded', initApp);
}

function setupLanguageSelector() {
  const langWrapper = document.getElementById('lang-dropdown-wrapper');
  const langBtn = document.getElementById('lang-selector-btn');
  const langMenu = document.getElementById('lang-dropdown-menu');
  const currentLangText = document.getElementById('current-lang-code');
  const langOptions = document.querySelectorAll('.lang-option-btn');

  if (!langWrapper || !langBtn || !langMenu) return;

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    // Close buy dropdown if open
    const buyWrapper = document.getElementById('buy-dropdown-wrapper');
    const buyMenu = document.getElementById('buy-dropdown-menu');
    if (buyMenu) buyMenu.classList.remove('active');
    if (buyWrapper) buyWrapper.classList.remove('open');

    // Close nav menu if open
    const navMenu = document.querySelector('.hub-nav-menu');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      if (mobileBtn) {
        const icon = mobileBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    }

    langMenu.classList.toggle('active');
    langWrapper.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!langWrapper.contains(e.target)) {
      langMenu.classList.remove('active');
      langWrapper.classList.remove('open');
    }
  });

  const savedLang = localStorage.getItem('rebot_lang') || 'en';
  setLanguage(savedLang);

  langOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = opt.getAttribute('data-lang');
      setLanguage(lang);
      localStorage.setItem('rebot_lang', lang);
      langMenu.classList.remove('active');
      langWrapper.classList.remove('open');
    });
  });

  function setLanguage(lang) {
    if (!i18nDict[lang]) return;
    window.currentLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    if (document.body) {
      document.body.classList.toggle('lang-zh', lang === 'zh');
    }
    const buyWrapper = document.getElementById('buy-dropdown-wrapper');
    const buyMenu = document.getElementById('buy-dropdown-menu');
    if (buyWrapper) buyWrapper.classList.remove('open');
    if (buyMenu) buyMenu.classList.remove('active');
    const heroLearnMoreBtn = document.getElementById('hero-learn-more-btn');
    if (heroLearnMoreBtn) {
      heroLearnMoreBtn.href = lang === 'zh'
        ? 'https://seeedstudio.world.tmall.com/shop/view_shop.htm?spm=a21xtw.29978516.0.0'
        : 'https://www.seeedstudio.com/';
    }
    try {
      if (typeof updateSqueezeLanguage === 'function') updateSqueezeLanguage();
    } catch (_) { /* not initialized yet (TDZ) — harmless */ }

    if (currentLangText) {
      currentLangText.textContent = lang === 'zh' ? '中文' : 'EN';
    }

    langOptions.forEach(opt => {
      if (opt.getAttribute('data-lang') === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18nDict[lang] && i18nDict[lang][key]) {
        const val = i18nDict[lang][key];
        const icon = el.querySelector('i');
        if (icon) {
          el.innerHTML = icon.outerHTML + ' ' + val;
        } else if (val.includes('<')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    const simIframe = document.getElementById('sim-mujoco-iframe');
    if (simIframe && simIframe.contentWindow) {
      simIframe.contentWindow.postMessage({ type: 'CHANGE_LANG', lang: lang }, '*');
    }
  }
}

function setupNavLinks() {
  const header = document.querySelector('.dli-header');
  if (header) {
    const updateHeaderScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    updateHeaderScroll();
    window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  }

  const links = document.querySelectorAll('.hub-nav-link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        links.forEach(l => l.classList.remove('active'));
        e.currentTarget.classList.add('active');
      }

      // Auto-close mobile dropdown when a link is clicked
      const navMenu = document.querySelector('.hub-nav-menu');
      const mobileBtnIcon = document.querySelector('.mobile-menu-btn i');
      if (navMenu && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        if (mobileBtnIcon) {
          mobileBtnIcon.className = 'fas fa-bars';
        }
      }
    });
  });
}

function setupMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.querySelector('.hub-nav-menu');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      // Close buy and lang dropdowns if open
      const buyWrapper = document.getElementById('buy-dropdown-wrapper');
      const buyMenu = document.getElementById('buy-dropdown-menu');
      if (buyMenu) buyMenu.classList.remove('active');
      if (buyWrapper) buyWrapper.classList.remove('open');

      const langWrapper = document.getElementById('lang-dropdown-wrapper');
      const langMenu = document.getElementById('lang-dropdown-menu');
      if (langMenu) langMenu.classList.remove('active');
      if (langWrapper) langWrapper.classList.remove('open');

      const isOpen = navMenu.classList.toggle('open');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        const icon = mobileBtn.querySelector('i');
        if (icon) {
          icon.className = 'fas fa-bars';
        }
      }
    });
  }
}

function setupSpecToggle() {
  const toggleBtn = document.getElementById('spec-fold-toggle-btn');
  const wrapper = document.getElementById('spec-collapsible-wrapper');
  if (toggleBtn && wrapper) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = wrapper.classList.toggle('expanded');
      toggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      const label = toggleBtn.querySelector('.toggle-text');
      const lang = window.currentLang || 'en';
      if (label) {
        if (isExpanded) {
          label.textContent = lang === 'zh' ? '收起完整规格参数' : 'Hide Detailed Specs';
        } else {
          label.textContent = lang === 'zh' ? '展开完整规格参数' : 'View Full Specs';
        }
      }
    });
  }

  const gsViewAllBtn = document.getElementById('gs-view-all-btn');
  const gsExtraTutorials = document.getElementById('gs-extra-tutorials');
  if (gsViewAllBtn && gsExtraTutorials) {
    gsViewAllBtn.addEventListener('click', () => {
      const isExpanded = gsExtraTutorials.classList.toggle('expanded');
      gsViewAllBtn.classList.toggle('expanded', isExpanded);
      gsViewAllBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      const label = gsViewAllBtn.querySelector('.toggle-text');
      const lang = window.currentLang || 'en';
      if (label) {
        if (isExpanded) {
          label.textContent = lang === 'zh' ? '收起资源与教程' : 'Hide Resources & Tutorials';
        } else {
          label.textContent = lang === 'zh' ? '查看全部资源与教程' : 'View All Resources & Tutorials';
        }
      }
    });
  }
}

function setupAccessoriesTabs() {
  const grids = Array.from(document.querySelectorAll('#accessories .acc-category-grid'));
  if (!grids.length) return;

  const states = grids.map((grid) => {
    const cards = Array.from(grid.children);
    const toggleRow = document.createElement('div');
    toggleRow.className = 'acc-category-toggle-row';
    toggleRow.style.display = 'none';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'gs-view-all-btn';
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span class="toggle-text" data-i18n="acc_view_all">View All</span> <i class="fas fa-chevron-down toggle-icon"></i>';
    toggleRow.appendChild(btn);

    grid.parentNode.insertBefore(toggleRow, grid.nextSibling);

    const state = { grid, cards, toggleRow, btn, expanded: false };

    btn.addEventListener('click', () => {
      state.expanded = !state.expanded;
      applyRowLimit(state);
    });

    return state;
  });

  function getColumnCount(grid) {
    const cols = window.getComputedStyle(grid).gridTemplateColumns;
    if (!cols || cols === 'none') return 4;
    return cols.trim().split(/\s+/).length || 4;
  }

  function applyRowLimit(state) {
    const { grid, cards, toggleRow, btn, expanded } = state;
    const cols = getColumnCount(grid);
    const maxVisible = cols * 2;
    const needsToggle = cards.length > maxVisible;

    cards.forEach((card, idx) => {
      if (!needsToggle || expanded || idx < maxVisible) {
        card.classList.remove('acc-card-hidden-row');
      } else {
        card.classList.add('acc-card-hidden-row');
      }
    });

    toggleRow.style.display = needsToggle ? 'flex' : 'none';
    btn.classList.toggle('expanded', expanded);
    btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');

    const label = btn.querySelector('.toggle-text');
    const lang = window.currentLang || 'en';
    if (label) {
      if (expanded) {
        label.setAttribute('data-i18n', 'acc_show_less');
        label.textContent = (typeof i18nDict !== 'undefined' && i18nDict[lang]?.acc_show_less) || 'Show Less';
      } else {
        label.setAttribute('data-i18n', 'acc_view_all');
        label.textContent = (typeof i18nDict !== 'undefined' && i18nDict[lang]?.acc_view_all) || 'View All';
      }
    }
  }

  function refreshAll() {
    states.forEach(applyRowLimit);
  }

  refreshAll();

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refreshAll, 120);
  });
}

/**
 * Developer Hub Navigation & Interaction Handlers
 */
function toggleHubAccordion(itemId) {
  // Developer Hub is permanently expanded
  const targetItem = document.getElementById(itemId);
  if (targetItem) {
    targetItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Open Co-Create / Custom Service Section & Scroll Smoothly
 */
function openCocreateAccordion() {
  const targetItem = document.getElementById('cocreate');
  if (!targetItem) return;

  targetItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * 3D Tilt & Cursor Spotlight Glow Tracking Handler for Product & Showcase Cards
 */
function setup3DCardSpotlight() {
  const cards = document.querySelectorAll('.product-summary-card, .accessory-card, .gs-info-card');

  cards.forEach(card => {
    // Add spotlight overlay element if not present
    if (!card.querySelector('.card-spotlight-glow')) {
      const spotlight = document.createElement('div');
      spotlight.className = 'card-spotlight-glow';
      card.appendChild(spotlight);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within card
      const y = e.clientY - rect.top;  // y position within card

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate subtle 3D rotate degrees (-5deg to +5deg)
      const rotateX = -((y - centerY) / centerY) * 5;
      const rotateY = ((x - centerX) / centerX) * 5;

      // Calculate mouse position percentage for CSS gradient
      const mouseXPercent = (x / rect.width) * 100;
      const mouseYPercent = (y / rect.height) * 100;

      card.style.setProperty('--mouse-x', `${mouseXPercent}%`);
      card.style.setProperty('--mouse-y', `${mouseYPercent}%`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
      card.style.boxShadow = `0 14px 32px rgba(0, 0, 0, 0.45), ${-rotateY}px ${rotateX}px 24px rgba(141, 195, 31, 0.08)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.boxShadow = '';
      card.style.setProperty('--mouse-x', `50%`);
      card.style.setProperty('--mouse-y', `50%`);
    });
  });
}

/**
 * AI Neural Network & Robotic Nodes Interactive Background Canvas Animation
 */
function setupNeuralParticleCanvas() {
  const canvas = document.createElement('canvas');
  canvas.id = 'neural-bg-canvas';
  canvas.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 0; opacity: 0.65; transition: opacity 0.5s ease;';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  let mouse = { x: null, y: null, radius: 190 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  });

  let particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 18000), 65);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2.2 + 1.5;
      this.color = '141, 195, 31';
      this.baseAlpha = Math.random() * 0.4 + 0.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactive push/attract physics
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 1.6;
          this.y -= Math.sin(angle) * force * 1.6;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.baseAlpha})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(${this.color}, 0.7)`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function connectParticles() {
    const maxDist = 155;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.42;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(141, 195, 31, ${opacity})`;
          ctx.lineWidth = 1.0;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    connectParticles();
    requestAnimationFrame(animate);
  }

  initParticles();
  animate();
}

/**
 * Entrance & Scroll-Driven Reveal Animations via IntersectionObserver & ScrollSpy
 */
function setupScrollAndEntranceAnimations() {
  // 1. Hero Staggered Entrance
  setTimeout(() => {
    document.querySelectorAll('.hero-main-title, .hero-sub-text, .unitree-hero-title, .unitree-hero-description').forEach((el) => {
      el.classList.add('is-visible');
    });
  }, 50);

  // 2. Unified, Fast Reveal-on-Scroll Across ALL Sections
  const revealElements = document.querySelectorAll(
    '.section-title-group, .swiss-scenarios-grid, .sim-experience-card, .dev-hub-grid, .squeeze-carousel, .sensecraft-card, .spec-card, .lab-tier-grid, .accessory-card, .faq-accordion, .news-grid, .community-channels-section'
  );

  const observerOptions = {
    root: null,
    rootMargin: '120px 0px 40px 0px', // Trigger ahead of entering viewport so content is ready
    threshold: 0.02
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const initialViewportLimit = window.innerHeight + 150;

  revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    // If element is already in/near viewport on initial load, show immediately without delay
    const rect = el.getBoundingClientRect();
    if (rect.top <= initialViewportLimit) {
      el.classList.add('is-visible');
    } else {
      revealObserver.observe(el);
    }
  });

  // 3. Navbar ScrollSpy Auto-Highlighting
  setupScrollSpy();
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.hub-nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 220;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// DLI Course Card ASCII Breathing Field Background Engine
function initDliCardAsciiBg() {
  const canvas = document.getElementById('dli-card-ascii-canvas');
  if (!canvas) return;

  const PALETTE = '   ...:::---+++***◦◦••▢▣';
  const CELL = 16;
  const FONT_SIZE = 13;
  let ctx, w, h;

  function setup() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 4 || rect.height < 4) return false;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    w = rect.width;
    h = rect.height;
    ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = `500 ${FONT_SIZE}px "Montserrat", monospace`;
    ctx.textBaseline = 'top';
    return true;
  }

  function draw(t) {
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    const cols = Math.ceil(w / CELL);
    const rows = Math.ceil(h / CELL);

    for (let r = 0; r < rows; r++) {
      for (let cc = 0; cc < cols; cc++) {
        const n = (
          Math.sin(cc * 0.18 + t) +
          Math.sin(r * 0.24 - t * 0.7) +
          Math.sin((cc + r) * 0.12 + t * 0.45) +
          Math.sin(Math.hypot(cc - cols * 0.5, r - rows * 0.5) * 0.16 - t * 0.55)
        ) / 4;
        const v = (n + 1) / 2;
        if (v < 0.22) continue;
        const idx = Math.min(PALETTE.length - 1, Math.floor(v * PALETTE.length));
        const ch = PALETTE[idx];
        if (ch === ' ') continue;

        const alpha = (0.08 + (v - 0.22) * 0.55);
        ctx.fillStyle = `rgba(141, 195, 31, ${alpha.toFixed(3)})`;
        ctx.fillText(ch, cc * CELL, r * CELL);
      }
    }
  }

  let pending = null;
  window.addEventListener('resize', () => {
    if (pending) cancelAnimationFrame(pending);
    pending = requestAnimationFrame(setup);
  }, { passive: true });

  let t0 = performance.now();
  let isCanvasVisible = false;
  setup();

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const wasVisible = isCanvasVisible;
        isCanvasVisible = entry.isIntersecting;
        if (!wasVisible && isCanvasVisible) {
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.05 });
    observer.observe(canvas);
  } else {
    isCanvasVisible = true;
    requestAnimationFrame(tick);
  }

  function tick(now) {
    if (!isCanvasVisible) return;
    requestAnimationFrame(tick);

    if (w >= 4 && h >= 4) {
      const t = (now - t0) / 1000 * 0.55;
      draw(t);
    }
  }
}

/**
 * Navigation Buy Button & Dropdown Handler
 * English mode: Provides dropdown selection for: 1. Bazaar, 2. Amazon, 3. AliExpress
 * Chinese mode: Directly jumps to Bazaar (https://www.seeedstudio.com/)
 */
function initSmartBuyButton() {
  const buyWrapper = document.getElementById('buy-dropdown-wrapper');
  const buyBtn = document.getElementById('nav-buy-now-btn');
  const buyMenu = document.getElementById('buy-dropdown-menu');
  if (!buyBtn) return;

  const BAZAAR_URL = "https://www.seeedstudio.com/";

  // Click handler on the Buy Now button: toggle dropdown on click (no hover)
  buyBtn.addEventListener('click', (e) => {
    const isZh = (window.currentLang === 'zh') || document.body.classList.contains('lang-zh');
    if (isZh) {
      // In Chinese mode: directly navigate to Bazaar
      e.preventDefault();
      window.open(BAZAAR_URL, '_blank', 'noopener,noreferrer');
      return;
    }

    // In English mode: toggle dropdown on click
    e.preventDefault();
    e.stopPropagation();

    // Close language dropdown if open
    const langWrapper = document.getElementById('lang-dropdown-wrapper');
    const langMenu = document.getElementById('lang-dropdown-menu');
    if (langMenu) langMenu.classList.remove('active');
    if (langWrapper) langWrapper.classList.remove('open');

    // Close nav menu if open
    const navMenu = document.querySelector('.hub-nav-menu');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      if (mobileBtn) {
        const icon = mobileBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    }

    if (buyMenu && buyWrapper) {
      buyMenu.classList.toggle('active');
      buyWrapper.classList.toggle('open');
    }
  });

  // Close dropdown menu when clicking outside
  document.addEventListener('click', (e) => {
    if (buyWrapper && !buyWrapper.contains(e.target)) {
      if (buyMenu) buyMenu.classList.remove('active');
      buyWrapper.classList.remove('open');
    }
  });

  // Close dropdown menu after choosing an option
  if (buyMenu) {
    buyMenu.querySelectorAll('.buy-dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        buyMenu.classList.remove('active');
        if (buyWrapper) buyWrapper.classList.remove('open');
      });
    });
  }
}

/**
 * Hero Background Video Manager
 * Controls the muted looping banner video playback lifecycle: pause/resume
 * when scrolled off-screen and on tab visibility changes (CPU/battery).
 */
function initHeroVideoBackground() {
  const vid = document.getElementById('hero-bg-video');
  if (!vid) return;

  // Pause when the hero scrolls out of view, resume when it returns.
  if ('IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const p = vid.play();
          if (p && typeof p.catch === 'function') p.catch(() => { });
        } else {
          vid.pause();
        }
      });
    }, { rootMargin: '20% 0px' });
    heroObserver.observe(vid);
  }

  // Some mobile browsers block autoplay until the first user gesture.
  const tryPlay = () => {
    const p = vid.play();
    if (p && typeof p.catch === 'function') p.catch(() => { });
  };
  if (vid.paused) tryPlay();
  window.addEventListener('touchstart', tryPlay, { once: true, passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) vid.pause();
  });
}


/**
 * Lightweight Three.js + Physics Dynamics Engine for Quick Sim-to-Real Sandbox
 * Instant startup (<30ms), zero WASM download delay, 100% smooth real rigid-body physics pick-and-place Jenga simulation.
 */
function initSimJengaArmAnimation() {
  const canvas = document.getElementById('sim-jenga-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const container = canvas.parentElement || document.body;
  const scene = new THREE.Scene();

  const getW = () => container.clientWidth || 600;
  const getH = () => container.clientHeight || 460;

  const camera = new THREE.PerspectiveCamera(34, getW() / getH(), 0.1, 1000);
  camera.position.set(0, 1.15, 7.2);
  camera.lookAt(0, -0.05, 0);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(getW(), getH());
  renderer.setClearColor(0xF8FAFC, 1.0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  // Studio Lighting Setup
  const ambient = new THREE.AmbientLight(0xffffff, 1.4);
  scene.add(ambient);

  const mainLight = new THREE.DirectionalLight(0xffffff, 2.2);
  mainLight.position.set(6, 9, 7);
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0xF1F5F9, 0.9);
  fillLight.position.set(-6, 6, -3);
  scene.add(fillLight);

  // Materials
  const metalMat = new THREE.MeshStandardMaterial({ color: 0xE2E8F0, roughness: 0.25, metalness: 0.72 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x232323, roughness: 0.32, metalness: 0.75 });
  const brandGreenMat = new THREE.MeshStandardMaterial({ color: 0x99DA00, roughness: 0.35, metalness: 0.0 });

  // Clean Light Studio Table Platform
  const tableGeo = new THREE.BoxGeometry(4.8, 0.08, 3.5);
  const tableMat = new THREE.MeshStandardMaterial({ color: 0xE2E8F0, roughness: 0.4, metalness: 0.15 });
  const tableMesh = new THREE.Mesh(tableGeo, tableMat);
  tableMesh.position.set(0, -0.78, 0);
  scene.add(tableMesh);

  // Soft Radial Floor Shadow
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 256;
  shadowCanvas.height = 256;
  const ctx = shadowCanvas.getContext('2d');
  const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, 'rgba(0,0,0,0.45)');
  grad.addColorStop(0.5, 'rgba(0,0,0,0.12)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);
  const shadowTex = new THREE.CanvasTexture(shadowCanvas);

  const floorShadow = new THREE.Mesh(
    new THREE.PlaneGeometry(2.5, 2.5),
    new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.65 })
  );
  floorShadow.rotation.x = -Math.PI / 2;
  floorShadow.position.set(-0.65, -0.73, 0);
  scene.add(floorShadow);

  // Robotic Arm Assembly Group
  const armGroup = new THREE.Group();
  armGroup.position.set(-0.65, -0.74, 0);
  scene.add(armGroup);

  const armScale = 2.6;
  const armSubGroup = new THREE.Group();
  armSubGroup.scale.set(armScale, armScale, armScale);
  armSubGroup.rotation.x = -Math.PI / 2;
  armGroup.add(armSubGroup);

  // 10-Node URDF Kinematic Joint Tree Hierarchy (Full reBot Arm B601-RS Model)
  const baseLinkGroup = new THREE.Group();
  armSubGroup.add(baseLinkGroup);

  const j1Node = new THREE.Group();
  j1Node.position.set(-0.0003428, -0.0009868, 0.075);
  baseLinkGroup.add(j1Node);
  const j1Axis = new THREE.Group();
  j1Node.add(j1Axis);
  const link1Group = new THREE.Group();
  j1Axis.add(link1Group);

  const j2Node = new THREE.Group();
  j2Node.position.set(0.020343, 0.027237, 0.07);
  j2Node.quaternion.set(-0.7071081, 0, 0, 0.7071055);
  link1Group.add(j2Node);
  const j2Axis = new THREE.Group();
  j2Node.add(j2Axis);
  const link2Group = new THREE.Group();
  j2Axis.add(link2Group);

  const j3Node = new THREE.Group();
  j3Node.position.set(-0.236, 0, 0);
  link2Group.add(j3Node);
  const j3Axis = new THREE.Group();
  j3Node.add(j3Axis);
  const link3Group = new THREE.Group();
  j3Axis.add(link3Group);

  const j4Node = new THREE.Group();
  j4Node.position.set(0.228, -0.072746, 0.0045);
  link3Group.add(j4Node);
  const j4Axis = new THREE.Group();
  j4Node.add(j4Axis);
  const link4Group = new THREE.Group();
  j4Axis.add(link4Group);

  const j5Node = new THREE.Group();
  j5Node.position.set(0.087, -0.048, -0.03075);
  j5Node.quaternion.set(-0.7071081, 0, 0, 0.7071055);
  link4Group.add(j5Node);
  const j5Axis = new THREE.Group();
  j5Node.add(j5Axis);
  const link5Group = new THREE.Group();
  j5Axis.add(link5Group);

  const j6Node = new THREE.Group();
  j6Node.position.set(0.0365, 0, 0.048);
  j6Node.quaternion.set(0, 0.7071081, 0, 0.7071055);
  link5Group.add(j6Node);
  const j6Axis = new THREE.Group();
  j6Node.add(j6Axis);
  const link6Group = new THREE.Group();
  j6Axis.add(link6Group);

  const gripperEndNode = new THREE.Group();
  gripperEndNode.position.set(0, 0, 0.16621);
  gripperEndNode.quaternion.set(0.7071055, 0.0000026, 0.7071081, -0.0000026);
  link6Group.add(gripperEndNode);
  const gripperEndGroup = new THREE.Group();
  gripperEndNode.add(gripperEndGroup);

  const gripperLeftNode = new THREE.Group();
  gripperLeftNode.position.set(-0.041939, -0.0000734, 0);
  gripperLeftNode.quaternion.set(0.5, -0.5, 0.5000018, 0.4999982);
  gripperEndGroup.add(gripperLeftNode);
  const gripperLeftGroup = new THREE.Group();
  gripperLeftNode.add(gripperLeftGroup);

  const gripperRightNode = new THREE.Group();
  gripperRightNode.position.set(-0.041939, 0.0000734, 0);
  gripperRightNode.quaternion.set(-0.5, -0.5, -0.5000018, 0.4999982);
  gripperEndGroup.add(gripperRightNode);
  const gripperRightGroup = new THREE.Group();
  gripperRightNode.add(gripperRightGroup);

  // Load All 19 Official Brand reBot B601-RS STL Composite Sub-Meshes
  if (typeof THREE.STLLoader !== 'undefined') {
    const stlLoader = new THREE.STLLoader();
    const loadSubMesh = (path, mat, targetGroup, renderOrder = 0) => {
      stlLoader.load(path, (geo) => {
        geo.computeVertexNormals();
        const mesh = new THREE.Mesh(geo, mat);
        if (renderOrder) mesh.renderOrder = renderOrder;
        targetGroup.add(mesh);
      });
    };

    loadSubMesh('models/meshes_rs/base_link.STL', darkMat, baseLinkGroup);
    loadSubMesh('models/meshes_rs/link1.STL', metalMat, link1Group);
    loadSubMesh('models/meshes_rs/motor_2_3.STL', darkMat, link2Group);
    loadSubMesh('models/meshes_rs/cnc2.STL', metalMat, link2Group);
    loadSubMesh('models/meshes_rs/pla2_black.STL', darkMat, link2Group);
    loadSubMesh('models/meshes_rs/pla2_green.STL', brandGreenMat, link2Group, 10);
    loadSubMesh('models/meshes_rs/cnc3.STL', metalMat, link3Group);
    loadSubMesh('models/meshes_rs/motor_4.STL', darkMat, link3Group);
    loadSubMesh('models/meshes_rs/pla3_black_without_seeed_badge.STL', darkMat, link3Group);
    loadSubMesh('models/meshes_rs/pla3_seeed_badge_with_counters.STL', brandGreenMat, link3Group, 10);
    loadSubMesh('models/meshes_rs/pla3_seeed_wordmark_backing.STL', darkMat, link3Group);
    loadSubMesh('models/meshes_rs/pla3_green.STL', brandGreenMat, link3Group, 10);
    loadSubMesh('models/meshes_rs/cnc4.STL', metalMat, link4Group);
    loadSubMesh('models/meshes_rs/motor_5.STL', darkMat, link4Group);
    loadSubMesh('models/meshes_rs/cnc5.STL', metalMat, link5Group);
    loadSubMesh('models/meshes_rs/motor_6.STL', darkMat, link5Group);
    loadSubMesh('models/meshes_rs/pla5_green.STL', brandGreenMat, link5Group, 10);
    loadSubMesh('models/meshes_rs/link6.STL', darkMat, link6Group);
    loadSubMesh('models/meshes_rs/pla7_green.STL', brandGreenMat, gripperEndGroup, 10);
    loadSubMesh('models/meshes_rs/cnc7.STL', metalMat, gripperEndGroup);
    loadSubMesh('models/meshes_rs/motor_7.STL', darkMat, gripperEndGroup);
    loadSubMesh('models/meshes_rs/cnc_left.STL', metalMat, gripperLeftGroup);
    loadSubMesh('models/meshes_rs/pla_left.STL', brandGreenMat, gripperLeftGroup, 10);
    loadSubMesh('models/meshes_rs/cnc_right.STL', metalMat, gripperRightGroup);
    loadSubMesh('models/meshes_rs/pla_right.STL', brandGreenMat, gripperRightGroup, 10);
  }

  // 3-Color Physics Rigid-Body Wooden Blocks (Red, Yellow, Blue)
  const blockGeo = new THREE.BoxGeometry(0.36, 0.09, 0.16);

  const redMat = new THREE.MeshStandardMaterial({ color: 0xEF4444, roughness: 0.35, metalness: 0.1 });
  const yellowMat = new THREE.MeshStandardMaterial({ color: 0xF59E0B, roughness: 0.35, metalness: 0.1 });
  const blueMat = new THREE.MeshStandardMaterial({ color: 0x3B82F6, roughness: 0.35, metalness: 0.1 });

  const blockRed = new THREE.Mesh(blockGeo, redMat);
  const blockYellow = new THREE.Mesh(blockGeo, yellowMat);
  const blockBlue = new THREE.Mesh(blockGeo, blueMat);

  scene.add(blockRed);
  scene.add(blockYellow);
  scene.add(blockBlue);

  // Table Positions for 3 Blocks
  const POS_RED_TABLE = new THREE.Vector3(-0.35, -0.735, 0.55);
  const POS_YELLOW_TABLE = new THREE.Vector3(-0.08, -0.735, 0.60);
  const POS_BLUE_TABLE = new THREE.Vector3(0.18, -0.735, 0.55);

  // Target Stacking Positions (Base, Layer 2, Layer 3)
  const POS_STACK_1 = new THREE.Vector3(0.60, -0.735, 0.25);
  const POS_STACK_2 = new THREE.Vector3(0.60, -0.645, 0.25);
  const POS_STACK_3 = new THREE.Vector3(0.60, -0.555, 0.25);

  // Physics Bodies State with Rigid Attachment & Precision Clamp
  class PhysicsBody {
    constructor(mesh, initialPos) {
      this.mesh = mesh;
      this.position = initialPos.clone();
      this.targetPos = initialPos.clone();
      this.velocity = new THREE.Vector3();
      this.quaternion = new THREE.Quaternion();
      this.targetQuaternion = new THREE.Quaternion();
      this.isAttached = false;
      this.attachOffset = new THREE.Vector3(0, -0.06, 0);
    }

    update(dt, gripperMesh) {
      if (this.isAttached && gripperMesh) {
        const worldPos = new THREE.Vector3();
        const worldQuat = new THREE.Quaternion();
        gripperMesh.getWorldPosition(worldPos);
        gripperMesh.getWorldQuaternion(worldQuat);

        // Apply local offset relative to end effector
        const offset = this.attachOffset.clone().applyQuaternion(worldQuat);
        this.position.copy(worldPos).add(offset);
        this.quaternion.copy(worldQuat).multiply(rotHorizontal);

        this.mesh.position.copy(this.position);
        this.mesh.quaternion.copy(this.quaternion);
        this.velocity.set(0, 0, 0);
        return;
      }

      const diffPos = this.targetPos.clone().sub(this.position);
      this.velocity.add(diffPos.multiplyScalar(35 * dt));
      this.velocity.multiplyScalar(Math.pow(0.55, dt * 60));
      this.position.add(this.velocity.clone().multiplyScalar(dt));

      this.mesh.position.copy(this.position);
      this.quaternion.slerp(this.targetQuaternion, Math.min(1.0, 25 * dt));
      this.mesh.quaternion.copy(this.quaternion);
    }

    reset(pos) {
      this.isAttached = false;
      this.position.copy(pos);
      this.targetPos.copy(pos);
      this.velocity.set(0, 0, 0);
      this.quaternion.identity();
      this.targetQuaternion.identity();
      this.mesh.position.copy(pos);
      this.mesh.quaternion.identity();
    }
  }

  const physRed = new PhysicsBody(blockRed, POS_RED_TABLE);
  const physYellow = new PhysicsBody(blockYellow, POS_YELLOW_TABLE);
  const physBlue = new PhysicsBody(blockBlue, POS_BLUE_TABLE);

  const rotHorizontal = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, 0));
  const rotZero = new THREE.Quaternion();

  let isStackingActive = true;
  let animTime = 0;
  const loopDuration = 15.0;

  // Helper for smooth cosine interpolation between keyframes
  function smoothStep(t) {
    return 0.5 - 0.5 * Math.cos(Math.max(0, Math.min(1, t)) * Math.PI);
  }

  function lerp(a, b, t) {
    return a + (b - a) * smoothStep(t);
  }

  // Attach button event listeners for 叠叠乐 & 重置
  const btnJenga = document.getElementById('sim-btn-jenga');
  const btnReset = document.getElementById('sim-btn-reset');

  if (btnJenga) {
    btnJenga.addEventListener('click', () => {
      animTime = 0;
      isStackingActive = true;
      physRed.reset(POS_RED_TABLE);
      physYellow.reset(POS_YELLOW_TABLE);
      physBlue.reset(POS_BLUE_TABLE);
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      isStackingActive = false;
      animTime = 0;
      physRed.reset(POS_RED_TABLE);
      physYellow.reset(POS_YELLOW_TABLE);
      physBlue.reset(POS_BLUE_TABLE);
    });
  }

  function handleResize() {
    if (!container) return;
    const w = getW();
    const h = getH();
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  window.addEventListener('resize', handleResize, { passive: true });

  const gripperWorldPos = new THREE.Vector3();
  let isJengaCanvasVisible = false;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const wasVisible = isJengaCanvasVisible;
        isJengaCanvasVisible = entry.isIntersecting;
        if (!wasVisible && isJengaCanvasVisible) {
          lastTime = performance.now();
          requestAnimationFrame(animatePhysicsSimulation);
        }
      });
    }, { threshold: 0.05 });
    observer.observe(canvas);
  } else {
    isJengaCanvasVisible = true;
    requestAnimationFrame(animatePhysicsSimulation);
  }

  function animatePhysicsSimulation() {
    if (!isJengaCanvasVisible) return;
    requestAnimationFrame(animatePhysicsSimulation);

    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    let targetJ1 = 0, targetJ2 = 0, targetJ3 = 0, targetJ4 = 0;
    let clawSlide = 0.026;

    gripperEndGroup.getWorldPosition(gripperWorldPos);

    if (isStackingActive) {
      animTime += dt;
      const cycleTime = animTime % loopDuration;

      if (cycleTime < 0.4) {
        // Initial Home Stance
        targetJ1 = 0; targetJ2 = 0; targetJ3 = 0; targetJ4 = 0;
        clawSlide = 0.026;
        physRed.isAttached = false; physYellow.isAttached = false; physBlue.isAttached = false;
        physRed.targetPos.copy(POS_RED_TABLE); physRed.targetQuaternion.copy(rotZero);
        physYellow.targetPos.copy(POS_YELLOW_TABLE); physYellow.targetQuaternion.copy(rotZero);
        physBlue.targetPos.copy(POS_BLUE_TABLE); physBlue.targetQuaternion.copy(rotZero);
      }
      else if (cycleTime < 4.8) {
        // ==========================================
        // TASK 1: RED BLOCK (Touchdown -> Clamp -> Lift -> Swing -> Dip -> Release -> Retract)
        // ==========================================
        physYellow.targetPos.copy(POS_YELLOW_TABLE); physYellow.targetQuaternion.copy(rotZero);
        physBlue.targetPos.copy(POS_BLUE_TABLE); physBlue.targetQuaternion.copy(rotZero);

        if (cycleTime < 1.2) {
          // Stage 1: Approach Above Red Table
          const t = (cycleTime - 0.4) / 0.8;
          targetJ1 = lerp(0, -0.75, t);
          targetJ2 = lerp(0, 0.55, t);
          targetJ3 = lerp(0, -0.70, t);
          targetJ4 = lerp(0, 0.15, t);
          clawSlide = 0.026;
          physRed.isAttached = false;
          physRed.targetPos.copy(POS_RED_TABLE); physRed.targetQuaternion.copy(rotZero);
        } else if (cycleTime < 1.8) {
          // Stage 2: Touchdown on Table Surface
          const t = (cycleTime - 1.2) / 0.6;
          targetJ1 = -0.75;
          targetJ2 = lerp(0.55, 0.92, t);
          targetJ3 = lerp(-0.70, -1.12, t);
          targetJ4 = lerp(0.15, 0.20, t);
          clawSlide = lerp(0.026, -0.005, t);
          physRed.isAttached = false;
          physRed.targetPos.copy(POS_RED_TABLE); physRed.targetQuaternion.copy(rotZero);
        } else if (cycleTime < 2.1) {
          // Stage 3: Clamp & Lock Attachment
          targetJ1 = -0.75; targetJ2 = 0.92; targetJ3 = -1.12; targetJ4 = 0.20;
          clawSlide = -0.005;
          physRed.isAttached = true; // Locked to jaws on the table
        } else if (cycleTime < 2.7) {
          // Stage 4: Lift Block Up into Air
          const t = (cycleTime - 2.1) / 0.6;
          targetJ1 = -0.75;
          targetJ2 = lerp(0.92, 0.45, t);
          targetJ3 = lerp(-1.12, -0.60, t);
          targetJ4 = lerp(0.20, 0.15, t);
          clawSlide = -0.005;
          physRed.isAttached = true;
        } else if (cycleTime < 3.4) {
          // Stage 5: Swing Arm to Stack Position
          const t = (cycleTime - 2.7) / 0.7;
          targetJ1 = lerp(-0.75, 0.55, t);
          targetJ2 = 0.45; targetJ3 = -0.60; targetJ4 = 0.15;
          clawSlide = -0.005;
          physRed.isAttached = true;
        } else if (cycleTime < 4.0) {
          // Stage 6: Dip Down to Stack 1 Surface
          const t = (cycleTime - 3.4) / 0.6;
          targetJ1 = 0.55;
          targetJ2 = lerp(0.45, 0.88, t);
          targetJ3 = lerp(-0.60, -1.08, t);
          targetJ4 = lerp(0.15, 0.20, t);
          clawSlide = lerp(-0.005, 0.026, t);
          physRed.isAttached = (t < 0.8);
          if (!physRed.isAttached) {
            physRed.position.copy(POS_STACK_1); physRed.targetPos.copy(POS_STACK_1); physRed.targetQuaternion.copy(rotHorizontal);
          }
        } else if (cycleTime < 4.3) {
          // Stage 7: Release & Unattach
          targetJ1 = 0.55; targetJ2 = 0.88; targetJ3 = -1.08; targetJ4 = 0.20;
          clawSlide = 0.026;
          physRed.isAttached = false;
          physRed.position.copy(POS_STACK_1); physRed.targetPos.copy(POS_STACK_1); physRed.targetQuaternion.copy(rotHorizontal);
        } else {
          // Stage 8: Retract Arm Up
          const t = (cycleTime - 4.3) / 0.5;
          targetJ1 = 0.55;
          targetJ2 = lerp(0.88, 0.45, t);
          targetJ3 = lerp(-1.08, -0.60, t);
          targetJ4 = lerp(0.20, 0.15, t);
          clawSlide = 0.026;
          physRed.isAttached = false;
          physRed.targetPos.copy(POS_STACK_1); physRed.targetQuaternion.copy(rotHorizontal);
        }
      }
      else if (cycleTime < 9.2) {
        // ==========================================
        // TASK 2: YELLOW BLOCK
        // ==========================================
        physRed.isAttached = false;
        physRed.targetPos.copy(POS_STACK_1); physRed.targetQuaternion.copy(rotHorizontal);
        physBlue.targetPos.copy(POS_BLUE_TABLE); physBlue.targetQuaternion.copy(rotZero);

        if (cycleTime < 5.6) {
          // Stage 1: Approach Above Yellow Table
          const t = (cycleTime - 4.8) / 0.8;
          targetJ1 = lerp(0.55, -0.52, t);
          targetJ2 = lerp(0.45, 0.55, t);
          targetJ3 = lerp(-0.60, -0.70, t);
          targetJ4 = 0.15;
          clawSlide = 0.026;
          physYellow.isAttached = false;
          physYellow.targetPos.copy(POS_YELLOW_TABLE); physYellow.targetQuaternion.copy(rotZero);
        } else if (cycleTime < 6.2) {
          // Stage 2: Touchdown on Yellow Table
          const t = (cycleTime - 5.6) / 0.6;
          targetJ1 = -0.52;
          targetJ2 = lerp(0.55, 0.94, t);
          targetJ3 = lerp(-0.70, -1.16, t);
          targetJ4 = lerp(0.15, 0.22, t);
          clawSlide = lerp(0.026, -0.005, t);
          physYellow.isAttached = false;
          physYellow.targetPos.copy(POS_YELLOW_TABLE); physYellow.targetQuaternion.copy(rotZero);
        } else if (cycleTime < 6.5) {
          // Stage 3: Clamp & Lock Attachment
          targetJ1 = -0.52; targetJ2 = 0.94; targetJ3 = -1.16; targetJ4 = 0.22;
          clawSlide = -0.005;
          physYellow.isAttached = true;
        } else if (cycleTime < 7.1) {
          // Stage 4: Lift Up
          const t = (cycleTime - 6.5) / 0.6;
          targetJ1 = -0.52;
          targetJ2 = lerp(0.94, 0.45, t);
          targetJ3 = lerp(-1.16, -0.60, t);
          targetJ4 = lerp(0.22, 0.15, t);
          clawSlide = -0.005;
          physYellow.isAttached = true;
        } else if (cycleTime < 7.8) {
          // Stage 5: Swing Arm to Stack
          const t = (cycleTime - 7.1) / 0.7;
          targetJ1 = lerp(-0.52, 0.55, t);
          targetJ2 = 0.45; targetJ3 = -0.60; targetJ4 = 0.15;
          clawSlide = -0.005;
          physYellow.isAttached = true;
        } else if (cycleTime < 8.4) {
          // Stage 6: Dip Down to Stack 2 Surface (Top of Red Block)
          const t = (cycleTime - 7.8) / 0.6;
          targetJ1 = 0.55;
          targetJ2 = lerp(0.45, 0.78, t);
          targetJ3 = lerp(-0.60, -0.98, t);
          targetJ4 = lerp(0.15, 0.20, t);
          clawSlide = lerp(-0.005, 0.026, t);
          physYellow.isAttached = (t < 0.8);
          if (!physYellow.isAttached) {
            physYellow.position.copy(POS_STACK_2); physYellow.targetPos.copy(POS_STACK_2); physYellow.targetQuaternion.copy(rotHorizontal);
          }
        } else if (cycleTime < 8.7) {
          // Stage 7: Release & Unattach
          targetJ1 = 0.55; targetJ2 = 0.78; targetJ3 = -0.98; targetJ4 = 0.20;
          clawSlide = 0.026;
          physYellow.isAttached = false;
          physYellow.position.copy(POS_STACK_2); physYellow.targetPos.copy(POS_STACK_2); physYellow.targetQuaternion.copy(rotHorizontal);
        } else {
          // Stage 8: Retract Arm Up
          const t = (cycleTime - 8.7) / 0.5;
          targetJ1 = 0.55;
          targetJ2 = lerp(0.78, 0.45, t);
          targetJ3 = lerp(-0.98, -0.60, t);
          targetJ4 = lerp(0.20, 0.15, t);
          clawSlide = 0.026;
          physYellow.isAttached = false;
          physYellow.targetPos.copy(POS_STACK_2); physYellow.targetQuaternion.copy(rotHorizontal);
        }
      }
      else if (cycleTime < 13.8) {
        // ==========================================
        // TASK 3: BLUE BLOCK
        // ==========================================
        physRed.isAttached = false; physYellow.isAttached = false;
        physRed.targetPos.copy(POS_STACK_1); physRed.targetQuaternion.copy(rotHorizontal);
        physYellow.targetPos.copy(POS_STACK_2); physYellow.targetQuaternion.copy(rotHorizontal);

        if (cycleTime < 10.0) {
          // Stage 1: Approach Above Blue Table
          const t = (cycleTime - 9.2) / 0.8;
          targetJ1 = lerp(0.55, -0.30, t);
          targetJ2 = lerp(0.45, 0.55, t);
          targetJ3 = lerp(-0.60, -0.70, t);
          targetJ4 = 0.15;
          clawSlide = 0.026;
          physBlue.isAttached = false;
          physBlue.targetPos.copy(POS_BLUE_TABLE); physBlue.targetQuaternion.copy(rotZero);
        } else if (cycleTime < 10.6) {
          // Stage 2: Touchdown on Blue Table
          const t = (cycleTime - 10.0) / 0.6;
          targetJ1 = -0.30;
          targetJ2 = lerp(0.55, 0.92, t);
          targetJ3 = lerp(-0.70, -1.14, t);
          targetJ4 = lerp(0.15, 0.22, t);
          clawSlide = lerp(0.026, -0.005, t);
          physBlue.isAttached = false;
          physBlue.targetPos.copy(POS_BLUE_TABLE); physBlue.targetQuaternion.copy(rotZero);
        } else if (cycleTime < 10.9) {
          // Stage 3: Clamp & Lock Attachment
          targetJ1 = -0.30; targetJ2 = 0.92; targetJ3 = -1.14; targetJ4 = 0.22;
          clawSlide = -0.005;
          physBlue.isAttached = true;
        } else if (cycleTime < 11.5) {
          // Stage 4: Lift Up
          const t = (cycleTime - 10.9) / 0.6;
          targetJ1 = -0.30;
          targetJ2 = lerp(0.92, 0.45, t);
          targetJ3 = lerp(-1.14, -0.60, t);
          targetJ4 = lerp(0.22, 0.15, t);
          clawSlide = -0.005;
          physBlue.isAttached = true;
        } else if (cycleTime < 12.2) {
          // Stage 5: Swing Arm to Stack
          const t = (cycleTime - 11.5) / 0.7;
          targetJ1 = lerp(-0.30, 0.55, t);
          targetJ2 = 0.45; targetJ3 = -0.60; targetJ4 = 0.15;
          clawSlide = -0.005;
          physBlue.isAttached = true;
        } else if (cycleTime < 12.8) {
          // Stage 6: Dip Down to Stack 3 Surface (Top of Yellow Block)
          const t = (cycleTime - 12.2) / 0.6;
          targetJ1 = 0.55;
          targetJ2 = lerp(0.45, 0.68, t);
          targetJ3 = lerp(-0.60, -0.88, t);
          targetJ4 = lerp(0.15, 0.20, t);
          clawSlide = lerp(-0.005, 0.026, t);
          physBlue.isAttached = (t < 0.8);
          if (!physBlue.isAttached) {
            physBlue.position.copy(POS_STACK_3); physBlue.targetPos.copy(POS_STACK_3); physBlue.targetQuaternion.copy(rotHorizontal);
          }
        } else if (cycleTime < 13.1) {
          // Stage 7: Release & Unattach
          targetJ1 = 0.55; targetJ2 = 0.68; targetJ3 = -0.88; targetJ4 = 0.20;
          clawSlide = 0.026;
          physBlue.isAttached = false;
          physBlue.position.copy(POS_STACK_3); physBlue.targetPos.copy(POS_STACK_3); physBlue.targetQuaternion.copy(rotHorizontal);
        } else {
          // Stage 8: Retract Arm Up
          const t = (cycleTime - 13.1) / 0.7;
          targetJ1 = 0.55;
          targetJ2 = lerp(0.68, 0.40, t);
          targetJ3 = lerp(-0.88, -0.55, t);
          targetJ4 = lerp(0.20, 0.15, t);
          clawSlide = 0.026;
          physBlue.isAttached = false;
          physBlue.targetPos.copy(POS_STACK_3); physBlue.targetQuaternion.copy(rotHorizontal);
        }
      }
      else {
        // Showcase Stack & Return Arm to Home Stance
        physRed.isAttached = false; physYellow.isAttached = false; physBlue.isAttached = false;
        physRed.targetPos.copy(POS_STACK_1); physRed.targetQuaternion.copy(rotHorizontal);
        physYellow.targetPos.copy(POS_STACK_2); physYellow.targetQuaternion.copy(rotHorizontal);
        physBlue.targetPos.copy(POS_STACK_3); physBlue.targetQuaternion.copy(rotHorizontal);

        const t = (cycleTime - 13.8) / 1.2;
        targetJ1 = lerp(0.55, 0, t);
        targetJ2 = lerp(0.40, 0, t);
        targetJ3 = lerp(-0.55, 0, t);
        targetJ4 = lerp(0.15, 0, t);
        clawSlide = 0.026;
      }
    } else {
      // RESET STATE: Arm to home stance, Blocks to table
      targetJ1 = 0; targetJ2 = 0; targetJ3 = 0; targetJ4 = 0;
      clawSlide = 0.026;
      physRed.reset(POS_RED_TABLE);
      physYellow.reset(POS_YELLOW_TABLE);
      physBlue.reset(POS_BLUE_TABLE);
    }

    // Update Physics Rigid Bodies
    physRed.update(dt, gripperEndGroup);
    physYellow.update(dt, gripperEndGroup);
    physBlue.update(dt, gripperEndGroup);

    // Parallel Gripper Claws Slide Physics
    gripperLeftGroup.position.z += (clawSlide - gripperLeftGroup.position.z) * 0.25;
    gripperRightGroup.position.z += (clawSlide - gripperRightGroup.position.z) * 0.25;

    // Apply Smooth Mass-Spring Motor Dynamics to Robot Arm Joints
    j1Axis.rotation.z += (targetJ1 - j1Axis.rotation.z) * 0.14;
    j2Axis.rotation.z += (targetJ2 - j2Axis.rotation.z) * 0.14;
    j3Axis.rotation.z += (targetJ3 - j3Axis.rotation.z) * 0.14;
    j4Axis.rotation.z += (targetJ4 - j4Axis.rotation.z) * 0.14;

    renderer.render(scene, camera);
  }

  handleResize();
  animatePhysicsSimulation();
}

/**
 * Lazy load MuJoCo WASM Simulation iframe when scrolled into viewport
 */
function initLazySimIframe() {
  const iframe = document.getElementById('sim-mujoco-iframe');
  if (!iframe || !iframe.dataset.src) return;

  const loadIframe = () => {
    if (iframe.dataset.src) {
      iframe.src = iframe.dataset.src;
      delete iframe.dataset.src;
    }
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadIframe();
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '300px 0px' });

    observer.observe(iframe);
  } else {
    loadIframe();
  }
}

/**
 * Auto play/pause showcase videos based on viewport visibility
 */
function initVideoViewportController() {
  const videos = document.querySelectorAll('.high-performance-section video, .video-card video');
  if (!videos.length || !('IntersectionObserver' in window)) return;

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => { });
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.15 });

  videos.forEach(v => videoObserver.observe(v));
}

/**
 * Squeeze Carousel Accordion Controller
 * Handles interactive panel expansion, top controls, autoplay, keyboard navigation & title cross-fades.
 */
const squeezeSlides = [
  {
    badgeKey: "perf_slide1_badge",
    titleKey: "perf_slide1_title",
    descKey: "perf_slide1_desc",
    defaultBadge: "Dexterous Control",
    defaultTitle: "Multi-Axis Motion & Dexterous Control",
    defaultDesc: "Seamless multi-axis coordination for complex physical AI teleoperation and task execution."
  },
  {
    badgeKey: "perf_slide2_badge",
    titleKey: "perf_slide2_title",
    descKey: "perf_slide2_desc",
    defaultBadge: "High Dynamic",
    defaultTitle: "High Dynamic Performance",
    defaultDesc: "High-speed responsive trajectories with ultra-low latency actuation for agile robotics control."
  },
  {
    badgeKey: "perf_slide3_badge",
    titleKey: "perf_slide3_title",
    descKey: "perf_slide3_desc",
    defaultBadge: "Payload Power",
    defaultTitle: "Powerful Payload Capacity",
    defaultDesc: "Exceptional torque density supporting demanding research and light industrial workloads up to 2.5kg."
  },
  {
    badgeKey: "perf_slide4_badge",
    titleKey: "perf_slide4_title",
    descKey: "perf_slide4_desc",
    defaultBadge: "±0.1mm Precision",
    defaultTitle: "Sub-Millimeter ±0.1mm Repeatability",
    defaultDesc: "Extreme precision positioning ensuring reliable pick-and-place accuracy in repetitive automated workflows."
  }
];

let currentSqueezeIndex = 0;
let updateSqueezeLanguage = null;

function initSqueezeCarousel() {
  const track = document.getElementById("squeeze-track");
  if (!track) return;

  const panels = Array.from(track.querySelectorAll(".squeeze-panel"));
  const counterEl = document.getElementById("squeeze-counter");
  const infoPanel = document.getElementById("squeeze-info-panel");
  const infoTitle = document.getElementById("squeeze-info-title");
  const infoDesc = document.getElementById("squeeze-info-desc");
  const prevBtn = document.getElementById("squeeze-prev-btn");
  const nextBtn = document.getElementById("squeeze-next-btn");

  let autoPlayTimer = null;
  let isPaused = false;

  function setActiveSlide(index, animate = true) {
    if (index < 0) index = panels.length - 1;
    if (index >= panels.length) index = 0;
    currentSqueezeIndex = index;

    // Update Counter
    if (counterEl) {
      counterEl.textContent = `0${currentSqueezeIndex + 1} / 0${panels.length}`;
    }

    // Update Panels
    panels.forEach((p, idx) => {
      const isCurrent = idx === currentSqueezeIndex;
      p.classList.toggle("active", isCurrent);
      p.setAttribute("aria-selected", isCurrent ? "true" : "false");
      p.setAttribute("tabindex", isCurrent ? "0" : "-1");
      const video = p.querySelector("video");
      if (video) {
        if (isCurrent) {
          if (video.paused) video.play().catch(() => { });
        } else {
          if (!video.paused) video.pause();
        }
      }
    });

    // Update Info Content
    renderInfoContent(animate);
  }

  function renderInfoContent(animate = true) {
    if (!infoPanel || !infoTitle || !infoDesc) return;
    const lang = window.currentLang || localStorage.getItem("rebot_lang") || "en";
    const dict = i18nDict[lang] || i18nDict.en;
    const slide = squeezeSlides[currentSqueezeIndex];

    const newTitle = dict[slide.titleKey] || slide.defaultTitle;
    const newDesc = dict[slide.descKey] || slide.defaultDesc;

    if (animate) {
      infoPanel.classList.add("fading");
      setTimeout(() => {
        infoTitle.textContent = newTitle;
        infoTitle.setAttribute("data-i18n", slide.titleKey);
        infoDesc.textContent = newDesc;
        infoDesc.setAttribute("data-i18n", slide.descKey);
        infoPanel.classList.remove("fading");
      }, 180);
    } else {
      infoTitle.textContent = newTitle;
      infoTitle.setAttribute("data-i18n", slide.titleKey);
      infoDesc.textContent = newDesc;
      infoDesc.setAttribute("data-i18n", slide.descKey);
    }
  }

  updateSqueezeLanguage = () => renderInfoContent(false);

  // Panel Clicks
  panels.forEach((p, idx) => {
    p.addEventListener("click", () => {
      if (currentSqueezeIndex !== idx) {
        setActiveSlide(idx);
        restartAutoplay();
      }
    });
  });

  // Prev / Next Arrows
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      setActiveSlide(currentSqueezeIndex - 1);
      restartAutoplay();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      setActiveSlide(currentSqueezeIndex + 1);
      restartAutoplay();
    });
  }

  // Keyboard Arrows
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveSlide(currentSqueezeIndex - 1);
      restartAutoplay();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveSlide(currentSqueezeIndex + 1);
      restartAutoplay();
    }
  });

  // Autoplay
  function startAutoplay() {
    stopAutoplay();
    autoPlayTimer = setInterval(() => {
      if (!isPaused) {
        setActiveSlide(currentSqueezeIndex + 1);
      }
    }, 3000);
  }

  function stopAutoplay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  const section = document.getElementById("performance");
  if (section) {
    section.addEventListener("mouseenter", () => { isPaused = true; });
    section.addEventListener("mouseleave", () => { isPaused = false; });
    section.addEventListener("focusin", () => { isPaused = true; });
    section.addEventListener("focusout", () => { isPaused = false; });
  }

  setActiveSlide(0, false);
  startAutoplay();
}

/**
 * Interactive Tabs: switches the 'From Learning to Deployment' content panel
 * and the right-side preview image (Education / Scientific Research / Enterprise).
 */
function switchScenarioItem(index) {
  const panels = document.querySelectorAll('.scenarios-panel');
  const tabs = document.querySelectorAll('.scenarios-tab');
  const imgCards = document.querySelectorAll('.scenarios-image-card');

  panels.forEach((panel, i) => {
    if (i === index) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });

  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  imgCards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

window.switchScenarioItem = switchScenarioItem;

/**
 * Lazy Load MuJoCo Simulation iframe when user scrolls near #sim-to-real section
 */
function initSimIframeLazyLoad() {
  const iframe = document.getElementById('sim-mujoco-iframe');
  const placeholder = document.getElementById('sim-iframe-placeholder');
  const section = document.getElementById('sim-to-real') || iframe;

  if (!iframe) return;

  function loadIframe() {
    if (iframe.dataset.src) {
      iframe.src = iframe.dataset.src;
      delete iframe.dataset.src;
      iframe.addEventListener('load', () => {
        if (placeholder) {
          placeholder.style.opacity = '0';
          setTimeout(() => { placeholder.style.display = 'none'; }, 450);
        }
      });
    }
  }

  if ('IntersectionObserver' in window && section) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadIframe();
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '300px 0px' });
    observer.observe(section);
  } else {
    loadIframe();
  }
}

if (document.readyState === 'complete') {
  initSimIframeLazyLoad();
} else {
  document.addEventListener('DOMContentLoaded', initSimIframeLazyLoad);
}

/**
 * Key Specifications Strip Odometer Digit-Rolling Animation
 */
function initHeroSpecsCounter() {
  const strip = document.querySelector('.hero-specs-strip');
  if (!strip) return;

  const valueEls = Array.from(strip.querySelectorAll('.hero-spec-value'));
  if (!valueEls.length) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let hasAnimated = false;

  function buildOdometerDOM(el, text) {
    el.innerHTML = '';
    const tokens = text.match(/\d|\D+/g) || [text];
    let digitIndex = 0;

    tokens.forEach((tok) => {
      if (/^\d$/.test(tok)) {
        const targetDigit = parseInt(tok, 10);
        // Roll a full cycle for small digits (0, 1, 2) so every digit visibly scrolls
        const steps = targetDigit < 3 ? 10 + targetDigit : targetDigit;
        const total = steps + 1;

        const win = document.createElement('span');
        win.className = 'odo-digit-window';

        const reel = document.createElement('span');
        reel.className = 'odo-digit-reel';
        reel.dataset.targetPct = ((steps / total) * 100).toFixed(4);
        reel.style.transitionDelay = `${digitIndex * 70}ms`;

        for (let i = 0; i <= steps; i++) {
          const dSpan = document.createElement('span');
          dSpan.textContent = String(i % 10);
          reel.appendChild(dSpan);
        }

        win.appendChild(reel);
        el.appendChild(win);
        digitIndex++;
      } else {
        const sSpan = document.createElement('span');
        sSpan.className = 'odo-static';
        sSpan.textContent = tok;
        el.appendChild(sSpan);
      }
    });
  }

  function runAnimation() {
    if (hasAnimated) return;
    hasAnimated = true;

    if (prefersReduced) return;

    valueEls.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const lang = window.currentLang || 'en';
      const dictVal = (typeof i18nDict !== 'undefined' && i18nDict[lang] && i18nDict[lang][key])
        ? i18nDict[lang][key]
        : el.textContent.trim();
      buildOdometerDOM(el, dictVal);
    });

    // Double rAF ensures initial translateY(0) is committed before transitioning
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        strip.querySelectorAll('.odo-digit-reel').forEach((reel) => {
          reel.style.transform = `translateY(-${reel.dataset.targetPct}%)`;
        });
      });
    });
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    observer.observe(strip);
  } else {
    runAnimation();
  }
}

/**
 * SenseCraft 6-Step Workflow Auto-Sequential Highlight & Hover Pause Controller
 */
function initSenseCraftWorkflow() {
  const section = document.getElementById('sensecraft');
  const listEl = document.getElementById('sensecraft-steps-list');
  const videoEl = document.getElementById('sensecraft-step-video');
  const badgeEl = document.getElementById('sensecraft-step-badge');
  const visualEl = document.getElementById('sensecraft-visual');
  if (!listEl || !videoEl) return;

  const items = Array.from(listEl.querySelectorAll('.sensecraft-step-item'));
  if (!items.length) return;

  const INTERVAL_MS = 4500;
  let activeIndex = 0;
  let isPaused = false;
  let isVisible = true;
  let timerId = null;

  function setStep(idx, restartProgress = true) {
    activeIndex = (idx + items.length) % items.length;
    items.forEach((item, i) => {
      const isCurrent = i === activeIndex;
      item.classList.toggle('active', isCurrent);
      const bar = item.querySelector('.sensecraft-step-progress');
      if (bar) {
        bar.style.transition = 'none';
        bar.style.width = isCurrent ? '0%' : '0%';
        if (isCurrent && restartProgress && !isPaused && isVisible) {
          void bar.offsetWidth; // force reflow
          bar.style.transition = `width ${INTERVAL_MS}ms linear`;
          bar.style.width = '100%';
        }
      }
    });

    const currentItem = items[activeIndex];
    const nextSrc = currentItem.getAttribute('data-video');
    const nextBadge = currentItem.getAttribute('data-badge');
    if (badgeEl && nextBadge) {
      badgeEl.textContent = nextBadge;
    }
    if (nextSrc && videoEl.getAttribute('src') !== nextSrc) {
      videoEl.setAttribute('src', nextSrc);
      videoEl.load();
      videoEl.play().catch(() => {});
    }
  }

  function startTimer() {
    stopTimer();
    if (isPaused || !isVisible) return;
    const activeBar = items[activeIndex]?.querySelector('.sensecraft-step-progress');
    if (activeBar) {
      activeBar.style.transition = 'none';
      activeBar.style.width = '0%';
      void activeBar.offsetWidth;
      activeBar.style.transition = `width ${INTERVAL_MS}ms linear`;
      activeBar.style.width = '100%';
    }
    timerId = setInterval(() => {
      if (!isPaused && isVisible) {
        setStep(activeIndex + 1, true);
      }
    }, INTERVAL_MS);
  }

  function stopTimer() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function pauseAt(idx) {
    isPaused = true;
    stopTimer();
    if (typeof idx === 'number') {
      setStep(idx, false);
    } else {
      const activeBar = items[activeIndex]?.querySelector('.sensecraft-step-progress');
      if (activeBar) {
        activeBar.style.transition = 'none';
        activeBar.style.width = '100%';
      }
    }
  }

  function resume() {
    isPaused = false;
    startTimer();
  }

  items.forEach((item, idx) => {
    item.addEventListener('mouseenter', () => pauseAt(idx));
    item.addEventListener('click', () => pauseAt(idx));
  });

  listEl.addEventListener('mouseleave', resume);
  if (visualEl) {
    visualEl.addEventListener('mouseenter', () => pauseAt());
    visualEl.addEventListener('mouseleave', resume);
  }

  if ('IntersectionObserver' in window && section) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !isPaused) {
          startTimer();
          videoEl.play().catch(() => {});
        } else {
          stopTimer();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(section);
  } else {
    startTimer();
  }
}


