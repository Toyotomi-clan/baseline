import {Container, Divider, Group, Paper, Skeleton, Text, Title} from "@mantine/core";
import Link from "next/link";
import React from "react";

export function SkeletonLogin() {

  return (<>
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900})}
      >
        Log in
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Link href="/auth/sign-up">
          Sign up for free
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Skeleton height={44}/>
        <Skeleton height={44} mt={"10px"}/>
        <Group position="apart" mt="md">

          <Skeleton width={"20%"} height={10}> </Skeleton>
          <Skeleton width={"20%"} height={10}> </Skeleton>

        </Group>
        <Skeleton height={34} mt={"10px"}/>


        <Divider label="Continue with" labelPosition="center" my="lg"/>

        <Group position={"center"} mb="md" mt="md">

          <Skeleton height={50} circle mb="xl" sx={{textAlign: "center"}}/>
        </Group>

      </Paper>
    </Container>
  </>)
}
