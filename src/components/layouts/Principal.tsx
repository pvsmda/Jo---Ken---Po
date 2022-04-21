import { Footer, Header, MainPage } from "..";

interface PrincipalProps {
  children: React.ReactNode;
}
export const Principal = ({ children }: PrincipalProps) => {
  return (
    <>
      <Header />
      <MainPage>{children}</MainPage>
      <Footer />
    </>
  );
};
