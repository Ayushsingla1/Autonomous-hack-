import { useNavigate } from "react-router-dom";
import AccordionItem from "../Components/Accordion";

const About = () => {
  const navigate = useNavigate();

  const accordionData = [
    {
      title: "1. Cutting-Edge Technology",
      content: `We leverage the power of blockchain technology to deliver an unparalleled ticketing experience. By using NFTs (Non-Fungible Tokens), we ensure each ticket is verifiable, unique, and impossible to counterfeit. Our platform is at the forefront of the next generation of ticketing, providing you with a secure and transparent solution.`,
    },
    {
      title: "2. Eliminate Fraud & Scalping",
      content: `Traditional ticketing methods are plagued by fraud, scalping, and unauthorized reselling. Our NFT-based ticketing platform eliminates these issues by making each ticket traceable and verifiable on the blockchain. No more worries about fake tickets or inflated prices.`,
    },
    {
      title: "3. Own More Than Just a Ticket",
      content: `When you buy a ticket on our platform, you're not just purchasing access to an event—you're gaining ownership of a one-of-a-kind digital asset. Each NFT ticket comes with the potential to unlock exclusive experiences, digital collectibles, and future event perks, making it more than just an entry pass.`,
    },
    {
      title: "4. Built for Fans, Artists, and Organizers",
      content: `We understand the needs of fans, artists, and event organizers alike. Our platform allows artists and organizers to earn royalties on secondary sales of their tickets, while fans get an authentic and reliable ticketing experience. It’s a win-win for everyone involved.`,
    },
    {
      title: "5. Seamless Secondary Market",
      content: `Need to sell your ticket? Our platform allows easy resale while ensuring the authenticity of every transaction. We also offer flexible options for event organizers to earn revenue on resale transactions through smart contracts.`,
    },
    {
      title: "6. Eco-Friendly Ticketing",
      content: `We believe in sustainability, which is why we utilize energy-efficient blockchain networks to minimize the environmental impact of ticketing. By going digital, we reduce the need for paper tickets and offer a greener alternative for event management.`,
    },
    {
      title: "7. Enhanced Fan Experience",
      content: `With our platform, NFTs can be more than just tickets—they can be used to unlock backstage passes, VIP access, exclusive digital content, or future discounts. Engage your fans like never before and build stronger connections with your audience.`,
    },
    {
      title: "8. Global, Accessible, and Scalable",
      content: `Our platform operates globally, giving event organizers access to international audiences while offering fans an easy way to purchase tickets from anywhere in the world. Whether it's a local concert or a global festival, we've got you covered.`,
    },
    {
      title: "9. Easy to Use",
      content: `We've designed our platform to be intuitive and user-friendly, whether you're a first-time NFT buyer or a seasoned blockchain enthusiast. You can easily purchase, manage, and transfer tickets with just a few clicks.`,
    },
    {
      title: "10. Future-Proof Your Events",
      content: `As the world moves toward digital ownership and decentralized technologies, NFT ticketing is the future. By partnering with us, you're not only adopting the latest innovations but also ensuring that your events are future-proof and ready for the next generation of fans.`,
    },
  ];

  return (
    <div className="bg-gray-900 px-16 py-3">
      <button className="uppercase font-jaini text-5xl text-white" onClick={()=>{
        navigate("/");
      }}>
        Ticketing
      </button>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-10">
          Why Choose Us for NFT Ticketing?
        </h2>

        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}

        <div className="text-center mt-10">
          <button
            className="px-6 py-3 bg-gray-600 font-roboto text-lg text-gray-300 rounded-full hover:scale-110 hover:text-gray-200 transition duration-300 ease-in-out"
            onClick={() => {
              navigate("/Login");
            }}
          >
            Join the Revolution in Ticketing
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
