import IconBack from "@/assets/icons/IconBack";
import Page from "@/components/Page";
import Box from "@/components/ui/Box";
import Button from "@/components/ui/Button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/Card";
import HStack from "@/components/ui/HStack";
import Input from "@/components/ui/Input";
import RadioGroup, { RadioGroupItem } from "@/components/ui/radio-group";
import ScrollArea from "@/components/ui/ScrollArea";
import VStack from "@/components/ui/VStack";
import { useCallback, useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type Option = { id: number };
type Question = { id: number; options: Option[] };

let nextId = 1;
const makeOption = (): Option => ({ id: nextId++ });
const makeQuestion = (): Question => ({
  id: nextId++,
  options: [makeOption(), makeOption(), makeOption()],
});

const CreateQuiz: FC = () => {
  const [questions, setQuestions] = useState<Question[]>([makeQuestion()]);
  const navigate = useNavigate();

  const addQuestion = useCallback(() => {
    setQuestions((prev) => [...prev, makeQuestion()]);
  }, []);

  const deleteQuestion = useCallback((questionId: number) => {
    setQuestions((prev) => {
      if (prev.length === 1) {
        toast("You need to have minimum of 1 question for the quiz");
        return prev;
      }
      return prev.filter((q) => q.id !== questionId);
    });
  }, []);

  const deleteOption = useCallback((questionId: number, optionId: number) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== questionId) return q;
        if (q.options.length <= 2) {
          toast("You need at least 2 options per question");
          return q;
        }
        return { ...q, options: q.options.filter((o) => o.id !== optionId) };
      }),
    );
  }, []);

  return (
    <Page className="w-screen h-screen flex items-center justify-center bg-linear-to-br from-blue-100 via-blue-200 to-indigo-300">
      <VStack className="w-1/2 h-screen justify-center items-center">
        <Box className="w-full flex flex-row justify-between">
          <Button
            onClick={() => navigate(-1)}
            leftIcon={<IconBack size={16} />}
          >
            Back
          </Button>
          <HStack className="flex-row gap-2">
            <Button>Save</Button>
            <Button onClick={addQuestion}>Add Question</Button>
          </HStack>
        </Box>

        <ScrollArea className="w-full h-fit">
          <VStack className="w-full">
            {/* Quiz title and description */}
            <Card>
              <CardHeader className="gap-4">
                <Input
                  htmlFor="quiz-title"
                  type="text"
                  label="Quiz Title"
                  placeholder="Enter quiz title..."
                />
                <Input
                  htmlFor="quiz-description"
                  type="text"
                  label="Quiz Description"
                  placeholder="Enter quiz description..."
                />
              </CardHeader>
            </Card>

            {/* List of questions */}
            {questions.map((question, index) => (
              <Card key={question.id}>
                <CardHeader>
                  <Input
                    htmlFor={`question-${question.id}`}
                    type="text"
                    label={`Question ${index + 1}`}
                    placeholder="Enter question..."
                  />
                  <CardAction
                    className="border rounded-md px-2 py-1 cursor-pointer"
                    onClick={() => deleteQuestion(question.id)}
                  >
                    delete
                  </CardAction>
                </CardHeader>

                <CardContent>
                  <RadioGroup>
                    {question.options.map((option) => (
                      <Box key={option.id} className="flex items-center gap-2">
                        <RadioGroupItem
                          value={`option-${option.id}`}
                          className="data-checked:bg-green-600 data-checked:border-green-600"
                        />
                        <Input
                          htmlFor={`option-${option.id}`}
                          type="text"
                          placeholder="Option..."
                          className="flex-1"
                        />
                        <Box
                          as="button"
                          className="text-sm text-muted-foreground hover:text-destructive p-1"
                          onClick={() => deleteOption(question.id, option.id)}
                        >
                          ×
                        </Box>
                      </Box>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            ))}
          </VStack>
        </ScrollArea>
      </VStack>
    </Page>
  );
};

export default CreateQuiz;
