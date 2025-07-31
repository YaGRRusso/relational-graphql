# exercicios-graphql

A GraphQL server built with Apollo Server, providing user and product management functionalities. This project serves as an exercise to understand and implement a GraphQL API from scratch.

## Problem Solved

This project addresses the need for a structured and strongly-typed API for managing related entities like users and products. It centralizes data access and manipulation through a single endpoint, improving efficiency and maintainability over traditional REST APIs.

## Features

- **User Management:** Comprehensive handling of user accounts, including creating, updating, and querying user profiles.
- **Product Management:** Complete control over the product catalog, allowing for the creation, modification, and retrieval of product information.

## Technologies Used

- **Languages:** TypeScript
- **Frameworks & Libraries:**
  - [Apollo Server](https://www.apollographql.com/docs/apollo-server/): A spec-compliant GraphQL server that's compatible with any GraphQL client.
  - [GraphQL](https://graphql.org/): A query language for your API and a server-side runtime for executing queries by using a type system you define for your data.
  - [tsx](https://github.com/esbuild-kit/tsx): A CLI command that enhances `node` to run TypeScript and ESM modules.
- **Developer Tools:**
  - [Biome](https://biomejs.dev/): A high-performance toolchain for web development, used here for formatting and linting.
  - [Husky](https://typicode.github.io/husky/): A tool that makes it easy to use Git hooks.
  - [lint-staged](https://github.com/okonet/lint-staged): A tool to run linters on staged files in Git.
  - [Ultracite](https://github.com/ultracite/ultracite): A configuration and script package for maintaining code quality.
  - [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (or your favorite package manager)

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

### How to Run the Project

Start the development server:

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

- `src/`: Contains the main source code for the application.
  - `helpers/`: Utility functions and helpers, like database connections.
  - `mocks/`: Mock data for development and testing purposes.
  - `resolvers/`: The core logic for handling GraphQL queries and mutations.
  - `schemas/`: GraphQL schema definitions (`.graphql` files).
- `dist/`: The compiled output directory (not present in this project as `tsx` handles TypeScript execution at runtime).

## Roadmap

- **Authentication & Authorization:** Implement user authentication (e.g., JWT) and role-based access control.
- **Database Integration:** Replace mock data with a real database connection (e.g., PostgreSQL with Prisma or TypeORM).
- **Pagination:** Add pagination to queries that can return large lists of data.
- **Subscriptions:** Implement GraphQL Subscriptions for real-time updates.
- **Testing:** Add a comprehensive test suite with unit and integration tests.
