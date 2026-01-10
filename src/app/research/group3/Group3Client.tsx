"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";
import { researchData } from "../data/researchData";
import { BlockMath } from "react-katex";

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

export default function Group3Client() {
  const router = useRouter();
  const current = researchData.group3;

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
            <p>
              The film and gaming industries have leveraged cutting-edge
              technologies for years to achieve stunning realism in digital
              characters and environments. One such tool is the Light Stage, a
              sophisticated setup used to capture how light interacts with a
              subject&apos;s face from all directions. This data enables
              incredibly realistic relighting of faces in post-production,
              allowing characters to blend seamlessly into any scene. While the
              results are extraordinary, the Light Stage&apos;s complexity and
              cost have largely confined it to high-budget productions in
              Hollywood.
            </p>
            <br />
            <p>
              At FlashStage, we asked ourselves a simple question: What if this
              powerful technology could be reimagined in a way that&apos;s
              affordable, accessible, and easy to use? Could we create a
              solution that brings professional-grade relighting capabilities
              into the hands of researchers, developers, and artists worldwide?
              The answer is a resounding yes!
            </p>
            <br />
            <h2>The Previous Method</h2>
            <br />
            <p>
              The Light Stage, developed at the University of Southern
              California, employs a dome-like structure fitted with dozens (or
              even hundreds) of LED lights and high-speed cameras. By
              illuminating a subject with precisely controlled light patterns,
              the system captures intricate details of how the skin reflects and
              scatters light. This data is essential for creating digital
              doubles or relighting the subject to match any environment, as
              demonstrated in{" "}
              <a
                href="https://www.pauldebevec.com/Research/LS/debevec-siggraph2000-high.pdf"
                className="linkColor"
              >
                &quot;Acquiring the Reflectance Field of a Human Face&quot;
              </a>{" "}
              by Debevec et al.
            </p>
            <br />
            <p>
              Despite its impressive results, building and operating a Light
              Stage is a daunting task. It requires specialized hardware,
              precise calibration, and substantial funding. This exclusivity
              inspired us to rethink the process from the ground up.
            </p>
            <br />

            <div className="inlineImage">
              <Image
                src="/Research Project Images/Group3/1.jpeg"
                alt="flashstage"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <h2>Our Method</h2>
            <br />
            <p>
              FlashStage aims to democratize relighting by creating a
              streamlined solution that delivers impressive results without
              bulky hardware or expensive setups. By using everyday tools such
              as a standard flashlight and a single camera, our method captures
              the key elements required for relighting. Here&apos;s how it
              works:
            </p>
            <br />

            <h3>1. Data Collection with a Flashlight</h3>
            <p>
              Instead of a dome filled with LEDs, we use a single flashlight to
              illuminate the subject from different angles. This simplified
              approach dramatically reduces costs and complexity.
            </p>
            <br />
            <p>
              Manual Capture Process: A flashlight is used to illuminate the
              subject from multiple angles while a camera captures images. The
              subject and camera remain stationary to ensure alignment across
              frames.
            </p>
            <br />
            <p>Key Considerations for Consistency:</p>
            <ul className="text-list">
              <li>Maintain uniform movement and distance of the flashlight.</li>
              <li>Ensure stable positioning of the subject and camera.</li>
            </ul>
            <br />

            <h3>2. Image Bright Pixel Identification and Sorting</h3>
            <p>General Process</p>
            <p>
              We start by converting every image into an array of pixel colors.
              This means for every pixel we will have a 2 dimensional index we
              can traverse and access with.
            </p>
            <br />
            <p>
              The way we calculate the brightest pixel is by computing the
              weighted average between the indices of the pixels and their
              magnitude as weight. For every image, we store it inside a
              dictionary with the image path as key and the identified bright
              pixel&apos;s index as the value.
            </p>
            <br />
            <p>
              After the bright pixel is identified we proceed to the sorting
              phase. The images should be sorted in a matrix format to work with
              environmental lights. For instance, if we have 16 images we will
              sort them to form a 4x4 matrix.
            </p>
            <br />
            <p>
              The sorting algorithm takes in a column value as one of the
              arguments, the other being a list of dictionaries(key: image path,
              value: brightest pixel&apos;s index). The algorithm begins by
              sorting all the elements in the list based on the row value of the
              brightest pixel&apos;s index. After this initial sorting, the list
              is divided into smaller groups, where the size of each group
              matches the column count provided as input. This step simplifies
              converting the list into a matrix format. Finally, within each
              group (or row of the matrix), the elements are sorted again, this
              time based on the column value of their brightest pixel&apos;s
              index.
            </p>
            <br />
            <p>The detailed breakdown is given next.</p>
            <br />
            <h4>Brightest Pixel Identification</h4>
            <p>
              Each captured frame undergoes analysis to identify the brightest
              pixel corresponding to the primary light source&apos;s direction.
              This process ensures the images are organized in a structured
              sequence, facilitating accurate alignment for relighting.
            </p>
            <br />
            <p>
              The algorithm to find the brightest pixel is based on the
              magnitude of the pixel&apos;s RGB values. The process can be
              mathematically described as:
            </p>
            <br />
            <section className="math-section">
              <p>
                1. Compute the normalized magnitude of each pixel in the image:
              </p>

              <BlockMath
                math={String.raw`
    \text{Magnitude} = \frac{\sqrt{R^2 + G^2 + B^2}}{255}
  `}
              />

              <p>
                where (R), (G), and (B) are the red, green, and blue components
                of a pixel.
              </p>

              <p>
                2. Filter out pixels below a certain brightness threshold T:
              </p>

              <BlockMath
                math={String.raw`
    \text{BrightMask}[i,j] =
    \begin{cases}
      \text{True} & \text{if } \text{Magnitude}[i,j] \ge T \\
      \text{False} & \text{otherwise}
    \end{cases}
  `}
              />

              <p>
                Only pixels satisfying the condition are retained for further
                analysis.
              </p>

              <p>
                3. Calculate the weighted centroid of the bright pixels, where
                the weight is the pixel brightness:
              </p>

              <BlockMath
                math={String.raw`
    \text{Centroid}_x =
    \frac{\sum \text{Magnitude}[i,j] \cdot i}{\sum \text{Magnitude}[i,j]}
  `}
              />

              <BlockMath
                math={String.raw`
    \text{Centroid}_y =
    \frac{\sum \text{Magnitude}[i,j] \cdot j}{\sum \text{Magnitude}[i,j]}
  `}
              />
              <BlockMath
                math={String.raw`\text{This yields the average position (Centroid}_x, \text{Centroid}_y \text{) of the brightest area.}`}
              />
            </section>
            <br />
            <p>
              4. Convert the computed coordinates to an integer to obtain the
              pixel with the brightest location since we&apos;re working with
              the index of the pixel.
            </p>
            <br />
            <h4>Sorting Images Based on Light Source Directions</h4>
            <p>
              After identifying the brightest pixel in each image, the images
              are sorted in a matrix form to align with the light source
              directions:
            </p>
            <h4>Row Sorting</h4>

            <ul className="text-list">
              <li>
                Sort the images based on the <strong>y-coordinate</strong> of
                their brightest pixel (light source position).
              </li>

              <li>Selection sort is used for simplicity:</li>
              <li>
                Iterate over the array and find the minimum x-coordinate in the
                unsorted part.
              </li>
              <li>
                Swap the current image with the image at the minimum position.
              </li>
            </ul>

            <h4>Column Sorting</h4>
            <ul className="text-list">
              <li>
                After row sorting, each row of the matrix is sorted based on the
                <strong> x-coordinate</strong> of the brightest pixel.
              </li>

              <li>Again, selection sort is applied within each row.</li>
            </ul>
            <br />
            <h4>Pseudocode</h4>

            <p>
              <strong>Brightest Pixel Identification:</strong>
            </p>

            <ul className="text-list">
              <li>Input: Image</li>
              <li>Convert image to RGB array</li>
              <li>
                Compute magnitude of each pixel:
                <br />
                <em>sqrt(R² + G² + B²) / 255</em>
              </li>
              <li>Apply threshold: keep pixels with magnitude ≥ T</li>
              <li>
                Compute weighted centroid using pixel magnitudes as weights
              </li>
              <li>
                Return rounded centroid coordinates as the brightest pixel
              </li>
            </ul>

            <p>
              <strong>Image Sorting:</strong>
            </p>

            <ul className="text-list">
              <li>
                Input: List of images with their brightest pixel coordinates
              </li>
              <li>
                Sort images by row index (y-coordinate) using selection sort
              </li>
              <li>Group images into rows</li>
              <li>For each row:</li>
              <ul className="text-list">
                <li>
                  Sort images by column index (x-coordinate) using selection
                  sort
                </li>
              </ul>
              <li>Return sorted image matrix</li>
            </ul>
            <br />
            <h3>3. Two Approaches for Relighting Images</h3>
            <br />
            <p>
              FlashStage employs two methods to achieve realistic relighting:
            </p>

            <h4>Approach 1: HDRI-Based Relighting</h4>

            <ul className="text-list">
              <li>
                <strong>Dividing HDRI into grids:</strong> The HDRI is divided
                into smaller patches, each representing a portion of the
                environmental light source.
              </li>
              <li>
                <strong>Multiplying image pixels with HDRI colors:</strong> The
                corresponding HDRI patch&apos;s average color is applied to
                simulate environmental lighting for each sorted image.
              </li>
              <li>
                <strong>Compositing:</strong> Modified images are combined to
                create a final relighted image matching the HDRI lighting
                conditions captured in the HDRI.
              </li>
            </ul>

            <div className="inlineImage">
              <Image
                src="/Research Project Images/Group3/2.jpeg"
                alt="flashstage"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <h4>Approach 2: Resized Environmental Lighting-Based Relighting</h4>

            <ul className="text-list">
              <li>
                <strong>Resizing environmental lighting:</strong> The lighting
                image is resized to match the grid size (e.g., 6×4).
              </li>
              <li>
                <strong>Pixel-level multiplication:</strong> Each captured image
                is multiplied by the corresponding pixel value from the resized
                lighting image.
              </li>
              <li>
                <strong>Output:</strong> The resulting images show how the
                subject appears under different lighting conditions.
              </li>
            </ul>

            <div className="inlineImage">
              <Image
                src="/Research Project Images/Group3/3.png"
                alt="flashstage"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <br />
            <h2>Results</h2>
            <p>
              FlashStage demonstrated promising results in creating relightable
              images with minimal equipment. Key findings include:
            </p>

            <ul className="text-list">
              <li>
                <strong>Cost-Effective Outputs:</strong> High-quality relighting
                results were achieved using simple tools like a flashlight and
                camera.
              </li>
              <li>
                <strong>Limitations:</strong> Manual setup introduced
                variability, and the algorithm occasionally struggled with
                ambiguous inputs.
              </li>
              <li>
                <strong>Comparison with Light Stage:</strong> While FlashStage
                does not match the precision of a full Light Stage, it provides
                an affordable and portable alternative suitable for many
                applications.
              </li>
            </ul>

            <div className="inlineImage">
              <Image
                src="/Research Project Images/Group3/4.png"
                alt="flashstage"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <br />
            <h2>Discussion</h2>

            <h4>What Improvements Are Being Made?</h4>
            <ul className="text-list">
              <li>
                <b>Automated capture tools:</b> Ensuring smooth and consistent
                flashlight movement.
              </li>
              <li>
                <b>Smarter Algorithms:</b> Making image sorting more accurate.
              </li>
              <li>
                <b>Better Relighting Models:</b> Using advanced techniques to
                handle tricky lighting conditions.
              </li>
              <li>
                <b>Easy-to-use Software:</b> Creating simple tools for everyone,
                even non-experts.
              </li>
            </ul>

            <h4>What Are the Limitations?</h4>
            <ul className="text-list">
              <li>
                <b>Less Precision:</b> The manual flashlight setup isn&apos;t as
                accurate as a professional Light Stage.
              </li>
              <li>
                <b>Inconsistent Results:</b> Variations in how the flashlight is
                used can cause issues.
              </li>
              <li>
                <b>Small-Scale Use:</b> It&apos;s great for smaller projects but
                may not handle very detailed or complex needs.
              </li>
            </ul>

            <h3>Why It Matters</h3>
            <p>
              FlashStage is about simplifying technology and making it
              accessible to everyone. Imagine educational researchers using
              relighting to create realistic virtual tutors or independent game
              developers crafting lifelike characters without breaking their
              budgets. The potential applications extend to healthcare, cultural
              preservation, and even social media.
            </p>
            <br />
            <p>
              By lowering the barrier to entry, FlashStage empowers innovators
              across industries to harness the power of object relighting. We
              believe this democratization will spark a new wave of creativity
              and innovation, much like how smartphones and affordable cameras
              revolutionized photography
            </p>
            <br />
            <h3>What&apos;s Next?</h3>
            <p>
              Interested in learning more or collaborating with us? Reach out to
              our team, and let&apos;s bring the magic of relighting to the
              world!
            </p>
            <br />
            <h4>
              Nahom T. Retebeo:{" "}
              <a
                className="linkColor"
                href="http://linkedin.com/in/nahomtemesgen"
              >
                LinkedIn
              </a>
            </h4>
            <h4>
              Lealem K. Alula:{" "}
              <a
                className="linkColor"
                href="https://www.linkedin.com/in/lealem-kinfe/"
              >
                LinkedIn
              </a>
            </h4>
            <h4>
              Nanati Oumer :{" "}
              <a
                className="linkColor"
                href="https://www.linkedin.com/in/nanati-oumer-7133631b0/"
              >
                LinkedIn
              </a>
            </h4>
            <h4>
              Haileyesus K. Dessie:{" "}
              <a
                className="linkColor"
                href="https://www.linkedin.com/in/haileyesus-dessie-677a86222/"
              >
                LinkedIn
              </a>
            </h4>
            <br />
            <p>Our Incredible Mentors</p>
            <h4>
              Gemmechu Hassena:{" "}
              <a
                className="linkColor"
                href="https://et.linkedin.com/in/gemmechu"
              >
                LinkedIn
              </a>
            </h4>
            <h4>
              Surafel K. Mulaw:{" "}
              <a
                className="linkColor"
                href="https://www.linkedin.com/in/surafelk/"
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
