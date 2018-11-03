import { createStackNavigator } from "react-navigation";
import PicCard from "./PicCard";
import Profile from "./Profile";
import UploadPic from "./UploadPic";

export const StackNavigator = createStackNavigator(
  {
    Feed: PicCard,
    Profile: Profile,
    Upload: UploadPic
  },
  {
    initialRouteName: "Feed"
  }
);
