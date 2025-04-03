import PropTypes from "prop-types";

export const FloatingHeading = ({ value, className }) => {
  return (
    <div className="relative">
      <p className={`absolute text-base px-7.5 py-3 w-max rounded-lg font-semibold bg-text text-background-dim ${className}`}>
        {value}
      </p>
    </div>
  );
};

FloatingHeading.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};
