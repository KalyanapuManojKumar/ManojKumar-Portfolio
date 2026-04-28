# Portfolio Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following:

```env
RESEND_API_KEY=your_resend_api_key_here
```

## Resend Setup

1. Sign up for a Resend account at https://resend.com
2. Get your API key from the dashboard
3. Add the API key to your `.env.local` file
4. Update the email addresses in `app/api/contact/route.ts`:
   - Replace `portfolio@yourdomain.com` with your verified sending domain
   - Replace `manojkumar@example.com` with your receiving email

## Development

Run the development server:
```bash
npm run dev
```

## Build

Build for production:
```bash
npm run build
```
