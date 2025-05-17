# @papyrus-ui/base

Global styles, themes and style utilities for implementing components based on the Papyrus UI design system.

## Getting Started:

1. **Create Utility Classes with `atoms()`**

    Define utility classes using the atoms() function provided by @papyrus-ui/base.
  
    ```ts
    // card.css.ts
    
    import { atoms } from '@papyrus-ui/theme';

    export const card = atoms({
      p: 4,
      rounded: 'md',
      shadow: 'md',
      bg: 'white',
    });
    ```

    Atoms can be generated at runtime as well. However, defining them in .css.ts files ensures that all calculations are
    performed during the build phase.
   
2. **Create a Card Component**
    
    Utilize the defined utility class (card) to create a custom Card component:

    ```tsx
    import React from 'react';
    import * as S from './card.css.ts';
    
    const Card: React.FC<{ title: string; content: string }> = ({ title, content }) => {
      return (
        <div className={S.card}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      );
    };
    
    export default Card;
    ```
   
## Contributing

We welcome contributions to enhance Papyrus UI. To contribute, fork the repository, make your changes, and submit a pull
request. If you encounter issues or have suggestions, please open an issue on GitHub.
