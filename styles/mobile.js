import css from "styled-jsx/css";

module.exports = css`
  body {
    background-color: #1998ab;
  }
  .main-wrapper {
    margin-left: 10px;
    margin-right: 10px;
  }
  .logo {
    display: block;
    width: 340px;
    height: 125px;
    margin: 0 auto;
  }
  .header-search {
    background-color: #ffffff;
    clear: both;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .header-search-input-wrapper {
    width: 90%;
    display: block;
    margin: 0 auto;
  }
  .header-search-input-title {
    font-size: 100%;
    // position: absolute;
    margin-top: 15px;
    margin-left: 10px;
    margin-bottom: 3px;
    z-index: 1;
    font-weight: bold;
    display: inline-block;
  }
  .header-search-datepicker-title {
    font-size: 100%;
    // position: absolute;
    margin-top: 15px;
    margin-left: 26px;
    margin-bottom: 3px;
    z-index: 1;
    font-weight: bold;
    display: inline-block;
  }
  .react-datepicker-wrapper {
    width: 90%;
    display: block !important;
    margin: 0 auto;
  }
  .react-datepicker__input-container {
    width: 100%;
  }
  .react-datepicker__input-container > input {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 36px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .yellow-button {
    margin-top: 40px;
    width: 100%;
    background-color: rgb(251, 173, 24);
    color: #ffffff;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    padding: 18px 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .yellow-button:hover {
    background-color: rgb(235, 157, 8);
  }
  .loading {
    display: block;
    margin: 0 auto;
  }
  .load-more-button {
    display: block;
    margin: 50px auto;
    padding: 13px 40px;
    max-width: 300px;
  }
  .flight {
    border-radius: 5px;
    background-color: rgba(255,255,255,0.75);
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
    padding: 15px 0;
  }
  .flight-date {
    font-size: 22px;
    text-align: center;
    width: 100%;
    line-height: 1.9em;
  }
  .flight-details {
    width: 80%;
    float: left;
  }
  .flight-price-logo {
    width: 19.5%;
    text-align: center;
    float: left;
  }
  .flight-price-logo-logo {
    max-width: 100%;
    margin-right: 5px;
  }
  .flight-details-table td {
    padding: 5px;
    font-size: 14px;
    color: #333;
  }
  .h1 {
    color: #FFFFFF;
    text-align: center;
    margin: 40px;
  }
  .h3 {
    color: #FFFFFF;

  }
  .main-ul {
    color: #FFFFFF;

  }
`;
