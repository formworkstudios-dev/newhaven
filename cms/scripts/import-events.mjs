/**
 * One-time import script: reads events from the static events array
 * and pushes them into Sanity (cloud) with images uploaded as assets.
 *
 * Usage:
 *   SANITY_TOKEN=<your-token> node cms/scripts/import-events.mjs
 *   OR (token auto-read from ~/.config/sanity/config.json if omitted)
 */

import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "../../public");

// ── Auth token ──────────────────────────────────────────────────────────────
let token = process.env.SANITY_TOKEN;
if (!token) {
  try {
    const cfg = JSON.parse(
      readFileSync(
        path.resolve(process.env.HOME, ".config/sanity/config.json"),
        "utf8",
      ),
    );
    token = cfg.authToken;
  } catch {}
}
if (!token) {
  console.error(
    "No SANITY_TOKEN found. Set the env var or log in with: npx sanity login",
  );
  process.exit(1);
}

const client = createClient({
  projectId: "jczf5jq8",
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

// ── Static events (copy of app/data/events.ts, plain JS) ───────────────────
const events = [
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
    homepage: false,
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
    homepage: false,
  },
  {
    id: "youth-night",
    image: "/youth.jpeg",
    date: "Every Wednesday",
    time: "7:00 PM",
    firstOccurrence: "2026-02-11",
    title: "Youth & Young Adults Night",
    location: "Main Sanctuary",
    description:
      "Games, worship, and a powerful word for students 6th–12th grade.",
    type: "ongoing",
    featured: false,
    homepage: false,
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
    homepage: false,
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
    featured: false,
    homepage: false,
    cost: "$75",
  },
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
    featured: false,
    homepage: false,
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
    featured: false,
    homepage: false,
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
    featured: false,
    homepage: false,
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
    featured: false,
    homepage: false,
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
    featured: false,
    homepage: false,
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
    homepage: false,
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
    featured: false,
    homepage: false,
  },
  {
    id: "mothers-day-celebration-2026",
    image: "/events/mothers1.JPG",
    date: "Sunday, May 10, 2026",
    time: "10:00 AM",
    firstOccurrence: "2026-05-10",
    title: "Mother's Day Celebration",
    location: "Main Sanctuary",
    description: "Brunch, Special Guests, Fun, Gifts & More.",
    type: "featured",
    featured: false,
    homepage: false,
  },
  {
    id: "jesus-week-kickoff-2026",
    image: "/jesus-week.JPG",
    date: "Sunday, August 2, 2026",
    time: "10:00 AM",
    firstOccurrence: "2026-08-02",
    title: "Jesus Week – Special Guests Kick Off Service",
    location: "Main Sanctuary",
    description:
      "Kick off Jesus Week Queens with special guests. Join us for a powerful morning service!",
    type: "featured",
    featured: true,
    homepage: true,
  },
  {
    id: "jesus-week-kids-party-2026",
    image: "/kids-festival.JPEG",
    date: "Saturday, August 8, 2026",
    time: "11:00 AM – 2:00 PM",
    firstOccurrence: "2026-08-08",
    title: "Community Kids Party",
    location: "Starlight Pavilion, 130-05 101 Ave., Richmond Hill, NY 11419",
    description:
      "Free community kids party! Games, Dance & Music, Face Painting, Story Telling, Snacks, and Art & Craft. Hosted by New Haven Ministries. Info: 917-584-1464.",
    type: "featured",
    featured: true,
    homepage: true,
  },
  {
    id: "jesus-week-outreach-1-2026",
    image: "/jesus-week.JPG",
    date: "Monday, August 10, 2026",
    time: "6:30 PM – 8:00 PM",
    firstOccurrence: "2026-08-10",
    title: "Jesus Week – Street Outreach & Evangelism",
    location: "Lefferts & Liberty Ave",
    description:
      "Join us for street outreach and evangelism as part of Jesus Week Queens.",
    type: "featured",
    featured: true,
    homepage: false,
  },
  {
    id: "jesus-week-outreach-2-2026",
    image: "/jesus-week.JPG",
    date: "Wednesday, August 12, 2026",
    time: "6:30 PM – 8:00 PM",
    firstOccurrence: "2026-08-12",
    title: "Jesus Week – Street Outreach & Evangelism",
    location: "Lefferts & Liberty Ave",
    description:
      "Join us for street outreach and evangelism as part of Jesus Week Queens.",
    type: "featured",
    featured: true,
    homepage: false,
  },
  {
    id: "jesus-week-march-2026",
    image: "/jesus-week.JPG",
    date: "Saturday, August 15, 2026",
    time: "10:00 AM – 2:00 PM",
    firstOccurrence: "2026-08-15",
    title: "Jesus Week – March for Christ",
    location: "Starting from Lefferts & Liberty Ave to Smokey Park",
    description:
      "March for Christ through the community as part of Jesus Week Queens.",
    type: "featured",
    featured: true,
    homepage: false,
  },
  {
    id: "jesus-week-health-wellness-2026",
    image: "/jesus-week.JPG",
    date: "Saturday, August 22, 2026",
    time: "10:00 AM – 1:00 PM",
    firstOccurrence: "2026-08-22",
    title: "Jesus Week – Health & Wellness",
    location: "Main Sanctuary",
    description:
      "Post Jesus Week Health & Wellness event. Come be refreshed and renewed.",
    type: "featured",
    featured: true,
    homepage: false,
  },
];

