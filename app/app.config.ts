export default defineAppConfig({
  siteName: "New Haven Ministries",
  visionTitle: "Vision",
  visionDescription:
    "To Raise Up A Spirit Filled And Diverse Generation Of Leaders To Help People Belong, Believe and Become More Like Jesus.",
  history: {
    title: "Our History",
    description:
      "Founded in 1998 by Pastors Matthew and Kathy Singh. With a small group of family and friends. Gathered around town until 2000 when we purchased our first building. By 2005, we outgrew our first building and moved into our second building. Due to exponential growth, we started a building construction project in summer of 2017 and finally moved into our new building in spring 2023.",
    image: "/history.jpg",
  },
  ui: {
    colorMode: "dark",
    colorModeForced: true,
    colors: {
      primary: "brand",
      secondary: "secondary",
      neutral: "stone",
    },
    button: {
      slots: {
        base: "rounded-none font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors",
      },
      compoundVariants: [
        {
          variant: "solid",
          class: "ring-1 ring-inset ring-white/40", // semi-transparent white border
        },
      ],
    },
  },
});
