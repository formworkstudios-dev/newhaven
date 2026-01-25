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
  },
  {
    id: "bible-study",
    image: "/bible-study.jpg",
    date: "Every Wednesday",
    time: "6:00 PM",
    title: "Bible Study",
    location: "Main Sanctuary",
    description:
      "Wednesday bible study for all ages. Dive deep into God's Word with our community.",
    type: "ongoing",
    featured: false,
  },
  {
    id: "fasting-prayer",
    image: "/weekly.jpeg",
    date: "Every Friday",
    time: "7:00 PM",
    title: "Fasting & Prayer",
    location: "Main Sanctuary",
    description:
      "Weekly gathering for fasting and prayer. Seeking God together for breakthrough and revival.",
    type: "weekly",
    featured: false,
  },
  {
    id: "youth-night",
    image: "/youth.jpeg",
    date: "Every Friday",
    time: "7:00 PM",
    title: "Youth Night",
    location: "Family Center",
    description:
      "Games, worship, and a powerful word for students 6th–12th grade.",
    type: "ongoing",
    featured: false,
  },
  {
    id: "prayer-gathering",
    image: "/prayer3.jpg",
    date: "Every Saturday",
    time: "9:00 AM",
    title: "Prayer Gathering",
    location: "Main Sanctuary",
    description:
      "Join us as we seek God together for our church and community.",
    type: "ongoing",
    featured: false,
  },
];

export const getOngoingEvents = () =>
  events.filter((e) => e.type === "ongoing");
export const getWeeklyEvents = () => events.filter((e) => e.type === "weekly");
export const getFeaturedEvents = () =>
  events.filter((e) => e.featured === true);
export const getEventById = (id: string) => events.find((e) => e.id === id);
