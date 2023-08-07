import "./App.css";
import { Flex } from "@chakra-ui/react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <Flex direction="column">
      {/* <NavBar /> */}
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
    </Flex>
  );
}

export default App;
