import { Outlet } from "react-router"
import { Grid, GridItem } from "@chakra-ui/react"
import { AsideComponent } from "@/components/app/AsideComponent"

export const MainLayout = () => {
  return (
    <Grid
      as="main"
      minH="100vh"
      maxW="100%"
      templateColumns="repeat(6, 1fr)"
      templateRows="repeat(3, 1fr)"
      bgColor="mainBg"
      color="mainText"
    >
      <AsideComponent />
      <GridItem
        as="section"
        rowSpan={3}
        colSpan={5}
      >
        <Outlet />
      </GridItem>
    </Grid>
  )
}