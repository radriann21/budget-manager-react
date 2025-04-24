import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        mainBg: { value: "#0F0F10" },
        mainText: { value: "#FFFFFF" },
        secondaryText: { value: "#727379" },
        asideBg: { value: "#19181B" },
        cardBg: { value: "#09090B" },
        optimisticTrendColor: { value: "#60A5FA" },
        pesimisticTrendColor: { value: "#FB923C" }
      }
    }
  }
})

export const system = createSystem(defaultConfig, config)

