import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../store/helpers/helpersSlice";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { STORY_BOOK_STEP2_SCHEMA } from "./Settings/Schemes";

export default function Step2() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.helpers.step);

  return (
    <div class="items-start pb-[166px]">
      <Formik
        initialValues={{
          FavoriteCharter: "",
        }}
        validationSchema={STORY_BOOK_STEP2_SCHEMA}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div class="w-[550px] pb-[32px] left-0">
              <div class="flex flex-col gap-[10px] start pb-[17px]">
                <h2 class="font-textSec text-text-color text-[20px]">
                  Your Favorite Character
                </h2>
                <p class="font-textSec text-text-color text-[12px]">
                  Example: Harry Potter, Sherlock Holmes
                </p>
              </div>
              <Field
                component="input"
                data-testid="FavoriteCharter"
                name="FavoriteCharter"
                label="FavoriteCharter"
                type="text"
                placeholder="Favorite Character"
                class="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage name="FavoriteCharter" component="div" />
            </div>
            <div class="flex justify-between">
              <button
                onClick={() => {
                  dispatch(setStep(step - 1));
                }}
                class="text-regular text-[18px] text-textSec"
              >
                Back
              </button>
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
