import { useSanityQuery } from "#imports";

export interface SanityEvent {
  _id: string;
  title: string;
  slug: { current: string };
  image?: string;
  date: string;
  time?: string;
  firstOccurrence: string;
  location?: string;
  description?: string;
  cost?: string;
  type: "featured" | "ongoing" | "weekly";
  featured: boolean;
  homepage: boolean;
}

const EVENTS_QUERY = `*[_type == "event"] | order(firstOccurrence asc) {
  _id,
  title,
  slug,
  "image": image.asset->url,
  date,
  time,
  firstOccurrence,
  location,
  description,
  cost,
  type,
  featured,
  homepage
}`;

export const useEvents = () => {
  const { data, pending, error } = useSanityQuery<SanityEvent[]>(EVENTS_QUERY);
  return { events: data, pending, error };
};

export const useFeaturedEvents = () => {
  const { events, pending, error } = useEvents();
  const featured = computed(() =>
    (events.value ?? []).filter((e: SanityEvent) => e.featured),
  );
  return { events: featured, pending, error };
};

export const useHomepageEvents = () => {
  const { events, pending, error } = useEvents();
  const homepage = computed(() =>
    (events.value ?? []).filter((e: SanityEvent) => e.homepage),
  );
  return { events: homepage, pending, error };
};

export const useOngoingEvents = () => {
  const { events, pending, error } = useEvents();
  const ongoing = computed(() =>
    (events.value ?? []).filter(
      (e: SanityEvent) => e.type === "ongoing" || e.type === "weekly",
    ),
  );
  return { events: ongoing, pending, error };
};
