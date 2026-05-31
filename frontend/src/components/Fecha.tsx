import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { FechaProps } from "../ts/interfaces";
import dayjs from "dayjs";

export function Fecha({ valor, disabled }: FechaProps) {

    return (
        <DatePicker
            value={dayjs(valor)}
            onChange={(newValue: any) => console.log(newValue)}
        />
    );
}