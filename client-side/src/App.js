import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AuthProvider from "./context/AuthProvider";
import AppProvider from "./context/Provider";
import Routes from "./Routes/Routes";
function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <Router>
          <Header />
          <Routes />
          <Footer />
        </Router>
      </AuthProvider>
    </AppProvider>
  );
}
export default App;
