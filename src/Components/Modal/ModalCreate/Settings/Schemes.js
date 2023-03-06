import * as yup from "yup";

export const STORY_BOOK_MODAL_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .strict(true)
    .required("email is required")
    .email("Enter correct email"),
});
