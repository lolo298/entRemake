declare module "Navbar" {
  export type NavbarProps = {
    type: string;
    updateNav: (type: string) => void;
  };

  export const Navbar: (props: NavbarProps) => JSX.Element;
}
