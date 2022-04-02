export const links = {
  state: {
    items: [
      {
        text: "Home",
        href: "#home",
        icon: "mdi-home",
        last: false,
        bottom: true,
        top: true,
      },
      {
        text: "Join Us",
        href: "#joinUs",
        icon: "mdi-information",
        last: false,
        bottom: true,
        top: true,
      },
      {
        text: "Calendar",
        href: "#meetUp",
        icon: "mdi-calendar",
        last: false,
        bottom: true,
        top: true,
      },
      {
        text: "Catholic Letters",
        href: "#preview",
        icon: "mdi-note-text-outline",
        last: false,
        bottom: true,
        top: true,
      },
      {
        text: "Contact",
        href: "#contact",
        icon: "mdi-email",
        last: true,
        bottom: true,
        top: true,
      },
    ],
  },
  getters: {
    appBarLinks: (state) => {
      const topLinks = [];
      for (const link of state.items) {
        if (!link.top) {
          continue;
        }
        topLinks.push(link);
      }
      return topLinks;
    },
    footerLinks: (state) => {
      const bottomLinks = [];
      for (const link of state.items) {
        if (!link.bottom) {
          continue;
        }
        bottomLinks.push(link);
      }
      return bottomLinks;
    },
  },
};
