# VeriLens Backend Services

## Overview
VeriLens is a media literacy and news aggregation application designed to educate users on unbiased news consumption and media analysis. The backend is structured as a set of microservices, each responsible for a specific functionality within the application.

## Services
The backend consists of the following microservices:

1. **User Service**: Manages user authentication, registration, and profile management.
2. **News Service**: Aggregates news articles from external sources, provides summarization and bias detection.
3. **Education Service**: Offers interactive educational modules on media literacy and journalistic ethics.
4. **Governance Service**: Facilitates community-driven feature proposals and voting.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- Docker and Docker Compose
- PostgreSQL or MongoDB (depending on your choice of database)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd verilens/backend
   ```

2. Install dependencies for each service:
   - For User Service:
     ```
     cd user-service
     npm install
     ```

   - For News Service:
     ```
     cd ../news-service
     npm install
     ```

   - For Education Service:
     ```
     cd ../education-service
     npm install
     ```

   - For Governance Service:
     ```
     cd ../governance-service
     npm install
     ```

### Running the Services
You can run all services using Docker Compose. From the `backend` directory, execute:
```
docker-compose up --build
```

This command will build and start all services along with the database.

### Environment Variables
Make sure to set the necessary environment variables for each service. You can create a `.env` file in each service directory with the required configurations.

### Testing
Each service includes unit tests and integration tests. You can run the tests using:
```
npm test
```
from within each service directory.

## Usage
- Access the user service at `http://localhost:3001`
- Access the news service at `http://localhost:3002`
- Access the education service at `http://localhost:3003`
- Access the governance service at `http://localhost:3004`

## Documentation
Refer to the individual service README files for more detailed documentation on each service's API endpoints and functionalities.

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.