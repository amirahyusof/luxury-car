import {
  Shield,
  Camera,
  Award,
  Users
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Listings",
    description:
      "All premium listings undergo thorough verification for authenticity and quality assurance.",
  },
  {
    icon: Camera,
    title: "Professional Photography",
    description:
      "Access to professional photography services to showcase your luxury vehicle at its best.",
  },
  {
    icon: Award,
    title: "Premium Network",
    description:
      "Connect with a curated network of luxury car enthusiasts, collectors, and verified dealers.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Our team of automotive experts provides personalized assistance throughout your buying or selling journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-dark">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Why Choose Luxoticars
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Malaysia's premier marketplace dedicated exclusively to luxury and exotic vehicles
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-card text-card-foreground shadow-md hover:shadow-xl transition-shadow duration-300 border"
          >
            <div className="mb-4 p-4 bg-primary/10 rounded-full w-fit mx-auto text-primary shadow-sm">
              <Icon className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground text-center">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
