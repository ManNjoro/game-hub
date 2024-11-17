import { HStack, Text } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button>
          <HStack>
            <Text>Order by: Relevance</Text>
            <BsChevronDown />
          </HStack>
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="date">Date added</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="release">Release date</MenuItem>
        <MenuItem value="popularity">Popularity</MenuItem>
        <MenuItem value="rating">Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
