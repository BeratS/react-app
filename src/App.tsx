import Container from "@mui/material/Container";
import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.scss';
import AppRouting from "./AppRouting";
import PrimarySearchAppBar from './components/navbar/Navbar';
import SnackBarQueueProvider from "./components/ui/queue-alert/QueueAlert";
import { AuthProvider } from "./core/auth/auth-provider";
import { AxiosInterceptor } from "./core/interceptors/interceptors";
import { AlertReducer, IAlert } from "./reducers/Alert.Reducer";

function App() {

  const [alertState, dispatch] = useReducer(AlertReducer, {} as IAlert);

  return (
    <BrowserRouter>
      <AxiosInterceptor dispatchAlert={dispatch}>
        <AuthProvider>
          <div className="App">

            <PrimarySearchAppBar />

            <Container maxWidth="md" style={{ backgroundColor: '#eee' }}>
              <AppRouting />            
            </Container>

            <SnackBarQueueProvider alertState={alertState} />

          </div>
        </AuthProvider>
      </AxiosInterceptor>
    </BrowserRouter>
  );
}

export default App;
