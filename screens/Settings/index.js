import Profile from "./Profile";

const ProfileScreen = ({ navigation }) => <Profile navigation={navigation} />;

ProfileScreen.navigationOptions = () => ({
  header: null,
});

export default ProfileScreen;
