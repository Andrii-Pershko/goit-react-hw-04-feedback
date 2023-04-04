import css from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <div style={css.div}>
      {Object.keys(option).map(nameBtn => {
        return (
          <button
            key={nameBtn}
            type="button"
            name={nameBtn}
            onClick={onLeaveFeedback}
          >
            {' '}
            {nameBtn}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  option: PropTypes.object,
};

export default FeedbackOptions;
