import React, { useState } from "react";
import "../index.css";

import { useSelector, useDispatch } from "react-redux";
import {toast} from 'react-toastify'


const seatData = [
  {
    hang: "A",
    danhSachGhe: [
      { soGhe: "A1", gia: 75000, daDat: false },
      { soGhe: "A2", gia: 75000, daDat: false },
      { soGhe: "A3", gia: 75000, daDat: false },
      { soGhe: "A4", gia: 75000, daDat: false },
      { soGhe: "A5", gia: 75000, daDat: false },
      { soGhe: "A6", gia: 75000, daDat: false },
      { soGhe: "A7", gia: 75000, daDat: false },
      { soGhe: "A8", gia: 75000, daDat: false },
      { soGhe: "A9", gia: 75000, daDat: false },
      { soGhe: "A10", gia: 75000, daDat: false },
      { soGhe: "A11", gia: 0, daDat: true },
      { soGhe: "A12", gia: 0, daDat: true },
    ],
    day: "1",
  },
  {
    hang: "B",
    danhSachGhe: [
      { soGhe: "B1", gia: 75000, daDat: false },
      { soGhe: "B2", gia: 75000, daDat: false },
      { soGhe: "B3", gia: 75000, daDat: false },
      { soGhe: "B4", gia: 75000, daDat: false },
      { soGhe: "B5", gia: 75000, daDat: false },
      { soGhe: "B6", gia: 75000, daDat: false },
      { soGhe: "B7", gia: 75000, daDat: false },
      { soGhe: "B8", gia: 75000, daDat: false },
      { soGhe: "B9", gia: 75000, daDat: false },
      { soGhe: "B10", gia: 75000, daDat: false },
      { soGhe: "B11", gia: 75000, daDat: false },
      { soGhe: "B12", gia: 75000, daDat: false },
    ],
    day: "2",
  },
  {
    hang: "C",
    danhSachGhe: [
      { soGhe: "C1", gia: 75000, daDat: false },
      { soGhe: "C2", gia: 75000, daDat: false },
      { soGhe: "C3", gia: 75000, daDat: false },
      { soGhe: "C4", gia: 75000, daDat: false },
      { soGhe: "C5", gia: 75000, daDat: false },
      { soGhe: "C6", gia: 75000, daDat: false },
      { soGhe: "C7", gia: 75000, daDat: false },
      { soGhe: "C8", gia: 75000, daDat: false },
      { soGhe: "C9", gia: 75000, daDat: false },
      { soGhe: "C10", gia: 75000, daDat: false },
      { soGhe: "C11", gia: 75000, daDat: false },
      { soGhe: "C12", gia: 75000, daDat: false },
    ],
    day: "3",
  },
  {
    hang: "D",
    danhSachGhe: [
      { soGhe: "D1", gia: 75000, daDat: false },
      { soGhe: "D2", gia: 75000, daDat: false },
      { soGhe: "D3", gia: 75000, daDat: false },
      { soGhe: "D4", gia: 75000, daDat: false },
      { soGhe: "D5", gia: 75000, daDat: false },
      { soGhe: "D6", gia: 75000, daDat: false },
      { soGhe: "D7", gia: 75000, daDat: false },
      { soGhe: "D8", gia: 75000, daDat: false },
      { soGhe: "D9", gia: 75000, daDat: false },
      { soGhe: "D10", gia: 75000, daDat: false },
      { soGhe: "D11", gia: 75000, daDat: false },
      { soGhe: "D12", gia: 75000, daDat: false },
    ],
    day: "4",
  },
  {
    hang: "E",
    danhSachGhe: [
      { soGhe: "E1", gia: 75000, daDat: false },
      { soGhe: "E2", gia: 75000, daDat: false },
      { soGhe: "E3", gia: 75000, daDat: false },
      { soGhe: "E4", gia: 75000, daDat: false },
      { soGhe: "E5", gia: 75000, daDat: false },
      { soGhe: "E6", gia: 75000, daDat: false },
      { soGhe: "E7", gia: 75000, daDat: false },
      { soGhe: "E8", gia: 75000, daDat: false },
      { soGhe: "E9", gia: 75000, daDat: false },
      { soGhe: "E10", gia: 75000, daDat: false },
      { soGhe: "E11", gia: 75000, daDat: false },
      { soGhe: "E12", gia: 75000, daDat: false },
    ],
    day: "5",
  },
  {
    hang: "F",
    danhSachGhe: [
      { soGhe: "F1", gia: 75000, daDat: false },
      { soGhe: "F2", gia: 75000, daDat: false },
      { soGhe: "F3", gia: 75000, daDat: false },
      { soGhe: "F4", gia: 75000, daDat: false },
      { soGhe: "F5", gia: 75000, daDat: false },
      { soGhe: "F6", gia: 75000, daDat: false },
      { soGhe: "F7", gia: 75000, daDat: false },
      { soGhe: "F8", gia: 75000, daDat: false },
      { soGhe: "F9", gia: 75000, daDat: false },
      { soGhe: "F10", gia: 75000, daDat: false },
      { soGhe: "F11", gia: 75000, daDat: false },
      { soGhe: "F12", gia: 75000, daDat: false },
    ],
    day: "6",
  },
  {
    hang: "G",
    danhSachGhe: [
      { soGhe: "G1", gia: 75000, daDat: false },
      { soGhe: "G2", gia: 75000, daDat: false },
      { soGhe: "G3", gia: 75000, daDat: false },
      { soGhe: "G4", gia: 75000, daDat: false },
      { soGhe: "G5", gia: 75000, daDat: false },
      { soGhe: "G6", gia: 75000, daDat: false },
      { soGhe: "G7", gia: 75000, daDat: false },
      { soGhe: "G8", gia: 75000, daDat: false },
      { soGhe: "G9", gia: 75000, daDat: false },
      { soGhe: "G10", gia: 75000, daDat: false },
      { soGhe: "G11", gia: 75000, daDat: false },
      { soGhe: "G12", gia: 75000, daDat: false },
    ],
    day: "7",
  },
  {
    hang: "H",
    danhSachGhe: [
      { soGhe: "H1", gia: 75000, daDat: false },
      { soGhe: "H2", gia: 75000, daDat: false },
      { soGhe: "H3", gia: 75000, daDat: false },
      { soGhe: "H4", gia: 75000, daDat: false },
      { soGhe: "H5", gia: 75000, daDat: false },
      { soGhe: "H6", gia: 75000, daDat: false },
      { soGhe: "H7", gia: 75000, daDat: false },
      { soGhe: "H8", gia: 75000, daDat: false },
      { soGhe: "H9", gia: 75000, daDat: false },
      { soGhe: "H10", gia: 75000, daDat: false },
      { soGhe: "H11", gia: 75000, daDat: false },
      { soGhe: "H12", gia: 75000, daDat: false },
    ],
    day: "8",
  },
  {
    hang: "I",
    danhSachGhe: [
      { soGhe: "I1", gia: 75000, daDat: false },
      { soGhe: "I2", gia: 75000, daDat: false },
      { soGhe: "I3", gia: 75000, daDat: false },
      { soGhe: "I4", gia: 75000, daDat: false },
      { soGhe: "I5", gia: 75000, daDat: false },
      { soGhe: "I6", gia: 75000, daDat: false },
      { soGhe: "I7", gia: 75000, daDat: false },
      { soGhe: "I8", gia: 75000, daDat: false },
      { soGhe: "I9", gia: 75000, daDat: false },
      { soGhe: "I10", gia: 75000, daDat: false },
      { soGhe: "I11", gia: 75000, daDat: false },
      { soGhe: "I12", gia: 75000, daDat: false },
    ],
    day: "9",
  },
  {
    hang: "J",
    danhSachGhe: [
      { soGhe: "J1", gia: 75000, daDat: false },
      { soGhe: "J2", gia: 75000, daDat: false },
      { soGhe: "J3", gia: 75000, daDat: false },
      { soGhe: "J4", gia: 75000, daDat: false },
      { soGhe: "J5", gia: 75000, daDat: false },
      { soGhe: "J6", gia: 75000, daDat: false },
      { soGhe: "J7", gia: 75000, daDat: false },
      { soGhe: "J8", gia: 75000, daDat: false },
      { soGhe: "J9", gia: 75000, daDat: false },
      { soGhe: "J10", gia: 75000, daDat: false },
      { soGhe: "J11", gia: 75000, daDat: false },
      { soGhe: "J12", gia: 75000, daDat: false },
    ],
    day: "10",
  },
];

