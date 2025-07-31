# GraphQL Schema Query Exercises

This project is a GraphQL server built with Apollo Server and TypeScript. It provides a basic API for managing users and products, serving as an exercise or boilerplate for building GraphQL applications.

## Features

- **User Management:**

  - `users`: Get a list of all users.
  - `user(id: ID!)`: Get a single user by their ID.
  - `createUser(input: UserInput!)`: Create a new user.
  - `updateUser(id: ID!, input: UserInput!)`: Update an existing user.
  - `deleteUser(id: ID!)`: Delete a user.
  - `addUserProducts(id: ID!, productsIds: [ID!]!)`: Associate one or more products with a user.
  - `removeUserProducts(id: ID!, productsIds: [ID!]!)`: Disassociate one or more products from a user.

- **Product Management:**

  - `products`: Get a list of all products.
  - `product(id: ID!)`: Get a single product by its ID.
  - `createProduct(input: ProductInput!)`: Create a new product.
  - `updateProduct(id: ID!, input: ProductInput!)`: Update an existing product.
  - `deleteProduct(id: ID!)`: Delete a product.

- **API Versioning:**
  - `version`: Get the current version of the API.

## Technologies Used

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
  - [GraphQL](https://graphql.org/)
- **Language:**
  - [TypeScript](https://www.typescriptlang.org/)
- **Development Tools:**
  - [tsx](https://github.com/esbuild-kit/tsx): For running TypeScript files directly.
  - [Biome](https://biomejs.dev/): For code formatting and linting.
  - [Ultracite](https://github.com/ultracite/ultracite): For enforcing strict coding standards.
  - [Husky](https://typicode.github.io/husky/): For Git hooks.
  - [lint-staged](https://github.com/okonet/lint-staged): For running linters on staged files.

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/YaGRRusso/exercicios-graphql.git
    cd exercicios-graphql
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```

### How to Run the Project

Start the development server:

```sh
npm run dev
```

The server will start on `http://localhost:4000/`. You can access the GraphQL Playground in your browser to interact with the API.

## Usage Examples

Here are some example queries and mutations you can use.

### Get All Users

```graphql
query {
  users {
    id
    name
    email
    status
  }
}
```

### Create a New Product

```graphql
mutation {
  createProduct(
    input: {
      name: "New Laptop"
      price: 1200.50
      description: "A powerful new laptop."
    }
  ) {
    id
    name
    price
  }
}
```

### Update a User

```graphql
mutation {
  updateUser(id: "1", input: { name: "John Doe Updated" }) {
    id
    name
  }
}
```

## Project Structure

```
.
├── src
│   ├── helpers       # Helper functions (e.g., mock database logic)
│   ├── mocks         # Mock data for users and products
│   ├── resolvers     # GraphQL resolvers (Query, Mutation)
│   ├── schemas       # GraphQL schema definitions (.graphql files)
│   └── index.ts      # Server entry point
├── biome.jsonc       # Biome (linter, formatter) configuration
├── package.json      # Project dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```
