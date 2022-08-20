import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import theme from './theme';
import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: '#d73a4a'
  },
  textinput: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    padding: 10
  },
  textinputError: {
    borderColor: '#d73a4a',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    padding: 10
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={showError ? styles.textinputError : styles.textinput}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;