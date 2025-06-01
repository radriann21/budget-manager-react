import { Flex, Card, Heading } from "@chakra-ui/react"
import { useBudgetStore } from "@/stores/BudgetStore"

export const WidgetsSection = () => {

  const budgets = useBudgetStore.getState().budgets

  const totalBudgets = budgets.reduce((acc, current) => current.currentAmount + acc, 0)

  return (
    <Flex
      mt="1rem"
      as="section"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Card.Root>
        <Card.Header>
          <Heading>Presupuesto total</Heading>
        </Card.Header>
        <Card.Body>
          <Heading fontSize="3xl">{totalBudgets}</Heading>
        </Card.Body>
      </Card.Root>
    </Flex>
  )
}