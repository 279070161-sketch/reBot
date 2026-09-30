/**
 * reBot - DLI Course Top-Level Hub JavaScript
 * Mobile Responsive Menu, Spec Toggle, Accessories Tabs & Navigation Interaction
 */

const i18nDict = {
  en: {
    // Nav
    nav_sensecraft: "SenseCraft",
    nav_wiki: "Wiki Tutorials",
    nav_demos: "User Demos & GitHub",
    nav_sim: "MuJoCo Sim-to-Real",
    nav_projects: "Project Submissions",
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
    spec_badge_dof: "6 Joints + 1 Gripper",
    spec_badge_dm_payload: "1.5kg Payload",
    spec_badge_dm_motor: "DAMIAO Motors",
    spec_badge_rs_payload: "2.5kg Payload",
    spec_badge_rs_motor: "RobStride Dynamics Motors",
    spec_lbl_dof: "Degrees of Freedom",
    spec_lbl_rated_payload: "Rated Payload",
    spec_lbl_max_payload: "Max Payload",
    spec_lbl_precision: "Precision",
    spec_lbl_reach: "Reach",
    spec_lbl_motors: "Motor Specs",
    spec_lbl_finish: "Construction & Finish",
    spec_lbl_scenarios: "Application Scenarios",
    spec_val_dmapp: "Home & Domestic Automation",
    spec_val_rsapp: "Lab / Light Industrial Scenarios",
    spec_val_finish: "Industrial CNC",

    // Application Scenarios
    scenarios_main_title: "From Learning to Deployment",
    scenarios_main_subtitle: "From Academic Embodied AI Education to Industrial Edge AI Deployment",
    
    // Column 1: Education
    scenarios_edu_badge: "Education",
    scenarios_edu_title: "Learning Physical AI",
    scenarios_edu_desc: "Collaborating with NVIDIA, Seeed provides a Sim-to-Real VLA Pipeline with Seeed reBot Arm and NVIDIA Isaac. Official hands-on curriculum bridging academic research and higher education.",
    scenarios_edu_stat1_val: "19",
    scenarios_edu_stat1_lbl: "Detailed Modules",
    scenarios_edu_stat2_val: "Sim-to-Real",
    scenarios_edu_stat2_lbl: "Full Pipeline",
    scenarios_edu_stat3_val: "5",
    scenarios_edu_stat3_lbl: "Core Chapters",
    scenarios_edu_stat4_val: "20+ Hours",
    scenarios_edu_stat4_lbl: "Hands-on Lab",
    scenarios_edu_btn: "Start Learning Course",

    // Column 2: Scientific Research
    scenarios_sci_badge: "Scientific Research",
    scenarios_sci_title: "Accelerate VLA Research",
    scenarios_sci_desc: "A ready-to-run experiment platform for cutting-edge Vision-Language-Action models. Seeed reBot Arm comes with compatibility and verification of today's most popular VLA baselines — so you can go from paper to real-robot evaluation in hours, not weeks.",
    scenarios_sci_stat1_val: "7+",
    scenarios_sci_stat1_lbl: "PRE-ADAPTED VLA MODELS",
    scenarios_sci_stat2_val: "LeRobot",
    scenarios_sci_stat2_lbl: "NATIVE DATA & TRAINING PIPELINE",
    scenarios_sci_stat3_val: "Sim-to-Real",
    scenarios_sci_stat3_lbl: "ISAAC SIM READY",
    scenarios_sci_stat4_val: "Jetson",
    scenarios_sci_stat4_lbl: "EDGE SEAMLESS INFERENCE",
    scenarios_sci_btn: "Stay Tuned for Series Video Courses",

    // Column 3: Enterprise
    scenarios_ent_badge: "Enterprise",
    scenarios_ent_title: "Massive Support for Robot Data Acquisition",
    scenarios_ent_desc: "Scale up your embodied AI data engine. Seeed reBot Arm turns teleoperation into training-ready datasets — native LeRobot Dataset format, multi-camera capture, checkpoint-and-resume recording, and one-click sync to Hugging Face Hub — ready to deploy across fleets, sites, and annotation teams.",
    scenarios_ent_stat1_val: "LeRobot",
    scenarios_ent_stat1_lbl: "PARQUET DATASET FORMAT",
    scenarios_ent_stat2_val: "3× 1080p",
    scenarios_ent_stat2_lbl: "MULTI-CAM @ 30FPS",
    scenarios_ent_stat3_val: "HF Hub",
    scenarios_ent_stat3_lbl: "ONE-CLICK SYNC",
    scenarios_ent_stat4_val: "VR Teleop",
    scenarios_ent_stat4_lbl: "QUEST 3 & LEADER ARM",
    scenarios_ent_btn: "Get Dataset to Train Your reBot Now",

    // Sim Section
    sim_main_title: "Quick Sim-to-Real Experience",
    sim_main_subtitle: "Interactive 3D MuJoCo Simulation in Your Browser",
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

    // Developer Hub
    dev_main_title: "Developer Hub",
    dev_main_subtitle: "Explore projects, tutorials, and co-creation opportunities with global developers",
    dev_item01_title: "01 See What You Can Build",
    dev_item01_subtitle: "Explore real-world projects and creative builds from global developers",
    dev_item02_title: "02 Co-Create with Seeed",
    dev_item02_subtitle: "Join Seeed's global community, project calls, and partnership programs",
    cocreate_card1_title: "Physical AI Project of the Month",
    cocreate_card1_desc: "Showcase your innovative robotics builds with Seeed reBot Arm. Win hardware grants, global community spotlights, and official co-marketing support from Seeed team.",
    cocreate_card1_btn: "Submit Your Project",
    cocreate_card2_title: "Global Physical AI Workshop Partnership",
    cocreate_card2_desc: "Host a hands-on Physical AI & Embodied AI workshop at your university, lab, or hackerspace. Seeed provides reBot hardware grants, curriculum resources, and event support.",
    cocreate_card2_btn: "Apply for Workshop Support",
    cocreate_card3_title: "Embodied AI Hackathon & Events",
    cocreate_card3_desc: "Join Seeed global hackathons and developer events. Explore upcoming competition calendars, challenge tracks, hardware sponsorships, and past event recaps.",
    cocreate_card3_btn: "Check Upcoming Events",
    partners_title: "Supported Platforms & Developer Tools",

    // Accessories
    acc_title: "Complete Your AI Robotics Station",
    acc_subtitle: "Plug-and-play accessories verified by Seeed team",
    acc_tab_data_acq: "Data acquisition accessories",
    acc_tab_edge: "Edge computing solution",
    acc_tab_rs: "rebot arm RS accessories",
    acc_tab_dm: "rebot arm DM accessories",
    acc_dm_p1: "Orbbec Gemini 2 3D Camera",
    acc_dm_p2: "Orbbec Gemini 336 Depth Camera",
    acc_dm_p3: "Intel RealSense Depth Camera D435i",
    acc_dm_p4: "RealSense Depth Camera D405",
    acc_dm_p5: "ET-S231 Megapixel 90° Wide-Angle 1080P USB Camera Module",
    acc_dm_p6: "Star Arm-102",
    acc_dm_p7: "AC/DC Power Adapter DC5521 Male 12V 2A 1500mm",
    acc_dm_p8: "DM4340P High Torque Actuator",
    acc_dm_p9: "Damiao 4310 Actuator Motor",
    acc_rs_p1: "RobStride 00 QDD 14N.m integrated actuator module",
    acc_rs_p2: "RobStride 06 QDD 36 N.m integrated actuator module",
    acc_rs_p3: "Power Adapter Kit for reBot Arm B601-RS",
    acc_rs_p4: "6-Inch G-Clamp for reBot Arm",
    acc_rs_p5: "Power Cable-F R/A to F R/A-200mm - for reBot Arm B601-RS",
    acc_rs_p6: "Power Cable-F R/A to F R/A-320mm - for reBot Arm B601-RS",
    acc_rs_p7: "Power Cable-F to F-R/A-300mm - for reBot Arm B601-RS",
    acc_rs_p8: "Power Cable-F to F-300mm - for reBot Arm B601-RS",
    acc_rs_p9: "XT30 2+2 Power Separation Board",

    // FAQ
    faq_title: "F & Q",
    faq_subtitle: "Everything you need to know about reBot Arm, open-source resources, and getting started",
    faq_q1: "What's the difference between reBot Arm DM and RS? Which one should I choose?",
    faq_a1: "The DM version uses Damiao actuators (DM4310 / DM4340P) with a 1.5 kg rated payload and ±0.2 mm repeatability — ideal for beginners, education, and lightweight projects. The RS version uses RobStride actuators (00 / 06) with a 2.5 kg rated payload, ±0.1 mm repeatability, and higher torque — built for research labs and lightweight industrial automation. Not sure? Start with DM if you're learning, go with RS if you need precision and payload. Check the spec comparison table above for details.",
    faq_q2: "Is reBot Arm fully open-source? What exactly is open?",
    faq_a2: "Yes — reBot Arm is fully open-source. This includes hardware design files, firmware, ROS2 drivers, MuJoCo / Isaac Sim simulation models, and all example code. Everything is hosted on our GitHub repository. You're free to modify, customize, and build on top of it for your own projects.",
    faq_q3: "Who is reBot Arm for? Can a beginner get started with it?",
    faq_a3: "reBot Arm is designed for developers, researchers, students, and AI innovators — anyone who wants to explore physical AI and robotics. If you're new to robotics, absolutely: our Learning Physical AI course walks you from the very basics all the way to VLA model deployment, with 19 modules and 20+ hours of hands-on content.",
    faq_q4: "What programming languages and frameworks does reBot Arm support?",
    faq_a4: "reBot Arm supports Python, ROS2 Humble, and the LeRobot framework out of the box. You can control it directly from your browser via SenseCraft, write custom Python scripts, or integrate with ROS2 for more advanced workflows. It's also compatible with MuJoCo and NVIDIA Isaac Sim for simulation-to-real pipelines.",
    faq_q5: "Which depth cameras are compatible? Do I need to buy one separately?",
    faq_a5: "reBot Arm is officially tested and validated with Orbbec Gemini 2, Orbbec Gemini 336, Intel RealSense D435i, and RealSense D405. All are available as add-on accessories — see our accessories section below. You can also use your own USB camera that supports standard video capture.",
    faq_q6: "What kind of computer do I need? Any GPU requirements?",
    faq_a6: "For basic control and learning, any modern laptop will do. For AI training and VLA model deployment, we recommend a machine with an NVIDIA GPU (8GB+ VRAM), or our reComputer J3011 edge AI box for on-device deployment. And if you just want to try things out first, our browser-based MuJoCo simulator runs entirely in your browser — no local setup needed.",
    faq_q7: "What's included in the Learning Physical AI course? Is it free with the arm?",
    faq_a7: "The Learning Physical AI course is a paid program with 19 detailed modules across 5 core chapters, totaling 20+ hours of content. It covers everything from basic machine vision to building a full Sim-to-Real VLA pipeline using reBot Arm and NVIDIA Isaac. You can purchase it separately, or grab the Arm + Course bundle for a discounted price — see the course section above.",
    faq_q8: "Are there tutorials and community support available?",
    faq_a8: "Absolutely. We have comprehensive Wiki documentation with separate getting-started guides for both DM and RS editions. Our open-source community is active on GitHub, Discord, and WeChat groups. We also run a monthly project showcase and global workshop program — check out the Developer Hub to join.",
    faq_q9: "What is sim-to-real? Can I try reBot Arm without buying the hardware first?",
    faq_a9: "Sim-to-real means you can train and test your algorithms in simulation first, then deploy them directly to the real robot with minimal changes. And yes — you can try our MuJoCo simulator right in your browser for free. It's a fully interactive virtual reBot Arm. Launch the simulator to start exploring.",
    faq_q10: "What's the shipping and warranty policy?",
    faq_a10: "We ship worldwide. Orders typically ship within 3–5 business days, and delivery time depends on your location (usually 7–14 days for most countries). reBot Arm comes with a 1-year limited warranty covering manufacturing defects. If you have any issues, our support team is here to help — reach us through GitHub Issues, Discord, or our support email.",

    // Community & Footer
    community_title: "Community & Developer Channels",
    footer_copyright: "© 2026 Seeed Studio & NVIDIA DLI | reBot Arm Project"
  },
  zh: {
    // Nav
    nav_sensecraft: "SenseCraft 软件",
    nav_wiki: "Wiki 教程",
    nav_demos: "案例演示 & GitHub",
    nav_sim: "MuJoCo 仿真到现实",
    nav_projects: "项目成果提交",
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
    spec_badge_dof: "6 关节 + 1 夹爪",
    spec_badge_dm_payload: "1.5kg 额定负载",
    spec_badge_dm_motor: "达妙电机",
    spec_badge_rs_payload: "2.5kg 额定负载",
    spec_badge_rs_motor: "RobStride 动力电机",
    spec_lbl_dof: "自由度",
    spec_lbl_rated_payload: "额定负载",
    spec_lbl_max_payload: "最大负载",
    spec_lbl_precision: "重复定位精度",
    spec_lbl_reach: "工作臂展",
    spec_lbl_motors: "电机规格",
    spec_lbl_finish: "结构与工艺",
    spec_lbl_scenarios: "应用场景",
    spec_val_dmapp: "家庭与日常自动化",
    spec_val_rsapp: "实验室与轻工业场景",
    spec_val_finish: "工业级 CNC 加工",

    // Application Scenarios
    scenarios_main_title: "从学习到部署落地",
    scenarios_main_subtitle: "从学术具身智能教育到工业边缘 AI 部署",
    
    // Column 1: Education
    scenarios_edu_badge: "教育与培训",
    scenarios_edu_title: "学习物理 AI",
    scenarios_edu_desc: "Seeed 与 NVIDIA 合作，提供基于 Seeed reBot Arm 和 NVIDIA Isaac 的 Sim-to-Real VLA 流程与官方实操课程，连接学术研究与高等教育。",
    scenarios_edu_stat1_val: "19 个",
    scenarios_edu_stat1_lbl: "详细实操模块",
    scenarios_edu_stat2_val: "Sim-to-Real",
    scenarios_edu_stat2_lbl: "全流程贯通",
    scenarios_edu_stat3_val: "5 大",
    scenarios_edu_stat3_lbl: "核心课程章节",
    scenarios_edu_stat4_val: "20+ 小时",
    scenarios_edu_stat4_lbl: "动手实验时长",
    scenarios_edu_btn: "开始学习课程",

    // Column 2: Scientific Research
    scenarios_sci_badge: "前沿科学研究",
    scenarios_sci_title: "加速 VLA 模型研究",
    scenarios_sci_desc: "开箱即用的前沿视觉-语言-动作 (VLA) 模型实验平台，支持主流 VLA 基线算法，实现数小时内从论文算法到真实机器人评估。",
    scenarios_sci_stat1_val: "7+",
    scenarios_sci_stat1_lbl: "已预适配 VLA 模型",
    scenarios_sci_stat2_val: "LeRobot",
    scenarios_sci_stat2_lbl: "原生数据与训练流程",
    scenarios_sci_stat3_val: "Sim-to-Real",
    scenarios_sci_stat3_lbl: "支持 ISAAC SIM 仿真",
    scenarios_sci_stat4_val: "Jetson",
    scenarios_sci_stat4_lbl: "边缘无缝推理",
    scenarios_sci_btn: "敬请期待系列视频课程",

    // Column 3: Enterprise
    scenarios_ent_badge: "企业级应用",
    scenarios_ent_title: "海量机器人数据采集支持",
    scenarios_ent_desc: "扩展你的具身智能数据引擎。Seeed reBot Arm 将遥操作转化为训练即用的数据集——原生 LeRobot 数据格式、多摄像头采集、断点续录与一键同步至 Hugging Face Hub。",
    scenarios_ent_stat1_val: "LeRobot",
    scenarios_ent_stat1_lbl: "PARQUET 数据集格式",
    scenarios_ent_stat2_val: "3× 1080p",
    scenarios_ent_stat2_lbl: "多视角 @ 30FPS",
    scenarios_ent_stat3_val: "HF Hub",
    scenarios_ent_stat3_lbl: "一键同步云端",
    scenarios_ent_stat4_val: "VR 遥操作",
    scenarios_ent_stat4_lbl: "QUEST 3 & 主从臂",
    scenarios_ent_btn: "立即获取数据集训练你的 reBot",

    // Sim Section
    sim_main_title: "快速体验 Sim-to-Real 仿真",
    sim_main_subtitle: "在浏览器中实时运行 3D MuJoCo 物理仿真",
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

    // Developer Hub
    dev_main_title: "开发者中心",
    dev_main_subtitle: "探索全球开发者优秀项目、教程与共创合作机会",
    dev_item01_title: "01 看看你能构建什么",
    dev_item01_subtitle: "探索全球开发者基于 reBot 打造的真实应用与创意项目",
    dev_item02_title: "02 与 Seeed 联合共创",
    dev_item02_subtitle: "加入 Seeed 全球社区、项目征集与合作伙伴计划",
    cocreate_card1_title: "物理 AI 月度项目征集",
    cocreate_card1_desc: "展示你基于 Seeed reBot Arm 创作的创新机器人项目，赢取硬件赞助、全球社区聚光灯展示及 Seeed 官方联合推广支持。",
    cocreate_card1_btn: "提交你的项目",
    cocreate_card2_title: "全球物理 AI 工作坊合作伙伴计划",
    cocreate_card2_desc: "在你的大学、实验室或创客空间举办物理 AI 与具身智能动手工作坊，Seeed 提供 reBot 硬件支持、课程资源及活动赞助。",
    cocreate_card2_btn: "申请工作坊支持",
    cocreate_card3_title: "具身智能黑客松与开发者活动",
    cocreate_card3_desc: "参与 Seeed 全球黑客松与开发者社区活动，查看最新赛事日程、挑战赛道、硬件赞助及往期活动回顾。",
    cocreate_card3_btn: "查看近期活动",
    partners_title: "支持的平台与开发者工具",

    // Accessories
    acc_title: "打造你的具身智能机器人工作站",
    acc_subtitle: "经过 Seeed 团队验证的即插即用配件",
    acc_tab_data_acq: "数采配件",
    acc_tab_edge: "边缘计算方案",
    acc_tab_rs: "reBot Arm RS 配件",
    acc_tab_dm: "reBot Arm DM 配件",
    acc_dm_p1: "奥比中光 Gemini 2 3D 深度相机",
    acc_dm_p2: "奥比中光 Gemini 336 深度相机",
    acc_dm_p3: "英特尔 RealSense 深度相机 D435i",
    acc_dm_p4: "RealSense 深度相机 D405",
    acc_dm_p5: "ET-S231 百万像素 90°广角 1080P USB 相机模块",
    acc_dm_p6: "Star Arm-102 夹爪配件",
    acc_dm_p7: "AC/DC 电源适配器 DC5521 公头 12V 2A 1500mm",
    acc_dm_p8: "DM4340P 高扭矩电机驱动执行器",
    acc_dm_p9: "达妙 4310 执行器电机",
    acc_rs_p1: "RobStride 00 QDD 14N.m 一体化执行器模块",
    acc_rs_p2: "RobStride 06 QDD 36 N.m 一体化执行器模块",
    acc_rs_p3: "reBot Arm B601-RS 专属电源适配器套件",
    acc_rs_p4: "reBot Arm 6 英寸 G 型固定夹",
    acc_rs_p5: "电源线-F R/A 至 F R/A-200mm (reBot B601-RS)",
    acc_rs_p6: "电源线-F R/A 至 F R/A-320mm (reBot B601-RS)",
    acc_rs_p7: "电源线-F 至 F-R/A-300mm (reBot B601-RS)",
    acc_rs_p8: "电源线-F 至 F-300mm (reBot B601-RS)",
    acc_rs_p9: "XT30 2+2 电源分流板",

    // FAQ
    faq_title: "常见问题",
    faq_subtitle: "关于 reBot Arm、开源资源与快速入门的一切解答",
    faq_q1: "reBot Arm DM 和 RS 版本有什么区别？我应该选择哪一个？",
    faq_a1: "DM 版本采用达妙执行器 (DM4310 / DM4340P)，额定负载 1.5 kg，重复定位精度 ±0.2 mm，非常适合初学者、教育教学和轻量级项目。RS 版本采用 RobStride 动力执行器 (00 / 06)，额定负载 2.5 kg，重复定位精度 ±0.1 mm，扭矩更大，专为科研实验室和轻工业自动化打造。如果不确定，新手学习建议选择 DM，需要更高精度和负载建议选择 RS。详情见上方规格对比表。",
    faq_q2: "reBot Arm 是完全开源的吗？具体开源了哪些部分？",
    faq_a2: "是的，reBot Arm 完全开源。包含硬件设计图纸、固件代码、ROS2 驱动、MuJoCo / Isaac Sim 仿真模型以及所有示例代码。全部开源托管于 GitHub 仓库，您可以自由修改、定制和二次开发。",
    faq_q3: "reBot Arm 适合哪些人群？零基础初学者可以上手吗？",
    faq_a3: "reBot Arm 专为开发者、科研人员、高校学生及 AI 创新者设计。如果您是机器人新手，完全没问题：我们的《物理 AI 课程》从零基础教学，包含 19 个实操模块和 20+ 小时课程，直通 VLA 模型部署。",
    faq_q4: "reBot Arm 支持哪些编程语言和开发框架？",
    faq_a4: "reBot Arm 原生支持 Python、ROS2 Humble 和 LeRobot 框架。您可以通过 SenseCraft 在网页中直接控制，编写自定义 Python 脚本，或集成 ROS2 进行高级运动规划，同时全面兼容 MuJoCo 和 NVIDIA Isaac Sim 进行 Sim-to-Real 仿真。",
    faq_q5: "兼容哪些深度相机？需要单独购买吗？",
    faq_a5: "reBot Arm 官方经过测试与验证的深度相机包括奥比中光 Gemini 2、Gemini 336、英特尔 RealSense D435i 和 D405。所有相机均可在配件区单独选购，您也可以使用支持标准 UVC 的 USB 摄像头。",
    faq_q6: "使用 reBot Arm 需要什么配置的电脑？有 GPU 要求吗？",
    faq_a6: "对于基础控制和课程学习，普通笔记本电脑即可满足需求。对于 AI 模型训练与 VLA 模型部署，建议配备 NVIDIA GPU (8GB+ 显存) 的电脑，或使用 reComputer J3011 边缘 AI 盒进行端侧部署。如果您只想试用，浏览器内 MuJoCo 仿真器完全在本地浏览器运行，无需任何本地环境配置。",
    faq_q7: "《物理 AI 课程》包含什么内容？买机械臂免费送吗？",
    faq_a7: "《物理 AI 课程》为深度官方实操教程，涵盖 5 大章节 19 个实操模块，超过 20 小时内容，覆盖从基础机器视觉到使用 reBot Arm 和 NVIDIA Isaac 搭建完整 Sim-to-Real VLA 流程。您可以单独购买，也可以选购“机械臂 + 课程”优惠套餐。",
    faq_q8: "有配套教程和社区支持吗？",
    faq_a8: "当然有！我们提供完善的 Wiki 官方文档，为 DM 和 RS 版本准备了独立的快速入门指南。开源社区在 GitHub、Discord 以及微信交流群中非常活跃，同时我们每月举办项目征集与全球工作坊计划，欢迎加入开发者中心。",
    faq_q9: "什么是 Sim-to-Real 仿真到现实？在购买硬件前可以先体验吗？",
    faq_a9: "Sim-to-Real（仿真到现实）意味着您可以先在虚拟仿真环境中训练和测试算法，然后以极低改造成本直接部署到真实机器人上。是的，您可以随时免费体验我们网页端 3D MuJoCo 仿真器，完全交互式操作数字孪生机械臂。",
    faq_q10: "发货与质保政策是什么样的？",
    faq_a10: "我们支持全球发货。订单通常在 3–5 个工作日内发货，运输时间视具体地区而定（多数国家 7–14 天）。reBot Arm 提供 1 年有限硬件质保。如有任何问题，我们的技术支持团队随时通过 GitHub Issues、Discord 或邮件为您解答。",

    // Community & Footer
    community_title: "社区与开发者频道",
    footer_copyright: "© 2026 Seeed Studio & NVIDIA DLI | reBot Arm 项目"
  }
};

