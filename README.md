# Shopping App

## Description
PWA Shopping List is a Progressive Web App (PWA) built with SvelteKit. It allows users to create and manage their shopping lists efficiently, even while offline. The application leverages service workers and caching strategies to provide a seamless experience.

## PWA Functionality
This application is configured as a PWA:
- `manifest.json` defines the PWA metadata.
- `service-worker.js` handles caching and offline capabilities.

## To test PWA functionality:
1. Run the app locally.
2. Open DevTools (F12) and go to **Application** > **Manifest**.
3. Install the app via the browser's install prompt.

## Project Structure
```
/
├── src/
│   ├── lib/                       # Reusable components
│       ├── db.ts                  # Database or storage logic
│   ├── routes/                    # SvelteKit routes
│       ├── edit-shopping-list/
│           ├── +page.svelte       # Main UI page
│           ├── +page.server.ts    # Server-side logic (if applicable)
├── static/                        # Static assets
│   ├── service-worker.js          # Service worker for caching
│   ├── manifest.json              # PWA manifest file
├── package.json                   # Project dependencies
├── README.md                      # This file
```

## Explanation of Key Files
### `db.ts`
This file manages the database logic for the shopping list. It handles data storage and retrieval, enabling users to persist their shopping lists across sessions. Depending on the implementation, it may use local storage, IndexedDB, or a remote database.

### `+page.svelte`
This is the main UI page of the application, responsible for displaying the shopping list interface. It contains the frontend logic and user interactions, such as adding, removing, and updating items in the shopping list.

### `+page.server.ts`
This file contains the server-side logic for handling requests related to the shopping list. It may process API calls, handle authentication, or interact with a database to fetch and update data.

## Author
Developed by **Ángel Sáez**. Contributions are welcome!

## Acknowledgments
- [SvelteKit](https://kit.svelte.dev/)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
