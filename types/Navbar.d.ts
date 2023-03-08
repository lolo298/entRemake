declare module "Navbar" {
  export type NavbarProps = {
    type: string;
  };

  export const Navbar: (props: NavbarProps) => JSX.Element;
}
