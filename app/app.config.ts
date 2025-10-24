export default defineAppConfig({
  siteName: "New Haven Ministries",
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
