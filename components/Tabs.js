import PicCard  from "./PicCard";
import Profile from "./Profile";
import UploadPic from './UploadPic';

export const Tabs = createMaterialBottomTabNavigator({
    Feed: { screen: PicCard },
    Profile: { screen: Profile },
    Upload: { screen: UploadPic }
  }, {
    initialRouteName: 'Feed',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  });