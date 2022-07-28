import { Login } from "@mui/icons-material";
import Container from "@mui/material/Container";
import { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import PrimarySearchAppBar from './components/navbar/Navbar';
import SnackBarQueueProvider from "./components/ui/queue-alert/QueueAlert";
import { AxiosInterceptor } from "./core/interceptors/interceptors";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import { AlertReducer, IAlert } from "./reducers/Alert.Reducer";

function App() {

  const [alertState, dispatch] = useReducer(AlertReducer, {} as IAlert);

  return (
    <BrowserRouter>
      <AxiosInterceptor dispatchAlert={dispatch}>
        <div className="App">

          <PrimarySearchAppBar />

          <Container maxWidth="md" style={{ backgroundColor: '#eee' }}>
              <Routes>
                <Route index element={<Home />} />

                <Route path="login" element={<Login />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="products" element={<Products />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                } />
              </Routes>
          </Container>

          <SnackBarQueueProvider alertState={alertState}/>

        </div>
      </AxiosInterceptor>
    </BrowserRouter>
  );
}

export default App;
