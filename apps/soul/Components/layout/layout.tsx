import React from 'react';
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Text, Grid, Skeleton, Box
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { ChevronDown } from 'tabler-icons-react';
import {FooterCentered} from "../Footer";
import Link from "next/link";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderActionProps {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
}
export function Layout({children}) {

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const items =      [
    { "link": "/about", "label": "Features" },
    {
      "link": "#1",
      "label": "Learn",
      "links": [
        { "link": "/docs", "label": "Documentation" },
        { "link": "/resources", "label": "Resources" },
        { "link": "/community", "label": "Community" },
        { "link": "/blog", "label": "Blog" }
      ]
    },
    { "link": "/about", "label": "About" },
    { "link": "/pricing", "label": "Pricing" },
    {
      "link": "#2",
      "label": "Support",
      "links": [
        { "link": "/faq", "label": "FAQ" },
        { "link": "/demo", "label": "Book a demo" },
        { "link": "/forums", "label": "Forums" }
      ]
    }
  ].map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          control={
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <ChevronDown size={12} />
              </Center>
            </a>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.blue[5],
          textAlign: 'center',
          padding: theme.spacing.xl,
          cursor: 'pointer',
          color: "white"
        })}
      >
        Get 60 days free now
      </Box>
      <Header height={HEADER_HEIGHT}   sx={{ borderBottom: 0, position: "sticky", boxShadow: "rgb(0 0 0 / 7%) 0px 5px 10px" }} mb={120}>
        <Container className={classes.inner} fluid>

          <Group>
            <Burger
              opened={opened}
              onClick={() => toggleOpened()}
              className={classes.burger}
              size="sm"
            />
            <Link href={"/"} ><Text>Logo</Text></Link>
          </Group>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Link href={"/login"}>
            <Button radius="xl">
              Try for Free
            </Button>
          </Link>
        </Container>
      </Header>

      <Container pb={"2.5rem"} fluid={true}>
        {children}
      </Container>


      <FooterCentered links={[
        { "link": "#", "label": "Contact" },
        { "link": "#", "label": "Privacy" },
        { "link": "#", "label": "Blog" },
        { "link": "#", "label": "Store" },
        { "link": "#", "label": "Careers" }
      ]}/>
    </>

  );
}

export default Layout;
