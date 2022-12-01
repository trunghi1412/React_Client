import LoginPage from "./components/login";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/cart/cart";
import HomePage from "./components/homepage";
import Register from "./components/register";
import Footer from "./components/footer";
import Intro from "./components/introduction/intro";
import Blog from "./components/blog/blog";
function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/intro" component={Intro} />
        <Route path="/blog" component={Blog} />

        <Route path="/register" component={Register} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
