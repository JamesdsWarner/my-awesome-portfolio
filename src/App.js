import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import VideoCollection from "./routes/video-collection/video-collection.component";
import Contact from "./routes/contact/contact.component";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<VideoCollection />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
