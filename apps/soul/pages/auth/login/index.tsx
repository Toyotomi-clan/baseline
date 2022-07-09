/* eslint-disable-next-line */
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Skeleton,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import React, {useEffect} from "react";
import Link from "next/link";
import {SkeletonLogin} from "../../../Components/skeletons/auth/login/skeleton-login";
import {useStartLoginFlow} from "./loginApi";
import {GoogleIcon} from "../../../Components/SocialAuthIcons/googleIcon";
import {useRouter} from "next/router";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LoginProps {}

const child = <Skeleton height={140} radius="md" animate={false} />;


export function Login(props: LoginProps) {
  const {data, isLoading,isSuccess} = useStartLoginFlow();
  const router = useRouter();

  useEffect( () => {
    if(!isSuccess || isLoading){
      return;
    }
    router.query.flow = data.data.id
    router.push(router).catch(x => {
      //Todo: show the user the error page
      //Todo: Allow them to recover from the error page

    })
  },[data])

  //loading
  if(isLoading){
    return <SkeletonLogin/>
  }

  return (

        <Container size={420} my={40}>
          <Title
            align="center"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
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
            <TextInput label="Email" placeholder="you@mantine.dev" required />
            <PasswordInput label="Password" placeholder="Your password" required mt="md" />
            <Group position="apart" mt="md">
              <Checkbox label="Remember me" />
              <Link href={"/auth/forgot-password"}>
                Forgot password?
              </Link>
            </Group>
            <Button fullWidth mt="xl">
              Sign in
            </Button>

            <Divider label="Continue with" labelPosition="center" my="lg" />

            <Group grow mb="md" mt="md">
              <GoogleIcon radius="xl">Google</GoogleIcon>
            </Group>

          </Paper>
        </Container>
  );
}

export default Login;
