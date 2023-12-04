# Flatirons QA Engineer Assessment Project

Welcome to the Flatirons QA Engineer Assessment Project! This project is designed to test your abilities in writing and running end-to-end tests using the Cypress testing framework.

## Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed. You can download it from the official website.
- [Yarn](https://yarnpkg.com/): Yarn is a fast and reliable dependency manager. Install it using npm (Node Package Manager) or follow the installation instructions on the official Yarn website.

## Getting Started

1. **Clone the Repository:**
   Clone this repository to your local machine using your preferred method (e.g., Git command or GitHub Desktop).

2. **Navigate to the Project:**
   Open your terminal and navigate to the project directory:

   ```bash
   cd path/to/flatirons-cypress-test
   ```

3. **Install Dependencies:**
   Install project dependencies using [Yarn](https://yarnpkg.com/):

   ```bash
   yarn install
   ```

## Scenarios

You will test one of our internal applications called [Flatirons Fuse](https://flatirons.com/products/fuse/).
Flatirons Fuse is an embeddable CSV importer.
The application is hosted at: https://fuse-develop.flatirons.com/
Please use best practices for testing a third-party service in your tests.

You need to implement the following scenarios using cypress, implement the same test in desktop viewport and mobile viewport:
```
Create an Account:

As a user, I can register for the platform.
```

```
Email and Password Login:

As a user, I can login to the platform using email and password.
As a user, I can login to the platform using GitHub
```

```
Stripe Embedded Checkout Test Scenario:

Description: This scenario tests the upgrade of a user's plan using the Stripe embedded checkout process.

As a user, I can subscribe to a plan using my credit card.

Note: The credit card information provided can be one of Stripe's test credit card numbers. These numbers are used for testing purposes and do not perform actual transactions.
```

## Running Tests

### Opening the Cypress Test Runner

To open the Cypress Test Runner and interactively run tests, execute the following command:

```bash
yarn cypress:open
```

This will open the Cypress Test Runner interface, where you can select and run individual test cases.

### Running Tests in Command-line Mode

To run tests in the command-line mode (headless), execute the following command:

```bash
yarn cypress:run
```

This will execute all the defined test cases without the graphical interface.

## Writing Tests

1. Open the `cypress/integration` directory.
2. Create new test files using the `.spec.js` extension.
3. Write your test scenarios using Cypress commands and assertions.

Feel free to explore the [Cypress documentation](https://docs.cypress.io/) to learn more about writing and structuring tests.

## Feedback and Submission

After completing the assigned test scenarios, you can submit your work through a pull request. Please provide any necessary documentation or notes along with your submissions.

If you encounter any issues or have questions, don't hesitate to reach out to the assessment coordinators.

Happy testing!