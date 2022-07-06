/* eslint-disable-next-line */
import {Container, Grid, Skeleton} from "@mantine/core";
import React from "react";

export interface LoginProps {}
const child = <Skeleton height={140} radius="md" animate={false} />;

export function Login(props: LoginProps) {
  return (
    <Container size={1500}>
    <Grid my={"xl"}>
      <Grid.Col xl={4}>{child}</Grid.Col>
      <Grid.Col xl={8}>{child}</Grid.Col>
      <Grid.Col xl={4}>{child}</Grid.Col>
      <Grid.Col xl={8}>{child}</Grid.Col>
      <Grid.Col xl={4}>{child}</Grid.Col>
    </Grid>
  <Grid my={"xl"}>
    <Grid.Col xl={4}>{child}</Grid.Col>
    <Grid.Col xl={8}>{child}</Grid.Col>
    <Grid.Col xl={4}>{child}</Grid.Col>
    <Grid.Col xl={8}>{child}</Grid.Col>
    <Grid.Col xl={4}>{child}</Grid.Col>
  </Grid>
      <Grid my={"xl"}>
        <Grid.Col xl={4}>{child}</Grid.Col>
        <Grid.Col xl={8}>{child}</Grid.Col>
        <Grid.Col xl={4}>{child}</Grid.Col>
        <Grid.Col xl={8}>{child}</Grid.Col>
        <Grid.Col xl={4}>{child}</Grid.Col>
      </Grid>    <Grid my={"xl"}>
      <Grid.Col xl={4}>{child}</Grid.Col>
      <Grid.Col xl={8}>{child}</Grid.Col>
      <Grid.Col xl={4}>{child}</Grid.Col>
      <Grid.Col xl={8}>{child}</Grid.Col>
      <Grid.Col xl={4}>{child}</Grid.Col>
    </Grid>
    </Container>
  );
}

export default Login;
