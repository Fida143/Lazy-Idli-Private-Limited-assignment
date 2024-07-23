import React, { useRef, useEffect } from "react";
import { FaMedal } from "react-icons/fa6";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { BiSolidTimer } from "react-icons/bi";
import { BsFillTrophyFill } from "react-icons/bs";

const LeaderBoard = ({ players }) => {
  //   const myRef = useRef([]);
  useEffect(() => {
    // console.log(myRef, "myref");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    const cardElements = document.querySelectorAll(".card");

    hiddenElements.forEach((el) => observer.observe(el));
    cardElements.forEach((el) => cardObserver.observe(el));
    // observer.observe(myRef.current);
  }, [players]);

  return (
    <div className="leader-board">
      <div className="lb-title">
        <div className="hr-lines">
          <hr />
          <hr />
          <hr />
        </div>
        <h1 className="lead-Brd-title">Fastest of Today</h1>
        <div className="hr-lines">
          <hr />
          <hr />
          <hr />
        </div>
      </div>

      <section className="top-rankers">
        <div className="card rank-1 hide-card ">
          <FaMedal className="medal" />
          <div>
            <span className="rank">
              1<sup>st</sup>
            </span>
            <p className="name">{players[0].name}</p>
            <div className="more-info">
              <span>{players[0].amount}</span>
            </div>
          </div>
        </div>
        <div className="card rank-2 hide-card">
          <FaMedal className="medal" />
          <div>
            <span className="rank">
              2<sup>nd</sup>
            </span>
            <p className="name">{players[1].name}</p>
            <div className="more-info">
              <span>{players[1].amount}</span>
            </div>
          </div>
        </div>
        <div className="card rank-3 hide-card">
          <FaMedal className="medal" />
          <div>
            <span className="rank">
              3<sup>rd</sup>
            </span>
            <p className="name">{players[2].name}</p>
            <div className="more-info">
              <span>{players[2].amount}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="rankers-list">
        {/* <div className="rankers-list-header">
          <h2 className="table-title">Basic Backtest</h2>
          <div class="search-bar">
           
            <select name="" className="textbox" id="">
              <option value="0%">0%</option>
              <option value="0.5%">0.5%</option>
              <option value="1%">1%</option>
            </select>
            <a className="search-btn" href="#">
              <p> Slippage </p>
            </a>
          </div>
        </div> */}
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>
                  <BsFillTrophyFill />
                </th>
                <th>Name</th>
                <th>
                  <BiSolidTimer /> Time
                </th>
              </tr>
            </thead>
            <tbody>
              {players
                .sort((a, b) => b.amount - a.amount)
                .map((player, i) => (
                  <tr className="hidden">
                    <td>
                      <span className="rank">{i + 1}</span>
                    </td>
                    <td>
                      {player.name}{" "}
                      <span className="price">{player.amount}</span>
                    </td>

                    <td>{player.time}</td>
                  </tr>
                ))}
              {/* <tr className="hidden">
                <td>
                  <span>1</span>
                </td>
                <td>
                  Anjum <span className="price">50000</span>
                </td>

                <td>00:56:23</td>
              </tr>
              <tr className="hidden">
                <td>2</td>
                <td>
                  Pragati Azad <span className="price">5000</span>
                </td>

                <td>01:15:20</td>
              </tr>
              <tr className="hidden">
                <td>3</td>
                <td>
                  Razzi <span className="price">500</span>
                </td>

                <td>01:18:66</td>
              </tr>
              <tr className="hidden">
                <td>4</td>
                <td>McRamble </td>

                <td>02:18:66</td>
              </tr>
              <tr className="hidden">
                <td>5</td>
                <td>McRamble </td>

                <td>02:18:66</td>
              </tr>
              <tr className="hidden">
                <td>6</td>
                <td>McRamble </td>

                <td>02:18:66</td>
              </tr>
              <tr className="hidden">
                <td>7</td>
                <td>McRamble </td>

                <td>02:18:66</td>
              </tr>
              <tr className="hidden">
                <td>8</td>
                <td>McRamble </td>

                <td>02:18:66</td>
              </tr>
              <tr className="hidden">
                <td>9</td>
                <td>McRamble </td>

                <td>02:18:66</td>
              </tr>
              <tr className="hidden">
                <td>10</td>
                <td>McRamble </td>

                <td>02:18:66</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </section>
      <section className="banner hidden"></section>
    </div>
  );
};

export default LeaderBoard;
