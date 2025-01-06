import { useState } from "react";
import { Button, VStack, Heading, Box, CircleProgress } from "@yamada-ui/react";

export const Roulette = ({ onSpin }: { onSpin: () => void }) => {
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    setSpinning(true);
    setTimeout(() => {
      onSpin();
      setSpinning(false);
    }, 2000); // ルーレットアニメーションのシミュレーション
  };

  return (
    <VStack gap="4">
      <Heading as="h2" size="lg">
        ルーレットを回してメニューを決めよう！
      </Heading>
      <Button
        colorScheme="blue"
        onClick={handleSpin}
        disabled={spinning}
      >
        {spinning ? (
          <Box display="flex" alignItems="center" gap="2">
            <CircleProgress boxSize="20px" color="white" />
            ローディング中…
          </Box>
        ) : (
          "スタート"
        )}
      </Button>
    </VStack>
  );
};

