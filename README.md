# GitHubExplorer

GitHubExplorer is a React Native application that allows users to explore GitHub repositories by searching for repository names, viewing details, and managing a list of favorite repositories. The app leverages GitHub's API to fetch repository data and provides a clean and intuitive user interface for seamless navigation.

## Features

- **Search Repositories**: Find GitHub repositories by their names and view key information.
- **Repository Details**: Explore detailed information about a repository, including stars, forks, issues, and more.
- **Favorite Repositories**: Add repositories to your favorites list and manage them easily.
- **Error Handling**: Graceful error messages for better user experience.
- **State Management**: Redux Toolkit is used for managing the state of favorite repositories.
- **Custom Theming**: A consistent and visually appealing design with customizable themes.

## Project Structure

```
GitHubExplorer/
├── src/
│   ├── api/
│   │   └── github.js
│   ├── components/
│   │   ├── RepositoryCard.js
│   │   ├── FavoriteButton.js
│   │   └── ErrorDisplay.js
│   ├── screens/
│   │   ├── SearchScreen.js
│   │   ├── DetailsScreen.js
│   │   └── FavoritesScreen.js
│   ├── redux/
│   │   ├── store.js
│   │   └── favoritesSlice.js
│   ├── AppNavigator.js
│   ├── App.js
│   └── theme.js
├── App.js
```

### Folder Descriptions

- **`api/`**: Contains functions for interacting with the GitHub API.
- **`components/`**: Reusable UI components, such as repository cards, favorite buttons, and error displays.
- **`screens/`**: Screen components for different app views (Search, Details, Favorites).
- **`redux/`**: Redux store setup and slice for managing application state.
- **`AppNavigator.js`**: Navigation configuration for the app.
- **`theme.js`**: Theming setup for consistent styling across the app.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/GitHubExplorer.git
   cd GitHubExplorer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Launch the app on an emulator or physical device:
   ```bash
   npm run android  # For Android
   npm run ios      # For iOS
   ```

## Usage

1. Open the app and navigate to the **Search** screen.
2. Enter a repository name in the search bar to find repositories.
3. Click on a repository card to view its details.
4. Use the favorite button to add a repository to your favorites list.
5. Access the **Favorites** screen to view and manage your favorite repositories.

## Dependencies

- React Native
- Redux Toolkit
- React Navigation
- Axios
- Other libraries as specified in `package.json`

## API Integration

The app uses GitHub's REST API to fetch repository data. Ensure you comply with GitHub's API usage policies and consider adding a personal access token if needed for higher rate limits.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Open a pull request describing your changes.

## Contact

For questions or suggestions, please reach out to me via email.
