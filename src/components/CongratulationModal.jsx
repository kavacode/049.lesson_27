import React, { Component } from "react";
import "./Modal.css";

class CongratulationModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCard: {
        title: "",
        message: "",
        image: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { newCard } = this.state;
    const { addNewCard, closeModal } = this.props;

    if (newCard.title && newCard.message && newCard.image) {
      addNewCard(newCard);
      this.setState({
        newCard: {
          title: "",
          message: "",
          image: "",
        },
      });
      closeModal();
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newCard: {
        ...prevState.newCard,
        [name]: value,
      },
    }));
  };

  handleCloseModal = () => {
    const { closeModal } = this.props;
    closeModal();
  };

  render() {
    const { showModal } = this.props;
    const { newCard } = this.state;

    return (
      <div>
        {showModal && (
          <div className="modal">
            <form onSubmit={this.handleSubmit}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={newCard.title}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={newCard.message}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Image URL:
                <input
                  type="text"
                  name="image"
                  value={newCard.image}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Create Card</button>
              <button onClick={this.handleCloseModal} className="close-button">
                Close
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default CongratulationModal;
