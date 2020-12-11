import React, {PureComponent} from "react";

const withCommentForm = (Component) => {
  class WithCommentForm extends PureComponent {
    constructor() {
      super();

      this.state = {
        grade: 0,
        comment: ``,
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
      this.clearState = this.clearState.bind(this);
    }

    handleInputChange(evt) {
      evt.preventDefault();
      this.setState({grade: +evt.target.dataset.value});
    }

    handleTextAreaChange(evt) {
      evt.preventDefault();
      this.setState({comment: evt.target.value});
    }

    clearState() {
      this.setState(() => ({
        grade: 0,
        comment: ``,
      }));
    }

    render() {
      const {grade, comment} = this.state;

      return (
        <Component
          {...this.props}
          grade={grade}
          comment={comment}
          handleInputChange={this.handleInputChange}
          handleTextAreaChange={this.handleTextAreaChange}
          clearState={this.clearState}
        />
      );
    }
  }

  return WithCommentForm;
};

export default withCommentForm;
