# VeriLens Frontend

VeriLens is a media literacy and news aggregation application designed to help users consume news in an unbiased manner and improve their media literacy skills. This README provides instructions for setting up and running the frontend of the application.

## Getting Started

To get started with the VeriLens frontend, follow these steps:

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd verilens/frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser. The application will automatically reload if you make changes to the source files.

### Building for Production

To create a production build of the application, run:

```bash
npm run build
```

This will generate a `build` directory containing the optimized production files.

### API Integration

The frontend communicates with the backend services via RESTful APIs. Ensure that the backend services are running and accessible before using the frontend application.

### Folder Structure

- `public/`: Contains the static HTML file and other public assets.
- `src/`: Contains the React components and services.
  - `components/`: Contains reusable components such as authentication, news feed, and education modules.
  - `services/`: Contains API service functions for making requests to the backend.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.