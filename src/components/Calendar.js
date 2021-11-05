import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

const Calendar = ({ setDate }) => {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={params => <TextField sx={{ width: 500 }} {...params} />}
        value={value}
        inputFormat="yyyy-MM-dd hh:mm a"
        onChange={newValue => {
          const year = newValue.getFullYear();
          const month = ("0" + (newValue.getMonth() + 1)).slice(-2);
          const day = ("0" + newValue.getDate()).slice(-2);
          const date = year + "-" + month + "-" + day;

          const hours = ("0" + newValue.getHours()).slice(-2);
          const minutes = ("0" + newValue.getMinutes()).slice(-2);
          const seconds = ("0" + newValue.getSeconds()).slice(-2);
          const time = hours + ":" + minutes + ":" + seconds;
          const newDate = date + " " + time;
          setValue(newDate);
          setDate(newDate);
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;

// import React, { useState } from "react";
// import styled from "styled-components";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import { getYear, getMonth } from "date-fns"; // getYear, getMonth
// import DatePicker, { registerLocale } from "react-datepicker"; // 한국어적용
// import ko from "date-fns/locale/ko"; // 한국어적용
// registerLocale("ko", ko); // 한국어적용
// const _ = require("lodash");

// const Calendar = (props) => {
//   const { setDate } = props;
//   const [startDate, setStartDate] = useState(new Date());
//   setDate(startDate);
//   const years = _.range(2021, getYear(new Date()) + 1, 1); // 수정
//   const months = [
//     "1월",
//     "2월",
//     "3월",
//     "4월",
//     "5월",
//     "6월",
//     "7월",
//     "8월",
//     "9월",
//     "10월",
//     "11월",
//     "12월",
//   ];

//   return (
//     <SelectDate
//       renderCustomHeader={({
//         date,
//         changeYear,
//         changeMonth,
//         decreaseMonth,
//         increaseMonth,
//         prevMonthButtonDisabled,
//         nextMonthButtonDisabled,
//       }) => (
//         <div
//           style={{
//             width: "330px",
//             margin: "10px auto",
//             display: "flex",
//             justifyContent: "space-evenly",
//           }}
//         >
//           <ArrowBtn onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
//             <NavigateBeforeIcon/>
//           </ArrowBtn>
//           <div>
//             <YmSelecter
//               value={getYear(date)}
//               onChange={({ target: { value } }) => changeYear(value)}
//             >
//               {years.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </YmSelecter>

//             <YmSelecter
//               value={months[getMonth(date)]}
//               onChange={({ target: { value } }) =>
//                 changeMonth(months.indexOf(value))
//               }
//             >
//               {months.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </YmSelecter>
//           </div>

//           <ArrowBtn onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
//             <NavigateNextIcon />
//           </ArrowBtn>
//         </div>
//       )}
//       selected={startDate}
//       minDate={new Date()}
//       locale={ko}
//       onChange={(date) => setStartDate(date)}
//       inline
//       // dateFormat="yyyy-MM-dd"
//       timeInputLabel="Time:"
//       dateFormat="yyyy-MM-dd h:mm"
//       showTimeInput
//     />
//   );
// };

// const SelectDate = styled(DatePicker)`
//   width: 100%;
//   padding: 12px;
//   border: 2px solid #dadada;
//   border-radius: 5px;
// `;

// const ArrowBtn = styled.button`
//   border: none;
// `;

// const YmSelecter = styled.select`
//   border: none;
//   border-radius: 10px;
//   padding: 5px;
//   margin: 0px 5px;
// `;

// export default Calendar;
