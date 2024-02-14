import { createContext, useMemo } from "react";

export const EventsContext = createContext({
  events: null,
  setEvents: () => {},
});

const EventsContextProvider = ({ children, events, setEvents }) => {
  const storedItems = useMemo(
    () => ({
      events,
      setEvents,
    }),
    [events, setEvents]
  );

  return (
    <EventsContext.Provider value={storedItems}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
