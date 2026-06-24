import Section from "../ui/Section";

export default function FeaturesSection() {
  const features = [
    {
      icon: "🏔️",
      title: "Handgefertigt in den Alpen",
      desc: "Jedes Board entsteht in unserer Werkstatt in Tirol - gepresst, geschliffen, geprüft.",
    },
    {
      icon: "🛡️",
      title: "5 Jahre Garantie",
      desc: "Wir stehen hinter unserem Material. Bruch oder Delamination? Wir ersetzen es.",
    },
    {
      icon: "🌱",
      title: "Klimaneutraler Versand",
      desc: "Holzkerne aus heimischer Forstwirtschaft, kompensierter Transport, recycelte Verpackung.",
    },
  ];

  return (
    <div className="w-full bg-sectionBg">
      <Section className="flex flex-col md:flex-row gap-12 max-w-6xl">
        {features.map((item) => (
          <div key={item.title} className="flex flex-col flex-1 gap-3 ">
            <span className="text-2xl">{item.icon}</span>
            <h3 className="text-lg font-bold text-textColor">{item.title}</h3>
            <p className="text-sm text-textColor/60 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </Section>
    </div>
  );
}
