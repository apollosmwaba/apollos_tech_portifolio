# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up the template:

**Subject:** New Contact Form Message from {{from_name}}

**Body (HTML):**


4. Make sure to set the template format to **HTML** (not plain text)
5. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Update Your Code
Replace these placeholders in `script.js`:

```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this) // Replace with your IDs
```

## Example:
```javascript
emailjs.init("user_abc123def456"); 
emailjs.sendForm('service_gmail', 'template_contact', this)
```

## Step 6: Test Your Form
1. Open your website
2. Fill out the contact form
3. Submit it
4. Check your email for the message

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify your EmailJS service is active
- Ensure template variable names match your form field names

## Form Field Names (already set up):
- `name` → `{{from_name}}`
- `email` → `{{from_email}}`
- `subject` → `{{subject}}`
- `message` → `{{message}}`