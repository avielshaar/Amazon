import { Helmet, PropTypes } from "../../imports.js";

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

Title.propTypes = { title: PropTypes.string };

export default Title;
