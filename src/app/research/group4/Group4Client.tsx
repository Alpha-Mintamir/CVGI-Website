"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";
import { researchData } from "../data/researchData";

interface ResearchItem {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function Group4Client() {
  const router = useRouter();
  const current = researchData.group4;

  const [randomCards, setRandomCards] = useState<ResearchItem[]>([]);

  useEffect(() => {
    const others = Object.values(researchData).filter(
      (r) => r.slug !== current.slug
    );
    const shuffled = [...others].sort(() => Math.random() - 0.5).slice(0, 2);
    setRandomCards(shuffled);
  }, [current.slug]);

  return (
    <main className={`${roboto.className} page`}>
      {/* LEFT FIXED ACTIONS */}
      <aside className="actions">
        <button onClick={() => router.push("/research")} className="btn back">
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
        <button
          className="btn scroll"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          <span className="btn-text">↓ Bottom</span>
          <span className="btn-icon">↓</span>
        </button>
      </aside>

      {/* BLOG */}
      <article className="blog">
        <div className="blog-container">
          <header className="header">
            <h1>{current.title}</h1>
            <p className="subtitle">{current.subtitle}</p>
            <span className="slug">/{current.slug}</span>
          </header>

          <div className="hero">
            <Image src={current.image} alt={current.title} fill priority />
          </div>

          {/* CONTENT */}
          <section className="content">
            <h2>1. Introduction</h2>
            <br />
            <p>
              In recent years, novel view synthesis has emerged as a
              groundbreaking area in the field of computer vision and AI. Novel
              view synthesis represents the generation of images and videos in a
              new perspective or point of view given an input image or video.
              NVS1 is a concept that has been studied for a while now; however,
              it was in the late 2010s and early 2020s that it was tackled with
              significant success due to advances made in machine learning. The
              technology holds big promise in various fields, such as realistic
              virtual environments, gaming, and filmmaking. In general, fields
              that relate to computer graphics are positively impacted by the
              boom of NVS.
            </p>
            <br />
            <p>
              NVS has gone through significant changes since its inception.
              Engineers have solved a list of problems it had over the years; we
              will see some of these problems in other sections of this post.
              However, one issue that has yet to be solved in NVS is achieving
              video consistency throughout the frames of generated output
              videos.
            </p>
            <br />
            <p>
              Video inconsistency is a broad term that we used to represent
              problems encountered in NVS-generated videos. The problems include
              changes in visual appearances of objects in the scene, unusual
              transitions in the scenes themselves, flickering backgrounds,
              inconsistent frames, and more. Solving video inconsistency in
              Novel View Synthesis is the core objective of our research. In
              this post, we will explore the phenomenon of video inconsistency,
              show how it is a major unsolved problem in the field of NVS, and
              suggest potential solutions to solve it.
            </p>
            <br />
            <br />
            <h2>2. Literature Review</h2>
            <br />
            <p>
              For this research, we studied two diffusion models that have
              tackled NVS before. Traditionally, NVS was heavily reliant on
              dense multi-view captures taken from a lot of angles, which were
              necessary for the models to have reliable outputs. However, this
              method has practical limitations in scenarios with sparse input
              images. Some of the early steps taken to overcome this challenge
              utilize a regression-based NVS2 method. They require extensive
              training and are also limited to specific domains like indoor
              scenes and object-focused input images. These limitations hinder
              the practicability of NVS and were also gaining low-fidelity
              results. Therefore, researchers and engineers came up with a
              better solution.
            </p>
            <br />
            <p>
              Diffusion-based NVS have recently emerged as a robust alternative
              for handling NVS tasks. They use generative models to manage
              scenes that can work on sparse input images. A lot of models have
              tried to increase the accuracy of these diffusion-based models by
              introducing their specific fixes. During our research, we studied
              two of these models.
            </p>
            <br />
            <h3>2.1 ZeroNVS</h3>
            <p>
              <b>
                Zero-Shot 360-Degree View Synthesis from a Single Image Model3
              </b>{" "}
              is designed to generate realistic 360-degree views of a scene from
              a single input image. This image can be a real-world image from
              any environment. The model is built to handle scenarios that
              include images with multiple objects and diverse and intricate
              backgrounds. The model generates a series of realistic views of
              the scene from different angles. These views represent how the
              input scene would appear if observed from varying perspectives,
              ensuring a comprehensive understanding of its 3D structure.
            </p>
            <br />
            <p>
              The model was trained on object-centric images that have real
              backgrounds instead of controlled indoor scenes, natural
              scenarios, and indoor/outdoor home tours. The camera perspective
              movement includes 3D rotation, 3D translation, and camera FoV. And
              the model addresses scale ambiguity using depth quantities. Then
              the diffusion model is distilled in NeRF4, optimizing a 3D
              representation to match the diffusion model&apos;s 2D scene.
            </p>
            <br />
            <p>
              The model introduced zero-shot performance in NVS, generating new
              views from previously untrained images. It also managed to add
              background diversity and scale handling. The limitations of this
              model are pose control and various inconsistencies in occluded
              regions. The model introduces various artifacts in increasingly
              complicated scenes as well. Its performance is also poor, taking
              up a large amount of compute to run an inference.
            </p>
            <br />

            <h3>2.2 ViewCrafter</h3>
            <p>
              ViewCrafter is the second model we studied. This model is
              relatively recent and state-of-the-art when it comes to NVS. It
              was created to address some of the key problems that previous
              models such as ZeroNVS exhibited. The major factor that sets it
              apart from its predecessors is the inclusion of point cloud-based
              representations of the input image. They provide explicit 3D
              priors that enable better spatial and pose control. The model also
              utilizes video diffusion models trained on large-scale datasets
              for plausible and consistent video content generation.
            </p>
            <br />
            <p>
              The iterative view synthesis strategy is the basis for how the
              model generates these new views. It iteratively synthesizes novel
              views and updates the point cloud to reveal occlusions and expand
              coverage. In addition to that, the camera pose control is robust,
              as the model predicts the optimal poses to maximize coverage and
              minimize artifacts.
            </p>
            <br />
            <p>
              Some of its applications are real-time rendering. The model
              optimizes a 3D-GS representation from generated views. The
              diffusion model integrated also allows text-to-3D generation. The
              model addresses the occlusion limitation past models had due to
              the iterative process and point cloud inclusion.
            </p>
            <br />
            <p>
              The model has its limitations. Primarily, generation of extreme
              views over large perspective angle changes remains challenging
              with limited 3D priors or distorted point clouds. It is also
              computationally expensive due to the denoising and computational
              overheads. Additionally, in scenes that exhibit relatively complex
              structure and various objects, the model generates inconsistencies
              and artifacts that were not in the input image.
            </p>
            <br />
            <br />

            <h2>3. Materials and Methods</h2>
            <br />
            <h3>3.1 Dataset Selection</h3>
            <p>
              We utilized a combination of datasets featuring both simple and
              complex scenes to evaluate the performance of novel view synthesis
              (NVS) models. The datasets included:
            </p>

            <ul className="text-list">
              <li>
                <strong>Simple backgrounds:</strong> static environments with a
                single object or minimal movement (e.g., landscapes or
                stationary interiors).
              </li>
              <li>
                <strong>Complex scenes:</strong> dynamic environments containing
                multiple interacting objects, varied lighting, and partial
                occlusion, including:
                <ul className="text-list">
                  <li>Human interactions in indoor settings</li>
                  <li>Balloons of various colors in motion</li>
                  <li>Birds in flight within natural scenes</li>
                </ul>
              </li>
            </ul>
            <br />
            <h3>3.2 Models Evaluated</h3>
            <ul className="text-list">
              <li>
                <strong>Viewcrafter: </strong> Selected for its recent
                advancements and explicit claims of achieving consistency in
                novel views.
              </li>
              <li>
                <strong>ZeroNVS: </strong> Chosen for its focus on NVS in
                complex environments, despite prior reports of inconsistency
                issues.
              </li>
            </ul>
            <br />
            <h3>3.3 Experimental Setup</h3>
            <p>We conducted tests under the following scenarios:</p>

            <ul className="text-list">
              <li>
                <strong>Image-to-Video:</strong> Assessing frame-to-frame
                consistency when transitioning from a single input image to a
                synthesized video.
              </li>
              <li>
                <strong>Video-to-Video:</strong> Evaluating multi-frame
                consistency for novel view synthesis when generating videos from
                video inputs.
              </li>
            </ul>

            <p>
              To test consistency, we applied specific view synthesis
              conditions, including rotations:
            </p>

            <ul className="text-list">
              <li>
                <strong>Vertical rotation (X-axis):</strong> 0°
              </li>
              <li>
                <strong>Horizontal rotation (Y-axis):</strong> ±10°
              </li>
              <li>
                <strong>Zoom in and out (Z-axis):</strong> ±40°
              </li>
            </ul>

            <p>
              Each frame was generated independently from a defined angle,
              without referencing previously generated frames. This approach was
              intended to minimize the effect of the randomness of the diffusion
              model, which operates on probability distributions. The assumption
              was that generating each frame independently from its
              corresponding temporal frame would reduce the probability of
              inconsistencies. However, this lack of contextual referencing
              resulted in significant consistency issues.
            </p>
            <br />
            <h3>3.4 Consistency Metrics</h3>
            <p>We employed the following measures to evaluate consistency:</p>

            <ul className="text-list">
              <li>
                <strong>Visual inspection</strong> for issues such as:
                <ul className="text-list">
                  <li>Orientation and size changes in objects</li>
                  <li>Disappearance of key subjects</li>
                  <li>
                    Distortion of background elements, lighting, or facial
                    features
                  </li>
                  <li>Creation of irrelevant artifacts</li>
                </ul>
              </li>
            </ul>
            <br />
            <h3>
              3.5 Future Work: Enhancing Conditional Consistency in Novel View
              Synthesis
            </h3>
            <p>
              We plan to refine the consistency of NVS models by implementing a
              conditional consistency mechanism that evaluates and rejects
              inconsistent outputs. This approach is designed to address the
              challenges identified in the current study, particularly the lack
              of contextual referencing between independently generated frames.
            </p>
            <br />
            <br />

            <h2>4. Results</h2>
            <br />
            <h3>4.1 Image-to-Video Evaluation</h3>
            <h4>Observed Inconsistencies:</h4>
            <p>
              Birds Example (Rotations: Vertical = 0°, Horizontal = ±10°, Zoom =
              -40°)
            </p>

            <ul className="text-list">
              <li>Birds behaving contrary to input prompts</li>
              <ul className="text-list">
                <li>One bird feeding on leaves in unprompted frames</li>
                <li>Movement of birds in opposite directions without input</li>
              </ul>
              <li>
                Disappearance of the right bird and unexpected landing of the
                left bird on a leaf in the final frame
              </li>
            </ul>
            <div className="inlineImage">
              <Image
                src="/Research Project Images/Group4/1.png"
                alt="inconsistency example"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="inlineImage">
              <Image
                src="/Research Project Images/Group4/2.gif"
                alt="inconsistency example"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h4>
              Balloons Example (Rotations: Vertical = 0°, Horizontal = ±10°,
              Zoom = ±40°)
            </h4>

            <ul className="text-list">
              <li>
                Disappearance of balloons (red, pink, blue) and creation of
                artifacts (e.g., yellow and green)
              </li>
              <li>Inconsistent color changes and unexpected movements</li>
              <li>New balloons appearing without input prompts</li>
            </ul>
            <div className="inlineImage">
              <Image
                src="/Research Project Images/Group4/3.png"
                alt="inconsistency example"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="inlineImage">
              <Image
                src="/Research Project Images/Group4/4.png"
                alt="inconsistency example"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <br />
            <h3>4.2 Video-to-Video Evaluation</h3>

            <p>Human characters exhibited the following issues:</p>

            <ul className="text-list">
              <li>Incorrect orientation of subjects</li>
              <li>
                Disappearance of secondary characters in subsequent frames
              </li>
              <li>
                Addition of irrelevant objects such as cabinets and oven trays
              </li>
              <li>
                Distortion in facial features and inconsistent human sizes
              </li>
            </ul>

            <p>
              We selected three frames from a video to conduct this experiment.
            </p>
            <div className="inlineImage">
              <Image
                src="/Research Project Images/Group4/5.png"
                alt="inconsistency example"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <br />
            <h3>4.3 Comparison of Models</h3>

            <h4>ViewCrafter</h4>
            <ul className="text-list">
              <li>Strong performance in static scenes</li>
              <li>Struggles with occlusion and dynamic elements</li>
            </ul>

            <h4>ZeroNVS</h4>
            <ul className="text-list">
              <li>Handles complex backgrounds moderately well</li>
              <li>Introduces severe inconsistencies in video outputs</li>
              <li>
                <strong>Resource Usage:</strong> Requires significant GPU and
                RAM resources, posing scalability challenges
              </li>
            </ul>
            <br />
            <h3>4.4 Key Insights</h3>

            <p>
              Both models demonstrate significant limitations in maintaining
              consistency for dynamic, complex scenes.
            </p>

            <ul className="text-list">
              <li>Object disappearance and unnatural movements</li>
              <li>Inconsistent lighting and distortion of scene objects</li>
              <li>
                Need for improvements in NVS models for real-world video
                synthesis
              </li>
            </ul>

            <p>
              Both image-to-video and video-to-video evaluations revealed object
              disappearance, inconsistent lighting, and unexpected artifacts
              across frames.
            </p>
            <br />
            <br />
            <h2>5. Analysis</h2>
            <br />
            <p>
              This project investigated the consistency and reliability of novel
              view synthesis (NVS) models under both image-to-video and
              video-to-video generation settings, with a particular focus on
              dynamic, real-world scenarios.
            </p>
            <br />
            <p>
              The findings indicate that while current NVS models excel at
              generating visually appealing single frames, they lack robust
              mechanisms for preserving object identity, spatial coherence, and
              semantic consistency across time. Common failure modes included
              object disappearance, unnatural motion, inconsistent lighting, and
              structural distortions. These issues were amplified in dynamic,
              real-world scenes where temporal dependencies are essential.
            </p>
            <br />
            <p>
              The decision to generate frames independently—though intended to
              reduce diffusion randomness—ultimately exposed a critical
              limitation: the absence of temporal conditioning leads to
              significant degradation in consistency. This suggests that future
              NVS systems must incorporate explicit temporal constraints or
              memory mechanisms to bridge the gap between per-frame visual
              realism and coherent video synthesis.
            </p>
            <br />
            <p>
              Overall, the analysis underscores the need for improved NVS
              architectures that integrate temporal awareness, stronger
              object-level representations, and more efficient resource
              utilization to support reliable novel view synthesis in complex,
              real-world applications.
            </p>
            <br />
            <h2>Glossary</h2>
            <ul className="text-list">
              <li>
                <strong>NVS</strong>: Novel View Synthesis
              </li>
              <li>
                <strong>NeRF</strong>: Neural Radiance Fields
              </li>
              <li>
                <strong>ZeroNVS</strong>: Zero-shot 360-degree synthesis
              </li>
            </ul>
            <br />
            <h4>
              Firi Berhane:{" "}
              <a
                className="linkColor"
                href="https://www.linkedin.com/in/firi-berhane-7b3a05232/"
              >
                LinkedIn
              </a>
            </h4>
            <h4>
              Hana Kassie:{" "}
              <a
                className="linkColor"
                href="https://www.linkedin.com/in/hana-kassie-19b326227/"
                target="_blank"
              >
                LinkedIn
              </a>
            </h4>
            <h4>
              Joshua Mekuriaw:{" "}
              <a
                className="linkColor"
                href="https://www.linkedin.com/in/joshua-tadesse-aa8081225/"
                target="_blank"
              >
                LinkedIn
              </a>
            </h4>
            <h4>
              Kushal Kedia:{" "}
              <a
                className="linkColor"
                href="https://www.linkedin.com/in/kushal-kedia/"
                target="_blank"
              >
                LinkedIn
              </a>
            </h4>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <h3>Other Research</h3>
          <div className="cards">
            {randomCards.map((r) => (
              <div
                key={r.slug}
                className="card"
                onClick={() => router.push(`/research/${r.slug}`)}
              >
                <div className="cardImage">
                  <Image src={r.image} alt={r.title} fill />
                </div>
                <div className="cardText">
                  <strong className="cardTitle">{r.title}</strong>
                  <span className="cardSubtitle">{r.subtitle}</span>
                </div>
              </div>
            ))}

            <button
              className="view-all-text-btn"
              onClick={() => router.push("/research")}
            >
              View All Researches →
            </button>
          </div>
        </aside>
      </article>

      <style jsx>{`
        .page {
          background: #f8fafc;
          padding: 80px 0 160px;
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

        .header h1 {
          font-size: 48px;
          color: #000;
          text-align: left;
          margin-bottom: 8px;
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
          color: #000;
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
        }

        .content {
          font-size: 19px;
          line-height: 1.85;
          color: #000;
        }
        .high-contrast-bold {
          color: #000;
          font-weight: 700;
        }
        .text-list {
          margin: 24px 0;
          padding-left: 20px;
          color: #000;
        }
        .text-list li {
          margin-bottom: 12px;
        }

        .inlineImage {
          position: relative;
          height: 450px;
          margin: 48px 0;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.05);
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
          transition: opacity 0.3s ease;
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
          font-size: 18px;
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
          color: #000;
          font-size: 14px;
        }
        .linkColor {
          color: #006effff;
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
          width: fit-content;
          transition: all 0.2s ease;
        }
        .view-all-text-btn:hover {
          color: #000;
          transform: translateX(5px);
        }

        @media (max-width: 1500px) and (min-width: 701px) {
          .actions {
            opacity: 0.3;
          }
          .actions:hover {
            opacity: 1;
          }
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
            justify-content: flex-start;
            align-items: center;
          }
          .card {
            width: 300px;
          }
          .view-all-text-btn {
            margin-left: 20px;
            padding: 0;
          }
        }

        @media (max-width: 700px) {
          .actions {
            bottom: 24px;
            left: 20px;
            gap: 12px;
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
            margin-left: 0;
            padding: 0 20px;
          }
          .header h1 {
            font-size: 32px;
            text-align: center;
          }
          .subtitle,
          .slug {
            text-align: center;
          }
          .hero {
            height: 280px;
          }
          .view-all-text-btn {
            margin-left: 0;
            margin-top: 10px;
          }
        }
      `}</style>
    </main>
  );
}
