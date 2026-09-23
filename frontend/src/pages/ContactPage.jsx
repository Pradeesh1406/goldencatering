import { ArrowUpRight, Mail, Phone, MessageCircle } from "lucide-react";

function ContactPage() {
  const phoneNumber = "8754698739";
  const email = "thangapandian0905@gmail.com"; // Replace with client's real email

  const whatsappMessage = encodeURIComponent(
    "Hello Golden Catering Services, I would like to know more about your catering services."
  );

  return (
    <main className="min-h-screen bg-[#080706] text-white">

      {/* ==================================================
          HERO
      ================================================== */}
      <section className="relative overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40 lg:px-12">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

        <div className="relative mx-auto w-full max-w-8xl">

          {/* Label */}
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Contact
            </span>

            <span className="h-px w-16 bg-[#D4AF37]/60" />
          </div>


          {/* Heading */}
          <h1 className="max-w-5xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Let’s make your
            <span className="block italic text-[#D4AF37]">
              celebration memorable.
            </span>
          </h1>


          {/* Description */}
          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#B9AD9B] sm:text-base sm:leading-8">
            Have an event coming up? Get in touch with Golden Catering
            Services to discuss your menu, guest count and catering
            requirements.
          </p>

        </div>
      </section>


      {/* ==================================================
          CONTACT DETAILS
      ================================================== */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">

        <div className="mx-auto w-full max-w-8xl">

          <div className="grid gap-6 md:grid-cols-3">


            {/* ==================================================
                PHONE
            ================================================== */}
            <a
              href={`tel:+91${phoneNumber}`}
              className="group border border-white/10 bg-[#100D09] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/40 sm:p-9"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30">
                  <Phone
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#D4AF37]"
                  />
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-[#756B5D] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D4AF37]"
                />

              </div>


              <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Call Us
              </p>

              <h2 className="mt-3 font-serif text-2xl text-[#E8E0D2] sm:text-3xl">
                +91 {phoneNumber}
              </h2>

              <p className="mt-3 text-sm text-[#756B5D]">
                Tap to call us
              </p>

            </a>


            {/* ==================================================
                EMAIL
            ================================================== */}
            <a
              href={`mailto:${email}`}
              className="group border border-white/10 bg-[#100D09] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/40 sm:p-9"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30">
                  <Mail
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#D4AF37]"
                  />
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-[#756B5D] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D4AF37]"
                />

              </div>


              <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Email Us
              </p>

              <h2 className="mt-3 break-all font-serif text-xl text-[#E8E0D2] sm:text-2xl">
                {email}
              </h2>

              <p className="mt-3 text-sm text-[#756B5D]">
                Tap to send an email
              </p>

            </a>


            {/* ==================================================
                WHATSAPP
            ================================================== */}
            <a
              href={`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#D4AF37]/30 bg-[#D4AF37] p-7 text-[#080706] transition-all duration-500 hover:-translate-y-1 sm:p-9"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#080706]/20">
                  <MessageCircle
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>

                <ArrowUpRight
                  size={20}
                  className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </div>


              <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.3em]">
                WhatsApp
              </p>

              <h2 className="mt-3 font-serif text-3xl">
                Chat With Us
              </h2>

              <p className="mt-3 text-sm opacity-70">
                Tap to start a WhatsApp conversation
              </p>

            </a>

          </div>

        </div>

      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}
      <section className="border-t border-white/10 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">

        <div className="mx-auto max-w-8xl">

          <div className="relative overflow-hidden border border-[#D4AF37]/20 bg-[#100D09] px-6 py-14 sm:px-12 sm:py-20 lg:px-16">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

            <div className="relative max-w-3xl">

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Golden Catering Services
              </span>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Your occasion.
                <span className="block italic text-[#D4AF37]">
                  Our responsibility.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#B9AD9B] sm:text-base sm:leading-8">
                From family functions to weddings and special celebrations,
                speak with us about your catering requirements.
              </p>


              <a
                href={`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-4 border-b border-[#D4AF37] pb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37] transition-colors hover:text-white"
              >
                Message on WhatsApp

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ContactPage;