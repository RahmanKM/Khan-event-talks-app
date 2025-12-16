const http = require('http');
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

const server = http.createServer((req, res) => {
    if (req.url === '/api/talks') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(talks));
    } else if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else if (req.url === '/style.css') {
        fs.readFile(path.join(__dirname, 'style.css'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading style.css');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(content);
            }
        });
    } else if (req.url === '/script.js') {
        fs.readFile(path.join(__dirname, 'script.js'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading script.js');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(content);
            }
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
