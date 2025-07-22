# Buddhist Prayer Share - App Download Page

This is a simple app download landing page designed to guide users to download the Buddhist Prayer Share app for Android or iOS.

## Features

- Automatically detects user device type (Android/iOS)
- Redirects to the appropriate app store based on device type
- Displays download buttons for both platforms if device type cannot be detected
- Responsive design that adapts to various screen sizes

## Project Structure

```
.
├── index.html          # Main page
├── css/                # Style files
│   └── style.css       # Main stylesheet
├── js/                 # JavaScript files
│   └── app.js          # Device detection and redirection logic
└── images/             # Image resources
    ├── logo.png        # App logo
    ├── android.png     # Android icon
    └── ios.png         # iOS icon
```

## Usage

1. Clone the repository: `git clone git@github.com:Simon202410/buddhist_prayer_share.git`
2. Replace the app store links in `js/app.js` with actual links
3. Replace the images in the `images/` folder with actual app images
4. Deploy to a web server

## Customization

- Modify the text content in `index.html`
- Adjust styles in `css/style.css`
- Update app store links in `js/app.js`

## License

[MIT](LICENSE)