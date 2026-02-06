export type EventType = "ongoing" | "weekly" | "featured";

export interface Event {
  id: string;
  image: string;
  date: string;
  time: string;
  /** Sortable first date this event occurs (YYYY-MM-DD). */
  firstOccurrence: string;
  title: string;
  location: string;
  description: string;
  type: EventType;
  featured?: boolean;
  homepage?: boolean;
  cost?: string;
}

export const events: Event[] = [
  {
    id: "sunday-service",
    image: "/sunday-service.jpeg",
    date: "Every Sunday",
    time: "10:00 AM",
    firstOccurrence: "2026-02-08",
    title: "Sunday Service",
    location: "Main Sanctuary",
    description:
      "Join us for worship and teaching as we gather together to honor God.",
    type: "ongoing",
    featured: false,
    homepage: true,
  },
  {
    id: "bible-study",
    image: "/bible-study.jpg",
    date: "Every Wednesday",
    time: "7:00 PM",
    firstOccurrence: "2026-02-11",
    title: "Bible Study",
    location: "Main Sanctuary",
    description:
      "Wednesday bible study for all ages. Dive deep into God's Word with our community.",
    type: "ongoing",
    featured: false,
    homepage: true,
  },
  // {
  //   id: "fasting-prayer",
  //   image: "/weekly.jpeg",
  //   date: "TBD",
  //   time: "7:00 PM",
  //   title: "Fasting & Prayer",
  //   location: "Main Sanctuary",
  //   description:
  //     "Special gathering for fasting and prayer. Seeking God together for breakthrough and revival.",
  //   type: "featured",
  //   featured: true,
  // },
  {
    id: "youth-night",
    image: "/youth.jpeg",
    date: "Every Wednesday",
    time: "7:00 PM",
    firstOccurrence: "2026-02-11",
    title: "Youth Night",
    location: "Main Sanctuary",
    description:
      "Games, worship, and a powerful word for students 6th–12th grade.",
    type: "ongoing",
    featured: false,
  },
  {
    id: "prayer-gathering",
    image: "/prayer3.jpg",
    date: "Last Friday of Every Month",
    time: "7:00 PM",
    firstOccurrence: "2026-02-27",
    title: "Prayer Gathering",
    location: "Main Sanctuary",
    description:
      "Join us as we seek God together for our church and community.",
    type: "ongoing",
    featured: false,
  },
  {
    id: "rooted",
    image: "/rooted.png",
    date: "Launching February 4, 2026",
    time: "",
    firstOccurrence: "2026-02-04",
    title: "ROOTED",
    location: "Main Sanctuary",
    description:
      "WHAT IF your life looked totally different in a few weeks? Would it be worth it? Register Now - $20 Includes class material.",
    type: "featured",
    featured: true,
    cost: "$20",
  },
  {
    id: "rooted-conference",
    image: "/events/conference.png",
    date: "March 12–15, 2026",
    time: "7:00 PM nightly",
    firstOccurrence: "2026-03-12",
    title: "I'm Free to Worship",
    location: "Main Sanctuary",
    description:
      "Women's conference. Come experience the Worship, the Prophetic Word, Empowerment and Breakthrough.",
    type: "featured",
    featured: true,
    homepage: true,
    cost: "$75",
  },
  {
    id: "teen-event-2025",
    image: "/events/teen-event.PNG",
    date: "February 7, 2026",
    time: "10:30 AM",
    firstOccurrence: "2026-02-07",
    title: "Brooklyn Teen Challenge Outreach",
    location: "",
    description: "Join us for the Brooklyn Teen Challenge Outreach.",
    type: "featured",
    featured: true,
    homepage: true,
    cost: "",
  },
];

export const getOngoingEvents = () =>
  events.filter((e) => e.type === "ongoing");
export const getWeeklyEvents = () => events.filter((e) => e.type === "weekly");
export const getFeaturedEvents = () =>
  events.filter((e) => e.featured === true);
export const getEventById = (id: string) => events.find((e) => e.id === id);
