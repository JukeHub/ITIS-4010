/*
Project: VeriLens - Fully Functioning Media Literacy & News Aggregation App

Description:
VeriLens is a production-ready media literacy app designed to educate users on unbiased news consumption and media analysis. The app aggregates news from external sources, employs AI-driven summarization and bias detection, and offers interactive educational modules. It is built using a modern microservices architecture with secure user management and scalable deployment.

Requirements:

1. Secure User Management:
   - Implement full user registration, login, and profile management using JWT-based authentication.
   - Use Express.js (Node.js) for the backend API.
   - Use a persistent database (PostgreSQL or MongoDB) for storing user data.
   - Enforce secure password storage (e.g., bcrypt) and multi-factor authentication (optional).

2. News Aggregation & External API Integration:
   - Create a service that fetches live news articles from one or more external news APIs.
   - Store article metadata (title, snippet, publication date, source) in the database.
   - Provide endpoints to retrieve a curated, customizable news feed.
   - Allow users to filter news by topics or source.

3. AI-Powered Summarization & Bias Detection:
   - Develop real AI functions (or advanced stubs) that take article content as input:
     a. Summarization function: returns a concise summary of the article.
     b. Bias detection function: returns a bias rating (e.g., "Left", "Right", "Neutral") based on content analysis.
   - Integrate these functions into the news feed so each article displays its summary and bias rating.
   - Ensure that these AI components can be swapped out later for more advanced models.

4. Media Literacy Educational Modules:
   - Build interactive modules that provide lessons on media literacy and journalistic ethics.
   - Include features such as quizzes, video lesson placeholders, and interactive content.
   - Provide a navigation interface for users to access educational materials.

5. Community & Governance Features:
   - Develop endpoints for a member-driven governance portal where users can propose and vote on features (this can start as a basic voting system without engagement-based sorting).
   - Implement discussion forums or comment sections for paying users (if desired).

6. Frontend:
   - Use React for building a responsive, user-friendly UI.
   - Implement routes/pages for:
       • User authentication (login/register/profile)
       • News aggregation feed (displaying article summaries, bias ratings, and details)
       • Educational modules (interactive lessons and quizzes)
       • (Optional) Governance portal and community discussion.
   - Secure the frontend communication with the backend via HTTPS and JWT tokens.
   - Ensure proper error handling and user feedback for API calls.

7. API Gateway & Microservices Architecture:
   - Structure the backend as multiple microservices:
       • User service (authentication, profiles)
       • News service (aggregation, storage, summarization, bias detection)
       • Education service (interactive media literacy modules)
       • (Optional) Governance service.
   - Use an API Gateway (or central Express router) to manage routing and secure endpoints.
   - Containerize each service using Docker.

8. Deployment & Containerization:
   - Write Dockerfiles for each service (backend API and frontend app).
   - Create a docker-compose.yml file to orchestrate the services, including:
       • API services
       • Database service (PostgreSQL or MongoDB)
       • Redis for caching (optional, for performance)
       • Frontend service
   - Ensure that the containers can be deployed to AWS (or similar cloud platform) securely.

9. Security & Monitoring:
   - Secure all endpoints with JWT and HTTPS.
   - Use environment variables for configuration secrets.
   - Include logging (using a library like Winston) and monitoring hooks (e.g., using CloudWatch or similar).
   - Write tests for major functionalities (unit tests for APIs and integration tests).

10. Documentation:
    - Include inline comments explaining key functions and modules.
    - Provide a README.md with setup instructions, environment configuration, and deployment guidelines.

Instructions:
- Use Node.js and Express for the backend microservices.
- Use React for the frontend.
- Choose PostgreSQL or MongoDB for persistent data storage.
- Implement AI functions for summarization and bias detection with real logic or detailed stubs that simulate real behavior.
- Use Docker for containerization and provide a docker-compose.yml for local deployment.
- Ensure the app is fully functional and production-ready, with proper security, error handling, and a responsive UI.
- Prioritize a modular design so that future enhancements (e.g., full AI models, AR features) can be integrated seamlessly.

Please generate all necessary code files (backend, frontend, Docker configuration, and sample tests) for a fully functioning version of VeriLens.
*/

TECH

Frontend

    React:
        For building a responsive, component-based user interface.
    React Router:
        To manage client-side routing (login, news feed, educational modules, etc.).
    Redux or Context API:
        For state management across the app.
    Tailwind CSS / Material-UI:
        For rapid UI styling and design consistency.
    Axios / Fetch API:
        For secure HTTP requests to backend APIs.

Backend / API

    Node.js with Express:
        For building RESTful microservices and the API Gateway.
    JWT & OAuth2 Libraries:
        To handle secure authentication and authorization.
    Microservices Architecture:
        Separate services for User Management, News Aggregation, AI functions, and Education.
    API Gateway / Central Router:
        To route requests between services securely.
    Docker & Docker Compose:
        For containerization and local/cloud deployment orchestration.

Databases & Caching

    Primary Database (PostgreSQL or MongoDB):
        PostgreSQL for relational data (user profiles, articles, educational content) or MongoDB for a more flexible, document-based model.
    Redis:
        For caching frequently accessed data (e.g., summaries, bias ratings) and session management.
    Elasticsearch / OpenSearch:
        For fast, bias-aware search functionality and analytics.

AI & Machine Learning Components

    AI Models / Libraries:
        TensorFlow.js, PyTorch, or Hugging Face Transformers (for advanced summarization and bias detection).
    Custom Node.js AI Service:
        Wrap AI components as separate microservices to keep them isolated and scalable.
    Explainable AI (XAI) Libraries:
        Tools like LIME or SHAP (for later explainability of bias detection, if needed).

Infrastructure & Cloud Services

    Amazon Web Services (AWS):
        ECS Fargate / Kubernetes: Container orchestration for deploying microservices.
        Application Load Balancer (ALB): For secure routing of requests.
        RDS (PostgreSQL) or DocumentDB (for MongoDB): Managed database service.
        ElastiCache (Redis): Managed caching.
        CloudFront & S3: For serving static assets and content delivery.
        API Gateway & AWS WAF: For managing API traffic and security.
    CI/CD Tools:
        AWS CodePipeline/CodeBuild or GitHub Actions for continuous integration and deployment.

Security

    HTTPS / TLS:
        Enforce secure communication between all services.
    JWT / Multi-Factor Authentication:
        For secure user authentication.
    Role-Based Access Control (RBAC):
        To restrict access to various parts of the system.
    Encryption:
        Data encryption at rest (via AWS KMS) and in transit.
    Monitoring & Logging:
        CloudWatch, AWS X-Ray, and centralized logging (e.g., using Winston) for auditing and incident response.

Development & Testing Tools

    Version Control:
        Git (with GitHub for repository hosting).
    IDE / Code Editors:
        VS Code or similar, with GitHub Copilot for AI-assisted coding.
    Automated Testing:
        Jest, Mocha, or similar frameworks for unit and integration tests.
    Code Linting & Formatting:
        ESLint, Prettier to enforce code quality.
    Documentation:
        README.md, inline documentation, and API documentation tools (Swagger/OpenAPI).
