import PropTypes from 'prop-types';
import { BtnItem, BtnList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map((option, index) => {
        return (
          <BtnItem key={index}>
            <Button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </BtnItem>
        );
      })}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
