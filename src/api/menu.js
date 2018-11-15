const Menu = [
  { header: 'Menu' },
  {
    title: 'Upcoming Challenges',
    icon: 'today',
    group: 'apps',
    name: 'UpcomingChallenges',
  },
  {
    title: 'My Challenges',
    icon: 'perm_contact_calendar',
    group: 'apps',
    name: 'MyChallenges',
  },
  {
    title: 'Rankings & Stats',
    icon: 'list_alt',
    group: 'apps',
    name: 'Rankings',
  },
  {
    title: 'Users',
    icon: 'people_outline',
    group: 'apps',
    name: 'Mail',
  },
  { divider: true },
  {
    title: 'Chat',
    icon: 'chat_bubble',
    group: 'apps',
    name: 'Chat',
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
