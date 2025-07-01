# **App Name**: SpotClone

## Core Features:

- Sidebar UI: Display a left sidebar with 'Your Library', 'Create Playlist', and 'Explore Podcasts' buttons.
- Header UI: Render a top header with a search bar, navigation links ('Premium', 'Support', 'Download'), and authentication buttons ('Install App', 'Sign Up', 'Log In').
- Main Section UI: Implement a main section displaying 'Trending Songs' with static album/song cards, and 'Popular Artists' with round avatars.
- Footer UI: Create a comprehensive footer with sections for 'Company', 'Communities', 'Useful Links', and 'Spotify Plans', including social media icons and a language selection option.
- Bottom Banner: Show a bottom banner (purple color) with a promotional message and a 'Sign up for free' button.
- User Authentication: Set up user registration and login using Firebase Authentication (email/password). On successful registration store user name, email, and registration date in Firestore.
- Protected Routes: Implement protected routes, so that /home is only accessible after login. User information such as name, email and registration date is fetched from Firestore on /home.

## Style Guidelines:

- Primary color: Spotify green (#1DB954) to maintain brand recognition and convey energy.
- Background color: Dark grey (#121212), similar to Spotify's dark theme, provides good contrast.
- Accent color: Light grey (#B3B3B3) for text and less important elements.
- Font pairing: 'Poppins' (sans-serif) for headlines and 'PT Sans' (sans-serif) for body text. Note: currently only Google Fonts are supported.
- Use simple, clean icons sourced from a library like FontAwesome or Material Icons to represent actions and categories.
- Maintain a responsive layout using Flexbox or Grid to adapt to different screen sizes, ensuring a consistent user experience.
- Add subtle hover effects and transitions to buttons and interactive elements for visual feedback.