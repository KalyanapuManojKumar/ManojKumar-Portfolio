import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Email template function
function generateEmailTemplate(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8fafc;
        }
        .container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        .header p {
            margin: 8px 0 0;
            opacity: 0.9;
            font-size: 16px;
        }
        .content {
            padding: 40px 30px;
        }
        .section {
            margin-bottom: 30px;
        }
        .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .section-content {
            background: #f8fafc;
            padding: 16px;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
        }
        .field-label {
            font-size: 14px;
            font-weight: 600;
            color: #6b7280;
            margin-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .field-value {
            font-size: 16px;
            color: #1f2937;
            word-wrap: break-word;
        }
        .message-field {
            background: #f0f9ff;
            border-left: 4px solid #0ea5e9;
        }
        .footer {
            background: #f8fafc;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
        }
        .footer p {
            margin: 0;
            font-size: 14px;
            color: #6b7280;
        }
        .timestamp {
            font-size: 12px;
            color: #9ca3af;
            margin-top: 8px;
        }
        .badge {
            display: inline-block;
            padding: 4px 12px;
            background: #dbeafe;
            color: #1e40af;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .icon {
            width: 20px;
            height: 20px;
            display: inline-block;
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📬 New Contact Form Submission</h1>
            <p>You've received a new message from your portfolio website</p>
        </div>
        
        <div class="content">
            <div class="section">
                <div class="section-title">
                    <span class="icon">👤</span>
                    Sender Information
                </div>
                <div class="section-content">
                    <div style="margin-bottom: 16px;">
                        <div class="field-label">Name</div>
                        <div class="field-value">${data.name}</div>
                    </div>
                    <div style="margin-bottom: 16px;">
                        <div class="field-label">Email Address</div>
                        <div class="field-value">${data.email}</div>
                    </div>
                    <div>
                        <div class="field-label">Subject</div>
                        <div class="field-value">${data.subject}</div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">
                    <span class="icon">💬</span>
                    Message
                </div>
                <div class="section-content message-field">
                    <div class="field-value" style="white-space: pre-wrap;">${data.message}</div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">
                    <span class="icon">ℹ️</span>
                    Quick Actions
                </div>
                <div class="section-content">
                    <p style="margin-bottom: 12px;">
                        <span class="badge">New Inquiry</span>
                        <span class="timestamp">Received: ${new Date().toLocaleString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric', 
                            hour: '2-digit', 
                            minute: '2-digit',
                            timeZoneName: 'short'
                        })}</span>
                    </p>
                    <p style="font-size: 14px; color: #6b7280;">
                        You can reply directly to this message by responding to the sender's email address: 
                        <a href="mailto:${data.email}" style="color: #2563eb; text-decoration: underline;">${data.email}</a>
                    </p>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>
                This message was sent from your portfolio contact form.<br>
                <span style="font-size: 12px;">
                    If you didn't expect this message, please check your website security settings.
                </span>
            </p>
        </div>
    </div>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Generate the HTML email template
    const emailHtml = generateEmailTemplate({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim()
    });

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Replace with your verified domain
      to: ['manojkumarkalyanapu@gmail.com'], // Replace with your email
      subject: `New Contact: ${subject}`,
      html: emailHtml,
      replyTo: email.trim(),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { message: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully!', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  );
}
