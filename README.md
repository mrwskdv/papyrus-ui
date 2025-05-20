# Papyrus UI

The UI kit with fundamental React components based on the Papyrus UI design system.

## Packages:

- **@papyrus-ui/components**: The UI kit with fundamental React components.
- **@papyrus-ui/base**: Global styles, themes, and style utilities.
- **@papyrus-ui/configs**: Reusable eslint and prettier configurations based on Google Style Guide.

## Getting Started:
1. **Install via npm or yarn:**

    ```shell
    npm install @papyrus-ui/components @papyrus-ui/theme @vanilla-extract/css
    // or
    yarn add @papyrus-ui/components @papyrus-ui/theme @vanilla-extract/css
    ```

2. **Setting up styles and themes:**

   Import styles and themes into the entry component of your application.

    ```tsx
    import { lightTheme } from '@papyrus-ui/theme';

    import '@papyrus-ui/theme/css/theme.css';
    import '@papyrus-ui/components/css/components.css';
    
    function App() {
      return (
        <html className={lightTheme}>
          {/* Your application content */}
        </html>
      );
    }
    ```

   If you have a client-side rendered app where direct access to the HTML document is limited, use ThemeProvider
   to dynamically apply the theme class.

    ```tsx
    import { lightTheme } from '@papyrus-ui/theme';
    import { ThemeProvider } from '@papyrus-ui/components';
    
    import '@papyrus-ui/theme/css/theme.css';
    import '@papyrus-ui/components/css/components.css';
    
    function App() {
      return (
        <ThemeProvider theme={lightTheme}>
          {/* Your application content */}
        </ThemeProvider>
      );
    }
    ```

3. **Using components across your application:**

   Import components and integrate them into your app.

    ```tsx
    import { Button } from '@papyrus-ui/components';
    
    function Example() {
      return <Button>Click Me!</Button>;
    }
    ```

   Customize and extend components as needed to suit your application's requirements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

We welcome contributions to enhance Papyrus UI. To contribute, fork the repository, make your changes, and submit a pull
request. If you encounter issues or have suggestions, please open an issue on GitHub.

