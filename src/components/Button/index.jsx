import PropTypes from 'prop-types';

const Button = ({ value }) => {
  return (
    <button className="cursor-pointer font-semibold text-text text-h5 px-4 py-1.5 hover:bg-background rounded-full">
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
};


export default Button;
