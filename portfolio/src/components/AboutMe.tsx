import { Flex, Text, Box, Heading } from "@chakra-ui/react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="nav-about-container">
      <Flex direction="column">
        <div className="aboutme">
          <p>
            As a goal-oriented software engineer with a background in finance
            and education. I excel at collaborating with teams, problem-solving,
            and adapting to new environments. Now, I'm eager to apply my strong
            learning and creative skills in an environment that priorities
            technical innovation for business success.
          </p>
        </div>
      </Flex>
      <div className="pic-title">
        <div className="pic-container">
          <img src="../../public/me.jpeg" alt="self picture " />
        </div>
        <Box className="title">
          <Heading>Yubin Zeng</Heading>
          <Text>Full Stack Engineer </Text>
          <Text>Web Developer</Text>
        </Box>
      </div>
    </div>
  );
};

export default AboutMe;
