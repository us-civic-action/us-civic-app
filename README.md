# US Civic Action App

![Open Source](https://img.shields.io/badge/Open%20Source-Yes-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/Status-Beta-orange)

**Democracy shouldn't be difficult.**

US Civic Action is a modern, open-source tool designed to lower the barrier to entry for civic engagement. It helps users track legislation, understand bill impacts, and generate professional testimony for public hearings.

## Mission

Our goal is to provide a neutral, non-partisan infrastructure that empowers citizens to:

1. **Monitor** state legislature calendars without navigating clunky official websites.
2. **Understand** complex bills with AI-assisted summaries and "smart pills."
3. **Act** by generating formatted testimony and finding the right contact information.

## Features

- **Dashboard**: A centralized view of upcoming hearings and recent amendments.
- **Smart Filtering**: Filter hearing calendars by date and urgency.
- **AI Enriched**: Automated summaries and impact tagging for bills.
- **Testimony Wizard**: A guided step-by-step tool to draft professional looking testimony.
- **State Agnostic Core**: Designed to support multiple states (currently focused on NH/MA/NJ).

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data**: [LegiScan API](https://legiscan.com/) (Real-time legislative data)
- **Deployment**: Vercel

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/us-civic-action/us-civic-app.git
    cd us-civic-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure Environment:
    Copy the example environment file:

    ```bash
    cp .env.local.example .env.local
    ```

    Add your API key to `.env.local`:

    ```env
    LEGISCAN_API_KEY=your_api_key_here
    ```

    *(Note: The app will fallback to **Mock Data** if no API Key is provided, so you can still test the UI without one!)*

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Privacy & Transparency

This project is open source to ensure trust. We do not track users, sell data, or accept PAC money. See our in-app Transparency page for more details.
