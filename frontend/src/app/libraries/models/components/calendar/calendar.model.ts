import * as dayjs from "dayjs";

export class Calendar {
  constructor(
    public selectedDate: dayjs.Dayjs,
    public events: any[],
    public eventsCallback?: Function,
    public enterInMonths: boolean = true,
    public enterInDays: boolean = true,
    public showDays: boolean = true,
    public showDiffDays: boolean = false,
    public hasFooter?: boolean
  ) {}
}
