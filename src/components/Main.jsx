import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import CongratulationModal from "./CongratulationModal";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      showModal: false,
      randomCard: null,
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    try {
      const response = await axios.get(
        "https://65a6dda774cf4207b4f0f64f.mockapi.io/api/v1/card"
      );
      this.setState({ cards: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  generateRandomCard = () => {
    //this.fetchData()
    //this.state
    //const {cards} = this.state
    const randomIndex = Math.floor(Math.random() * this.state.cards.length);
    const selectedCard = this.state.cards[randomIndex];
    this.setState({ randomCard: selectedCard });
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  addNewCard = async (newCard) => {
    try {
      const response = await axios.post(
        "https://65a6dda774cf4207b4f0f64f.mockapi.io/api/v1/card",
        newCard
      );
      this.setState({ cards: [...this.state.cards, response.data] });
      this.closeModal();
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    const { randomCard, showModal } = this.state;
    return (
      <main>
        <button onClick={this.generateRandomCard}>
          Generate Congratulation
        </button>
        <button onClick={this.openModal}>Create New Congratulation</button>
        {randomCard && <Card card={randomCard} />}

        <CongratulationModal
          showModal={showModal}
          closeModal={this.closeModal}
          addNewCard={this.addNewCard}
        />
      </main>
    );
  }
}
export default Main;
