import PropTypes from "prop-types";

const Page = ({ children }) => (
  <main className="min-h-screen">
    <div>{children}</div>
  </main>
);

Page.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Page;
