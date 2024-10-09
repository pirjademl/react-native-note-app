import React from "react";
import { Tabs } from "expo-router";
import { TabIcon } from "../../components/icon/icon";
import { icons } from "../../constants";

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#031D44",
                    tabBarInactiveTintColor: "#D8E1FF",
                    tabBarStyle: {
                        backgroundColor: "#1E3888",
                        borderTopWidth: 1,
                    },
                }}
            >
                <Tabs.Screen
                    name="create-note"
                    options={{
                        headerShown: false,
                        title: "Create",
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="view"
                    options={{
                        headerShown: false,
                        title: "View",
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.eye}
                                color={color}
                                name="View"
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;
