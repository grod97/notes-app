import React from "react";
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
