import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ashishkumar19016@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Ashish, I am reaching out to you because...',
    oldPortfolio: 'http://localhost:8000/legacy-static/index.html',
    upworkProfile: 'https://www.linkedin.com/in/ashish-waliya-01019258', // direct link to LinkedIn
    resumeUrl: '/ashish_resume.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/ashishwaliya' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ashish-waliya-01019258' },
];

export const MY_STACK = {
    languages: [
        { name: 'Python', icon: '/logo/js.png' },
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'Java', icon: '/logo/js.png' },
        { name: 'C++', icon: '/logo/js.png' },
        { name: 'C', icon: '/logo/js.png' },
    ],
    frontend: [
        { name: 'React.js', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'SQL', icon: '/logo/mysql.svg' },
        { name: 'Flask', icon: '/logo/express.png' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'GitHub', icon: '/logo/github.png' },
        { name: 'AWS', icon: '/logo/aws.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Sugarcane Disease Identification using Machine Learning',
        slug: 'sugarcane-disease-identification',
        year: 'Final Year Project 2026',
        description: `
      An advanced AI-based system designed to identify sugarcane leaf diseases using custom CNN classification models. Engineered a user-friendly interface that allows farmers to upload leaf images for real-time diagnostic reports. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🔬 CNN Classification: Developed high-precision classification layers utilizing VGG16, InceptionV3, and TensorFlow</li>
        <li>📷 Computer Vision: Preprocessed leaf inputs with OpenCV and Python data analysis pipelines</li>
        <li>🌾 Real-Time Diagnostics: Configured image upload pipelines for direct real-time analysis</li>
      </ul>
      `,
        role: `
      AI/ML Developer & Lead Researcher <br/>
      Designed the entire convolutional neural network (CNN) model pipeline and co-authored the peer-reviewed research paper titled <i>"An Image-Based Machine Learning Approach for Sugarcane Leaf Disease Identification and Classification"</i>, presented at the ICSD-2025 International Conference.
      `,
        techStack: [
            'Python',
            'TensorFlow',
            'OpenCV',
            'CNN',
            'NumPy',
            'Pandas',
            'Matplotlib',
        ],
        thumbnail: '/assets/sugarcane_disease_ml.png',
        longThumbnail: '/assets/sugarcane_disease_ml.png',
        images: [
            '/assets/sugarcane_disease_ml.png',
        ],
    },
    {
        title: 'E-Commerce Website (HAPPYSHOP)',
        slug: 'happyshop',
        year: 2024,
        description: `
      HAPPYSHOP is a responsive, modern e-commerce web platform showcasing clean vanilla JavaScript shopping cart functionality, responsive navigation models, and interactive checkout logic. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛒 Dynamic Shopping Cart: Implemented real-time item selection, quantities adjustments, and price updates</li>
        <li>🔒 Secure Checkout Flow: Designed robust local forms and validations to simulate order processing</li>
        <li>📱 Responsive Layout: Programmed smooth, mobile-friendly layouts utilizing semantic HTML and modern CSS</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Designed and developed the interface from the ground up:
      <ul>
        <li>✅ UI Construction: Programmed clean layouts focusing on premium interactive shopping elements</li>
        <li>✅ Cart Controller: Designed high-efficiency state binding logic in vanilla JS to synchronize product states</li>
      </ul>
      `,
        techStack: [
            'HTML',
            'CSS',
            'JavaScript',
        ],
        thumbnail: '/assets/happyshop_ecommerce.png',
        longThumbnail: '/assets/happyshop_ecommerce.png',
        images: [
            '/assets/happyshop_ecommerce.png',
        ],
    },
    {
        title: 'Intelligent Chatbot using NLP',
        slug: 'intelligent-chatbot',
        year: 2024,
        description: `
      An intelligent natural language processing chatbot designed to understand, process, and accurately respond to interactive conversational queries. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🤖 Custom NLP: Trained natural language understanding modules utilizing TensorFlow deep learning</li>
        <li>⚡ REST API: Configured responsive web route integrations utilizing Python Flask</li>
        <li>📈 Tokenization: Programmed custom NLTK tokenization pipelines to process query strings</li>
      </ul>
      `,
        role: `
      AI/ML Developer <br/>
      Engineered the neural processor and backend server structure:
      <ul>
        <li>✅ Model Training: Formulated and trained deep learning NLP sequences on localized intents sets</li>
        <li>✅ API Servicing: Connected the Python model with localized lightweight Flask server APIs</li>
      </ul>
      `,
        techStack: [
            'Python',
            'TensorFlow',
            'NLTK',
            'NumPy',
            'Pandas',
            'Flask',
            'JavaScript',
        ],
        thumbnail: '/assets/intelligent_chatbot.png',
        longThumbnail: '/assets/intelligent_chatbot.png',
        images: [
            '/assets/intelligent_chatbot.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Ethical Hacking & Penetration Testing',
        company: 'CDAC, Noida (Internship Training)',
        duration: '2024',
    },
    {
        title: 'B.Tech in Information Technology',
        company: 'Rajkiya Engineering College, Bijnor',
        duration: '2022 - 2026',
    },
    {
        title: 'Intermediate Education',
        company: 'Subhash Inter College, Meerut',
        duration: '2020 - 2021',
    },
];
