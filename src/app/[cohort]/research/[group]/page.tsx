"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface ResearchProject {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function ResearchDetailPage() {
  const router = useRouter();
  const params = useParams();
  const cohort = params.cohort as string;
  const group = params.group as string;

  const [project, setProject] = useState<ResearchProject | null>(null);
  const [otherProjects, setOtherProjects] = useState<ResearchProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/data/${cohort}/research.json`);
        if (!res.ok) {
          setLoading(false);
          return;
        }
        const data: ResearchProject[] = await res.json();
        const current = data.find((p) => p.slug === group);
        const others = data.filter((p) => p.slug !== group).slice(0, 3);
        setProject(current || null);
        setOtherProjects(others);
      } catch {
        console.error("Failed to fetch research data");
      }
      setLoading(false);
    }
    fetchData();
  }, [cohort, group]);

  if (loading) {
    return (
      <main className="page">
        <div className="loading">Loading...</div>
        <style jsx>{`
          .page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .loading {
            font-size: 24px;
            color: #3a8e9c;
          }
        `}</style>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="page">
        <div className="not-found">
          <h1>Research Project Not Found</h1>
          <Link href={`/${cohort}/research`} className="back-link">
            ← Back to Research Projects
          </Link>
        </div>
        <style jsx>{`
          .page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .not-found {
            text-align: center;
          }
          .not-found h1 {
            font-size: 32px;
            color: #3a8e9c;
            margin-bottom: 20px;
          }
          .back-link {
            color: #0e7490;
            font-size: 18px;
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="page">
      {/* Navigation Actions */}
      <aside className="actions">
        <button onClick={() => router.push(`/${cohort}/research`)} className="btn back">
          <span className="btn-text">← Back</span>
          <span className="btn-icon">←</span>
        </button>
        <button
          className="btn scroll"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="btn-text">↑ Top</span>
          <span className="btn-icon">↑</span>
        </button>
      </aside>

      {/* Blog Content */}
      <article className="blog">
        <div className="blog-container">
          <header className="header">
            <span className="cohort-badge">Cohort {cohort}</span>
            <h1>{project.title}</h1>
            <p className="subtitle">{project.subtitle}</p>
            <span className="slug">/{project.slug}</span>
          </header>

          <div className="hero">
            <Image src={project.image} alt={project.title} fill priority style={{ objectFit: "contain" }} />
          </div>

          <section className="content">
            <p className="placeholder-text">
              Research content for this project will be added here. This is a placeholder for the detailed blog post about this research project.
            </p>
            <br />
            <p>
              <strong>Team Members:</strong> {project.subtitle}
            </p>
          </section>
        </div>

        {/* Sidebar */}
        {otherProjects.length > 0 && (
          <aside className="sidebar">
            <h3>Other Research</h3>
            <div className="cards">
              {otherProjects.map((p) => (
                <div
                  key={p.slug}
                  className="card"
                  onClick={() => router.push(`/${cohort}/research/${p.slug}`)}
                >
                  <div className="cardImage">
                    <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className="cardText">
                    <strong className="cardTitle">{p.title}</strong>
                    <span className="cardSubtitle">{p.subtitle}</span>
                  </div>
                </div>
              ))}
              <button
                className="view-all-text-btn"
                onClick={() => router.push(`/${cohort}/research`)}
              >
                View All Researches →
              </button>
            </div>
          </aside>
        )}
      </article>

      <style jsx>{`
        .page {
          background: #f8fafc;
          padding: 120px 0 160px;
          min-height: 100vh;
        }

        .blog {
          max-width: 1600px;
          margin-left: 18%;
          padding: 0 40px;
          position: relative;
        }

        .blog-container {
          max-width: 1040px;
          margin: 0;
        }

        .cohort-badge {
          display: inline-block;
          background: #3a8e9c;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .header h1 {
          font-size: 48px;
          color: #000;
          text-align: left;
          margin-bottom: 8px;
          font-family: "Monomaniac One", sans-serif;
        }
        .subtitle {
          color: #0e7490;
          font-size: 22px;
          text-align: left;
          font-weight: 500;
        }
        .slug {
          display: block;
          font-size: 14px;
          color: #666;
          text-align: left;
          margin-top: 8px;
          margin-bottom: 48px;
        }

        .hero {
          position: relative;
          height: 560px;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 60px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          background: #e9ecef;
        }

        .content {
          font-size: 19px;
          line-height: 1.85;
          color: #000;
          font-family: "Ubuntu Sans", sans-serif;
        }

        .placeholder-text {
          color: #666;
          font-style: italic;
        }

        /* ACTIONS */
        .actions {
          position: fixed;
          bottom: 32px;
          left: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 100;
        }
        .btn {
          border-radius: 8px;
          padding: 12px 20px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .btn-icon {
          display: none;
        }
        .btn.back {
          background: #000;
          color: #fff;
        }
        .btn.scroll {
          background: #0e7490;
          color: #fff;
        }

        /* SIDEBAR */
        .sidebar {
          position: fixed;
          top: 50%;
          right: 60px;
          transform: translateY(-50%);
          width: 280px;
          z-index: 20;
        }
        .sidebar h3 {
          margin-bottom: 20px;
          color: #000;
          font-size: 20px;
        }
        .cards {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .card {
          cursor: pointer;
          transition: transform 0.2s;
        }
        .card:hover {
          transform: translateY(-4px);
        }
        .cardImage {
          width: 100%;
          height: 160px;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        .cardTitle {
          display: block;
          margin-top: 12px;
          color: #0e7490;
          font-size: 16px;
        }
        .cardSubtitle {
          display: block;
          color: #666;
          font-size: 14px;
        }

        .view-all-text-btn {
          background: transparent;
          border: none;
          color: #0e7490;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          padding: 10px 0;
          text-align: left;
          transition: all 0.2s ease;
        }
        .view-all-text-btn:hover {
          color: #000;
          transform: translateX(5px);
        }

        @media (max-width: 1700px) {
          .blog {
            margin-left: auto;
            margin-right: auto;
            max-width: 1040px;
          }
          .sidebar {
            position: relative;
            top: 0;
            right: 0;
            transform: none;
            width: 100%;
            margin: 100px 0 0;
            padding-top: 40px;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
          }
          .cards {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 24px;
          }
          .card {
            width: 300px;
          }
        }

        @media (max-width: 700px) {
          .page {
            padding: 100px 0 80px;
          }
          .actions {
            bottom: 24px;
            left: 20px;
            opacity: 0.6;
          }
          .btn {
            width: 42px;
            height: 42px;
            padding: 0;
            border-radius: 50%;
          }
          .btn-text {
            display: none;
          }
          .btn-icon {
            display: block;
          }
          .blog {
            padding: 0 20px;
          }
          .header h1 {
            font-size: 28px;
            text-align: center;
          }
          .subtitle,
          .slug {
            text-align: center;
          }
          .hero {
            height: 280px;
          }
          .card {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}

