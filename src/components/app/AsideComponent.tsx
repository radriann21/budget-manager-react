import { GridItem } from "@chakra-ui/react"

export const AsideComponent = () => {
  return (
    <GridItem
      as="aside"
      rowSpan={3}
      colSpan={1}
      bgColor="asideBg"
    >
      <h1>aside</h1>
    </GridItem>
  )
}