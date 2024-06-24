import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Search />
      <Content />
      <Footer />
    </div>
  );
}
