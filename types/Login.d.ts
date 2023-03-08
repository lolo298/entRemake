declare module "Login" {
  export type LoginProps = {
    updateNav: (page: string) => void;
  };

  export const Login: (props: LoginProps) => JSX.Element;
}
