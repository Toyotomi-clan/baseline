/* eslint-disable-next-line */
import {
  Anchor, Box,
  Button,
  Checkbox,
  Container,
  Divider, Grid,
  Group, List,
  Paper,
  PasswordInput,
  Text,
  TextInput, ThemeIcon,
  Title
} from "@mantine/core";
import React from "react";
import {GoogleIcon} from "../login";
import {CircleCheck, CircleDashed} from "tabler-icons-react";
import Link from "next/link";

export interface SignupProps {}

export function SignUp(props: SignupProps) {
  return (
    <Group spacing={"sm"} grow={true} position={"center"}>
      <Box sx={{maxWidth: "450px"}}>
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="green" size={24} radius="xl">
              <CircleCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>Monitor your behaviour</List.Item>
          <List.Item>All data is yours no third party shenanigans</List.Item>
          <List.Item>Work towards goals made for you</List.Item>
          <List.Item>Daily sessions to keep you on track</List.Item>
          <List.Item>Sessions can be taken at a later date</List.Item>
          <List.Item
            icon={
              <ThemeIcon color="yellow" size={24} radius="xl">
                <CircleDashed size={16} />
              </ThemeIcon>
            }
          >
            Invite a friend to share progress with
          </List.Item>
        </List>
      </Box>

      <Box sx={{maxWidth: "420px"}} >
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Create account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        already a user?{' '}
        <Link href={"/login"}>
          login
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="FirstName" placeholder="John" required />
        <TextInput label="LastName" placeholder="Wick" required />
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />

        <Button fullWidth mt="xl">
          Create account
        </Button>

        <Divider label="Create account with" labelPosition="center" my="lg" />

        <Group grow mb="md" mt="md">
          <GoogleIcon radius="xl">Google</GoogleIcon>
        </Group>

      </Paper>
      </Box>
    </Group>


  );
}

export default SignUp;
