import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { getTasks } from "../api";
import Layout from "../components/Layout";
import TaskList from "../components/TaskList";

const homescreen = () => {
  return (
        <Layout>
            <TaskList />
        </Layout>
  );
};

export default homescreen;
