import PropTypes from "prop-types";

const Page = ({ children }) => (
  <main className="h-96">
    <div>{children}</div>
  </main>
);

Page.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Page;
