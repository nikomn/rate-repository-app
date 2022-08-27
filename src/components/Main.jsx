import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
// import WhatIsMyPlatform from './WhatIsMyPlatform';
//import BodyMassIndexCalculator from './BodyMassIndexCalculator';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

// import AuthStorage from '../utils/authStorage';

// const test = async () => {
//   const testAuthStore = new AuthStorage('qwerty');
//   await testAuthStore.setAccessToken('abcdefg');
//   const x = await testAuthStore.getAccessToken();
//   console.log(x);
//   await testAuthStore.removeAccessToken();
//   const y = await testAuthStore.getAccessToken();
//   console.log(y);
// };


const Main = () => {
  // test()
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <BodyMassIndexCalculator></BodyMassIndexCalculator> */}
      {/* <WhatIsMyPlatform /> */}
    </View>
  );
};

export default Main;