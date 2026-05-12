import { useNavigate, useParams } from "react-router-dom";
import { quizzes } from "@/data/questions";
import type { FC } from "react";
import Text from "@/components/Text";
import Page from "@/components/Page";
import VStack from "@/components/VStack";
import Button from "@/components/Button";
import HStack from "@/components/HStack";
import IconBack from "@/assets/icons/IconBack";

const QuizPage: FC = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const quiz = quizzes.find((q) => q.id === quizId);

  if (!quiz) {
    return <Text>Quiz not found</Text>;
  }

  return (
    <Page className="bg-linear-to-br from-blue-100 via-blue-200 to-indigo-300 w-full">
      <VStack className="w-3/5">
        <VStack className="rounded-md shadow-2xl border p-4 bg-white w">
          <Text>{quiz.title}</Text>
          <Text>{quiz.description}</Text>
        </VStack>

        <Button onClick={() => navigate(-1)}>
          <HStack>
            <IconBack />
            <Text>Back</Text>
          </HStack>
        </Button>
      </VStack>

      {/* TBC */}
    </Page>
  );
};

export default QuizPage;
