/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
  {
    checked: true,
    text: 'Sign contract for "What are conference organizers afraid of?"',
  },
  {
    checked: false,
    text: "Lines From Great Russian Literature? Or E-mails From My Boss?",
  },
  {
    checked: true,
    text:
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  },
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["Date", "Time", "Transaction", "Total"];
const tbody = [
  {
    className: "table-success",
    data: ["05/28/21", "00:00:00", "+$10.00", "$21.00"],
  },
  {
    className: "",
    data: ["05/27/21", "14:03:02", "-$13.00", "$11.00"],
  },
  {
    className: "table-info",
    data: ["05/27/21", "10:05:08", "-$4.00", "$24.00"],
  },
  {
    className: "",
    data: ["05/27/21", "9:59:59", "+$20.00", "$28.00"],
  },
  {
    className: "table-danger",
    data: ["05/26/21", "17:38:39", "-$7.00", "$8.00"],
  },
  { 
    className: "", 
    data: ["05/26/21", "13:29:59", "+$5.00", "$15.00"] },
  {
    className: "table-warning",
    data: ["05/26/21", "08:00:00", "+$10.00", "$10.00"],
  },
];

// tasks list for Tasks card in Dashboard view
// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { tasks, thead, tbody };
