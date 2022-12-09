import { View, ScrollView } from "react-native";
import styles from "./styles";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../constants/theme";
import { Divider, ListItem } from "react-native-elements";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import { useStateContext } from "../../Contexts/ContextProvider";
import Animated from "react-native-reanimated";

const AccountInfo = ({ accounts }) => {
  const { user } = useStateContext();
  return (
    <View style={styles.userInfoSection}>
      <ListItem style={styles.listContainer}>
        <ListItemContent>
          <View style={styles.innerContainer}>
            <Avatar.Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU",
              }}
              size={80}
            />
            <View style={styles.titleContainer}>
              <Title style={[styles.title, styles.margin]}>
                {user.fullName}
              </Title>
              <Caption style={styles.caption}>{`0${user.phone}`}</Caption>
            </View>
          </View>

          <ScrollView style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon
                  name="account-box-multiple-outline"
                  color={COLORS.primary}
                  size={25}
                />
                <View style={styles.accountView}>
                  <Text style={styles.menuItemText}>Account Type</Text>
                  <Text style={styles.text}>{accounts.product}</Text>
                </View>
              </View>
            </TouchableRipple>
            <Divider />
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon
                  name="calendar-clock-outline"
                  color={COLORS.primary}
                  size={25}
                />
                <View style={styles.opening}>
                  <Text style={styles.menuItemText}>Opening Date</Text>
                  <Text style={styles.text}>{accounts.openingDate}</Text>
                </View>
              </View>
            </TouchableRipple>
            <Divider />
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon
                  name="map-marker-radius-outline"
                  color={COLORS.primary}
                  size={25}
                />
                <View style={styles.address}>
                  <Text style={styles.menuItemText}>Address</Text>
                  <Text style={styles.text}>{user.address}</Text>
                </View>
              </View>
            </TouchableRipple>
            <Divider />
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="email-outline" color={COLORS.primary} size={25} />
                <View style={styles.address}>
                  <Text style={styles.menuItemText}>Email</Text>
                  <Text style={styles.text}>{user.email}</Text>
                </View>
              </View>
            </TouchableRipple>
            <Divider />
          </ScrollView>
        </ListItemContent>
      </ListItem>
    </View>
  );
};
export default AccountInfo;
