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
