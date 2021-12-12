import React from "react";
import { useParams } from "react-router";
import { View } from "react-native";
import Text from "../Text";
import * as Linking from 'expo-linking';
import useRepository from "../../hooks/useRepository";
import RepositoryContainer from "./RepositoryContainer";

const ViewRepository = () => {

  const params = useParams();
  const id = String(params.id);

  const { repository, reviews, loading, fetchMore } = useRepository({
    first: 3,
    repositoryId: id,
  });

  const openRepository = () => {
    Linking.openURL(repository.url)
  };

  const onEndReach = () => {
    console.log("Fetch more");
    fetchMore();
  };

  return <RepositoryContainer reviews={reviews} repository={repository} openRepository={openRepository} onEndReach={onEndReach} />;
};

export default ViewRepository;

