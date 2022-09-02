import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
import Repository from './Repository';
// import WhatIsMyPlatform from './WhatIsMyPlatform';
//import BodyMassIndexCalculator from './BodyMassIndexCalculator';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});


const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/repos/:userId" element={<Repository />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <BodyMassIndexCalculator></BodyMassIndexCalculator> */}
      {/* <WhatIsMyPlatform /> */}
    </View>
  );
};

export default Main;