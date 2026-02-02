# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security seriously. If you discover a vulnerability, please do **not** open a public issue.

Instead, please email us directly (or use GitHub Security Advisories if available) to report the issue. We will review it and respond as soon as possible.

### Mock Data Disclaimer

This application is designed to be runnable with **Mock Data** for demonstration and development purposes.

- If you see "Sen. Kristin M. Corrado" or other static names in a context that seems odd, ensure you are not running in Mock Mode.
- Mock data is explicitly generated in `lib/legiscan.ts` when API keys are missing or limits are hit.

### API Keys

- Never commit your `.env.local` file.
- Ensure `LEGISCAN_API_KEY` is kept secret in production environments.
