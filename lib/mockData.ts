import { User } from '@/types/userTypes';

// Mock Users with all related data nested
export const users: User[] = [
  {
    id: '0001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    username: 'sample',
    password: 'sample',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    transactionCode: '6363',
    transactionMsg: "The recipient's bank account could not be verified. Please double-check the account number and routing number, then try again.",
    createdAt: '2023-01-15',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '1234567890',
        balance: 8547.32,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Starbucks',
            category: 'Food & Drink',
            date: 'Dec 12, 2024',
            amount: -6.45,
            status: 'success'
          },
          {
            merchant: 'Payroll Deposit',
            category: 'Income',
            date: 'Dec 5, 2024',
            amount: 3250.0,
            status: 'success'
          },
          {
            merchant: 'Chipotle',
            category: 'Food & Drink',
            date: 'Dec 4, 2024',
            amount: -14.32,
            status: 'success'
          },
          {
            merchant: 'Shell Gas Station',
            category: 'Transportation',
            date: 'Dec 3, 2024',
            amount: -52.18,
            status: 'success'
          },
          {
            merchant: 'Electric Company',
            category: 'Utilities',
            date: 'Dec 2, 2024',
            amount: -124.5,
            status: 'failed'
          },
          {
            merchant: 'Rent Payment',
            category: 'Housing',
            date: 'Dec 1, 2024',
            amount: -1850.0,
            status: 'success'
          },
          {
            merchant: 'Netflix',
            category: 'Entertainment',
            date: 'Nov 30, 2024',
            amount: -15.99,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: 'Transportation',
            date: 'Nov 28, 2024',
            amount: -23.45,
            status: 'success'
          },
          {
            merchant: 'Interest Payment',
            category: 'Income',
            date: 'Nov 30, 2024',
            amount: 24.5,
            status: 'success'
          },
          {
            merchant: 'Amazon',
            category: 'Shopping',
            date: 'Dec 4, 2024',
            amount: -89.99,
            status: 'processing'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 24892.5,
        isPrimary: false,
        transactions: [
          {
            merchant: 'Salary Bonus',
            category: 'Income',
            date: 'Dec 10, 2024',
            amount: 500.0,
            status: 'success'
          },
          {
            merchant: 'Monthly Savings Transfer',
            category: 'Transfer',
            date: 'Dec 1, 2024',
            amount: 1000.0,
            status: 'success'
          }
        ]
      }
    ],
    cards: [
      {
        id: 'card_001',
        cardNumber: '4111111111111111',
        cardHolder: 'SARAH JOHNSON',
        expiryDate: '12/26',
        cvv: '123',
        cardType: 'debit',
        cardName: 'Everyday Checking Card',
        balance: 8547.32,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2022-06-15'
      }
    ]
  },
  {
    id: '0002',
    firstName: 'Alex',
    lastName: 'Albert',
    email: 'myproduct.rg@gmail.com',
    phone: '3854185136',
    username: 'myproduct.rg',
    password: 'product@home',
    transactionCode: '7894',
    createdAt: '2026-2-4',
    transactionMsg: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '2345678901',
        balance: 4585000.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Lot 55 paid off',
            category: '****4721',
            date: 'Jan 29, 2026',
            amount: 385000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Adjustment Entry',
            category: '****6432',
            date: 'December 28, 2025',
            amount: 517100,
            status: 'success'
          },
          {
            merchant: 'Transfer from John Matthews',
            category: '****4389',
            date: 'Oct 2, 2025',
            amount: 215400,
            status: 'success'
          },
          {
            merchant: 'Transfer from Amazon Services LLC',
            category: '****1663',
            date: 'Sep 24, 2025',
            amount: 207700,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: '****2625',
            date: 'Sep 22, 2025',
            amount: -2450,
            status: 'success'
          },
          {
            merchant: 'Transfer from Sarah Thompson',
            category: '****3667',
            date: 'Sep 10, 2025',
            amount: 198300,
            status: 'success'
          },
          {
            merchant: 'Transfer from Michel Den Co.',
            category: '****2535',
            date: 'Aug 28, 2025',
            amount: 217700,
            status: 'success'
          },
          {
            merchant: 'Starbucks - Food & Drink',
            category: '****9037',
            date: 'Aug 23, 2025',
            amount: -860,
            status: 'success'
          },
          {
            merchant: 'Transfer from Daniel Roberts',
            category: '****7543',
            date: 'Aug 12, 2025',
            amount: 186200,
            status: 'success'
          },
          {
            merchant: 'Transfer from Celia Construction',
            category: '****3774',
            date: 'Jul 30, 2025',
            amount: 202800,
            status: 'success'
          },
          {
            merchant: 'Amazon Online Purchase',
            category: '****8746',
            date: 'July 17, 2025',
            amount: -7320,
            status: 'success'
          },
          {
            merchant: 'Transfer from Emily Johnson',
            category: '****3667',
            date: 'Jul 14, 2025',
            amount: 198000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Vesla Oil Station',
            category: '****4654',
            date: 'Jun 29, 2025',
            amount: 212700,
            status: 'success'
          },
          {
            merchant: 'Transfer from Michael Brown',
            category: '****8213',
            date: 'Jun 15, 2025',
            amount: 190800,
            status: 'success'
          },
          {
            merchant: 'Transfer from Shella Mushey',
            category: '****9124',
            date: 'Jun 1, 2025',
            amount: 201300,
            status: 'success'
          },
          {
            merchant: 'Transfer from Olivia Martinez',
            category: '****3478',
            date: 'May 18, 2025',
            amount: 183500,
            status: 'success'
          },
          {
            merchant: 'Transfer from George William',
            category: '****5682',
            date: 'May 4, 2025',
            amount: 213600,
            status: 'success'
          },
          {
            merchant: 'Transfer from David Wilson',
            category: '****7741',
            date: 'Apr 20, 2025',
            amount: 193600,
            status: 'success'
          },
          {
            merchant: 'Transfer from Michael Davs',
            category: '****2298',
            date: 'Apr 6, 2025',
            amount: 204500,
            status: 'success'
          },
          {
            merchant: 'Transfer from Sophia Anderson',
            category: '****6812',
            date: 'Mar 22, 2025',
            amount: 188300,
            status: 'success'
          },
          {
            merchant: 'Transfer from Timothy Auto Inc.',
            category: '****9034',
            date: 'Mar 10, 2025',
            amount: 214400,
            status: 'success'
          },
          {
            merchant: 'Transfer from Robert Collins',
            category: '****1147',
            date: 'Mar 1, 2025',
            amount: 157800,
            status: 'success'
          },
          {
            merchant: 'Skargard Marine',
            category: '****1049',
            date: 'Dec 3, 2024',
            amount: -7900,
            status: 'success'
          },
          {
            merchant: 'KronaTech Solutions',
            category: '****8861',
            date: 'Nov 15, 2024',
            amount: -9120,
            status: 'success'
          },
          {
            merchant: 'Baltic Energy Systems AB',
            category: '****5724',
            date: 'Oct 2, 2024',
            amount: 108100,
            status: 'success'
          },
          {
            merchant: 'Fjallmark Logistics',
            category: '****4197',
            date: 'Sept 7, 2024',
            amount: 91100,
            status: 'success'
          },
          {
            merchant: 'Nordvik Industrial',
            category: '****2335',
            date: 'Aug 19, 2024',
            amount: 97100,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456789746',
        cardHolder: 'ALEXA COLLINS',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        balance: 1652000.0,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0003',
    firstName: 'Reuben',
    lastName: 'Susan',
    email: 'r**@gmail.com',
    username: 'Reuben$101',
    password: 'Greatness25',
    transactionCode: '7894',
    createdAt: '2026-7-7',
    transactionMsg: 'Please visit the nearest Fifth third bank with your documentation to verify and unlock the restriction on your account.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '2345678901',
        balance: 2709133.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Transfer from Torunlargyo Company',
            category: '****6432',
            date: 'Jul 03, 2026',
            amount: 1709133,
            status: 'success'
          },
          {
            merchant: 'Transfer from John Matthews',
            category: '****4389',
            date: 'Apr 07, 2026',
            amount: 83200,
            status: 'success'
          },
          {
            merchant: 'Transfer from Amazon Services LLC',
            category: '****1663',
            date: 'Mar 30, 2026',
            amount: 52800,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: '****2625',
            date: 'Mar 28, 2026',
            amount: -2450,
            status: 'success'
          },
          {
            merchant: 'Transfer from Sarah Thompson',
            category: '****3667',
            date: 'Mar 16, 2026',
            amount: 56300,
            status: 'success'
          },
          {
            merchant: 'Transfer from Michel Den Co.',
            category: '****2535',
            date: 'Mar 03, 2026',
            amount: 66300,
            status: 'success'
          },
          {
            merchant: 'Starbucks - Food & Drink',
            category: '****9037',
            date: 'Feb 26, 2026',
            amount: -860,
            status: 'success'
          },
          {
            merchant: 'Transfer from Daniel Roberts',
            category: '****7543',
            date: 'Feb 15, 2026',
            amount: 60700,
            status: 'success'
          },
          {
            merchant: 'Transfer from Celia Construction',
            category: '****3774',
            date: 'Feb 02, 2026',
            amount: 82000,
            status: 'success'
          },
          {
            merchant: 'Amazon Online Purchase',
            category: '****8746',
            date: 'Jan 20, 2026',
            amount: -7320,
            status: 'success'
          },
          {
            merchant: 'Transfer from Emily Johnson',
            category: '****3667',
            date: 'Jan 17, 2026',
            amount: 62400,
            status: 'success'
          },
          {
            merchant: 'Transfer from Vesla Oil Station',
            category: '****4654',
            date: 'Jan 02, 2026',
            amount: 65600,
            status: 'success'
          },
          {
            merchant: 'Transfer from Michael Brown',
            category: '****8213',
            date: 'Dec 19, 2025',
            amount: 46300,
            status: 'success'
          },
          {
            merchant: 'Transfer from Shella Mushey',
            category: '****9124',
            date: 'Dec 05, 2025',
            amount: 89900,
            status: 'success'
          },
          {
            merchant: 'Transfer from Olivia Martinez',
            category: '****3478',
            date: 'Nov 21, 2025',
            amount: 96300,
            status: 'success'
          },
          {
            merchant: 'Transfer from George William',
            category: '****5682',
            date: 'Nov 07, 2025',
            amount: 74600,
            status: 'success'
          },
          {
            merchant: 'Transfer from David Wilson',
            category: '****7741',
            date: 'Oct 24, 2025',
            amount: 91300,
            status: 'success'
          },
          {
            merchant: 'Transfer from Michael Davs',
            category: '****2298',
            date: 'Oct 10, 2025',
            amount: 72300,
            status: 'success'
          },
          {
            merchant: 'Transfer from Sophia Anderson',
            category: '****6812',
            date: 'Sep 25, 2025',
            amount: -188300,
            status: 'success'
          },
          {
            merchant: 'Transfer from Timothy Auto Inc.',
            category: '****9034',
            date: 'Sep 13, 2025',
            amount: -214400,
            status: 'success'
          },
          {
            merchant: 'Transfer from Robert Collins',
            category: '****1147',
            date: 'Sep 04, 2025',
            amount: -157800,
            status: 'success'
          },
          {
            merchant: 'Skargard Marine',
            category: '****1049',
            date: 'Jun 08, 2025',
            amount: -7900,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456789746',
        cardHolder: 'ALEXA COLLINS',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        balance: 1652000.0,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  }
];
