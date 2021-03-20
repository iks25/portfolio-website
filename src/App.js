import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutMe from "./components/aboutMe/AboutMe";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import skills from "./components/skills/Skills";
import NotFound from "./components/not-found/Not-Found";
function App() {
  let lang = "eng";
  return (
    <div className="App">
      <NavBar lang={lang} />
      <main>
        <Switch>
          <Route path="/about-me" component={AboutMe} />
          <Route path="/skills" component={skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/not-found" exact component={NotFound} />
          <Route path="/" exact component={AboutMe} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
