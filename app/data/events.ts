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
    image: "/events/sunday.webp",
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
    time: "7:30 PM",
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
    title: "Youth  & Young Adults Night",
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
  // {
  //   id: "rooted",
  //   image: "/rooted.png",
  //   date: "Launching February 4, 2026",
  //   time: "",
  //   firstOccurrence: "2026-02-04",
  //   title: "ROOTED",
  //   location: "Main Sanctuary",
  //   description:
  //     "WHAT IF your life looked totally different in a few weeks? Would it be worth it?",
  //   type: "featured",
  //   featured: true,
  //   cost: "$20",
  // },
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
  // {
  //   id: "teen-event-2025",
  //   image: "/events/teen-event.PNG",
  //   date: "February 7, 2026",
  //   time: "10:30 AM",
  //   firstOccurrence: "2026-02-07",
  //   title: "Brooklyn Teen Challenge Outreach",
  //   location: "",
  //   description: "Join us for the Brooklyn Teen Challenge Outreach.",
  //   type: "featured",
  //   featured: true,
  //   homepage: true,
  //   cost: "",
  // },
  {
    id: "celebrate-love",
    image: "/events/love.JPG",
    date: "Sunday, February 15, 2026",
    time: "10:00 AM",
    firstOccurrence: "2026-02-15",
    title: "Celebrate Love",
    location: "Main Sanctuary",
    description:
      "Celebrate Love with New Haven Ministries this Valentines day weekend.",
    type: "featured",
    featured: true,
    homepage: true,
  },
  {
    id: "egg-hunt-2026",
    image: "/events/egg-hunt.webp",
    date: "Saturday, March 28, 2026",
    time: "12-3 PM",
    firstOccurrence: "2026-03-28",
    title: "Egg Hunt",
    location: "131-10 97 Ave, Richmond Hill",
    description: "Join us for an egg hunt and family fun.",
    type: "featured",
    featured: true,
    homepage: true,
  },
  {
    id: "love-ny",
    image: "/events/love-ny.webp",
    date: "Saturday, March 21, 2026",
    time: "8:00 AM - 8:00 PM",
    firstOccurrence: "2026-03-21",
    title: "LOVE NY",
    location: "",
    description: "12 hours outreach prayer worship",
    type: "featured",
    featured: true,
    homepage: true,
  },
  {
    id: "good-friday-service-2026",
    image: "/events/good-friday.jpg",
    date: "April 3, 2026",
    time: "7:30 PM",
    firstOccurrence: "2026-04-03",
    title: "Good Friday Service",
    location: "",
    description: "Good Friday Service.",
    type: "featured",
    featured: true,
  },
  {
    id: "easter-sunday-2026",
    image: "/events/easter.webp",
    date: "April 4, 2026",
    time: "10:00 AM",
    firstOccurrence: "2026-04-04",
    title: "Easter Sunday",
    location: "",
    description: "Easter Sunday service with New Haven Ministries.",
    type: "featured",
    featured: true,
  },
  {
    id: "monday-night-empowerment",
    image: "/events/mens-empowerment.webp",
    date: "Every Monday",
    time: "7:00 PM",
    firstOccurrence: "2026-02-09",
    title: "Monday Night Empowerment",
    location: "",
    description: "See Min Andy for Info.",
    type: "ongoing",
    featured: false,
  },
  {
    id: "walking-in-freedom",
    image: "/events/prayer-and-worship.jpg",
    date: "February 27, 2026",
    time: "7:30 PM",
    firstOccurrence: "2026-02-27",
    title: "Walking in Freedom",
    location: "",
    description: "Prayer and Worship with New Haven Ministries.",
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
