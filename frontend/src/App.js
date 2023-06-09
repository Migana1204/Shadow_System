import { Route, Routes } from 'react-router-dom';
import { Provider } from './context/context';
import { Carrito, HomePage, NotFoundPage, Formulary, Sales, Login } from './Pages/index';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Provider>
        <Routes>
          <Route index element={<Carrito></Carrito>}></Route>
          <Route path='/inicio' element={<Carrito></Carrito>}></Route>
            <Route path='/backend' element={<HomePage></HomePage>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/backend/new' element={<Formulary></Formulary>}></Route>
            <Route path='/backend/products/:id' element={<Formulary></Formulary>}></Route>
            <Route path='/backend/sales' element={<Sales></Sales>}></Route>
            <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
        <Toaster></Toaster>
      </Provider>
    </div>
  );
}

export default App;
