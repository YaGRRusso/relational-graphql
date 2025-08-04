# exercicios-graphql

A GraphQL server built with Apollo Server, providing user and product management functionalities. This project serves as an exercise to understand and implement a GraphQL API from scratch, complete with database integration.

## Problem Solved

This project addresses the need for a structured and strongly-typed API for managing related entities like users and products. It centralizes data access and manipulation through a single endpoint, improving efficiency and maintainability over traditional REST APIs by connecting directly to a relational database.

## Features

- **User Management:** Comprehensive handling of user accounts, including creating, updating, and querying user profiles, as well as managing relationships between users and products.
- **Product Management:** Complete control over the product catalog, allowing for the creation, modification, and retrieval of product information.
- **Database Integration:** Uses Knex.js for SQL query building and migrations, with a setup for a MySQL database.
- **Code Generation:** Automatically generates GraphQL schema and TypeScript types from schema definition files.

## Technologies Used

- **Languages:** TypeScript
- **Frameworks & Libraries:**
  - [Apollo Server](https://www.apollographql.com/docs/apollo-server/): A spec-compliant GraphQL server.
  - [GraphQL](https://graphql.org/): A query language for APIs.
  - [Knex.js](https://knexjs.org/): A SQL query builder for Node.js.
  - [DataLoader](https://github.com/graphql/dataloader): A batching and caching utility for data fetching.
  - [mysql2](https://github.com/sidorares/node-mysql2): MySQL client for Node.js.
- **Developer Tools:**
  - [tsx](https://github.com/esbuild-kit/tsx): A CLI command that enhances `node` to run TypeScript and ESM modules.
  - [Docker](https://www.docker.com/): For containerizing and running the database service.
  - [Biome](https://biomejs.dev/): For code formatting and linting.
  - [GraphQL Code Generator](https://www.graphql-code-generator.com/): For generating code from your GraphQL schema.
  - [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript.

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (or your favorite package manager)
- [Docker](https://www.docker.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/YaGRRusso/exercicios-graphql.git
    cd exercicios-graphql
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Configuration

The project uses a `docker-compose.yml` file to set up a MySQL database service. No manual configuration is needed as the application is pre-configured to connect to this Docker container.

### How to Run the Project

1.  Start the database container:
    ```bash
    npm run docker:up
    ```
2.  Run the database migrations to set up the tables:
    ```bash
    npm run migrate
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

The server will start on `http://localhost:4000/`. You can access the GraphQL Playground in your browser to interact with the API.

## Usage Examples

Here are some examples of how to interact with the API using GraphQL queries and mutations.

### Query: Fetching Users

This query fetches all registered users along with their names and email addresses.

```graphql
query {
  users {
    id
    name
    email
  }
}
```

### Mutation: Creating a Product

This mutation creates a new product with a specified name and price.

```graphql
mutation {
  createProduct(data: { name: "New Laptop", price: 1200.50 }) {
    id
    name
    price
  }
}
```

## Project Structure

The project is organized into the following main directories:

```
exercicios-graphql/
├── src/
│ ├── db/ # Database-related files, including migrations
│ ├── generated/ # Auto-generated GraphQL schema and TypeScript types
│ ├── helpers/ # Utility functions (e.g., database connection setup)
│ ├── mocks/ # Mock data for development and testing
│ └── schemas/ # GraphQL schema definitions and resolver logic (by domain)
└── dist/ # Compiled output (not used with tsx runtime)
```

## Roadmap

- **Authentication & Authorization:** Implement user authentication (e.g., JWT) and role-based access control.
- **Pagination:** Add pagination to queries that can return large lists of data.
- **Subscriptions:** Implement GraphQL Subscriptions for real-time updates.
- **Testing:** Add a comprehensive test suite with unit and integration tests.
- **Environment Variables:** Move sensitive data and configurations to environment variables instead of hardcoded values.
