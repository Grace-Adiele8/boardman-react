import nigerianflag from "../../../../assets/svg/nigerianflag.svg";

export const prices = [
  {
    image: nigerianflag,
    title: "Payments",
    headers: ["Amount", "Processing", "Minimum", "Maximum"],
    data: [
      [" NGN 0 - NGN 250, 000", "1.5% + 101", "NGN 11", "NGN 2, 001"],
      [" NGN 250, 000.01 +", "1.5% + 1000", " NGN 50", "NGN 5, 000"],
    ],
  },

  {
    image: nigerianflag,
    title: "Withdrawals",
    headers: ["Method", "Duration", "Fee"],
    data: [
      ["Bank Transfer", "Instantly", "NGN 150.00"],
      ["Wire/Bank Transfer", "3-5 Business days", "NGN 5, 000.00"],
    ],
  },
];
