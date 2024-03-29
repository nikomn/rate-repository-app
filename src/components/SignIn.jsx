import { Pressable, View, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from './theme';
import Text from './Text';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
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
};

export const SignInContainer = ({onSubmit}) => {
  
  const LogInForm = ({ onSubmit }) => {
    const [usernameField, usernameMeta, usernameHelpers] = useField('username');
    const [passwordField, passwordMeta, passwordHelpers] = useField('password');
  
    return (
      <View style={styles.formContainer}>
        <FormikTextInput name="username" placeholder="Enter username" />
        <FormikTextInput secureTextEntry={true} name="password" placeholder="Enter password" />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText} fontWeight='bold'>Sign in</Text>
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
        {({ handleSubmit }) => <LogInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );

}

// const LogInForm = ({ onSubmit }) => {
//   const [usernameField, usernameMeta, usernameHelpers] = useField('username');
//   const [passwordField, passwordMeta, passwordHelpers] = useField('password');

//   return (
//     <View style={styles.formContainer}>
//       <FormikTextInput name="username" placeholder="Enter username" />
//       <FormikTextInput secureTextEntry={true} name="password" placeholder="Enter password" />
//       <Pressable style={styles.button} onPress={onSubmit}>
//         <Text style={styles.buttonText} fontWeight='bold'>Sign in</Text>
//       </Pressable>
//     </View>
//   );
// };

const SignIn = () => {
    let navigate = useNavigate();
    const [signIn] = useSignIn();
    const onSubmit = async (values) => {
      const { username, password } = values;

      try {
        const { data } = await signIn({ username, password });
        console.log(data);
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <SignInContainer onSubmit={onSubmit} />
    )

  // return (
  //   <View style={styles.container}>
  //     <Formik 
  //       initialValues={initialValues} 
  //       onSubmit={onSubmit}
  //       validationSchema={validationSchema}>
  //       {({ handleSubmit }) => <LogInForm onSubmit={handleSubmit} />}
  //     </Formik>
  //   </View>
  // );
};

export default SignIn;