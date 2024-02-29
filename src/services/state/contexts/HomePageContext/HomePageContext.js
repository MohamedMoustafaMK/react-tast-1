import { createContext } from 'react'

const HomePageContext = createContext()

export const HomePageProvider = ({children}) => {
  return (
    <div>HomePageProvider</div>
  );
};

export default HomePageContext