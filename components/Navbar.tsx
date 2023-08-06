import { JSX } from "preact";
import { AcademicCapMiniSolid } from "preact-heroicons";
import ScrollHeader from "npm:preact-scroll-header";

export function Navbar() {
  return (
    <ScrollHeader
      id="header"
      class="menu"
      buffer={24}
      showClass="menu-show"
      onShow={(el) => console.log("SHOWN", el)}
      onHide={(el) => console.log("HIDDEN", el)}
    >
      <h1>hello</h1>
    </ScrollHeader>
  );
}
