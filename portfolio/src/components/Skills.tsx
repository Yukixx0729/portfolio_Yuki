import { Heading, Flex } from "@chakra-ui/react";

const Skills = () => {
  return (
    <div id="section-3">
      <Heading textAlign="center" className="main-title">
        Skills Set
      </Heading>
      <Flex justifyContent="center" direction="column" alignItems="center">
        <p>Typescript Javascript Python Node.js React.js Next.js HTML CSS</p>
        <p>Express Flask Vite SQL RestAPI Bootstrap Chakra</p>
        <p>AWS S3 Cloudinary Socket.io Supabase Prisma</p>
        <p>Languages: English Cantonese Mandarin</p>
      </Flex>
    </div>
  );
};

export default Skills;
