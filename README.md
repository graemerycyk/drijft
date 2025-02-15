# BusinessLaunch - Multi-language Landing Page

A modern, responsive landing page for a business incorporation platform with multi-language support (English, Dutch, and French).

## Features

- 🌐 Multi-language Support
  - English (EN)
  - Dutch (NL)
  - French (FR)
  - Automatic language detection based on browser settings
  - Easy language switching with persistent selection

- 💼 Business Features Showcase
  - Fast and easy business incorporation
  - Exclusive rewards program
  - Full-service solution
  - Concierge-based onboarding

- 🎯 Key Components
  - Responsive hero section
  - Benefits grid with icons
  - Step-by-step process explanation
  - Trust signals with partner logos
  - FAQ section
  - Waitlist signup modal

- 🎨 Design Features
  - Modern, clean interface
  - Responsive design for all devices
  - Smooth animations and transitions
  - Accessible color scheme
  - Professional typography

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── translations.js     # Language translations
├── images/            # Image assets directory
    ├── fast-icon.svg
    ├── rewards-icon.svg
    ├── solution-icon.svg
    ├── support-icon.svg
    ├── stripe-logo.svg
    ├── wise-logo.svg
    └── revolut-logo.svg
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd businesslaunch-landing
   ```

2. Ensure all image assets are placed in the `images/` directory.

3. Open `index.html` in a web browser to view the landing page.

## Development

### Adding a New Language

1. Open `translations.js`
2. Add a new language object following the existing structure:
   ```javascript
   languageCode: {
       title: "Translated Title",
       subheadline: "Translated Subheadline",
       // ... other translations
   }
   ```
3. Add a language button to the switcher in `index.html`:
   ```html
   <button class="language-btn" onclick="setLanguage('languageCode')">LANG</button>
   ```

### Modifying Styles

- Global styles and variables are defined at the top of `styles.css`
- Each section has its own clearly marked styling section
- Media queries handle responsive design at the bottom

### JavaScript Functionality

The project uses vanilla JavaScript with two main features:
- Language switching system
- Modal handling for the waitlist signup

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Considerations

- Minimal JavaScript footprint
- Optimized image assets
- No external dependencies
- Efficient CSS selectors
- Responsive images

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or concerns, please contact:
- Email: contact@businesslaunch.com
- Twitter: [@BusinessLaunch](https://twitter.com/BusinessLaunch)
- LinkedIn: [BusinessLaunch](https://linkedin.com/company/BusinessLaunch) 