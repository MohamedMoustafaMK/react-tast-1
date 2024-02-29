This `contexts` folder is dedicated to leveraging React Context for efficient state management between components, particularly addressing scenarios where avoiding prop drilling between parent, child, and grandchild components is crucial.

## Purpose

-   **Avoiding Prop Drilling:** Utilize React Context to eliminate the need for prop drilling, enhancing code clarity and reducing boilerplate.

## Folder Structure

-   `/YourFeatureContext.jsx`: Example file representing a feature-specific context for state management.
    -   Houses the context provider and any associated utility functions.

## How to Use

1. **Create a New Context:**

    - Duplicate the existing context file or create a new one for your feature, following the existing structure.

2. **Context Provider:**

    - Use the `createContext` function to define a new context.
    - Implement a context provider component to wrap the relevant subtree of your components.

3. **Use in Components:**

    - Import the context at the top of your component file using `useContext`.

    ```jsx
    import { YourFeatureContext } from '@/states/contexts/YourFeatureContext'
    ```

## Utilize the context in your component.
  ```jsx
  const yourFeatureContext = useContext(YourFeatureContext);
  ```

## Access the state or functions provided by the context.
  ```jsx
  const yourState = yourFeatureContext.yourState;
  ```