const Seat = () => {
  const [name, setName] = useState("");
  const [numOfSeats, setNumOfSeats] = useState("");
  const [isSelectingStarted, setIsSelectingStarted] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState(0); // State để theo dõi số lượng ghế đã chọn


  const dispatch = useDispatch();

  const seatInfoArr = useSelector((state) => state.seatReducer);
  console.log(seatInfoArr);

  
  const handleSeatSelect = (seat) => {
    if (selectedSeats < numOfSeats) {
      // Chỉ cho phép chọn khi số lượng ghế đã chọn chưa đạt số lượng tối đa
      setSelectedSeats(selectedSeats + 1);
    } else {
      // Hiển thị thông báo khi đã đạt số lượng tối đa
      toast.error("Bạn đã chọn đủ số lượng ghế được phép!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <h1>Movie Seat Selection</h1>
      <div className="container">
        <div className="w3ls-reg">
          {/* input fields */}
          <div className="inputForm">
            <h2>fill the required details below and select your seats</h2>
            <div className="mr_agilemain">
              <div className="agileits-left">
                <label>
                  {" "}
                  Name
                  <span>*</span>
                </label>
                <input
                  type="text"
                  id="Username"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="agileits-right">
                <label>
                  {" "}
                  Number of Seats
                  <span>*</span>
                </label>
                <input
                  type="number"
                  id="Numseats"
                  required
                  min={1}
                  value={numOfSeats}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    // Kiểm tra nếu giá trị nhập vào là số không âm
                    if (inputValue > 0) {
                      // Cập nhật state numOfSeats với giá trị nhập vào
                      setNumOfSeats(inputValue);
                    }
                  }}
                />
              </div>
            </div>
            <button
              onClick={() => {
                if (!name.trim() || !numOfSeats.trim()) {
                  toast.error("Hãy điền đầy đủ thông tin", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                } else{
                  const action = {
                    type: "ADD_BOOKING_INFO",
                    payload: { name, numOfSeats },
                  };
                  dispatch(action);
                  setIsSelectingStarted(true)
                  document.getElementById('notification').innerHTML= "<b style='margin-bottom:0px;background:#ff9800;letter-spacing:1px;'>Please Select your Seats NOW!</b>"
                }
              }}
            >
              Start Selecting
            </button>
          </div>
          {/* //input fields */}
          {/* seat availabilty list */}
          <ul className="seat_w3ls">
            <li className="smallBox greenBox">Selected Seat</li>
            <li className="smallBox redBox">Reserved Seat</li>
            <li className="smallBox emptyBox">Empty Seat</li>
          </ul>
          {/* seat availabilty list */}
          {/* seat layout */}
          <div
            className="seatStructure txt-center"
            style={{ overflowX: "auto" }}
          >
            <p id="notification" />
            <table id="seatsBlock">
              <tbody>
                <tr>
                  <td />
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td />
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td />
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                </tr>
                {seatData.map((seatRow, index) => (
                  <tr key={index}>
                    <td>{seatRow.hang}</td>
                    {seatRow.danhSachGhe.map((seat, idx) => (
                      <React.Fragment key={idx}>
                        {/* Kiểm tra xem ghế là ghế thứ 5 trong mỗi hàng */}
                        {idx > 0 && idx % 4 === 0 && (
                          <td className="seatGap"></td>
                        )}
                        <td>
                          <input
                            type="checkbox"
                            className="seats"
                            value={seat.soGhe}
                            disabled={!isSelectingStarted || selectedSeats >= parseInt(numOfSeats)}
                            onChange={() => handleSeatSelect(seat)}
                          />
                        </td>
                      </React.Fragment>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="screen">
              <h2 className="wthree">Screen this way</h2>
            </div>
            <button>Confirm Selection</button>
          </div>
          {/* //seat layout */}
          {/* details after booking displayed here */}
          <div
            className="displayerBoxes txt-center"
            style={{ overflowX: "auto" }}
          >
            <table className="Displaytable w3ls-table" width="100%">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Number of Seats</th>
                  <th>Seats</th>
                </tr>
                <tr>
                  <td>
                    <textarea id="nameDisplay" defaultValue={""} />
                  </td>
                  <td>
                    <textarea id="NumberDisplay" defaultValue={""} />
                  </td>
                  <td>
                    <textarea id="seatsDisplay" defaultValue={""} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* //details after booking displayed here */}
        </div>
      </div>
      <div className="copy-wthree">
        <p>
          © 2018 Movie Seat Selection . All Rights Reserved | Design by
          <a href="http://w3layouts.com/" target="_blank">
            W3layouts
          </a>
        </p>
      </div>
    </div>
  );
};

export default Seat;
