import React, { useState } from "react";
// import Link from "react-router-dom";
import { PiSquaresFourFill } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import ".././App.css";
import { IoPersonAddSharp } from "react-icons/io5";
import Modal from "../component/Modal.js";

const Navbar = ({ setPlayers }) => {
  const [showModal, setShowModal] = useState(false);
  const [player, setPlayer] = useState({ name: "", amount: 0, time: "" });

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    e.stopPropagation();
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayers((players) => [...players, player]);
    setPlayer({ name: "", amount: 0, time: "" });
    handleCloseModal();
  };
  return (
    <>
      <nav>
        <div>
          <h1>GILLY'S</h1>
          <p>Koramangala</p>
        </div>
        <div className="nav-right">
          <span className="add-player" onClick={handleOpenModal}>
            <IoPersonAddSharp />
          </span>
        </div>
      </nav>
      {/* <div className="quick-link">
        <ul>
          <li>
            <PiSquaresFourFill /> Leader Board
          </li>
          <li>
            Historical Trading <FaCaretDown />
          </li>
          <li>Historical Chart</li>
          <li>Scanners</li>
          <li>Alerts</li>
          <li>Basic Backtest</li>
          <li>Advanced Backtest</li>
          <li>Pricing</li>
          <li>My Earnings</li>
        </ul>
      </div> */}
      <Modal show={showModal} onClose={handleCloseModal}>
        <h2 className="modal-title">
          {" "}
          <IoPersonAddSharp /> Add New Player
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="info">
            <label htmlFor="name">
              <b>Player Name :</b>
            </label>
            <input
              type="text"
              id="name"
              value={player.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="info">
            <label htmlFor="amount">
              <b>Amount :</b>
            </label>
            <input
              type="number"
              id="amount"
              value={player.amount}
              name="amount"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="info">
            <label htmlFor="time">
              <b>Time :</b>
            </label>
            <input
              type="time"
              id="time"
              value={player.time}
              name="time"
              step="2"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button onClick={handleCloseModal} className="close">
            Close{" "}
          </button>
          <button type="submit" className="save">
            Save
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Navbar;
