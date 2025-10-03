document.addEventListener('DOMContentLoaded', () => {
        const { jsPDF } = window.jspdf;

        // --- ROADMAP DATA (Simulates AI analysis with YouTube links) ---
        const roadmapData = {
            AI: { role: "AI/ML Engineer", weeks: [ { week: 1, title: "Python & NumPy", days: [ { day: 1, task: "Python Basics: Variables & Data Types", link: "https://www.youtube.com/watch?v=kqtD5dpn9C8" }, { day: 3, task: "NumPy Arrays and Operations", link: "https://www.youtube.com/watch?v=QUT1VHiLmmI" }, { day: 5, task: "Mini-Project: Array Manipulator", link: "https://www.youtube.com/watch?v=sV_B-n4_YkI" } ] }, { week: 2, title: "Pandas & Data Manipulation", days: [ { day: 1, task: "Intro to DataFrames", link: "https://www.youtube.com/watch?v=zmdjNSmRXF4" }, { day: 3, task: "Data Cleaning Techniques", link: "https://www.youtube.com/watch?v=F6kmIpWWEdU" }, { day: 5, task: "Project: Analyze a CSV dataset", link: "https://www.youtube.com/watch?v=yln_C1d_qgA" } ] }, { week: 3, title: "Intro to Machine Learning", days: [ { day: 1, task: "Core ML Concepts (Supervised/Unsupervised)", link: "https://www.youtube.com/watch?v=ukzFI9rgwfU" }, { day: 3, task: "Train/Test Split and Model Evaluation", link: "https://www.youtube.com/watch?v=fwY9Qv96DJY" }, { day: 5, task: "First model with Scikit-Learn", link: "https://www.youtube.com/watch?v=0B5eIE_1vpU" } ] }, { week: 4, title: "Supervised Learning Algorithms", days: [ { day: 1, task: "Linear & Logistic Regression", link: "https://www.youtube.com/watch?v=zM4VZR0px8E" }, { day: 3, task: "Decision Trees & Random Forests", link: "https://www.youtube.com/watch?v=g9c66eQb7vo" }, { day: 5, task: "Project: Predict Housing Prices", link: "https://www.youtube.com/watch?v=JcI5E2Ng6r4" } ] }, { week: 5, title: "Unsupervised Learning", days: [ { day: 1, task: "K-Means Clustering", link: "https://www.youtube.com/watch?v=4b5d3muPQmA" }, { day: 3, task: "Dimensionality Reduction (PCA)", link: "https://www.youtube.com/watch?v=FgakZw6K1QQ" }, { day: 5, task: "Project: Customer Segmentation", link: "https://www.youtube.com/watch?v=d_S-w_4v_Vo" } ] }, { week: 6, title: "Intro to Deep Learning", days: [ { day: 1, task: "What are Neural Networks?", link: "https://www.youtube.com/watch?v=aircAruvnKk" }, { day: 3, task: "Build a simple network with TensorFlow/Keras", link: "https://www.youtube.com/watch?v=s-V7gKrsels" }, { day: 5, task: "Project: Image Classification (MNIST)", link: "https://www.youtube.com/watch?v=i-h_t_MOKpo" } ] }, { week: 7, title: "Capstone Project", days: [ { day: 1, task: "Define a real-world problem", link: "https://www.youtube.com/watch?v=d_S-w_4v_Vo" }, { day: 3, task: "Data collection and preprocessing", link: "https://www.youtube.com/watch?v=F6kmIpWWEdU" }, { day: 5, task: "Build, train, and present your model", link: "https://www.youtube.com/watch?v=JcI5E2Ng6r4" } ] } ]},
            Web: { role: "Full-Stack Web Developer", weeks: [ { week: 1, title: "HTML & CSS", days: [ { day: 1, task: "HTML5 Semantic Tags", link: "https://www.youtube.com/watch?v=G3e-cpL7ofc" }, { day: 3, task: "CSS Flexbox & Grid", link: "https://www.youtube.com/watch?v=K74l26pE4YA" }, { day: 5, task: "Project: Build a Personal Portfolio Page", link: "https://www.youtube.com/watch?v=l-gQLqv9f4o" } ] }, { week: 2, title: "JavaScript Fundamentals", days: [ { day: 1, task: "Variables, Functions, and Scope", link: "https://www.youtube.com/watch?v=W6NZfCO5SIk" }, { day: 3, task: "DOM Manipulation", link: "https://www.youtube.com/watch?v=y17RuWkWdn8" }, { day: 5, task: "Project: Interactive To-Do List", link: "https://www.youtube.com/watch?v=Ttf3CEsEwMQ" } ] }, { week: 3, title: "Frontend Framework: React", days: [ { day: 1, task: "Components, JSX, and Props", link: "https://www.youtube.com/watch?v=bMknfKXIFA8" }, { day: 3, task: "State and Lifecycle", link: "https://www.youtube.com/watch?v=4UZrsTqkcW4" }, { day: 5, task: "Project: Build a Weather App", link: "https://www.youtube.com/watch?v=I3uP85s892s" } ] }, { week: 4, title: "Advanced React", days: [ { day: 1, task: "React Hooks (useState, useEffect)", link: "https://www.youtube.com/watch?v=cF2lQ_gH6lo" }, { day: 3, task: "React Router for navigation", link: "https://www.youtube.com/watch?v=Law7wfdg_ls" }, { day: 5, task: "State Management (Context API)", link: "https://www.youtube.com/watch?v=5LrDIWkK_Bc" } ] }, { week: 5, title: "Backend: Node.js & Express", days: [ { day: 1, task: "Creating a basic server", link: "https://www.youtube.com/watch?v=SccSCuHhOw0" }, { day: 3, task: "Building a REST API", link: "https://www.youtube.com/watch?v=pKd0Rpw7O48" }, { day: 5, task: "Connect API to your React App", link: "https://www.youtube.com/watch?v=kJA9r26VFdE" } ] }, { week: 6, title: "Databases", days: [ { day: 1, task: "SQL vs NoSQL Concepts", link: "https://www.youtube.com/watch?v=ruz-vK8IesE" }, { day: 3, task: "Working with a PostgreSQL/MongoDB database", link: "https://www.youtube.com/watch?v=ANW-Q_3g4sI" }, { day: 5, task: "Project: User Authentication", link: "https://www.youtube.com/watch?v=6pdFX8s6_y0" } ] }, { week: 7, title: "Full-Stack Deployment", days: [ { day: 1, task: "Prepare app for production", link: "https://www.youtube.com/watch?v=1x6-n5S-7k0" }, { day: 3, task: "Deploy frontend (Netlify/Vercel)", link: "https://www.youtube.com/watch?v=Yg_Qp-K48tU" }, { day: 5, task: "Deploy backend (Heroku/Render)", link: "https://www.youtube.com/watch?v=7aRj4eGA-FE" } ] } ]},
            Data: { role: "Data Scientist", weeks: [ { week: 1, title: "Advanced SQL", days: [ { day: 1, task: "Window Functions", link: "https://www.youtube.com/watch?v=HXV3zeQKqGY" }, { day: 3, task: "Common Table Expressions (CTEs)", link: "https://www.youtube.com/watch?v=6kE3-YI1t-A" }, { day: 5, task: "Project: Analyze Sales Data", link: "https://www.youtube.com/watch?v=y4C5yI-4y7M" } ] }, { week: 2, title: "Statistics & Probability", days: [ { day: 1, task: "Descriptive Statistics", link: "https://www.youtube.com/watch?v=Vfo5le26-ZQ" }, { day: 3, task: "Probability Distributions", link: "https://www.youtube.com/watch?v=YXLVjCKVP7U" }, { day: 5, task: "Apply concepts to a dataset", link: "https://www.youtube.com/watch?v=AuB-iZ6BEvE" } ] }, { week: 3, title: "Data Visualization", days: [ { day: 1, task: "Matplotlib and Seaborn basics", link: "https://www.youtube.com/watch?v=a9UrKTVEeZA" }, { day: 3, task: "Creating insightful plots", link: "https://www.youtube.com/watch?v=49HStPC409M" }, { day: 5, task: "Project: Exploratory Data Analysis (EDA)", link: "https://www.youtube.com/watch?v=Wff_n2nJ_4g" } ] }, { week: 4, title: "Machine Learning with Scikit-Learn", days: [ { day: 1, task: "Regression Models", link: "https://www.youtube.com/watch?v=0B5eIE_1vpU" }, { day: 3, task: "Classification Models", link: "https://www.youtube.com/watch?v=p6xrh66J20A" }, { day: 5, task: "Model Evaluation Metrics", link: "https://www.youtube.com/watch?v=KQQgrg6uh24" } ] }, { week: 5, title: "Feature Engineering", days: [ { day: 1, task: "Handling Missing Data", link: "https://www.youtube.com/watch?v=EaGbS7eWSs0" }, { day: 3, task: "Categorical Encoding", link: "https://www.youtube.com/watch?v=mxB3-vl_8s4" }, { day: 5, task: "Scaling and Normalization", link: "https://www.youtube.com/watch?v=d2ffyI-I_kQ" } ] }, { week: 6, title: "Advanced Topics", days: [ { day: 1, task: "Intro to Time Series Analysis", link: "https://www.youtube.com/watch?v=c0k-LZ-0p-I" }, { day: 3, task: "Intro to Natural Language Processing (NLP)", link: "https://www.youtube.com/watch?v=fOvT5v-5Ch8" }, { day: 5, task: "Choose a topic to explore deeper", link: "https://www.youtube.com/watch?v=835cnYCVG8g" } ] }, { week: 7, title: "End-to-End Data Science Project", days: [ { day: 1, task: "Problem Formulation & Data Sourcing", link: "https://www.youtube.com/watch?v=68E6B-n4a-k" }, { day: 3, task: "Modeling and Experimentation", link: "https://www.youtube.com/watch?v=iG5-0cXO0vI" }, { day: 5, task: "Present findings in a dashboard or report", link: "https://www.youtube.com/watch?v=C9I5kjed1do" } ] } ]},
            Mobile: { role: "Mobile App Developer", weeks: [ { week: 1, title: "Language Fundamentals (Swift/Kotlin)", days: [ { day: 1, task: "Basic Syntax and Control Flow", link: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }, { day: 3, task: "Object-Oriented Programming Concepts", link: "https://www.youtube.com/watch?v=3-8StyR0NlI" }, { day: 5, task: "Build a Simple Calculator App", link: "https://www.youtube.com/watch?v=bgC-l_Ta0RU" } ] }, { week: 2, title: "UI Development", days: [ { day: 1, task: "Building Layouts with SwiftUI/Compose", link: "https://www.youtube.com/watch?v=xT6o-zO-39s" }, { day: 3, task: "Handling User Input", link: "https://www.youtube.com/watch?v=LdJg1wrMSi8" }, { day: 5, task: "Project: Design a Login Screen", link: "https://www.youtube.com/watch?v=juiqI0J-n_A" } ] }, { week: 3, title: "Navigation & App Architecture", days: [ { day: 1, task: "Multi-screen navigation", link: "https://www.youtube.com/watch?v=A2cku2QA-9Q" }, { day: 3, task: "Understanding MVVM architecture", link: "https://www.youtube.com/watch?v=D_h-RzII4D8" }, { day: 5, task: "Refactor your app to use MVVM", link: "https://www.youtube.com/watch?v=pTQBw8yvE-c" } ] }, { week: 4, title: "Networking & APIs", days: [ { day: 1, task: "Fetching data from a REST API", link: "https://www.youtube.com/watch?v=O_d-B2d_ZnA" }, { day: 3, task: "Parsing JSON data", link: "https://www.youtube.com/watch?v=ou-H-A_C9yM" }, { day: 5, task: "Project: Build a News Reader App", link: "https://www.youtube.com/watch?v=5wvoImrUkvs" } ] }, { week: 5, title: "Data Persistence", days: [ { day: 1, task: "Saving data locally (UserDefaults/SharedPreferences)", link: "https://www.youtube.com/watch?v=OR_2fA1h_pY" }, { day: 3, task: "Intro to local databases (Core Data/Room)", link: "https://www.youtube.com/watch?v=P1-cK4H-Azc" }, { day: 5, task: "Project: Create a Note-Taking App", link: "https://www.youtube.com/watch?v=OR_2fA1h_pY" } ] }, { week: 6, title: "State Management", days: [ { day: 1, task: "Managing complex UI state", link: "https://www.youtube.com/watch?v=6_ft978422A" }, { day: 3, task: "Implementing a state management solution", link: "https://www.youtube.com/watch?v=Tqf5h_T91yE" }, { day: 5, task: "Apply to your most complex project", link: "https://www.youtube.com/watch?v=Tqf5h_T91yE" } ] }, { week: 7, title: "App Store Deployment", days: [ { day: 1, task: "Prepare assets (icons, screenshots)", link: "https://www.youtube.com/watch?v=UTaDbTOL-k4" }, { day: 3, task: "Go through the app submission checklist", link: "https://www.youtube.com/watch?v=Zk-Y-8GGc0Y" }, { day: 5, task: "Publish your app to the App Store/Play Store", link: "https://www.youtube.com/watch?v=IS-wAIEiOFc" } ] } ]}
        };

        // --- DOM ELEMENTS ---
        const mentorForm = document.getElementById('mentor-form');
        const roadmapResultSection = document.getElementById('roadmap-result');
        const roadmapContent = document.getElementById('roadmap-content');
        const roadmapContainer = document.getElementById('roadmap-container');
        const loader = document.getElementById('loader');
        const roleTitle = document.getElementById('role-title');
        const downloadPdfBtn = document.getElementById('download-pdf');
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        
        // --- FORM SUBMISSION ---
        mentorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const selectedInterest = document.getElementById('interests').value;
            const data = roadmapData[selectedInterest];
            if (!data) {
                alert('Please select a valid interest.');
                return;
            }

            roadmapResultSection.classList.remove('hidden');
            loader.classList.remove('hidden');
            roadmapContent.classList.add('hidden');
            roadmapResultSection.scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                roleTitle.textContent = data.role;
                populateRoadmap(data.weeks);
                loader.classList.add('hidden');
                roadmapContent.classList.remove('hidden');
                updateProgress();
            }, 1500);
        });
        
        // --- ROADMAP POPULATION & INTERACTIVITY ---
        function populateRoadmap(weeks) {
            roadmapContainer.innerHTML = '';
            weeks.forEach((weekData, index) => {
                const weekElement = document.createElement('div');
                weekElement.className = 'bg-gray-800 rounded-lg shadow-lg transition-all duration-500 scroll-animate';
                weekElement.style.transitionDelay = `${index * 100}ms`;
                const daysHtml = weekData.days.map(day => `
                    <div class="py-2 px-4 flex justify-between items-center">
                        <div class="flex items-center gap-3">
                           <input type="checkbox" class="day-checkbox h-5 w-5 rounded bg-gray-700 border-gray-600 text-orange-500 focus:ring-orange-500">
                           <label class="text-gray-300">Day ${day.day}: ${day.task}</label>
                        </div>
                        <a href="${day.link}" target="_blank" class="text-red-500 hover:text-red-400 transition-colors"><i class="fab fa-youtube fa-lg"></i></a>
                    </div>`).join('');
                weekElement.innerHTML = `<div class="week-header p-4 cursor-pointer flex justify-between items-center"><h4 class="text-xl font-bold text-white">Week ${weekData.week}: ${weekData.title}</h4><i class="fas fa-chevron-down text-gray-400 transition-transform duration-300"></i></div><div class="week-details px-4 pb-4 border-t border-gray-700">${daysHtml}</div>`;
                roadmapContainer.appendChild(weekElement);
                setTimeout(() => weekElement.classList.add('visible'), 50);
            });
        }

        roadmapContainer.addEventListener('click', (e) => {
            if (e.target.closest('.week-header')) {
                const header = e.target.closest('.week-header');
                header.classList.toggle('open');
                header.querySelector('i').classList.toggle('rotate-180');
            }
            if (e.target.matches('.day-checkbox')) {
                updateProgress();
            }
        });

        function updateProgress() {
            const checkboxes = roadmapContainer.querySelectorAll('.day-checkbox');
            const checkedCount = roadmapContainer.querySelectorAll('.day-checkbox:checked').length;
            const totalCount = checkboxes.length;
            const percentage = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;
            progressBar.style.width = `${percentage}%`;
            progressText.textContent = `${percentage}% Complete`;
        }

        downloadPdfBtn.addEventListener('click', () => {
            const doc = new jsPDF();
            const userName = document.getElementById('name').value || "User";
            const role = roleTitle.textContent;
            let yPos = 20;
            doc.text(`Personalized Roadmap for ${userName}`, 10, yPos);
            doc.text(`Career Goal: ${role}`, 10, yPos += 10);
            const selectedInterest = document.getElementById('interests').value;
            roadmapData[selectedInterest].weeks.forEach(week => {
                yPos += 15;
                if (yPos > 280) { doc.addPage(); yPos = 20; }
                doc.text(`Week ${week.week}: ${week.title}`, 15, yPos);
                week.days.forEach(day => { 
                    yPos += 7; 
                    if (yPos > 280) { doc.addPage(); yPos = 20; }
                    doc.text(`  - Day ${day.day}: ${day.task}`, 20, yPos); 
                });
            });
            doc.save(`${userName.replace(' ','_')}_Roadmap.pdf`);
        });

        // --- Interactive Features Section ---
        const featureButtonsContainer = document.getElementById('feature-buttons');
        const featureContent = document.querySelector('.feature-content');
        const featureTitle = document.getElementById('feature-title');
        const featureDescription = document.getElementById('feature-description');
        const featureList = document.getElementById('feature-list');

        const featuresData = {
            analysis: {
                title: "Holistic Profile Analysis",
                description: "Our AI deeply analyzes your resume, skills, interests, and project portfolios to understand your unique strengths and aspirations. We go beyond keywords to build a comprehensive view of your capabilities.",
                listItems: [
                    "Resume & CV Parsing",
                    "Skill & Interest Inventory",
                    "GitHub & Portfolio Integration",
                    "Identifies both technical and soft skills"
                ]
            },
            recommendations: {
                title: "Best-Suited Job Recommendations",
                description: "Based on your profile, we suggest top job roles and higher education paths where you have the highest chance of success. Each recommendation comes with a match score and salary insights.",
                listItems: [
                    "Data-driven job matching",
                    "Higher studies suggestions (Masters, PhD)",
                    "Career growth & salary projections",
                    "Alignment with your long-term goals"
                ]
            },
            roadmap: {
                title: "Personalized Learning Roadmap",
                description: "Get a step-by-step roadmap to bridge the gap between your current skills and your target role. We break down the journey into manageable milestones to keep you on track.",
                listItems: [
                    "Month-by-month action plan",
                    "Skill-building timeline",
                    "Key project and portfolio suggestions",
                    "Preparation for interviews and applications"
                ]
            },
            resources: {
                title: "Curated Free Resources",
                description: "Why pay for learning when the best resources are free? We curate a personalized list of high-quality courses, tutorials, articles, and tools to help you achieve your goals without breaking the bank.",
                listItems: [
                    "Links to top MOOCs (Coursera, edX)",
                    "Relevant YouTube tutorials and channels",
                    "Essential articles and documentation",
                    "Free tools and software to practice"
                ]
            },
            industrialExpertise: {
                title: "Real-World Industrial Expertise",
                description: "We connect you with insights from industry professionals. Our platform includes guidance from experts who have worked at top tech companies, ensuring your learning path is practical and relevant.",
                listItems: [
                    "Mentorship from industry experts",
                    "Resume reviews by hiring managers",
                    "Insights into company culture and interviews",
                    "Networking opportunities and events"
                ]
            }
        };

        featureButtonsContainer.addEventListener('click', (e) => {
            const clickedButton = e.target.closest('button');
            if (!clickedButton) return;

            // Update active button style
            featureButtonsContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active-feature'));
            clickedButton.classList.add('active-feature');

            const featureKey = clickedButton.dataset.feature;
            const data = featuresData[featureKey];

            // Fade out content, update, then fade in
            featureContent.style.opacity = '0';
            setTimeout(() => {
                featureTitle.textContent = data.title;
                featureDescription.textContent = data.description;
                featureList.innerHTML = data.listItems.map(item => `<li>${item}</li>`).join('');
                featureContent.style.opacity = '1';
            }, 300);
        });
        
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.scroll-animate').forEach(element => scrollObserver.observe(element));
        document.querySelector('.hero-section .scroll-animate')?.classList.add('visible');
    });