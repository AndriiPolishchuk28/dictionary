interface IMenuItem {
  label: string;
  link: string;
}

export const menu: IMenuItem[] = [
  {
    label: "Dictionary",
    link: "/dictionary",
  },
  {
    label: "Recommend",
    link: "/recommend",
  },
  {
    label: "Training",
    link: "/training",
  },
  {
    label: "Log out",
    link: "/login",
  },
];
