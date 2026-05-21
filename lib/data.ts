import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ashishkumar19016@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Ashish, I am reaching out to you because...',
    oldPortfolio: 'http://localhost:8000/legacy-static/index.html',
    upworkProfile: 'mailto:ashishkumar19016@gmail.com', // direct link to email
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com' },
    { name: 'linkedin', url: 'https://linkedin.com' },
    { name: 'x', url: 'https://x.com' },
    { name: 'instagram', url: 'https://instagram.com' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
    ],
    backend: [
        {
            name: 'Python',
            icon: '/logo/js.png', // Fallback or standard logo
        },
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'FastAPI',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Flask',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'Redis',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'PyTorch',
            icon: '/logo/aws.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Drishti AI Chatbot',
        slug: 'drishti',
        year: 2024,
        description: `
      Drishti is a high-performance, intelligent AI Chatbot platform engineered to deliver secure, organic conversational logic. It bridges the gap between advanced machine learning models and high-fidelity frontend clients. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🤖 Custom NLP Core: Built using PyTorch and Hugging Face Transformers for natural response cycles</li>
        <li>⚡ Fast API Pipeline: Configured secure, low-latency API handlers with FastAPI and state binding</li>
        <li>📁 Secure Data Syncing: Configured MongoDB data persistence layers with database indexing</li>
        <li>🛡️ Strict Input Sanitization: Features built-in defenses against prompt injection and cross-site scripting (XSS)</li>
      </ul>
      `,
        role: `
      Lead AI Engineer & Backend Architect <br/>
      Designed and developed the entire machine learning and service pipeline:
      <ul>
        <li>✅ NLP Pipeline: Trained and deployed local transformer architectures and tokenizers</li>
        <li>🖥️ Backend API: Wrote standard, high-speed asynchronously driven routers in FastAPI</li>
        <li>🧩 Integration: Connected state binders and message brokers for full conversational flows</li>
      </ul>
      `,
        techStack: [
            'Python',
            'PyTorch',
            'Transformers',
            'FastAPI',
            'MongoDB',
        ],
        thumbnail: '/assets/proj1.png',
        longThumbnail: '/assets/proj1.png',
        images: [
            '/assets/proj1.png',
        ],
    },
    {
        title: 'VoteChain',
        slug: 'votechain',
        year: 2024,
        description: `
      VoteChain is a decentralized, secure voting platform designed to facilitate absolute transparency, auditability, and tamper-proof electoral processing through smart contract logic. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>⛓️ Tamper-Proof Ballots: Safe, cryptographic ballot casting using Ethereum Smart Contracts</li>
        <li>🔐 Secure Key Authentication: Decoupled client-side signatures preventing vote duplications</li>
        <li>📦 IPFS Storage: Scalable, immutable media storage utilizing decentralized nodes</li>
      </ul>
      `,
        role: `
      Blockchain & Frontend Developer <br/>
      Led smart contract authoring and Web3 integration:
      <ul>
        <li>✅ Smart Contracts: Designed Solidity contract architectures with rigid auditing</li>
        <li>🎨 Interface: Built the interactive voting panels using React and Tailwind CSS</li>
        <li>🔗 Web3 Binding: Constructed Web3.js event listeners to bind blockchain logs directly to state</li>
      </ul>
      `,
        techStack: [
            'Solidity',
            'React',
            'Web3.js',
            'IPFS',
            'Ethereum',
        ],
        thumbnail: '/assets/proj2.png',
        longThumbnail: '/assets/proj2.png',
        images: [
            '/assets/proj2.png',
        ],
    },
    {
        title: 'Earthquake Impact Estimator',
        slug: 'earthquake-impact-estimator',
        year: 2024,
        description: `
      EIE is a machine-learning powered application that analyzes real-time seismic waves and estimates structural damage impact on urban locations, rendering full 3D interactive visualizations of the affected coordinates. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>📊 ML Regression Core: Formulated high-precision predictions using Scikit-Learn</li>
        <li>📈 Interactive Visualizations: Dynamic data rendering via ChartJS and WebGL pipelines</li>
        <li>🌐 Responsive Dashboard: Fully interactive map overlays showing impact distributions</li>
      </ul>
      `,
        role: `
      ML Engineer & Fullstack Developer <br/>
      Developed the predictive model and fullstack pipeline:
      <ul>
        <li>✅ Predictor: Formulated and trained Scikit-Learn models on historical seismic data</li>
        <li>🖥️ Server: Set up Flask backend routers to handle real-time geocoding queries</li>
        <li>🎨 Presentation: Integrated WebGL mapping models with custom coordinate plots</li>
      </ul>
      `,
        techStack: [
            'Python',
            'Scikit-Learn',
            'Flask',
            'ChartJS',
            'WebGL',
        ],
        thumbnail: '/assets/proj3.png',
        longThumbnail: '/assets/proj3.png',
        images: [
            '/assets/proj3.png',
        ],
    },
    {
        title: 'GameKray Dashboard',
        slug: 'gamekray',
        year: 2024,
        description: `
      GameKray is an interactive, multi-player gaming hub dashboard that features high-performance graphics rendering, low-latency state synchronization, and high-fidelity glassmorphic layouts. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🎮 3D Graphics: Interactive web components loaded through custom Three.js pipelines</li>
        <li>⚡ Live Syncing: Synchronized player lobby status via low-latency Socket.IO event buses</li>
        <li>🌌 Smooth UI: Modern styling using TailwindCSS and CSS perspective transforms</li>
      </ul>
      `,
        role: `
      Frontend Graphics Developer <br/>
      Created the high-fidelity UI and synchronous communication layers:
      <ul>
        <li>✅ UI Components: Built React panels featuring clean premium glassmorphism layouts</li>
        <li>🎨 Render Engine: Programmed Three.js scenes, custom shaders, and camera perspective bounds</li>
        <li>🔄 WebSockets: Integrated real-time client-to-server game state communication</li>
      </ul>
      `,
        techStack: [
            'React',
            'Three.js',
            'Node.js',
            'Socket.IO',
            'TailwindCSS',
        ],
        thumbnail: '/assets/proj4.png',
        longThumbnail: '/assets/proj4.png',
        images: [
            '/assets/proj4.png',
        ],
    },
    {
        title: 'RedxChess Platform',
        slug: 'redxchess',
        year: 2024,
        description: `
      RedxChess is a real-time multiplayer chess platform featuring automated chess engine evaluation, matchmaking lobbies, and responsive game logs. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>♟️ Chess Engine: Implemented complete, strict move generation and engine logic in Pygame</li>
        <li>🤝 Matchmaking: Configured Redis channels to synchronize and connect matching lobbies</li>
        <li>📢 Real-Time Updates: Live board rendering over secure, concurrent WebSocket channels</li>
      </ul>
      `,
        role: `
      Core Backend Developer <br/>
      Engineered match-making lobbies and engine components:
      <ul>
        <li>✅ Engines: Built the core Python game rules tracker and move validator</li>
        <li>🔗 Communication: Integrated Pygame bindings with asynchronous WebSocket servers</li>
        <li>🧠 Cache Broker: Set up Redis caching to handle queue states and active matches</li>
      </ul>
      `,
        techStack: [
            'Python',
            'Pygame',
            'Websockets',
            'Redis',
            'Node.js',
        ],
        thumbnail: '/assets/proj5.png',
        longThumbnail: '/assets/proj5.png',
        images: [
            '/assets/proj5.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Learning & R&D',
        company: 'Self-Development',
        duration: 'NOW',
    },
    {
        title: 'AI Engineer',
        company: 'Freelance & Projects',
        duration: '2024 - Present',
    },
    {
        title: 'Full-Stack Developer',
        company: 'Freelance & Projects',
        duration: '2024',
    },
    {
        title: 'Python Developer',
        company: 'Self-taught & Projects',
        duration: '2022 - 2023',
    },
    {
        title: 'Graphic Designer',
        company: 'Freelance & Projects',
        duration: '2021',
    },
    {
        title: 'Microsoft Office Analyst',
        company: 'Begin Learning',
        duration: '2021',
    },
];
