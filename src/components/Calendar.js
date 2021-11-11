import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import moment from "moment";

const Calendar = ({ setDate, date }) => {
  const [value, setValue] = React.useState();
  const strDate = String(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={params => (
          <TextField
            sx={{ width: 500, fontSize: "1.6rem" }}
            style={{ fontSize: "1.6rem", backgroundColor: "white" }}
            {...params}
          />
        )}
        value={date}
        inputFormat="yyyy-MM-dd a hh:mm"
        onChange={newValue => {
          setValue(newValue);
          setDate(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
