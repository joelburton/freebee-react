/** Show a single letter.
 *
 * Props:
 * - letter
 */

import "./Letter.css";
import ThemeContext from "./ThemeContext";
import {useContext} from "react";

function Letter({letter, isCenter}) {
  const color = useContext(ThemeContext);
  return (
      <div style={{backgroundColor: color}} className={`Letter ${isCenter ? "Letter-isCenter" : ""}`}>
        <span>{letter}</span>
      </div>
  );
}

export default Letter;