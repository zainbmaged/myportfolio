import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import Button from "./ui/Button";

import {
  Mail,
  FileText,
  MapPin,
} from "lucide-react";
import { FaGithub ,FaLinkedin} from 'react-icons/fa'; 
import contact from "../data/contact";

function Contact() {

  const contacts = [
    {
      icon: <Mail size={22} />,
      title: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <FaGithub size={22} />,
      title: "GitHub",
      value: "github.com/zainbmaged",
      href: contact.github,
    },
    {
      icon: <FaLinkedin size={22} />,
      title: "LinkedIn",
      value: "Connect with me",
      href: contact.linkedin,
    },
    {
      icon: <FileText size={22} />,
      title: "Resume",
      value: "Download CV",
      href: contact.cv,
    },
    {
      icon: <MapPin size={22} />,
      title: "Location",
      value: contact.location,
    },
  ];

  return (
    <Section id="contact" className="bg-[var(--surface)]">

      <SectionTitle
        title="Let's Build Together"
        subtitle="Whether you're looking for an AI engineer, a full-stack developer, or a research collaborator, I'd love to hear about your project."
        align="center"
      />
      <div className="relative flex justify-center">

        {/* radar ping decoration, behind the card */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0" aria-hidden="true">
          <div className="w-80 h-80 rounded-full border border-[var(--primary)]/30 animate-ping-slow" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">

        {/* LEFT — contact list, same as before */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0" aria-hidden="true">
            <div className="w-40 h-40 rounded-full border border-[var(--primary)]/30 animate-ping-slow" />
          </div>

        <Card className="relative z-10 h-full">
            <div className="space-y-6">
              {contacts.map((item) => (
                item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-[var(--primary)] transition-colors duration-300"
                  >
                    {item.icon}
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-[var(--text-secondary)]">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div key={item.title} className="flex items-center gap-4">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-[var(--text-secondary)]">{item.value}</p>
                    </div>
                  </div>
                )
              ))}
              <Button  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=Let%27s%20work%20together`}>
              Send Me an Email
            </Button>
            </div>
            
          </Card>
        </div>

        {/* RIGHT — availability panel */}
        <Card className="flex flex-col justify-center gap-6 bg-gradient-to-br from-[var(--background)] to-white">

          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="font-semibold text-[var(--text)]">Open to opportunities</span>
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            Currently taking on freelance builds and full-time roles in AI
            engineering and full-stack development. Usually replies within
            24 hours.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">Based in</p>
              <p className="font-semibold">{contact.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">Response time</p>
              <p className="font-semibold">~24 hours</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">Focus</p>
              <p className="font-semibold">AI · Full-Stack</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">Timezone</p>
              <p className="font-semibold">EET (UTC+2)</p>
            </div>
          </div>

        </Card>

      </div>
      </div>

      
    </Section>
  );
}

export default Contact;