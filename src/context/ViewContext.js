import useView from "../hooks/useView";
import { createContext, useContext } from "react";

export const ViewContext = createContext(null);

const ViewProvider = ({ children }) => {
    const view = useView();
    return <ViewContext.Provider value={view}>{children}</ViewContext.Provider>;
  };
  
  export default ViewProvider;
  
  export const useViewContext = () => {
    return useContext(ViewContext);
  };