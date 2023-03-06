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
    .max(30, "too long")
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
  TimeOfSettings: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .min(6, "Must be longer than 6 characters")
    .max(30, "too long")
    .required(isRequiredError),
  PlaceOfSettings: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .min(6, "Must be longer than 6 characters")
    .max(30, "too long")
    .required(isRequiredError),
  AmountCharacter: yup
    .number()
    .min(1, "Must be longer than 1 number")
    .max(1000, "too big number")
    .required(isRequiredError),
  AutoPlot: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .min(5, "Must be longer than 5 characters")
    .max(100, "to long")
    .required(isRequiredError),
});

export const STORY_BOOK_STEP3_SCHEMA = yup.object().shape({
  CoverDesign: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .min(5, "Must be longer than 5 characters")
    .max(100, "to long")
    .required(isRequiredError),
});
