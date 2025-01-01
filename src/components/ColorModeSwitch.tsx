import { HStack } from "@chakra-ui/react";
import { Switch } from "./ui/switch";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorPalette="green"
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
        whiteSpace='nowrap'
      >
        Dark Mode
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
