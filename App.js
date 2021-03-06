'use strict'
import { StackNavigator } from 'react-navigation'
// Screens
import singleChatView from './app/tabOne/views/singleChatView'
import navigationConfiguration from './app/tabBar/navigationConfiguration'


const routeConfiguration = {
  Home: {
    screen: navigationConfiguration,
  },
  Profile: {
    path: 'people/:name',
    screen: singleChatView
  },
}


// going to disable the header for now
const stackNavigatorConfiguration = {

  initialRoute: 'singleChatView',
  initialRouteName: 'Home',
}
const ChatView = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
export default ChatView;
