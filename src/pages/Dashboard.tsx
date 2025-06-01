import { Heading, Flex, Box } from "@chakra-ui/react"
import { WidgetsSection } from "@/components/app/WidgetsSection"

export const Dashboard = () => {
  return (
    <Flex
      as="section"
      maxW="100%"
      minH="100dvh"
      padding="2rem"
      flexDir="column"
    >
      <Box as="header" w="100%">
        <Heading as="h2" fontSize="3xl">Dashboard</Heading>
      </Box>
      <WidgetsSection />
    </Flex>
  )
}