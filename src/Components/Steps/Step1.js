import React  from "react";
import Variants from "./Variants";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../store/helpers/helpersSlice";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { STORY_BOOK_STEP1_SCHEMA } from "./Settings/Schemes";
import { addThemeStory } from "../../store/story/storySlice";

const data = [
  "Action-Adventure",
  "Comedy",
  "Fable",
  "Fantasy",
  "Historical Fiction",
  "Horror",
  "Romance",
  "Science Fiction",
  "Slice of Life",
  "Thriller",
];

export default function Step1() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.helpers.step);

  return (
    <div class="items-start pb-[166px]">
      <Formik
        initialValues={{
          ThemeOfStory: "",
        }}
        validationSchema={STORY_BOOK_STEP1_SCHEMA}
        onSubmit={(values) => {
          console.log(values);
          dispatch(addThemeStory(values));
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div class="max-w-[550px] pb-[32px]">
              <div class="flex gap-[13px] items-center start pb-[17px]">
                <h2 class="font-textSec text-text-color text-[20px]">
                  Choose Genre
                </h2>
                <p class="font-textSec text-regular text-[12px]">
                  (Select up to 2)
                </p>
              </div>
              <div class="flex flex-wrap gap-[16px]">
                {data.map((el) => (
                  <Variants text={el} />
                ))}
              </div>
            </div>
            <div class="max-w-[550px] pb-[32px] left-0">
              <div class="flex flex-col gap-[10px] start pb-[17px]">
                <h2 class="font-textSec text-text-color text-[20px]">
                  Theme of Story
                </h2>
                <p class="font-textSec text-text-color text-[12px]">
                  Example: Cyberpunk science fiction, revenge mystery, medieval
                  fantasy, futuristic, time travel
                </p>
              </div>
              <Field
                component="input"
                data-testid="ThemeOfStory"
                name="ThemeOfStory"
                label="ThemeOfStory"
                type="text"
                placeholder="Theme of story"
                class="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage name="ThemeOfStory" component="div" />
            </div>
            <div class="ml-[80%]">
              <button
                class="btn flex items-center"
                disabled={!isValid && !dirty}
                type="submit"
                onClick={() => {
                  handleSubmit();
                  dispatch(setStep(step + 1));
                }}
              >
                next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
