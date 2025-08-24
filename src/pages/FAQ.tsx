
import FAQHero from "@/components/faq/FAQHero";
import FAQCategories from "@/components/faq/FAQCategories";
import SupportResources from "@/components/faq/SupportResources";
import ContactSupport from "@/components/faq/ContactSupport";

const FAQ = () => {
  return (
    <div className="min-h-screen pt-16">
      <FAQHero />
      <FAQCategories />
      <SupportResources />
      <ContactSupport />
    </div>
  );
};

export default FAQ;
