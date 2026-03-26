// pages/Certificates.jsx
import SectionHeader from "../components/ui/SectionHeader";
import CertificateCarousel from "../components/CertificateCarousel";

export default function Certificates() {
  return (
    <section className="min-h-screen px-6 py-28 relative overflow-hidden">
      {/* ambient glow */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%,#7c3aed,transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Credentials"
          title={
            <>
              My{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg,#06b6d4,#a78bfa)" }}
              >
                Certificates
              </span>
            </>
          }
          sub="Industry-recognized certifications validating my expertise."
        />

        <CertificateCarousel />
      </div>
    </section>
  );
}
