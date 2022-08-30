import { Row } from "../../commonComponents";
import { HamburgerMenu } from "../hamburgerMenu";
import { Logo } from "../logo/logo";

export function NavBar() {
  require("./styles.css");
  let Nav = Row;
  return (
    <div className="fixed-position">
      <Nav className="navbar">
        <a href="/">
          <Logo />
        </a>
        <HamburgerMenu />
      </Nav>
    </div>
  );
}
