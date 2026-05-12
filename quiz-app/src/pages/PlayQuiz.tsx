import Box from "@/components/ui/Box";
import { Card } from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import VStack from "@/components/ui/VStack";
import { useCallback, useState, type FC } from "react";
import school from "../assets/school.png";
import science from "../assets/science.png";
import animals from "../assets/animals.png";
import geography from "../assets/geography.png";
import history from "../assets/history.png";
import sports from "../assets/sports.png";
import music from "../assets/music.png";

import { quizzes } from "@/data/questions";
import { useNavigate } from "react-router-dom";
import Page from "@/components/Page";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import HStack from "@/components/ui/HStack";
import IconBack from "@/assets/icons/IconBack";
import Stack from "@/components/ui/Stack";

type TopicOptions = {
  id: string;
  name: string;
  imageUrl: string;
};

const TOPICS: TopicOptions[] = [
  {
    id: "general",
    name: "General Knowledge",
    imageUrl: school,
  },
  { id: "science", name: "Science", imageUrl: science },
  { id: "sports", name: "Sports", imageUrl: sports },
  { id: "animals", name: "Animals", imageUrl: animals },
  { id: "geography", name: "Geography", imageUrl: geography },
  { id: "history", name: "History", imageUrl: history },
  { id: "music", name: "Music", imageUrl: music },
];

const PlayQuiz: FC = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0]);

  const quizList = quizzes.filter((quiz) => quiz.topic === selectedTopic.id);

  const getNumberOfQuiz = useCallback((topicId: string) => {
    return quizzes.filter((quiz) => quiz.topic === topicId).length;
  }, []);

  return (
    <Page className="bg-linear-to-br from-blue-100 via-blue-200 to-indigo-300">
      <Stack className="flex-col gap-3">
        <Button onClick={() => navigate(-1)} className="px-3 py-4 w-fit">
          <HStack>
            <IconBack />
            <Text>Back</Text>
          </HStack>
        </Button>
        <Card className="w-full p-12 border border-white/60 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-blue-200/50 ">
          <VStack>
            <Text>Pick a Topic</Text>
            {/* grid of topics */}
            <Box className="w-full grid grid-cols-4 gap-4">
              {TOPICS.map((topic) => (
                <Box
                  key={topic.id}
                  className={cn(
                    "p-4 rounded-xl flex flex-col gap-2 items-center justify-center cursor-pointer transition-all",
                    selectedTopic.id === topic.id
                      ? "bg-indigo-400 text-white"
                      : "bg-blue-100 hover:bg-indigo-200",
                    "hover:shadow-xl hover:shadow-indigo-400/40 hover:-translate-y-1 transition-all duration-200 flex items-center justify-center",
                  )}
                  // className="w-full bg-linear-to-br from-indigo-500 to-indigo-600 text-white p-6 cursor-pointer rounded-2xl h-[140px] hover:shadow-xl hover:shadow-indigo-400/40 hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"

                  onClick={() => {
                    setSelectedTopic(topic);
                  }}
                >
                  <Box className="p-2 rounded-lg bg-lime-200">
                    <img src={topic.imageUrl} width={30} height={30} />
                  </Box>

                  <Text>{topic.name}</Text>
                </Box>
              ))}
            </Box>
            {/* list of quiz of the topics */}
            <Text>
              {selectedTopic.name} - {getNumberOfQuiz(selectedTopic.id)}{" "}
              {getNumberOfQuiz(selectedTopic.id) === 1 ? "quiz" : "quizzes"}
            </Text>

            <VStack>
              {quizList.map((quiz) => (
                <Box
                  key={quiz.id}
                  className="rounded-md p-3 border cursor-pointer hover:bg-blue-50 transition hover:shadow hover:transition-colors"
                  onClick={() => navigate(`/play-quiz/${quiz.id}`)}
                >
                  <VStack className="gap-2">
                    <Text className="text-lg">{quiz.title}</Text>
                    <Text>{quiz.description}</Text>
                  </VStack>
                </Box>
              ))}
            </VStack>
          </VStack>
        </Card>
      </Stack>
    </Page>
  );
};

export default PlayQuiz;