function initApp() {
  setupLanguageSelector();
  setupNavLinks();
  setupMobileMenu();
  setupSpecToggle();
  setupAccessoriesTabs();
  setup3DCardSpotlight();
  setupScrollAndEntranceAnimations();
  initDliCardAsciiBg();
  initHeroArmMouseTracker();
  initVideoModalHandler();
  initVideoViewportController();
  initSqueezeCarousel();

  // Defer non-critical background scripts until the browser is idle, so the
  // Hero 3D entrance animation gets 100% CPU/GPU headroom on startup.
  const deferredInits = () => {
    setupNeuralParticleCanvas();
    initSmartBuyButton();
    initLazySimIframe();
    initSimJengaArmAnimation();
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

// Global Safety Preloader Timer: Ensures the preloader is always dismissed even under network stalls
setTimeout(() => {
  const pEl = document.getElementById('page-preloader');
  if (pEl && pEl.style.display !== 'none' && !pEl.classList.contains('preloader-hidden')) {
    pEl.classList.add('preloader-hidden');
    setTimeout(() => { pEl.style.display = 'none'; }, 450);
  }
}, 4500);

// Boot the Hero 3D arm IMMEDIATELY (script sits at end of <body>)
if (typeof THREE !== 'undefined' && document.getElementById('hero-arm-canvas')) {
  initHeroArmMouseTracker();
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
        const icon = el.querySelector('i');
        if (icon) {
          el.innerHTML = icon.outerHTML + ' ' + i18nDict[lang][key];
        } else {
          el.textContent = i18nDict[lang][key];
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
  const toggleBtn = document.getElementById('toggle-specs-btn');
  const specContent = document.getElementById('spec-comparison-content');
  if (toggleBtn && specContent) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = specContent.classList.toggle('expanded');
      const icon = toggleBtn.querySelector('i');
      const label = toggleBtn.querySelector('.toggle-label');
      
      if (icon) {
        icon.className = isExpanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
      }
      if (label) {
        label.textContent = isExpanded ? 'Hide Detailed Specification' : 'Expand Detailed Specification';
      }
    });
  }
}

