export const CONTESTS_LIST = [
  {
    id: "1",
    type: "master",
    name: "Mega Contest",
    displayName: "Mega Contest",
    description: "Get ready for mega winngins!",
    totalSpots: 1000,
    filledSpots: 150,
    leftSpots: 850,
    entryFee: 50,
    currency: "Rs.",
    prizePoolAmoutInWords: "2 Crore",
    prizePoolAmt: "2,00,00,000",
    prizeList: [
      {
        rank: 1,
        type: "single",
        amount: 1000000,
        bonus: 100,
        amountInWords: "10 Lakhs"
      },
      {
        rank: 2,
        type: "single",
        amount: 500000,
        bonus: 100,
        amountInWords: "5 Lakhs"
      },
      {
        fromRank: 3,
        toRank: 5,
        type: "range",
        amount: 50000,
        bonus: 100,
        amountInWords: "50 thousand"
      }
    ]
  },
  {
    id: "2",
    type: "master",
    name: "Royal Contest",
    displayName: "Royal Contest",
    description: "Get ready for royal winngins!",
    totalSpots: 10000,
    filledSpots: 8000,
    leftSpots: 2000,
    entryFee: 500,
    currency: "Rs.",
    prizePoolAmoutInWords: "3 Crore",
    prizePoolAmt: "3,00,00,000",
    prizeList: [
      {
        rank: 1,
        type: "single",
        amount: 5000000,
        bonus: 1000,
        amountInWords: "50 Lakhs"
      },
      {
        rank: 2,
        type: "single",
        amount: 1000000,
        bonus: 1000,
        amountInWords: "10 Lakhs"
      },
      {
        fromRank: 3,
        toRank: 5,
        type: "range",
        amount: 50000,
        bonus: 100,
        amountInWords: "50 thousand"
      }
    ]
  },
  {
    id: "3",
    type: "task",
    name: "Select11 Contest",
    displayName: "Select 11 Contest",
    description: "Choose 11 and win Rs. 11 Lakhs",
    totalSpots: 100000,
    filledSpots: 55000,
    leftSpots: 45000,
    entryFee: 500,
    currency: "Rs.",
    prizePoolAmoutInWords: "2 Crore",
    prizePoolAmt: "2,00,00,000",
    prizeList: [
      {
        rank: 1,
        type: "single",
        amount: 1100000,
        bonus: 100,
        amountInWords: "11 Lakhs"
      },
      {
        rank: 2,
        type: "single",
        amount: 500000,
        bonus: 100,
        amountInWords: "5 Lakhs"
      },
      {
        fromRank: 3,
        toRank: 10,
        type: "range",
        amount: 11000,
        bonus: 100,
        amountInWords: "11 thousand"
      }
    ]
  }
];
