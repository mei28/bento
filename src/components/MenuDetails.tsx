import { Box, Heading, List, ListItem, Text, VStack } from "@yamada-ui/react";

export const MenuDetails = ({ menu }: { menu: any }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <VStack gap={4} align="stretch">
        <Heading as="h3" size="md">{menu.title}</Heading>
        <Box>
          <Heading as="h4" size="sm" mb={2}>
            材料
          </Heading>
          <List gap={2}>
            {menu.ingredients.map((item: string, index: number) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Heading as="h4" size="sm" mb={2}>
            作り方
          </Heading>
          <List gap={2} styleType="decimal">
            {menu.steps.map((step: string, index: number) => (
              <ListItem key={index}>{step}</ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Heading as="h4" size="sm" mb={2}>
            成分内容
          </Heading>
          <Text>カロリー: {menu.nutrition.calories} kcal</Text>
          <Text>タンパク質: {menu.nutrition.protein} g</Text>
          <Text>脂質: {menu.nutrition.fat} g</Text>
        </Box>
      </VStack>
    </Box>
  );
};