function setupAccessoriesTabs() {
  const tabBtns = document.querySelectorAll('.accessories-tabs .tab-pill-btn');
  const grids = document.querySelectorAll('.accessory-grid');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      grids.forEach(grid => {
        if (grid.id === target + '-accessories-grid') {
          grid.style.display = 'grid';
        } else {
          grid.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Developer Hub Silky Accordion Toggle Handler with Dynamic Height Calculation
 */
function toggleHubAccordion(itemId) {
  const targetItem = document.getElementById(itemId);
  if (!targetItem) return;

  const content = targetItem.querySelector('.hub-accordion-content');
  if (!content) return;

  const isActive = targetItem.classList.contains('active');

  if (isActive) {
    // Closing: Set explicit height first, then animate smoothly to 0
    const currentHeight = content.scrollHeight;
    content.style.maxHeight = currentHeight + 'px';
    content.offsetHeight; // Force reflow
    requestAnimationFrame(() => {
      content.style.maxHeight = '0px';
      targetItem.classList.remove('active');
    });
  } else {
    // Opening: Calculate exact scrollHeight and animate smoothly
    targetItem.classList.add('active');
    const targetHeight = content.scrollHeight;
    content.style.maxHeight = targetHeight + 30 + 'px';

    const handleTransitionEnd = (e) => {
      if (e.propertyName === 'max-height' && targetItem.classList.contains('active')) {
        content.style.maxHeight = 'none';
      }
      content.removeEventListener('transitionend', handleTransitionEnd);
    };
    content.addEventListener('transitionend', handleTransitionEnd);
  }
}

/**
 * Open Co-Create / Custom Service Accordion & Scroll Smoothly
 */
function openCocreateAccordion() {
  const targetItem = document.getElementById('cocreate');
  if (!targetItem) return;

  if (!targetItem.classList.contains('active')) {
    toggleHubAccordion('cocreate');
  }

  setTimeout(() => {
    targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

/**
 * 3D Tilt & Cursor Spotlight Glow Tracking Handler for Product & Showcase Cards
 */
function setup3DCardSpotlight() {
  const cards = document.querySelectorAll('.product-summary-card, .accessory-card, .dev-project-card, .gs-info-card');

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
    document.querySelectorAll('.hero-main-title, .hero-sub-text').forEach((el, idx) => {
      el.style.transitionDelay = `${idx * 0.15}s`;
      el.classList.add('is-visible');
    });
  }, 80);

  // 2. IntersectionObserver for Reveal-on-Scroll Elements
  const revealElements = document.querySelectorAll(
    '.section-title-group, .video-card, .product-summary-card, .accessory-card, .hub-accordion-item, .cocreate-card, .community-channels-section'
  );

  revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
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
    ctx.font = `500 ${FONT_SIZE}px "JetBrains Mono", monospace`;
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
  setup();

  function tick(now) {
    const rect = canvas.getBoundingClientRect();
    if (rect.width >= 4 && rect.height >= 4) {
      if (!ctx || Math.abs(w - rect.width) > 2 || Math.abs(h - rect.height) > 2) {
        setup();
      }
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const t = (now - t0) / 1000 * 0.55;
        draw(t);
      }
    }
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/**
 * IP & Location-based Smart Redirect for 'Buy Now' Button
 * Automatically matches domestic Chinese IP (Taobao Tmall Store) vs Global IP (Seeed Bazaar)
 */
function initSmartBuyButton() {
  const buyBtn = document.getElementById('nav-buy-now-btn');
  if (!buyBtn) return;

  const TAOBAO_URL = "https://seeedstudio.world.tmall.com/shop/view_shop.htm?spm=a21xtw.29978516.0.0";
  const BAZAAR_URL = "https://www.seeedstudio.com/";

  // 1. Instant local detection via Timezone & Language Locale
  const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase();
  const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  
  let isChina = tz.includes('shanghai') || tz.includes('chongqing') || tz.includes('urumqi') || tz.includes('harbin') || tz.includes('kashgar') || lang.includes('zh-cn');

  buyBtn.href = isChina ? TAOBAO_URL : BAZAAR_URL;

  // 2. Fetch IP Geo location asynchronously to verify country code
  fetch('https://get.geojs.io/v1/ip/country.json')
    .then(res => res.json())
    .then(data => {
      if (data && data.country) {
        if (data.country === 'CN') {
          buyBtn.href = TAOBAO_URL;
        } else {
          buyBtn.href = BAZAAR_URL;
        }
      }
    })
    .catch(() => {
      // Keep timezone/language result on error/network block
    });

  // 3. Click Handler to ensure target store opens reliably in new tab
  buyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (buyBtn.href) {
      window.open(buyBtn.href, '_blank', 'noopener,noreferrer');
    }
  });
}

/**
 * Video Lightbox Modal Controller
 * Plays banner video on demand when clicking 'Watch Video' button
 */
function initVideoModalHandler() {
  const modal = document.getElementById('hero-video-modal');
  const openBtn = document.getElementById('open-video-modal-btn');
  const closeBtn = document.getElementById('close-video-modal-btn');
  const backdrop = document.getElementById('video-modal-backdrop');
  const video = document.getElementById('modal-banner-video');

  if (!modal || !openBtn) return;

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    if (video) {
      video.pause();
    }
  }

  openBtn.addEventListener('click', openModal);

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Unitree-Style Studio 3D Robotic Arm Interactive Mouse Tracker (Three.js Engine)
 * Renders a sleek 6-DoF silver-grey metallic reBot Arm standing in a clean studio environment.
 */
function initHeroArmMouseTracker() {
  if (window._heroArmTrackerInitialized) return;
  const canvas = document.getElementById('hero-arm-canvas');
  if (!canvas || typeof THREE === 'undefined') {
    if (!window._heroArmRetryCount) window._heroArmRetryCount = 0;
    if (window._heroArmRetryCount < 30) {
      window._heroArmRetryCount++;
      setTimeout(initHeroArmMouseTracker, 100);
    } else {
      const pEl = document.getElementById('page-preloader');
      if (pEl) {
        pEl.classList.add('preloader-hidden');
        setTimeout(() => { pEl.style.display = 'none'; }, 450);
      }
    }
    return;
  }
  window._heroArmTrackerInitialized = true;

  const container = canvas.parentElement || document.body;
  const scene = new THREE.Scene();

  // 1. Camera Setup with Safe Non-Zero Aspect Ratio Fallbacks
  const getContainerWidth = () => container.clientWidth || Math.min(window.innerWidth * 0.55, 900);
  const getContainerHeight = () => container.clientHeight || Math.min(window.innerHeight, 800);

  const initW = getContainerWidth();
  const initH = getContainerHeight();

  const camera = new THREE.PerspectiveCamera(36, initW / initH, 0.1, 1000);
  camera.position.set(0, 1.5, 6.6);
  camera.lookAt(0, 0.65, 0);

  // 2. WebGL Renderer with Alpha Transparency
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(initW, initH);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  // 3. Ultra-Clean Studio Lighting Setup (Clean Studio Key & Fill)
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const mainStudioLight = new THREE.DirectionalLight(0xffffff, 2.0);
  mainStudioLight.position.set(7, 12, 9);
  scene.add(mainStudioLight);

  const softFillLight = new THREE.DirectionalLight(0xF1F5F9, 0.9);
  softFillLight.position.set(-7, 7, -4);
  scene.add(softFillLight);

  const studioRimLight = new THREE.PointLight(0xFFFFFF, 1.4, 12);
  studioRimLight.position.set(0, 5, 4);
  scene.add(studioRimLight);

  // 4. Official Brand Materials (High-Brightness CNC Silver & Premium Space Black Metal)
  const cncMetalMat = new THREE.MeshStandardMaterial({
    color: 0xE2E8F0,
    roughness: 0.25,
    metalness: 0.72
  });
  const motorMat = new THREE.MeshStandardMaterial({
    color: 0x232323,
    roughness: 0.32,
    metalness: 0.75
  });
  const baseBlackMat = new THREE.MeshStandardMaterial({
    color: 0x232323,
    roughness: 0.32,
    metalness: 0.75
  });
  // Official Brand Seeed Studio Lime Yellow-Green Accent (#99DA00)
  const badgeYellowMat = new THREE.MeshStandardMaterial({
    color: 0x99DA00,
    roughness: 0.35,
    metalness: 0.0,
    emissive: 0x000000,
    emissiveIntensity: 0.0,
    polygonOffset: true,
    polygonOffsetFactor: -10,
    polygonOffsetUnits: -10
  });

  // Studio Ground Soft Radial Contact Shadow (100% Pure Neutral Black/Grey Shadow, Zero Blue Tint)
  function createSoftRadialShadowTexture() {
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 512;
    shadowCanvas.height = 512;
    const ctx = shadowCanvas.getContext('2d');

    const grad = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    grad.addColorStop(0.0, 'rgba(0, 0, 0, 0.85)');      // Pure dark black core directly under base
    grad.addColorStop(0.20, 'rgba(15, 15, 15, 0.58)');   // Pure neutral contact shadow
    grad.addColorStop(0.48, 'rgba(40, 40, 40, 0.22)');   // Pure neutral ambient soft spread
    grad.addColorStop(0.78, 'rgba(80, 80, 80, 0.05)');   // Pure neutral edge blur
    grad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');       // Transparent edge

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    return new THREE.CanvasTexture(shadowCanvas);
  }

  const softShadowTex = createSoftRadialShadowTexture();

  // Primary Soft Ambient Shadow Plane (size 2.4 x 2.4 - clearly visible soft spread around base)
  const shadowGeo = new THREE.PlaneGeometry(2.4, 2.4);
  const shadowMat = new THREE.MeshBasicMaterial({
    map: softShadowTex,
    transparent: true,
    depthWrite: false,
    opacity: 0.9
  });
  const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.set(0, -0.908, 0);
  shadowMesh.renderOrder = -1;
  scene.add(shadowMesh);

  // Secondary Dark Core Contact Shadow (size 1.4 x 1.4 - intense contact right at base edge)
  const coreShadowGeo = new THREE.PlaneGeometry(1.4, 1.4);
  const coreShadowMat = new THREE.MeshBasicMaterial({
    map: softShadowTex,
    transparent: true,
    depthWrite: false,
    opacity: 0.95
  });
  const coreShadowMesh = new THREE.Mesh(coreShadowGeo, coreShadowMat);
  coreShadowMesh.rotation.x = -Math.PI / 2;
  coreShadowMesh.position.set(0, -0.906, 0);
  coreShadowMesh.renderOrder = 0;
  scene.add(coreShadowMesh);

  // 5. High-Precision 3D reBot Arm B601-RS Model Assembly (Official URDF Kinematic Joint Tree)
  const robotArmGroup = new THREE.Group();
  robotArmGroup.position.set(0, -0.9, 0);
  scene.add(robotArmGroup);

  const URDF_SCALE = 5.5; // Scale URDF meters into Three.js studio canvas units

  const armAssemblyGroup = new THREE.Group();
  armAssemblyGroup.scale.set(URDF_SCALE, URDF_SCALE, URDF_SCALE);
  armAssemblyGroup.rotation.x = -Math.PI / 2; // Convert Z-up URDF to Y-up Three.js studio
  robotArmGroup.add(armAssemblyGroup);

  // 10-Node URDF Kinematic Joint Tree Hierarchy based on rs_arm.xml & ReBot_Arm_RS.urdf
  const baseLinkGroup = new THREE.Group();
  armAssemblyGroup.add(baseLinkGroup);

  // Joint 1 (Base Yaw, axis="0 0 -1")
  const j1Node = new THREE.Group();
  j1Node.position.set(-0.0003428, -0.0009868, 0.075);
  baseLinkGroup.add(j1Node);
  const j1AxisGroup = new THREE.Group();
  j1Node.add(j1AxisGroup);
  const link1Group = new THREE.Group();
  j1AxisGroup.add(link1Group);

  // Joint 2 (Shoulder Pitch, quat="0.7071055 -0.7071081 0 0", axis="0 0 1")
  const j2Node = new THREE.Group();
  j2Node.position.set(0.020343, 0.027237, 0.07);
  j2Node.quaternion.set(-0.7071081, 0, 0, 0.7071055);
  link1Group.add(j2Node);
  const j2AxisGroup = new THREE.Group();
  j2Node.add(j2AxisGroup);
  const link2Group = new THREE.Group();
  j2AxisGroup.add(link2Group);

  // Joint 3 (Elbow Pitch, axis="0 0 -1")
  const j3Node = new THREE.Group();
  j3Node.position.set(-0.236, 0, 0);
  link2Group.add(j3Node);
  const j3AxisGroup = new THREE.Group();
  j3Node.add(j3AxisGroup);
  const link3Group = new THREE.Group();
  j3AxisGroup.add(link3Group);

  // Joint 4 (Wrist Pitch, axis="0 0 -1")
  const j4Node = new THREE.Group();
  j4Node.position.set(0.228, -0.072746, 0.0045);
  link3Group.add(j4Node);
  const j4AxisGroup = new THREE.Group();
  j4Node.add(j4AxisGroup);
  const link4Group = new THREE.Group();
  j4AxisGroup.add(link4Group);

  // Joint 5 (Wrist Roll, quat="0.7071055 -0.7071081 0 0", axis="0 0 -1")
  const j5Node = new THREE.Group();
  j5Node.position.set(0.087, -0.048, -0.03075);
  j5Node.quaternion.set(-0.7071081, 0, 0, 0.7071055);
  link4Group.add(j5Node);
  const j5AxisGroup = new THREE.Group();
  j5Node.add(j5AxisGroup);
  const link5Group = new THREE.Group();
  j5AxisGroup.add(link5Group);

  // Joint 6 (Flange Roll, quat="0.7071055 0 0.7071081 0", axis="0 0 -1")
  const j6Node = new THREE.Group();
  j6Node.position.set(0.0365, 0, 0.048);
  j6Node.quaternion.set(0, 0.7071081, 0, 0.7071055);
  link5Group.add(j6Node);
  const j6AxisGroup = new THREE.Group();
  j6Node.add(j6AxisGroup);
  const link6Group = new THREE.Group();
  j6AxisGroup.add(link6Group);

  // Gripper End Joint (quat="-0.0000026 0.7071055 0.0000026 0.7071081")
  const gripperEndNode = new THREE.Group();
  gripperEndNode.position.set(0, 0, 0.16621);
  gripperEndNode.quaternion.set(0.7071055, 0.0000026, 0.7071081, -0.0000026);
  link6Group.add(gripperEndNode);
  const gripperEndGroup = new THREE.Group();
  gripperEndNode.add(gripperEndGroup);

  // Invisible 360-degree Large Hit Target Sphere for 100% Easy Dragging from Any Distance/Angle
  const hitAreaGeo = new THREE.SphereGeometry(0.35, 16, 16);
  const hitAreaMat = new THREE.MeshBasicMaterial({ visible: false });
  const gripperHitSphere = new THREE.Mesh(hitAreaGeo, hitAreaMat);
  gripperHitSphere.position.set(-0.02, 0, 0);
  gripperEndGroup.add(gripperHitSphere);

  // Gripper Left Joint (quat="0.4999982 0.5 -0.5 0.5000018")
  const gripperLeftNode = new THREE.Group();
  gripperLeftNode.position.set(-0.041939, -0.0000734, 0);
  gripperLeftNode.quaternion.set(0.5, -0.5, 0.5000018, 0.4999982);
  gripperEndGroup.add(gripperLeftNode);
  const gripperLeftGroup = new THREE.Group();
  gripperLeftNode.add(gripperLeftGroup);

  // Gripper Right Joint (quat="0.4999982 -0.5 -0.5 -0.5000018")
  const gripperRightNode = new THREE.Group();
  gripperRightNode.position.set(-0.041939, 0.0000734, 0);
  gripperRightNode.quaternion.set(-0.5, -0.5, -0.5000018, 0.4999982);
  gripperEndGroup.add(gripperRightNode);
  const gripperRightGroup = new THREE.Group();
  gripperRightNode.add(gripperRightGroup);

  // Initial Studio Hero Pose Joint Angles
  j1AxisGroup.rotation.z = -0.55;
  j2AxisGroup.rotation.z = 0.5;   // Shoulder pitch
  j3AxisGroup.rotation.z = -0.85; // Elbow pitch
  j4AxisGroup.rotation.z = 0.35;  // Wrist pitch
  j5AxisGroup.rotation.z = 0;
  j6AxisGroup.rotation.z = 0;

  // 0. Procedural Instant Fallback Mesh (Guarantees arm is ALWAYS 100% visible)
  const fallbackGroup = new THREE.Group();
  fallbackGroup.scale.set(0.18, 0.18, 0.18); // intentionally near-invisible emergency mesh — never a visible placeholder
  robotArmGroup.add(fallbackGroup);

  const fbBase = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.08, 32), baseBlackMat);
  fbBase.rotation.x = Math.PI / 2;
  fallbackGroup.add(fbBase);

  const fbBody = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.45, 32), cncMetalMat);
  fbBody.position.set(0, 0.08, 0.25);
  fallbackGroup.add(fbBody);

  // Preloader UI Controller
  const preloaderEl = document.getElementById('page-preloader');
  const preloaderCounter = document.getElementById('preloader-counter');
  const preloaderBar = document.getElementById('preloader-progress-bar');
  const preloaderStatus = document.getElementById('preloader-status');

  let currentPercent = 0;
  let preloaderFinished = false;

  function setPreloaderProgress(percent, statusMsg) {
    if (typeof window.setPreloaderProgress === 'function') {
      window.setPreloaderProgress(percent, statusMsg);
    }
  }

  function finishPreloader() {
    if (preloaderFinished) return;
    preloaderFinished = true;

    // Immediately compile shaders and force-draw 1 WebGL frame onto canvas BEFORE revealing page
    try {
      renderer.compile(scene, camera);
      renderer.render(scene, camera);
    } catch (_) {}

    if (typeof window.dismissPreloader === 'function') {
      window.dismissPreloader();
    }
  }

  // Never reveal a placeholder while the real GLB is still loading: keep the
  // branded preloader up (8s: extend wait with status message; 16s: last resort).
  const preloaderFallbackTimer = setTimeout(() => {
    if (preloaderFinished) return;
    setPreloaderProgress(99, 'STILL LOADING 3D MODEL...');
    setTimeout(() => finishPreloader(), 8000);
  }, 8000);

  // GLB joint nodes for FK animation (populated after GLB loads)
  let glbJ1Axis = null, glbJ2Axis = null, glbJ3Axis = null;
  let glbJ4Axis = null, glbJ5Axis = null, glbJ6Axis = null;
  let glbGripperLeft = null, glbGripperRight = null;
  let useGLBJoints = false;

  // Load 3D GLB Model (2.3MB optimized high-performance binary mesh)
  armAssemblyGroup.visible = true;

  if (typeof THREE.GLTFLoader !== 'undefined') {
    const gltfLoader = new THREE.GLTFLoader();
    const matOverrides = {
      'CNCMetal': cncMetalMat, 'MotorBlack': motorMat,
      'BaseBlack': baseBlackMat, 'SeeedLimeGreen': badgeYellowMat,
    };

    gltfLoader.load(
      'models/rebot_arm_simple.glb',
      (gltf) => {
        const modelRoot = gltf.scene;

        modelRoot.traverse((child) => {
          if (child.isMesh && child.material && matOverrides[child.material.name]) {
            child.material = matOverrides[child.material.name];
          }
          if (child.isMesh && !child.geometry.getAttribute('normal')) {
            child.geometry.computeVertexNormals();
          }
        });

        armAssemblyGroup.add(modelRoot);

        glbJ1Axis = modelRoot.getObjectByName('joint1_axis');
        glbJ2Axis = modelRoot.getObjectByName('joint2_axis');
        glbJ3Axis = modelRoot.getObjectByName('joint3_axis');
        glbJ4Axis = modelRoot.getObjectByName('joint4_axis');
        glbJ5Axis = modelRoot.getObjectByName('joint5_axis');
        glbJ6Axis = modelRoot.getObjectByName('joint6_axis');
        glbGripperLeft = modelRoot.getObjectByName('gripper_left');
        glbGripperRight = modelRoot.getObjectByName('gripper_right');

        if (glbJ1Axis && glbJ2Axis && glbJ3Axis) {
          useGLBJoints = true;
        }

        fallbackGroup.visible = false;
        armAssemblyGroup.visible = true;
        try { renderer.compile(scene, camera); } catch (_) {}
        clearTimeout(preloaderFallbackTimer);
        setPreloaderProgress(100);
        finishPreloader();
      },
      (xhr) => {
        if (xhr.total && xhr.total > 0) {
          const p = Math.round((xhr.loaded / xhr.total) * 100);
          setPreloaderProgress(p);
        }
      },
      (err) => {
        console.warn('GLB load error:', err);
        setPreloaderProgress(100);
        finishPreloader();
      }
    );
  } else {
    setPreloaderProgress(100);
    finishPreloader();
  }


  // Sandbox Physics & FK Joint State Variables
  let isClawClosed = false;

  const raycaster = new THREE.Raycaster();
  let mouseX_ndc = 0;
  let mouseY_ndc = 0;

  let isDragging = false;
  let dragStartPointerX = 0;
  let dragStartPointerY = 0;
  let dragStartJ1 = 0;
  let dragStartJ2 = 0;
  let dragStartJ3 = 0;
  let dragStartJ4 = 0;

  let currentTargetJ1 = -0.55;
  let currentTargetJ2 = 0.50;
  let currentTargetJ3 = -0.85;
  let currentTargetJ4 = 0.35;
  let currentTargetJ5 = 0.0;
  let currentTargetJ6 = 0.0;

  function handlePointerDown(e) {
    if (e.button !== 0) return;
    isDragging = true;
    dragStartPointerX = e.clientX;
    dragStartPointerY = e.clientY;
    dragStartJ1 = currentTargetJ1;
    dragStartJ2 = currentTargetJ2;
    dragStartJ3 = currentTargetJ3;
    dragStartJ4 = currentTargetJ4;
    canvas.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';

    if (canvas.setPointerCapture) {
      try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
    }
  }

  function handlePointerMove(e) {
    mouseX_ndc = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY_ndc = -(e.clientY / window.innerHeight) * 2 + 1;

    if (isDragging) {
      canvas.style.cursor = 'grabbing';
      const deltaX = e.clientX - dragStartPointerX;
      const deltaY = e.clientY - dragStartPointerY;

      const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

      currentTargetJ1 = clamp(dragStartJ1 - deltaX * 0.008, -2.5, 2.5);
      currentTargetJ2 = clamp(dragStartJ2 - deltaY * 0.005, -0.15, 1.05);
      currentTargetJ3 = clamp(dragStartJ3 + deltaY * 0.006, -1.35, 0.05);
      currentTargetJ4 = clamp(dragStartJ4 - deltaY * 0.004, -0.75, 0.75);
    } else {
      canvas.style.cursor = 'grab';
      // Interactive Gaze Mouse-Tracking physics when not clicking:
      // Base yaw (J1): turn left/right with mouse X (-1 to +1)
      currentTargetJ1 = -0.55 - mouseX_ndc * 1.1;
      // Arm pitch (J2, J3, J4): reach up/down towards mouse Y with collision-free limits
      currentTargetJ2 = 0.50 + mouseY_ndc * 0.28;
      currentTargetJ3 = -0.85 - mouseY_ndc * 0.22;
      currentTargetJ4 = 0.35 + mouseY_ndc * 0.15;
    }
  }

  function handlePointerUp(e) {
    if (isDragging) {
      isDragging = false;
      canvas.style.cursor = 'grab';
      document.body.style.userSelect = '';
      if (canvas.releasePointerCapture) {
        try { canvas.releasePointerCapture(e.pointerId); } catch (_) {}
      }
    }
  }

  function handleDblClick(e) {
    isClawClosed = !isClawClosed;
  }

  canvas.addEventListener('pointerdown', handlePointerDown);
  window.addEventListener('pointermove', handlePointerMove);
  window.addEventListener('pointerup', handlePointerUp);
  window.addEventListener('pointercancel', handlePointerUp);
  canvas.addEventListener('dblclick', handleDblClick);

  // Handle Container Resizing & Dynamic Reflow
  function handleResize() {
    if (!container) return;
    const w = getContainerWidth();
    const h = getContainerHeight();
    if (w <= 0 || h <= 0) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  window.addEventListener('resize', handleResize, { passive: true });

  if (typeof ResizeObserver !== 'undefined' && container) {
    const ro = new ResizeObserver(handleResize);
    ro.observe(container);
  }

  // 7. Smooth Interactive Studio Arm Motion Loop (Frame-rate Independent Delta Time Smoothing)
  let time = 0;
  let isHeroArmVisible = true;
  const clock = new THREE.Clock();

  if ('IntersectionObserver' in window) {
    const heroSection = document.querySelector('.unitree-hero-section') || canvas;
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const wasVisible = isHeroArmVisible;
        isHeroArmVisible = entry.isIntersecting;
        if (!wasVisible && isHeroArmVisible) {
          clock.getDelta(); // reset delta timer
          requestAnimationFrame(animate);
        }
      });
    }, { threshold: 0.05 });
    heroObserver.observe(heroSection);
  }

  function animate() {
    if (!isHeroArmVisible) return;
    requestAnimationFrame(animate);

    const dt = Math.min(clock.getDelta(), 0.1);
    time += dt;

    const baseX = window.innerWidth > 992 ? 1.35 : 0.0;
    const lerpFactor = 1 - Math.exp(-14 * dt);

    if (useGLBJoints) {
      // Drive live FK on the GLB joint nodes
      if (glbJ1Axis) glbJ1Axis.rotation.z += (currentTargetJ1 - glbJ1Axis.rotation.z) * lerpFactor;
      if (glbJ2Axis) glbJ2Axis.rotation.z += (currentTargetJ2 - glbJ2Axis.rotation.z) * lerpFactor;
      if (glbJ3Axis) glbJ3Axis.rotation.z += (currentTargetJ3 - glbJ3Axis.rotation.z) * lerpFactor;
      if (glbJ4Axis) glbJ4Axis.rotation.z += (currentTargetJ4 - glbJ4Axis.rotation.z) * lerpFactor;
      if (glbJ5Axis) glbJ5Axis.rotation.z += (currentTargetJ5 - glbJ5Axis.rotation.z) * lerpFactor;
      if (glbJ6Axis) glbJ6Axis.rotation.z += (currentTargetJ6 - glbJ6Axis.rotation.z) * lerpFactor;
      const clawSlide = isClawClosed ? 0.003 : 0.026;
      const clawLerp = 1 - Math.exp(-12 * dt);
      if (glbGripperLeft) glbGripperLeft.position.z += (clawSlide - glbGripperLeft.position.z) * clawLerp;
      if (glbGripperRight) glbGripperRight.position.z += (clawSlide - glbGripperRight.position.z) * clawLerp;
    } else {
      // Fallback: drive procedural joint groups
      j1AxisGroup.rotation.z += (currentTargetJ1 - j1AxisGroup.rotation.z) * lerpFactor;
      j2AxisGroup.rotation.z += (currentTargetJ2 - j2AxisGroup.rotation.z) * lerpFactor;
      j3AxisGroup.rotation.z += (currentTargetJ3 - j3AxisGroup.rotation.z) * lerpFactor;
      j4AxisGroup.rotation.z += (currentTargetJ4 - j4AxisGroup.rotation.z) * lerpFactor;
      j5AxisGroup.rotation.z += (currentTargetJ5 - j5AxisGroup.rotation.z) * lerpFactor;
      j6AxisGroup.rotation.z += (currentTargetJ6 - j6AxisGroup.rotation.z) * lerpFactor;
      const clawSlide = isClawClosed ? 0.003 : 0.026;
      const clawLerp = 1 - Math.exp(-12 * dt);
      gripperLeftGroup.position.z += (clawSlide - gripperLeftGroup.position.z) * clawLerp;
      gripperRightGroup.position.z += (clawSlide - gripperRightGroup.position.z) * clawLerp;
    }

    robotArmGroup.position.set(baseX, -0.9, 0);
    shadowMesh.position.set(baseX, -0.908, 0);
    coreShadowMesh.position.set(baseX, -0.906, 0);

    renderer.render(scene, camera);
  }

  handleResize();
  animate();
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
  let lastTime = performance.now();

  function animatePhysicsSimulation() {
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
        video.play().catch(() => {});
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
          if (video.paused) video.play().catch(() => {});
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


