import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import axios from "axios";
import DOMPurify from "isomorphic-dompurify";
import FormError from "../../../../common/components/FormError/FormError";
import TextInput from "../../../../common/components/TextInput/TextInput";
import Button from "../../../../common/components/Button/Button";
import styles from "./TweetForm.module.scss";
import { ITweet } from "../../../../common/interfaces";
import { API_URLS } from "../../../../common/constants";
import { setTweets } from "../../../../redux/reducers/tweetsSlice";

const initialValues: ITweet = {
  author_id: "",
  text: "",
};

const validationSchema = Yup.object({
  text: Yup.string()
    .required("Required")
    .max(140, "Must be less than 140 characters")
    .min(1, "Must be 1 or more characters"),
});

const TweetForm = ({ userId }: any) => {
  const [formError, setFormError] = useState("");
  const dispatch = useDispatch();

  const submitTweetHandler = async (
    { text: message }: ITweet,
    actions: any
  ) => {
    const text = DOMPurify.sanitize(message);
    const author_id = userId;

    axios
      .post(API_URLS.TWEETS, {
        author_id,
        text,
      })
      .then(({ data: newTweet }) => {
        console.log("newTweet", newTweet);
        axios
          .get(API_URLS.TWEETS)
          .then(({ data }) => {
            dispatch(setTweets(data.reverse()));
          })
          .catch((error) => {
            console.log("Error while refetching tweets: ", error.message);
          });
      })
      .catch((error) => {
        setFormError("Error while creating a new tweet. Please try again.");
        console.log("Error while creating a new tweet: ", error.message);
      })
      .finally(() => {
        actions.setSubmitting(false);
        actions.resetForm();
      });
  };

  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitTweetHandler}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Question: do we need to have a Form inside a Form? - That's how it's shown in Formic docs example, maybe I'm missing something */}
            <TextInput
              name="text"
              type="textarea"
              placeholder="What's happening?"
            />
            <Button type="submit" disabled={isSubmitting}>
              Tweet
            </Button>
            {formError && <FormError message={formError} />}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TweetForm;
