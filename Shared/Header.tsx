import {
  createStyles,
  Container,
  Group,
  Menu,
  Tabs,
  Burger,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import Link from 'next/link'
import { Anchor } from '@mantine/core';
import { useEffect } from 'react'
import { useRouter } from 'next/router'



export function AppHeader() {
  const { classes, theme } = useStyles();
  const [opened, { toggle, close }] = useDisclosure(false);

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = () => {
      close()
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])


  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <MantineLogo size={28} inverted />

          <Menu >
            <Menu.Target>
              <Burger
                opened={opened}
                onClick={toggle}
                className={classes.burger}
                size="sm"
                color={theme.white}
              />
            </Menu.Target>
            <Menu.Dropdown className={classes.burgerMenu}>
              {menuLinks.map(menuLink => <Menu.Label key={menuLink.name}>{menuLink.component}</Menu.Label>)}
            </Menu.Dropdown>

          </Menu>
        </Group>
      </Container>
      <Container>
        <Tabs
          variant="outline"
          classNames={{
            root: classes.tabs,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{menuLinks.map((tab) => (
            <Tabs.Tab value={tab.name} key={tab.name}>
              {tab.component}
            </Tabs.Tab>
          ))}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}


const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    borderBottom: `1px solid ${theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background
      }`,
    marginBottom: 120,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  burgerMenu: {
    width: 130,
  },

  tabs: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: 38,
    color: theme.white,
    backgroundColor: 'transparent',
    borderColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.1
      ),
    },

    '&[data-active]': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.1
      ),
      borderColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    },
  },
}));


const menuLinks = [
  {
    component: <Link href="/">
      <Anchor>Home</Anchor>
    </Link>, name: 'home'
  },
  {
    component: <Link href="/about">
      <Anchor>About Us</Anchor>
    </Link>, name: 'about'
  },
  {
    component: <Link href="/user-input">
      <Anchor>User Input</Anchor>
    </Link>, name: 'userInput'
  }
]