import * as yup from "yup";

//default required field error
const isRequiredError = "This field is required";
const isNotTrimmedError = "This field must have no spaces before and after";
const isNotLowerCaseError = "This field must be written in lowercase";


export const STORY_BOOK_STEP1_SCHEMA = yup.object().shape({
	ThemeOfStory: yup
		.string()
		.strict(true)
		.trim(isNotTrimmedError)
		.min(3, "Must be longer than 3 characters")
		.max(30, "Nice try, nobody has a last name that long")
		.required(isRequiredError),
});
export const STORY_BOOK_STEP2_SCHEMA = yup.object().shape({
  FavoriteCharter: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .min(3, "Must be longer than 3 characters")
    .max(20, "Nice try, nobody has a last name that long")
    .required(isRequiredError),
});

