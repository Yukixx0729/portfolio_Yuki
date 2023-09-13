import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import "./Projects.css";
const Projects = () => {
  const projectsDetails = [
    {
      name: "Trip Wise -- Your AI Trip Planning Helper",
      img: "/1.png",
      img2: "/2.png",
      demo: true,
      right: true,
      github: "https://github.com/Yukixx0729/TripWise",
      demoUrl: "https://trip-wise-omega.vercel.app/",
      stack:
        "Stack: Node, React, Next.js 13 framework, Typescript, HTML, PostgreSQL, Prisma(ORM), OpenAI, Clerk , Google Map, TailwindCSS",
      description:
        "Project summary: TripWise is a full stuck app which allows users to log in with google and to generate their own trip plan with OpenAI, and they would be able to create/delete/update the plans. And users are also allow to check where their plans’ destination on a google map with Pins. ",
    },
    {
      name: "Doggie Chat -- Realtime Chat App",
      img: "/chat.png",
      img2: "/event.png",
      demo: false,
      right: false,
      github: "https://github.com/Yukixx0729/DoggieTalk",
      stack:
        "Stack: Node, React, Typescript, HTML, CSS, PostgreSQL, Prisma(ORM), REST API , Chakra and socket.io",
      description:
        "Project summary: Doggie talk app is a full stack app built for dog lovers/owners to social. All users will be joined in the big community for default and they can create PM chat with other owners, also users are allow to post any meetups events there.",
    },
    {
      name: "Job Tracker -- Make job seeking easier",
      img: "/job1.jpg",
      img2: "/job2.png",
      demo: false,
      github: "https://github.com/Yukixx0729/Job-Tracker-App",
      right: true,
      stack:
        "Stack: Node.js, HTML, CSS, SQL database , REST API , bootstrap and AWS S3",
      description:
        "Main responsibilities: front-end : homepage render(due job and todo task) file-page render back-end: REST API for file(upload, delete, download file)",
    },
    {
      name: "Joke Search -- Add more fun to life",
      img: "./joke1.png",
      img2: "/joke2.png",
      demo: true,
      right: false,
      github: "https://github.com/Yukixx0729/Joke-search-app",
      demoUrl: "https://flask-joke-app.up.railway.app/",
      stack:
        "Stack: Python Flask, Javascript, HTML, CSS, SQL database and Cloudinary",
      description:
        "Project summary : Joke search app is a full stack app that allows users to search the jokes by keywords and type.Also, users are able to sign up to have more features, such as posting comments and their own jokes, managing their personal information, and posting contents via the settings section.",
    },
  ];
  return (
    <div className="projects-container" id="section-2">
      <Heading mb="50px" textAlign="center" className="main-title">
        Project gallery ---{" "}
        <span>
          Click <a href="https://github.com/Yukixx0729">here</a> for more
          projects.
        </span>
      </Heading>
      <Flex direction="column" className="nested-container">
        {projectsDetails.map((project) => {
          return (
            <div className="projects" key={project.name}>
              {project.right ? (
                <div className="detail">
                  <Flex
                    direction="column"
                    justifyContent="center"
                    alignContent="center"
                    padding="10px"
                    ml="30px"
                  >
                    <Heading>{project.name}</Heading>
                    <Text>{project.stack}</Text>
                    <Text>{project.description}</Text>
                    <div className="buttons-right">
                      {project.demo && <a href={project.demoUrl}>Demo</a>}
                      <a href={project.github}>Github</a>
                    </div>
                  </Flex>
                  <div className="img-container">
                    <Image
                      src={project.img}
                      alt={project.name}
                      width="350px"
                      height="250px"
                      mr="5px"
                    />
                    <Image
                      src={project.img2}
                      alt={project.name}
                      width="350px"
                      height="250px"
                    />
                  </div>
                </div>
              ) : (
                <div className="detail">
                  <div className="img-container">
                    <Image
                      src={project.img}
                      alt={project.name}
                      width="350px"
                      height="250px"
                      mr="5px"
                    />
                    <Image
                      src={project.img2}
                      alt={project.name}
                      width="350px"
                      height="250px"
                    />
                  </div>
                  <Flex
                    direction="column"
                    justifyContent="center"
                    alignContent="center"
                    padding="10px"
                    ml="30px"
                  >
                    <Heading>{project.name}</Heading>
                    <Text>{project.stack}</Text>
                    <Text>{project.description}</Text>
                    <div className="buttons">
                      {project.demo && <a href={project.demoUrl}>Demo</a>}
                      <a href={project.github}>Github</a>
                    </div>
                  </Flex>
                </div>
              )}
            </div>
          );
        })}{" "}
      </Flex>
    </div>
  );
};

export default Projects;
