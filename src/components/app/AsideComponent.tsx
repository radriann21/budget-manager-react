import { Box, Heading, Flex, Button, GridItem } from "@chakra-ui/react"
import { LuCircleDollarSign, LuPlus } from "react-icons/lu"
import { NavLink } from "react-router"
import { NavOptions } from "@/utils/navOptions"

export const AsideComponent = () => {
  return (
    <GridItem
      as="aside"
      rowSpan={3}
      colSpan={1}
      bgColor="asideBg"
      padding="1rem"
      position="relative"
    >
      <Heading
        as="h2"
        fontSize="xl"
        fontWeight="bold"
        color="mainText"
        mb="1rem"
        display="flex"
        alignItems="center"
        gap="0.5rem"
      >
        <LuCircleDollarSign size="1.5rem" color="mainText" />
        BudgetWorker
      </Heading>

      <Flex
        as="nav"
        flexDirection="column"
        gap="0.8rem"
        textAlign="left"
        alignItems="left"
      >
        {
          NavOptions.map((option) => (
            <NavLink to={option.href} key={option.id}>
              <Button
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="start"
                textAlign="left"
                bgColor="transparent"
                color="mainText"
                gap="1rem"
                p="0 .3rem"
                _hover={{ bgColor: "white/10" }}
              >
                <option.icon color="mainText" />
                {option.name}
              </Button>
            </NavLink>
          ))
        }
      </Flex>
      <Box
        as="footer"
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        p="1rem"
      >
        <Button w="100%">
          New Budget
          <LuPlus size="1rem" color="black" />
        </Button>
      </Box>
    </GridItem>
  )
}

