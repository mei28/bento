import { useState } from "react";
import { Roulette } from "./components/Roulette";
import { MenuDetails } from "./components/MenuDetails";
import { menus } from "./data/menus";
import { Box, Container, Heading, VStack } from "@yamada-ui/react";

const App = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<any | null>(null);

  const handleRouletteResult = () => {
    const mealTypes = ["meat", "fish", "noodles"];
    const randomType = mealTypes[Math.floor(Math.random() * mealTypes.length)];
    const randomMenu = menus[randomType][Math.floor(Math.random() * menus[randomType].length)];

    setSelectedType(randomType);
    setSelectedMenu(randomMenu);
  };

  return (
    <Container maxW="container.md" py="8">
      <VStack gap="6" align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          料理メニュールーレット
        </Heading>
        <Roulette onSpin={handleRouletteResult} />
        {selectedType && selectedMenu && (
          <Box>
            <Heading as="h2" size="lg" textAlign="center" mb="4">
              選ばれたタイプ: {selectedType}
            </Heading>
            <MenuDetails menu={selectedMenu} />
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default App;

