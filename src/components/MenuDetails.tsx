import React from "react";
import { Box, Heading, Grid, GridItem, VStack, SimpleGrid, Text, List, ListItem } from "@yamada-ui/react";

export const MenuDetails = ({ menu }: { menu: any }) => {
  return (
    <Box p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg" bg="white">
      <VStack gap="6" align="stretch">
        {/* メニュータイトル */}
        <Heading as="h3" size="lg" textAlign="center" mb="4" color="teal.500">
          {menu.title}
        </Heading>

        {/* 材料セクション */}
        <Box>
          <Heading as="h4" size="md" mb="4" color="gray.600">材料</Heading>
          <Grid templateColumns="1fr 1fr" gap="4">
            <GridItem fontWeight="bold" color="gray.500">材料</GridItem>
            <GridItem fontWeight="bold" color="gray.500">量</GridItem>
            {menu.ingredients.map((ingredient: { name: string; amount: string }, index: number) => (
              <React.Fragment key={index}>
                <GridItem>{ingredient.name}</GridItem>
                <GridItem>{ingredient.amount}</GridItem>
              </React.Fragment>
            ))}
          </Grid>
        </Box>

        {/* 作り方セクション */}
        <Box>
          <Heading as="h4" size="md" mb="4" color="gray.600">作り方</Heading>
          <List gap="3" styleType="decimal" pl="4">
            {menu.steps.map((step: string, index: number) => (
              <ListItem key={index}>{step}</ListItem>
            ))}
          </List>
        </Box>

        {/* 栄養セクション */}
        <Box>
          <Heading as="h4" size="md" mb="4" color="gray.600">栄養情報</Heading>
          <SimpleGrid columns={2} gap="4">
            <Box>
              <Text fontWeight="bold" color="gray.500">エネルギー</Text>
              <Text>{menu.nutrition.energy} kcal</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="gray.500">タンパク質</Text>
              <Text>{menu.nutrition.protein} g</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="gray.500">脂質</Text>
              <Text>{menu.nutrition.fat} g</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="gray.500">炭水化物</Text>
              <Text>{menu.nutrition.carbohydrates} g</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="gray.500">食物繊維</Text>
              <Text>{menu.nutrition.dietaryFiber} g</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="gray.500">食塩相当量</Text>
              <Text>{menu.nutrition.saltEquivalent} g</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

