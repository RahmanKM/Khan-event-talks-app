const fs = require('fs');
const path = require('path');

const talks = [
    {
        title: "The Future of Artificial Intelligence",
        speakers: ["Dr. Evelyn Reed"],
        category: ["AI", "Machine Learning"],
        duration: 60,
        description: "A deep dive into the latest advancements in AI and what to expect in the coming years."
    },
    {
        title: "Quantum Computing: A New Paradigm",
        speakers: ["Prof. Kenji Tanaka"],
        category: ["Quantum Computing", "Physics"],
        duration: 60,
        description: "Exploring the principles of quantum computing and its potential to revolutionize industries."
    },
    {
        title: "Building Scalable Web Applications",
        speakers: ["Maria Rodriguez", "David Chen"],
        category: ["Web Development", "Scalability"],
        duration: 60,
        description: "Best practices and architectural patterns for creating web applications that can handle millions of users."
    },
    {
        title: "The Ethics of Genetic Engineering",
        speakers: ["Dr. Lena Petrova"],
        category: ["Bioethics", "Genetics"],
        duration: 60,
        description: "A thought-provoking discussion on the moral and ethical implications of gene editing technologies."
    },
    {
        title: "Cybersecurity in a Connected World",
        speakers: ["Michael O'Connell"],
        category: ["Cybersecurity", "Networking"],
        duration: 60,
        description: "Strategies for protecting against cyber threats in an increasingly interconnected digital landscape."
    },
    {
        title: "The Art of Data Visualization",
        speakers: ["Dr. Isabella Rossi"],
        category: ["Data Science", "Design"],
        duration: 60,
        description: "Techniques for creating compelling and informative data visualizations to communicate complex information effectively."
    }
];

const htmlTemplate = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
const cssContent = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8');
const jsContent = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf-8');

const finalJs = `
const talksData = ${JSON.stringify(talks, null, 4)};
${jsContent.replace("fetch('/api/talks').then(response => response.json()).then(data => { talksData = data; renderSchedule(talksData); });", 'renderSchedule(talksData);')}
`;

const finalHtml = htmlTemplate
    .replace('<link rel="stylesheet" href="style.css">', `<style>${cssContent}</style>`)
    .replace('<script src="script.js"></script>', `<script>${finalJs}</script>`);

fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), finalHtml);

console.log('Serverless file created at dist/index.html');
