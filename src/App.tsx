import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { useAuthContext } from 'contexts/AuthContext';
import Root from 'pages/Root';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

const FAS: any = fas;
const FAR: any = far;
const FAL: any = fal;
const FAB: any = fab;
library.add(FAS, FAR, FAL, FAB);
function App() {
  const { checkAuth } = useAuthContext();
  console.log('');
  useEffect(() => {
    const authenticate = async () => {
      await checkAuth();
    };

    authenticate();
  }, [checkAuth]);
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;
