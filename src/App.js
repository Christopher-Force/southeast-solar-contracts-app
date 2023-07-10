import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { useLayoutEffect } from 'react';
import ContractNav from "./modules/Contract Subdomain/ContractNav";
import ContractHome from "./modules/Contract Subdomain/ContractHome";

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
    return (
      <Router>
        <div className="bg-black">
          <Wrapper>
            <div>
              <ContractNav />
            </div>
            <Routes>
              <Route path="/" element={<ContractHome />} />
            </Routes>
          </Wrapper>
        </div>
      </Router>
    );
    
}

export default App;
