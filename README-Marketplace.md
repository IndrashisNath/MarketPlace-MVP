# rebuy Marketplace MVP

In this Frontend project, I implemented a marketplace MVP in Angular. It allows users to browse offers, view details, vote on offers, and simulate a purchase via the rebuy.de platform.

## Features

- **Offer Listing:** Displays a list of all offers, sorted by upvotes (popularity).
- **Offer Detail:** View detailed information about a specific offer.
- **Upvote/Downvote:** Users can upvote or downvote offers, which will dynamically update their vote count and re-order the list.
- **Purchase Simulation:** Users can click "Add to Cart" to simulate purchasing the item through rebuy mimicking a redirect to checkout.
- **Responsive Design:** The UI is responsive for mobile and desktop screens.
- **Client-side Routing:** Navigation between list and detail pages is handled via Angular Router.
- **Mock Data:** All offer data is hardcoded within the frontend (no external API calls).
- **Angular Material:** Uses Angular Material components for components for a clean, consistent UI.
- **Unit Tests:** Includes basic unit tests.

## Tech Stack

- **Angular:** v17 (with TypeScript)
- **Angular Material:** for UI components (cards, buttons, etc.)
- **RxJS:** using Observables (BehaviorSubject) for state management of offers.
- **CSS/SCSS:** for custom styling and responsive layout.
- **Jasmine/Karma:** for unit testing.

## Project Structure

The Angular app is structured by feature:
- `app/components/offer-list/` – OfferListComponent (home page listing all offers).
- `app/components/offer-detail/` – OfferDetailComponent (offer details page).
- `app/services/offer.service.ts` – OfferService managing the offers data and votes.
- `app/models/offer.model.ts` – Defines the Offer interface.
- `app/app.routes.ts` – Defines routes.
- `app/app.component.*` – Root component.

## Setup & Running

1. **Prerequisites:** Make sure you have **Node.js** and **Angular CLI (>= 17)** installed.
2. **Install Dependencies:** Run `npm install` to install the required packages.
3. **Run Development Server:** Run `ng serve` (or `npm start`). Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any source files.
4. **Run Unit Tests:** Run `ng test` to execute the test suite.

## Technical Decisions

- **State Management:** Used a simple service with a `BehaviorSubject` to store and update offers. This keeps the app state in one place and notifies components of changes in real-time.
- **Local Data:** The offers are hardcoded in the service for simplicity which makes the app run offline. In a production environment, this would ideally be replaced with API calls.
- **Votes Sorting:** The offers are always sorted by their upvote count. After each upvote/downvote, the service re-sorts the array. This means the highest-upvoted items will appear first. Sorting is done in the service to keep the component logic simple.
- **Angular Material:** Chosen for UI to speed up development with ready-made components. It ensures a clean design without spending much time on custom styling. The app uses a Material toolbar, cards, buttons, icons, etc.
- **Responsive Layout:** The layout adapts to both desktop and mobile screens, utilizing CSS Grid and Flexbox. This avoids needing an external CSS framework. The cards stack vertically on narrow screens and display in columns on wider screens.
- **Routing:** Implemented with the Angular Router. Deep linking is supported (you can navigate directly to an offer’s detail URL). Also added a wildcard route to redirect unknown paths to the offers list.
- **No Authentication:** User login/registration is not included. All users are treated the same for voting/purchasing actions in this demo.
- **Testing:** Added unit tests to critical parts (service logic) to ensure reliability.

## How to Use the App

- When you first load the app, you will see the **Offers List** with all available offers. Each offer card shows a title, price, an image, and the current upvotes. There is also a button to add the offer to the cart. You can click anywhere on a card to view more details.
- Clicking an offer card opens the **Offer Detail** page. Here you see a larger view of the offer information. You can upvote or downvote the offer on this page.
- Once a vote is cast, the offer’s vote count will update and the list may re-order.
- To simulate a purchase, click the **Add to Cart** button on the offer card or detail page. This would redirect you to rebuy.de’s checkout page.
- You can navigate back to the offers list using the browser’s back function.

*(Note: The images used in the app are random images and not of electronic goods for demonstration purposes only)*

## Future Improvements

- **Persistent Storage:** Currently votes are persisted in localStorage for demo purposes. In a real app, we would persist votes on a backend.
- **More Product Fields:** The offer model could be enhanced to include additional fields like reviews, etc.
- **API Integration:** In the future, we could replace the mock data with real API calls.
- **UI Enhancements:** More Angular Material components could be added, such as dialogs for confirmation. Additionally, features like loading indicators would improve the user experience.
- **Additional Feature:** Features such as Live Search Filter, Wishlist, Snack Bar for Actions, etc can be added.
- **E2E Testing:** In addition to unit tests, incorporating end-to-end tests using tools like Protractor or Cypress would ensure the user journey is flawless.
