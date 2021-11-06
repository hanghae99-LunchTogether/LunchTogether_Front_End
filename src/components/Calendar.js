import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

const Calendar = ({ setLunch, lunch }) => {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={params => (
          <TextField
            style={{ fontSize: "1.6rem" }}
            sx={{ width: 500, fontSize: "1.6rem" }}
            {...params}
          />
        )}
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
          console.log(newDate);
          setValue(newDate);
          setLunch({ ...lunch, date: newDate });
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
