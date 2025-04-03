import PropTypes from "prop-types";

export const NavBarButton = ({ value }) => {
  return (
    <button className="cursor-pointer font-semibold text-text text-h5 px-4 py-1.5 hover:bg-background rounded-full">
      {value}
    </button>
  );
};

NavBarButton.propTypes = {
  value: PropTypes.string.isRequired,
};

export const CTAButton = ({ value }) => {
  return (
    <button className="cursor-pointer w-max rounded-xl bg-accent text-text text-h5 font-semibold px-8 py-4">
      {value}
    </button>
  );
};

CTAButton.propTypes = {
  value: PropTypes.string.isRequired,
};
