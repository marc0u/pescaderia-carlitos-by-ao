import PropTypes from "prop-types";

const Page = ({ children }) => (
  <main>
    <div>{children}</div>
  </main>
);

Page.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Page;
