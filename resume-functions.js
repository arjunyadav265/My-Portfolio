// Resume Functions
const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arjun Yadav - Front-End Developer Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Calibri', 'Segoe UI', Arial, sans-serif; background: #f5f5f5; padding: 30px 15px; line-height: 1.6; color: #333; }
        .resume { max-width: 850px; margin: 0 auto; background: white; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
        .header { background: #2c3e50; color: white; padding: 40px 50px; border-bottom: 4px solid #3498db; }
        h1 { font-size: 36px; margin-bottom: 8px; font-weight: 700; letter-spacing: 1px; }
        .title { font-size: 18px; margin-bottom: 20px; color: #3498db; font-weight: 500; }
        .contact-info { display: flex; flex-wrap: wrap; gap: 20px; font-size: 14px; margin-top: 15px; }
        .contact-item { display: flex; align-items: center; gap: 6px; }
        .contact-item::before { content: ''; display: inline-block; width: 16px; height: 16px; margin-right: 6px; }
        .contact-item.phone::before { content: '📱'; width: auto; }
        .contact-item.email::before { content: '✉️'; width: auto; }
        .contact-item.linkedin::before { content: '💼'; width: auto; }
        .contact-item.github::before { content: '⚙️'; width: auto; }
        .contact-item a { color: white; text-decoration: none; }
        .content { padding: 40px 50px; }
        .section { margin-bottom: 35px; }
        h2 { color: #2c3e50; font-size: 20px; font-weight: 700; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #3498db; text-transform: uppercase; letter-spacing: 0.5px; }
        .summary { color: #555; line-height: 1.8; font-size: 15px; text-align: justify; }
        .skills-container { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .skill-category { background: #f8f9fa; padding: 15px; border-left: 3px solid #3498db; }
        .skill-category h3 { color: #2c3e50; font-size: 15px; margin-bottom: 10px; font-weight: 600; }
        .skill-list { color: #555; font-size: 14px; line-height: 1.8; }
        .item { margin-bottom: 20px; }
        .item-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; gap: 15px; }
        .item-title { font-size: 16px; font-weight: 700; color: #2c3e50; }
        .item-subtitle { color: #3498db; font-weight: 600; font-size: 15px; margin-bottom: 4px; }
        .item-date { color: #7f8c8d; font-size: 14px; font-weight: 500; white-space: nowrap; }
        .item-description { color: #555; font-size: 14px; line-height: 1.7; margin-top: 6px; }
        .item-description ul { margin-left: 20px; margin-top: 8px; }
        .item-description li { margin-bottom: 5px; text-align: justify; }
        .project-tech { margin-top: 8px; font-size: 13px; color: #555; }
        .project-tech strong { color: #2c3e50; font-weight: 600; }
        .score { color: #555; font-size: 14px; font-style: italic; }
        @media (max-width: 768px) {
            .header, .content { padding: 25px 20px; }
            h1 { font-size: 28px; }
            .skills-container { grid-template-columns: 1fr; }
            .item-header { flex-direction: column; align-items: flex-start; }
        }
    </style>
</head>
<body>
    <div class="resume">
        <div class="header">
            <h1>ARJUN YADAV</h1>
            <div class="title">Front-End Developer</div>
            <div class="contact-info">
                <div class="contact-item phone"><span>+91 7854757478</span></div>
                <div class="contact-item email"><a href="mailto:arjunyadavmau2003@gmail.com">arjunyadavmau2003@gmail.com</a></div>
                <div class="contact-item linkedin"><a href="https://www.linkedin.com/in/arjunyadav265" target="_blank">linkedin.com/in/arjunyadav265</a></div>
                <div class="contact-item github"><a href="https://github.com/arjunyadav265" target="_blank">github.com/arjunyadav265</a></div>
            </div>
        </div>
        <div class="content">
            <div class="section">
                <h2>Professional Summary</h2>
                <p class="summary">Self-motivated Front-End Developer with a strong foundation in modern web technologies and full-stack development. Successfully transitioned from humanities background to software development through intensive self-learning and practical project implementation. Proficient in building responsive, scalable web applications using React.js, Node.js, and modern JavaScript frameworks. Demonstrated ability to quickly master new technologies, as evidenced by completion of complex projects including Airbnb and Zerodha clones. Currently expanding expertise in AI/ML technologies. Seeking opportunities to contribute technical skills and innovative problem-solving abilities to a dynamic development team.</p>
            </div>
            <div class="section">
                <h2>Technical Skills</h2>
                <div class="skills-container">
                    <div class="skill-category"><h3>Frontend Development</h3><div class="skill-list">HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Tailwind CSS, Responsive Web Design, DOM Manipulation</div></div>
                    <div class="skill-category"><h3>Backend Development</h3><div class="skill-list">Node.js, Express.js, Python, RESTful APIs, Server-side Development</div></div>
                    <div class="skill-category"><h3>Database Management</h3><div class="skill-list">MongoDB, SQL, Database Design, Query Optimization</div></div>
                    <div class="skill-category"><h3>Tools & Technologies</h3><div class="skill-list">Git, GitHub, Docker, Kubernetes, Version Control, CI/CD Basics</div></div>
                </div>
            </div>
            <div class="section">
                <h2>Projects</h2>
                <div class="item">
                    <div class="item-header"><div><div class="item-title">Airbnb Clone - Full-Stack Application</div><div class="item-subtitle">Property Rental Platform</div></div><div class="item-date">2025</div></div>
                    <div class="item-description"><ul><li>Developed a comprehensive property rental platform replicating core Airbnb functionalities with user authentication, property listings, and booking management</li><li>Implemented responsive UI using React.js ensuring seamless experience across desktop and mobile devices</li><li>Built RESTful APIs using Node.js and Express.js for handling user requests and database operations</li><li>Integrated MongoDB for efficient data storage and retrieval of property listings and user information</li><li>Implemented search and filter functionality enabling users to find properties based on location and preferences</li></ul><div class="project-tech"><strong>Technologies Used:</strong> React.js, Node.js, Express.js, MongoDB, HTML5, CSS3, JavaScript</div></div>
                </div>
                <div class="item">
                    <div class="item-header"><div><div class="item-title">Zerodha Clone - Trading Platform Interface</div><div class="item-subtitle">Stock Trading Simulation</div></div><div class="item-date">2025</div></div>
                    <div class="item-description"><ul><li>Created a stock trading platform interface mimicking Zerodha's design with real-time data visualization capabilities</li><li>Developed interactive dashboard displaying portfolio overview, watchlist, and market trends</li><li>Implemented dynamic charts and graphs using charting libraries for stock price visualization</li><li>Built backend services for handling user portfolios and simulated trading operations</li><li>Ensured responsive design principles for optimal viewing across various screen sizes</li></ul><div class="project-tech"><strong>Technologies Used:</strong> React.js, Node.js, Express.js, MongoDB, Chart.js, CSS3</div></div>
                </div>
                <div class="item">
                    <div class="item-header"><div><div class="item-title">Spotify Clone - Music Streaming Interface</div></div><div class="item-date">2025</div></div>
                    <div class="item-description">Developed a music streaming application interface featuring playlist management, audio player controls, and responsive layout replicating Spotify's user experience using React.js and modern CSS techniques.<div class="project-tech"><strong>Technologies Used:</strong> React.js, HTML5, CSS3, JavaScript</div></div>
                </div>
                <div class="item">
                    <div class="item-header"><div><div class="item-title">Modern Calculator Application</div></div><div class="item-date">2025</div></div>
                    <div class="item-description">Designed and implemented a fully functional calculator with intuitive UI supporting all basic arithmetic operations, keyboard input integration, and error handling mechanisms.<div class="project-tech"><strong>Technologies Used:</strong> HTML5, CSS3, JavaScript</div></div>
                </div>
            </div>
            <div class="section">
                <h2>Education</h2>
                <div class="item">
                    <div class="item-header"><div><div class="item-title">Master of Arts</div><div class="item-subtitle">Maharaja Suheldev University, Azamgarh, Uttar Pradesh</div></div><div class="item-date">2025</div></div>
                    <div class="item-description"><span class="score">CGPA: 7.65/10</span></div>
                </div>
                <div class="item">
                    <div class="item-header"><div><div class="item-title">Bachelor of Arts</div><div class="item-subtitle">Veer Bahadur Singh Purvanchal University, Jaunpur, Uttar Pradesh</div></div><div class="item-date">2023</div></div>
                    <div class="item-description"><span class="score">Percentage: 62.83%</span></div>
                </div>
                <div class="item">
                    <div class="item-header"><div><div class="item-title">Intermediate (Class XII)</div><div class="item-subtitle">Board of High School and Intermediate Education, Uttar Pradesh</div></div><div class="item-date">2020</div></div>
                    <div class="item-description"><span class="score">Percentage: 64.2%</span></div>
                </div>
                <div class="item">
                    <div class="item-header"><div><div class="item-title">High School (Class X)</div><div class="item-subtitle">Board of High School and Intermediate Education, Uttar Pradesh</div></div><div class="item-date">2018</div></div>
                    <div class="item-description"><span class="score">Percentage: 71.5%</span></div>
                </div>
            </div>
            <div class="section">
                <h2>Certifications & Training</h2>
                <div class="item">
                    <div class="item-header"><div><div class="item-title">Full-Stack Web Development Certification</div><div class="item-subtitle">Apna College</div></div><div class="item-date">2024</div></div>
                    <div class="item-description">Completed comprehensive training in web development covering frontend technologies (HTML, CSS, JavaScript, React.js), backend development (Node.js, Express.js), database management (MongoDB, SQL), and deployment practices.</div>
                </div>
                <div class="item">
                    <div class="item-header"><div><div class="item-title">Artificial Intelligence & Machine Learning (In Progress)</div><div class="item-subtitle">Apna College</div></div><div class="item-date">2025</div></div>
                    <div class="item-description">Currently enrolled in specialized training covering machine learning algorithms, neural networks, data preprocessing, and practical AI applications using Python and industry-standard libraries.</div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;

function viewResume() {
    const modal = document.getElementById('resumeModal');
    const iframe = document.getElementById('resume-frame');
    const blob = new Blob([resumeHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    iframe.src = url;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
    const modal = document.getElementById('resumeModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function downloadResume() {
    const blob = new Blob([resumeHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Arjun_Yadav_Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show download notification
    alert('Resume downloaded successfully! You can open the HTML file in your browser and use Print > Save as PDF to create a PDF version.');
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('resumeModal');
    if (event.target === modal) {
        closeResumeModal();
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeResumeModal();
    }
});
