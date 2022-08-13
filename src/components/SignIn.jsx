import { Pressable, View, StyleSheet, Alert } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from './theme';
import Text from './Text';

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
      },
      textinput: {
        borderColor: theme.colors.textSecondary,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        padding: 10
      }
    });

const initialValues = {
  username: '',
  password: '',
};

const LogInForm = ({ onSubmit }) => {
  const [usernameField, usernameMeta, usernameHelpers] = useField('username');
  const [passwordField, passwordMeta, passwordHelpers] = useField('password');

  return (
    <View style={styles.formContainer}>
      <FormikTextInput style={styles.textinput} name="username" placeholder="Enter username" />
      <FormikTextInput secureTextEntry={true} style={styles.textinput} name="password" placeholder="Enter password" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText} fontWeight='bold'>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  //const onSubmit = values => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm()
    Alert.alert(`You have signed in as "${values.username}"`)
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <LogInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;