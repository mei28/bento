import { Button, HStack, Text } from "@yamada-ui/react";

export const TypeSelector = ({ onSelect }: { onSelect: (type: string) => void }) => {
  const types = ["meat", "fish", "noodles"];

  return (
    <HStack justify="center" gap={4}>
      {types.map((type) => (
        <Button key={type} colorScheme="teal" onClick={() => onSelect(type)}>
          <Text textTransform="capitalize">{type}</Text>
        </Button>
      ))}
    </HStack>
  );
};

