import { Pressable, View, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from './theme';
import Text from './Text';
import * as yup from 'yup';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(1, 'Username must have atleast 1 characters')
        .max(30, 'Username can be max 30 characters')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Passwod must have atleast 5 characters')
        .max(50, 'Password can be max 50 characters')
        .required('Password is required'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords don't match")
        .required('Password confirm is required')
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
  username: '',
  password: '',
  passwordConfirm: ''
};

export const SignUpContainer = ({onSubmit}) => {
  
  const SignUpForm = ({ onSubmit }) => {
    const [usernameField, usernameMeta, usernameHelpers] = useField('username');
    const [passwordField, passwordMeta, passwordHelpers] = useField('password');
    const [passwordConfirmField, passwordConfirmMeta, passwordConfirmHelpers] = useField('passwordConfirm');
    
  
    return (
      <View style={styles.formContainer}>
        <FormikTextInput name="username" placeholder="Enter username" />
        <FormikTextInput secureTextEntry={true} name="password" placeholder="Enter password" />
        <FormikTextInput secureTextEntry={true} name="passwordConfirm" placeholder="Confirm password" />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText} fontWeight='bold'>Sign Up</Text>
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
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );

}

const CreateUser = () => {
    let navigate = useNavigate();
    const [CreateUser] = useSignUp();
    const [signIn] = useSignIn();
    const onSubmit = async (values) => {
        console.log('click')
      const { username, password } = values;

      try {
        const { data } = await CreateUser({ username, password });
        console.log(data);
        const loginData = await signIn({ username, password });
        console.log(loginData.data)
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <SignUpContainer onSubmit={onSubmit} />
    )
};

export default CreateUser;