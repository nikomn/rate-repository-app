import { Pressable, View, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from './theme';
import Text from './Text';
import * as yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
  .number()
  .min(0, 'Rating must be greater or equal to 0')
  .max(100, 'Rating must not be greater than 100')
  .required('Rating is required'),
  text: yup.string(),
});

const styles = StyleSheet.create({
      container: {
        alignItems: 'stretch',
        backgroundColor: "#e1e4e8",
        flex: 1
      },
      formContainer: {
        alignItems: 'stretch',
        backgroundColor: "white",
        padding: 15
      },
      button: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        padding: 10,
        margin: 3,
        alignItems: 'center'
      },
      buttonText: {
        color: 'white',
      }
    });

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: null,
  text: '',
};

export const StoreReviewContainer = ({onSubmit}) => {
  
  const ReviewForm = ({ onSubmit }) => {
    const [ownerNameField, ownerNameMeta, ownerNameHelpers] = useField('ownerName');
    const [repositoryNameField, repositoryNameMeta, repositoryNameHelpers] = useField('repositoryName');
    const [ratingField, ratingMeta, ratingHelpers] = useField('rating');
    const [textField, textMeta, textHelpers] = useField('text');
  
    return (
      <View style={styles.formContainer}>
        <FormikTextInput name="ownerName" placeholder="Repository owner name" />
        <FormikTextInput name="repositoryName" placeholder="Repository name" />
        <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
        <FormikTextInput name="text" placeholder="Review" multiline={true} />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText} fontWeight='bold'>Create a review</Text>
        </Pressable>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );

}

const StoreReview = () => {
    let navigate = useNavigate();
    const [StoreReview] = useCreateReview();
    const onSubmit = async (values) => {
      const { ownerName, repositoryName, text } = values;
      const rating = parseInt(values.rating)

      try {
        const { data } = await StoreReview({ ownerName, repositoryName, rating, text });
        console.log(data);
        console.log("/repos/" + data.createReview.repositoryId)
        navigate("/repos/" + data.createReview.repositoryId);
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <StoreReviewContainer onSubmit={onSubmit} />
    )
    // return (
    //   <StoreReviewContainer />
    // )

  // return (
  //   <View style={styles.container}>
  //     <Formik 
  //       initialValues={initialValues} 
  //       onSubmit={onSubmit}
  //       validationSchema={validationSchema}>
  //       {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
  //     </Formik>
  //   </View>
  // );
};

export default StoreReview;