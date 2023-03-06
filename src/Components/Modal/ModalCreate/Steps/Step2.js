import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../store/helpers/helpersSlice";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { STORY_BOOK_MODAL_SCHEMA } from "../Settings/Schemes";

export default function Step2() {
  const dispatch = useDispatch();

  return (
    <div class="w-[100%]">
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={STORY_BOOK_MODAL_SCHEMA}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div class="text-left m-[32px]">
              <h2 class="text-[18px] font-textSec pb-[8px]">
                Continue with OTP
              </h2>
              <p class="pb-[32px] text-[14px] font-textSec text-text-gray">
                We will send an OTP via email
              </p>
              <Field
                component="input"
                data-testid="email"
                name="email"
                label="email"
                type="text"
                placeholder="Email"
                class="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px] mb-[32px]"
              />
              <ErrorMessage name="email" component="div" />
              <div class="flex gap-[16px] justify-end">
                <button
                  disabled={!isValid && !dirty}
                  class="btn-modal-send flex items-center"
                  type="submit"
                  onClick={() => {
                    dispatch(
                      openModal({
                        open: true,
                        step: 2,
                      })
                    );
                  }}
                >
                  Send OTP
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
