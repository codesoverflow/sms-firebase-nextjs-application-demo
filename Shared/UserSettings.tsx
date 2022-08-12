import { useState } from 'react';
import {
  createStyles,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu
} from '@mantine/core';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
} from '@tabler/icons';
import Link from 'next/link'
import { Anchor } from '@mantine/core';




interface UserSettingsProps {
  user: { name: string; image: string };
}

export function UserSettings({ user }: UserSettingsProps) {
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  function handleOpenMenu() {
    setUserMenuOpened(true)
  }

  function handleCloseMenu() {
    setUserMenuOpened(false)
  }

  return (
    <Menu
      width={260}
      position="bottom-end"
      transition="pop-top-right"
      onClose={handleOpenMenu}
      onOpen={handleCloseMenu}
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
        >
          <Group spacing={7}>
            <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
            <Text weight={500} size="sm" sx={{ lineHeight: 1, color: theme.white }} mr={3}>
              {user.name}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<IconHeart size={14} stroke={1.5} color={theme.colors.red[6]} />}>
          Liked posts
        </Menu.Item>
        <Menu.Item icon={<IconStar size={14} stroke={1.5} color={theme.colors.yellow[6]} />}>
          Saved posts
        </Menu.Item>
        <Menu.Item icon={<IconMessage size={14} stroke={1.5} color={theme.colors.blue[6]} />}>
          Your comments
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>Account settings</Menu.Item>
        <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
          Change account
        </Menu.Item>
        <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>Logout</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<IconPlayerPause size={14} stroke={1.5} />}>
          Pause subscription
        </Menu.Item>
        <Menu.Item color="red" icon={<IconTrash size={14} stroke={1.5} />}>
          Delete account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}


const useStyles = createStyles((theme) => ({



  user: {
    color: theme.white,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.1
      ),
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },


  userActive: {
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
      0.1
    ),
  },


}));
