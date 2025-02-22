# VeriLens - Media Literacy & News Aggregation App

## Overview
VeriLens is a fully functioning media literacy and news aggregation application designed to educate users on unbiased news consumption and media analysis. The app aggregates news from various external sources, employs AI-driven summarization and bias detection, and offers interactive educational modules.

## Features
- **Secure User Management**: Full user registration, login, and profile management with JWT-based authentication.
- **News Aggregation**: Fetches live news articles from external APIs and provides a customizable news feed.
- **AI-Powered Summarization & Bias Detection**: Summarizes articles and detects bias ratings.
- **Media Literacy Educational Modules**: Interactive lessons on media literacy and journalistic ethics.
- **Community & Governance Features**: Member-driven governance portal for feature proposals and voting.

## Project Structure
```
verilens
├── backend
│   ├── user-service
│   ├── news-service
│   ├── education-service
│   ├── governance-service
│   ├── docker-compose.yml
│   └── README.md
├── frontend
│   ├── public
│   └── src
│   └── README.md
└── README.md
```

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies for each service:
   - For user-service: `cd user-service && npm install`
   - For news-service: `cd news-service && npm install`
   - For education-service: `cd education-service && npm install`
   - For governance-service: `cd governance-service && npm install`
3. Configure environment variables for database connections and JWT secrets.
4. Start the services using Docker:
   - Run `docker-compose up --build` to build and start all services.

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Start the React application: `npm start`.

## Deployment
- The application can be deployed on cloud platforms like AWS using Docker containers.
- Ensure that all environment variables are set correctly in the production environment.

## Testing
- Unit tests and integration tests should be written for major functionalities in both backend and frontend services.
- Use testing frameworks like Jest for JavaScript and Mocha for Node.js.

## Documentation
- Inline comments are provided in the code for clarity.
- Each service has its own README.md for specific setup and usage instructions.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.