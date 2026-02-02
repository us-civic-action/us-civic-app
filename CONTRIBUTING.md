# Contributing to US Civic Action

Thank you for your interest in contributing! US Civic Action is an open-source project dedicated to making democracy accessible and understandable for everyone. We welcome contributions from developers, designers, and civic enthusiasts.

## How to Contribute

### Reporting Bugs

If you find a bug, please create a GitHub Issue with the following details:

- Description of the issue
- Steps to reproduce
- Expected behavior vs. actual behavior
- Browser/Device details

### Suggesting Features

We love new ideas! Please open a GitHub Issue tagged as `enhancement` to discuss your idea before starting significant work.

### Pull Requests

1. **Fork the repository** and clone it locally.
2. **Create a new branch** for your feature or fix (`git checkout -b feature/amazing-feature`).
3. **Commit your changes** with clear, descriptive messages (`git commit -m "Add feature X"`).
4. **Push to your fork** (`git push origin feature/amazing-feature`).
5. **Open a Pull Request** against the `main` branch.

Please ensure your code follows the existing style and conventions.

## Development Setup

1. **Clone the repo**:

    ```bash
    git clone https://github.com/us-civic-action/us-civic-app.git
    cd us-civic-app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up Environment Variables**:
    - Copy `.env.local.example` to `.env.local`.
    - You will need a standard `LEGISCAN_API_KEY` for live data.
    - *Note: The app includes robust mock data, so you can run the UI without a live API key for basic development.*

4. **Run the development server**:

    ```bash
    npm run dev
    ```

## Code of Conduct

We are committed to providing a friendly, safe, and welcoming environment for all. Please be respectful and considerate in your interactions.
