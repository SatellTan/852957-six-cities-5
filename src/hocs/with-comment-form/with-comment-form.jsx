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
    }

    handleInputChange(evt) {
      evt.preventDefault();
      this.setState({grade: +evt.target.dataset.value});
    }

    handleTextAreaChange(evt) {
      evt.preventDefault();
      this.setState({comment: evt.target.value});
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
        />
      );
    }
  }

  return WithCommentForm;
};

export default withCommentForm;
