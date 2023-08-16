import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//importing ncessary imports
import DashboardHomeScreen from "./DasboardHomeScreen";
import NewTaskScreen from "./NewTaskScreen";
import SettingsScreen from "./SettingsScreen";

//Expo Vector Icons
import { FontAwesome5, AntDesign, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Dashboard({ navigation }) {
  return (
    <Tab.Navigator>
      {/* Dashboard Home Screen and task bar */}
      <Tab.Screen
        name="DashboardHomeScreen"
        component={DashboardHomeScreen}
        options={{
          title: "Task",
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="tasks" size={24} color="black" />
          ),
        }}
      />

      {/* create new tasks */}
      <Tab.Screen
        name="NewTaskScreen"
        component={NewTaskScreen}
        options={{
          title: "New Task",
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="pluscircle" size={24} color="black" />
          ),
        }}
      />

      {/* Settings */}
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: () => <Feather name="settings" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Dashboard;
