import { cn } from "@/lib/utils";

interface AboutSectionProps {
  className?: string;
  id?: string;
}

export function AboutSection({ className, id }: AboutSectionProps = {}) {
  return (
    <section
      id={id}
      className={cn(
        "container mx-auto flex flex-col items-center gap-6 px-4 text-center sm:gap-12 pb-36 2xl:pb-48",
        className
      )}
    >
      {/* Badge / Label */}
      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70">
        About Us
      </span>

      {/* Main text block */}
      <div className="mx-auto max-w-3xl">
        {/* Paragraph 1 */}
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Since 2009, MeetYourPsychic.com has delivered millions of successful
          readings to clients seeking clarity, direction, and insight. We connect
          individuals with experienced psychic advisors who provide tarot
          readings, intuitive guidance, and spiritual insight with
          professionalism and discretion. Our mission is to offer a trusted and
          supportive environment where you can explore important life questions
          with confidence. Whether you are navigating love, career decisions,
          personal growth, or significant transitions, our advisors are committed
          to delivering thoughtful and grounded guidance. Every reading on
          MeetYourPsychic.com is designed to provide perspective rather than
          pressure. We believe psychic insight should empower you to think
          clearly, act responsibly, and make informed decisions about your
          future.
        </p>

        {/* Divider */}
        <div
          role="separator"
          className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Sub-heading */}
        <h3 className="mb-4 font-header font-serif text-xl text-white">
          About the Digital Tarot Experience
        </h3>

        {/* Paragraph 2 */}
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          This interactive tarot experience uses artificial intelligence to
          interpret traditional card symbolism and provide reflective insights.
          It is designed as a tool for personal contemplation and
          self-exploration, offering a modern take on the ancient practice of
          tarot reading.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
