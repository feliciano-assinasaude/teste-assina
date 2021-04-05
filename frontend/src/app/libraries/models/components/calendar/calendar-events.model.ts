export interface CalendarEvents {
  [date: number]: CalendarEvent[];
}

export interface CalendarEvent {
  event: string;
  theme: string;
}
