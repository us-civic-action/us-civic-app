/**
 * Generates deep links for various email providers to help users
 * who don't have a default mail client configured.
 */

type EmailProvider = 'default' | 'gmail' | 'outlook' | 'yahoo';

interface EmailParams {
    to?: string;
    subject: string;
    body: string;
}

export const generateEmailLink = (provider: EmailProvider, params: EmailParams): string => {
    const { to = '', subject, body } = params;

    // Encode components once for reused safety
    const encTo = encodeURIComponent(to);
    const encSub = encodeURIComponent(subject);
    const encBody = encodeURIComponent(body);

    switch (provider) {
        case 'gmail':
            // Gmail Compose URL
            return `https://mail.google.com/mail/?view=cm&fs=1&to=${encTo}&su=${encSub}&body=${encBody}`;

        case 'outlook':
            // Outlook Web Compose URL
            return `https://outlook.office.com/mail/deeplink/compose?to=${encTo}&subject=${encSub}&body=${encBody}`;

        case 'yahoo':
            // Yahoo Mail Compose URL
            return `https://compose.mail.yahoo.com/?to=${encTo}&subject=${encSub}&body=${encBody}`;

        case 'default':
        default:
            // Standard Mailto
            return `mailto:${to}?subject=${encSub}&body=${encBody}`;
    }
};

export const EmailIcons = {
    gmail: '🔴',
    outlook: 'VX', // Visual placeholder, better to use real SVGs in component
    default: '✉️'
};
