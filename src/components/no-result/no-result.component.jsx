import { ReactComponent as RawrIcon } from "../../Assets/rawr.svg";

import "./no-result.styles.scss";

const NoResult = () => (
  <div className="empty-slate">
    <RawrIcon className="icon" />
    <p>There is nothing here!</p>
  </div>
);

export default NoResult;
