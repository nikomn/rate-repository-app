import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
import RepositoryContainer from './RepositoryContainer';
import StoreReview from './ReviewForm';
import MyReviews from './MyReviews';
import CreateUser from './SignUpForm';
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
        <Route path="/signup" element={<CreateUser />} exact />
        <Route path="/myreviews" element={<MyReviews />} exact />
        <Route path="/review" element={<StoreReview />} exact />
        <Route path="/repos/:userId" element={<RepositoryContainer />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <BodyMassIndexCalculator></BodyMassIndexCalculator> */}
      {/* <WhatIsMyPlatform /> */}
    </View>
  );
};

export default Main;