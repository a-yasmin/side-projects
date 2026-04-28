import Box from "@/components/ui/Box";
import Stack from "@/components/ui/Stack";
import { type FC, useState } from "react";
import Text from "@/components/ui/Text";
import VStack from "@/components/ui/VStack";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";

const Home: FC = () => {
  const [hovered, setHovered] = useState<"create" | "play" | null>(null);

  const flexStyle = (card: "create" | "play"): React.CSSProperties => ({
    flex: hovered === card ? 3 : hovered !== null ? 2 : 1,
    transition: "flex 0.35s ease",
  });

  return (
    <Box className="w-screen h-screen flex items-center justify-center bg-linear-to-br from-blue-100 via-blue-200 to-indigo-300">
      <Card className="p-12 border border-white/60 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-blue-200/50 w-[700px]">
        <Stack className="flex flex-col items-center justify-center h-full gap-12">
          <VStack className="items-center gap-2">
            <Text
              as="h1"
              className="text-4xl font-bold text-blue-950 tracking-tight"
            >
              Welcome to Quizdeck 👋
            </Text>
            <Text className="text-blue-400 text-base font-normal">
              What would you like to do today?
            </Text>
          </VStack>

          {/* Action cards */}
          <Stack className="flex flex-row gap-6 w-full">
            <Link
              to="/create-quiz"
              style={flexStyle("create")}
              onMouseEnter={() => setHovered("create")}
              onMouseLeave={() => setHovered(null)}
            >
              <Box
                className="w-full bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 cursor-pointer rounded-2xl h-[140px] hover:shadow-xl hover:shadow-blue-400/40 hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
                as="button"
              >
                <VStack className="items-center gap-2">
                  <Text as="h3" className="text-xl font-bold text-white">
                    Create New Quiz
                  </Text>
                  <Text className="text-blue-100 text-sm font-normal">
                    Build a quiz from scratch
                  </Text>
                </VStack>
              </Box>
            </Link>

            <Link
              to="/play-quiz"
              style={flexStyle("play")}
              onMouseEnter={() => setHovered("play")}
              onMouseLeave={() => setHovered(null)}
            >
              <Box
                className="w-full bg-linear-to-br from-indigo-500 to-indigo-600 text-white p-6 cursor-pointer rounded-2xl h-[140px] hover:shadow-xl hover:shadow-indigo-400/40 hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
                as="button"
              >
                <VStack className="items-center gap-2">
                  <Text as="h3" className="text-xl font-bold text-white">
                    Play a Quiz
                  </Text>
                  <Text className="text-indigo-100 text-sm font-normal">
                    Join with a code
                  </Text>
                </VStack>
              </Box>
            </Link>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default Home;
