import { FaBookOpen, FaExternalLinkAlt } from "react-icons/fa";

function Publications() {
  return (
    <section className="publications" id="publications">
      <h2>Publications</h2>

      <div className="publication-card">
        <div className="publication-icon">
          <FaBookOpen />
        </div>

        <div className="publication-content">
          <span className="publication-year">
            2025 • IEEE Conference Publication
          </span>

          <h3>
            BE-KNN: An Efficient Extension of k-Nearest Neighbors via Stable and
            Deterministic Ensemble Learning
          </h3>
        <div className="publication-badges">
          <span>IEEE</span>
          <span>Published</span>
          <span>Peer Reviewed</span>
        </div>  

          <p className="authors">
            Mohammed Montasir Abdullah • Co-authors
          </p>

          <p className="publication-description">
            This research introduces <strong>BE-KNN</strong>, an enhanced extension
            of the traditional k-Nearest Neighbors (k-NN) algorithm. The proposed
            method leverages stable and deterministic ensemble learning to improve
            classification performance while maintaining computational efficiency
            across diverse datasets.
          </p>

          <div className="publication-tags">
            <span>Machine Learning</span>
            <span>Ensemble Learning</span>
            <span>k-NN</span>
            <span>Classification</span>
            <span>IEEE</span>
          </div>

          <a
            href="https://ieeexplore.ieee.org/document/11546650"
            target="_blank"
            rel="noreferrer"
            className="publication-btn"
          >
            <FaExternalLinkAlt />
            View on IEEE Xplore
          </a>
        </div>
      </div>
    </section>
  );
}

export default Publications;