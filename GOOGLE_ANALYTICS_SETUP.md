# Google Analytics Setup Guide

## Steps to Complete Google Analytics Integration

### 1. Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" to create a new account

### 2. Set Up Property
1. Enter your account name (e.g., "Apollos Tech Portfolio")
2. Configure property settings:
   - Property name: "Apollos Tech Portfolio"
   - Reporting time zone: Select your timezone
   - Currency: Select your preferred currency

### 3. Configure Data Stream
1. Choose "Web" as your platform
2. Enter your website URL: `https://apollosmwaba.github.io/apollos_tech_portifolio/`
3. Enter stream name: "Portfolio Website"

### 4. Get Your Measurement ID
1. After creating the data stream, you'll see your **Measurement ID** (format: G-XXXXXXXXXX)
2. Copy this ID

### 5. Update Your Website
1. Open `index.html`
2. Find this line in the Google Analytics code:
   ```html
   gtag('config', 'GA_MEASUREMENT_ID');
   ```
3. Replace `GA_MEASUREMENT_ID` with your actual Measurement ID:
   ```html
   gtag('config', 'G-XXXXXXXXXX');
   ```
4. Also update the script src URL:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

### 6. Verify Installation
1. Deploy your updated website
2. Visit your website
3. Check Google Analytics Real-time reports to see if data is coming in

## What's Already Tracked

The integration includes automatic tracking for:

### Page Views
- Automatic page view tracking when users visit your site

### Custom Events
- **Navigation clicks**: When users click on menu items
- **CTA clicks**: When users click "Hire Me" buttons
- **Project clicks**: When users click on portfolio project links
- **Theme changes**: When users change color themes
- **Mode toggles**: When users switch between dark/light mode
- **Form submissions**: Contact form success/failure events

### Event Categories
- `Navigation`: Menu navigation tracking
- `Call to Action`: CTA button clicks
- `Portfolio`: Project interaction tracking
- `Customization`: Theme and mode changes
- `Contact`: Form submission tracking

## Benefits of This Setup

1. **User Behavior Insights**: See which sections users visit most
2. **Engagement Tracking**: Monitor how users interact with your portfolio
3. **Performance Metrics**: Track page load times and user engagement
4. **Goal Tracking**: Monitor contact form submissions and hire me clicks
5. **Audience Analytics**: Understand your visitors' demographics and interests

## Next Steps

After setup, you can:
1. Set up Goals in Google Analytics for contact form submissions
2. Create custom dashboards for key metrics
3. Set up alerts for important events
4. Integrate with Google Search Console for SEO insights

## Privacy Considerations

The current setup respects user privacy by:
- Only tracking anonymous usage data
- Not collecting personally identifiable information
- Following Google Analytics best practices

Consider adding a privacy policy and cookie consent if required by your local regulations.