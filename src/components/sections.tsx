import {
  education,
  experience,
  highlights,
  metrics,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { ProjectExplorer } from "./project-explorer";
import { Reveal } from "./reveal";

function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <p>{children}</p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" />
          {profile.availability}
        </p>
        <h1>
          Systems that
          <br />
          <span>move business.</span>
        </h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
          <a
            className="button button-secondary"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Download résumé <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Abstract integration data flow">
        <div className="portrait-reserve">
          <span className="portrait-monogram">EN</span>
          <span className="portrait-note">Portrait reserved</span>
        </div>
        <div className="flow-orbit orbit-one">
          <span />
        </div>
        <div className="flow-orbit orbit-two">
          <span />
        </div>
        <div className="flow-node node-api">API</div>
        <div className="flow-node node-data">DATA</div>
        <div className="flow-node node-cloud">CLOUD</div>
        <svg viewBox="0 0 600 640" aria-hidden="true">
          <path d="M75 500 C220 440 190 180 345 130 S530 185 525 70" />
          <path d="M40 560 C240 530 310 420 295 250 S380 45 560 115" />
        </svg>
      </div>

      <div className="hero-footer">
        <p>
          Based in <span>{profile.location}</span>
        </p>
        <p className="scroll-hint">
          Scroll to discover <span aria-hidden="true">↓</span>
        </p>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section className="section" id="expertise">
      <SectionLabel index="01">Integration expertise</SectionLabel>
      <Reveal className="section-heading-row">
        <h2>
          Connecting the systems
          <br />
          your business depends on.
        </h2>
        <p>
          From API-led connectivity to complex migrations, I build integration
          layers that keep enterprise data moving cleanly and reliably.
        </p>
      </Reveal>

      <Reveal className="skill-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <span className="card-index">0{index + 1}</span>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </Reveal>

      <Reveal className="metric-strip">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export function Work() {
  return (
    <section className="section work-section" id="work">
      <SectionLabel index="02">Selected enterprise work</SectionLabel>
      <Reveal className="work-heading">
        <h2>Integration, measured in outcomes.</h2>
        <p>Filter the work, then open a case study for the delivery details.</p>
      </Reveal>
      <Reveal>
        <ProjectExplorer projects={projects} />
      </Reveal>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <SectionLabel index="03">Experience</SectionLabel>
      <div className="timeline-layout">
        <Reveal className="timeline-intro">
          <h2>Built through practice, sharpened by scale.</h2>
          <p>
            An engineering path spanning enterprise integrations, web
            development, and people-focused leadership.
          </p>
        </Reveal>
        <Reveal className="timeline">
          {experience.map((item) => (
            <article key={`${item.organization}-${item.role}`}>
              <div className="timeline-marker" />
              <p className="timeline-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="timeline-org">{item.organization}</p>
              <p className="timeline-description">{item.description}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function BeyondDelivery() {
  return (
    <section className="section" id="about">
      <SectionLabel index="04">Beyond delivery</SectionLabel>
      <Reveal className="feature-card">
        <p className="feature-kicker">Signature achievement</p>
        <blockquote>{highlights.achievement}</blockquote>
        <div className="dataweave-mark" aria-hidden="true">
          <span>{"%dw 2.0"}</span>
          <span>{"output application/json"}</span>
          <span>{"---"}</span>
          <strong>{"payload map $"}</strong>
        </div>
      </Reveal>

      <div className="detail-grid">
        <Reveal className="detail-panel">
          <p className="detail-title">Education</p>
          {education.map((item) => (
            <article key={item.degree}>
              <span>{item.period}</span>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <strong>{item.result}</strong>
            </article>
          ))}
        </Reveal>
        <Reveal className="detail-panel split-panel">
          <div>
            <p className="detail-title">Certificates</p>
            <ul>
              {highlights.certificates.map((certificate) => (
                <li key={certificate}>{certificate}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="detail-title">Community</p>
            <ul>
              {highlights.engagements.map((engagement) => (
                <li key={engagement}>{engagement}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <SectionLabel index="05">Start a conversation</SectionLabel>
      <Reveal>
        <p className="contact-kicker">Have a system that needs to connect?</p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          Let&apos;s build the flow
          <span aria-hidden="true">↗</span>
        </a>
      </Reveal>
      <div className="contact-footer">
        <address>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            {profile.phone}
          </a>
          <span>{profile.location}</span>
        </address>
        <div className="social-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
        <p>© {new Date().getFullYear()} {profile.shortName}</p>
      </div>
    </section>
  );
}
