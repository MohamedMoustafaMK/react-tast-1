# Redux Folder

This `redux` folder is dedicated to managing global state using Redux Toolkit (RTK), specifically tailored for handling complex state logic, asynchronous operations, and global state requirements.

## Purpose

-   **Global State Management:** Redux Toolkit provides a scalable solution for managing global application state, handling complex scenarios efficiently.

## Folder Structure

-   `/featureOne`

    -   `featureOneSlice.js`: Defines the state and reducers for Feature One.
    -   `featureOneActions.js`: Contains action creators to dispatch actions.
    -   `featureOneSelectors.js`: Provides selectors to access specific pieces of state.

-   `/featureTwo`
    -   `featureTwoSlice.js`: Defines the state and reducers for Feature Two.
    -   `featureTwoActions.js`: Contains action creators to dispatch actions.
    -   `featureTwoSelectors.js`: Provides selectors to access specific pieces of state.

## How to Use

1. **Slices:**

    - Define a slice for each feature, encapsulating state, reducers, and initial values.

2. **Actions:**

    - Create action creators in the `actions` files to modify the state.

3. **Selectors:**

    - Utilize selectors to efficiently access specific pieces of state from the store.

4. **Use in Components:**

    - Import slices, actions, and selectors at the top of your component file.
    ```jsx
    import {
    	featureOneSlice,
    	featureOneActions,
    	featureOneSelectors,
    } from '@/states/redux/featureOne'
    ```

## Use the Redux hooks (useDispatch and useSelector) to interact with the store.
```jsx
const dispatch = useDispatch()
const data = useSelector(featureOneSelectors.selectData)
```
## Dispatch actions to modify the state.
```jsx
dispatch(featureOneActions.setData(newData));
```