export type EventType = "ongoing" | "weekly" | "featured";

export interface Event {
  id: string;
  image: string;
  date: string;
  time: string;
  title: string;
  location: string;
  description: string;
  type: EventType;
  featured?: boolean;
  homepage?: boolean;
}

export const events: Event[] = [
  {
    id: "sunday-service",
    image: "/sunday-service.jpeg",
    date: "Every Sunday",
    time: "10:00 AM",
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
    time: "$20 - Includes class material",
    title: "ROOTED",
    location: "Main Sanctuary",
    description:
      "WHAT IF your life looked totally different in a few weeks? Would it be worth it? Register Now - $20 Includes class material.",
    type: "featured",
    featured: true,
  },
];

export const getOngoingEvents = () =>
  events.filter((e) => e.type === "ongoing");
export const getWeeklyEvents = () => events.filter((e) => e.type === "weekly");
export const getFeaturedEvents = () =>
  events.filter((e) => e.featured === true);
export const getEventById = (id: string) => events.find((e) => e.id === id);
