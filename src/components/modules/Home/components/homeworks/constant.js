import create1 from "../../../../../assets/images/create1.png";
import create2 from "../../../../../assets/images/create2.png";
import buy1 from "../../../../../assets/images/buy1.png";
import buy2 from "../../../../../assets/images/buy2.png";
import sell1 from "../../../../../assets/images/sell1.png";
import seller2 from "../../../../../assets/images/seller2.png";
import seller3 from "../../../../../assets/images/seller3.png";

export const steps = [
  {
    image1: create1,
    image2: create2,
    header: "Create or Join an escrow payment",
    description:
      "As a buyer or seller, you create a transaction for a service or good to be delivered and send an invite via email or share a  payment link via SMS or WhatsApp or social media pages.",
  },

  {
    image1: buy1,
    image2: buy2,
    header: "Buyer makes payment, held in escrow",
    description:
      "A deposit is made for the service or good in an insolvency-protected escrow account via credit or debit card, bank transfer, USSD and so on. Boardman also supports deposits via regulated banking partners.",
  },

  {
    image1: buy1,
    image2: sell1,
    header: "Seller delivers on terms of transaction",
    description:
      "Boardman confirms the payment status of your transaction and notifies the seller of payment. Service or goods can now be delivered without risks.",
  },

  {
    image1: seller2,
    image2: seller3,
    header: "Seller receives the money after approval",
    description:
      "When the terms of the transaction are completed and verified, the funds are immediately made available for withdrawal. The seller can now make a withdrawal directly to their bank account.",
  },
];
