import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker";
import Stack from "@mui/material/Stack";

export default function ResponsiveDateTimePickers() {
  const [value, setValue] = React.useState(
    new Date("2021-11-01T00:00:00.000Z")
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <MobileDateTimePicker
          value={value}
          inputFormat="yyyy/MM/dd hh:mm a"
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={params => (
            <TextField style={{ margin: "auto", width: "300px" }} {...params} />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