// ── Upload image helper ─────────────────────────────────────────────────────
async function uploadImage(imagePath) {
  const absPath = path.join(PUBLIC_DIR, imagePath);
  if (!fs.existsSync(absPath)) {
    console.warn(`  ⚠ Image not found, skipping: ${absPath}`);
    return null;
  }
  const fileBuffer = fs.readFileSync(absPath);
  const ext = path.extname(imagePath).slice(1).toLowerCase();
  const mimeMap = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    gif: "image/gif",
  };
  const contentType = mimeMap[ext] || "image/jpeg";
  try {
    const asset = await client.assets.upload("image", fileBuffer, {
      filename: path.basename(imagePath),
      contentType,
    });
    return asset._id;
  } catch (err) {
    console.warn(`  ⚠ Failed to upload ${imagePath}:`, err.message);
    return null;
  }
}

// ── Image cache so same file isn't uploaded twice ──────────────────────────
const imageCache = {};

// ── Main import ─────────────────────────────────────────────────────────────
async function main() {
  console.log(
    `\n🚀 Importing ${events.length} events into Sanity (project: jczf5jq8)...\n`,
  );

  for (const event of events) {
    process.stdout.write(`→ ${event.title} ... `);

    // Upload image if not already cached
    let imageAssetId = null;
    if (event.image) {
      if (!imageCache[event.image]) {
        imageCache[event.image] = await uploadImage(event.image);
      }
      imageAssetId = imageCache[event.image];
    }

    const doc = {
      _type: "event",
      _id: `event-${event.id}`,
      title: event.title,
      slug: { _type: "slug", current: event.id },
      date: event.date,
      time: event.time || "",
      firstOccurrence: event.firstOccurrence,
      location: event.location || "",
      description: event.description || "",
      type: event.type,
      featured: event.featured ?? false,
      homepage: event.homepage ?? false,
      ...(event.cost ? { cost: event.cost } : {}),
      ...(imageAssetId
        ? {
            image: {
              _type: "image",
              asset: { _type: "reference", _ref: imageAssetId },
            },
          }
        : {}),
    };

    try {
      await client.createOrReplace(doc);
      console.log("✓");
    } catch (err) {
      console.log("✗", err.message);
    }
  }

  console.log("\n✅ Done! Check your Sanity Studio at http://localhost:3333\n");
}

main();
