import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeedScreen from "./screens/feedscreen/FeedScreen";
import ProfileScreen from "./screens/profilescreen/ProfileScreen";
import { useState } from "react";
import { LogBox } from "react-native";
import MyEventsTab from "./screens/eventscreen/MyEventsTab";
import MyTeamsTab from "./screens/teamscreen/MyTeamsTab";
import ChatScreen from "./screens/chatscreen/ChatScreen";

LogBox.ignoreLogs(["Setting a timer"]);

const feedScreen = "Feed";
const eventScreen = "Events";
const profileScreen = "Profile";
const teamScreen = "Teams";
const chatScreen = "Chat";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
  const [newEventShow, setNewEventShow] = useState(false);
  const [editEventShow, setEditEventShow] = useState(false);
  const [newTeamShow, setNewTeamShow] = useState(false);
  const [editTeamShow, setEditTeamShow] = useState(false);
  const [teamFeedShow, setTeamFeedShow] = useState(false);

  return (
    <Tab.Navigator
      initialRouteName={feedScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === eventScreen) {
            iconName = focused ? "list" : "list-outline";
          } else if (routeName === feedScreen) {
            iconName = focused ? "map" : "map-outline";
          } else if (routeName === profileScreen) {
            iconName = focused ? "person-circle" : "person-circle-outline";
          } else if (routeName === teamScreen) {
            iconName = focused ? "shirt" : "shirt-outline";
          } else if (routeName === chatScreen) {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          }


          return (
            <Ionicons
              name={iconName}
              size={40}
              color={color}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 60,
                height: "170%",
              }}
            />
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 30,
          left: 10,
          right: 10,
          borderRadius: 15,
          backgroundColor: "transparent",
          height: 65,
          borderTopWidth: 0,
          elevation: 0,
        },
      })}
    >
      <Tab.Screen name={eventScreen}>
        {() => (
          <MyEventsTab
            darkModeEnabled={darkModeEnabled}
            newEventShow={newEventShow}
            setNewEventShow={setNewEventShow}
            setEditEventShow={setEditEventShow}
            editEventShow={editEventShow}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name={chatScreen}>
        {() => (
          <ChatScreen 
          darkModeEnabled={darkModeEnabled}/>
        )}
      </Tab.Screen>
      <Tab.Screen name={feedScreen}>
        {() => (
          <FeedScreen
            darkModeEnabled={darkModeEnabled}
            newEventShow={newEventShow}
            editEventShow={editEventShow}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name={teamScreen}>
        {() => (
          <MyTeamsTab
            darkModeEnabled={darkModeEnabled}
            newTeamShow={newTeamShow}
            setNewTeamShow={setNewTeamShow}
            setEditTeamShow={setEditTeamShow}
            editTeamShow={editTeamShow}
            setTeamFeedShow={setTeamFeedShow}
            teamFeedShow={teamFeedShow}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name={profileScreen}>
        {() => <ProfileScreen setDarkModeEnabled={setDarkModeEnabled} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default NavBar;
