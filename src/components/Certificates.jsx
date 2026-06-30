// import { useState } from "react";
// import { motion } from "framer-motion";
// import certificates from "../data/certificates";

// function Certificates() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <section className="certificates" id="certificates">
//       <h2>Certificates</h2>

//       <div className="certificate-grid">
//         {certificates.map((certificate, index) => (
//           <motion.div
//             key={index}
//             className="certificate-card"
//             whileHover={{ scale: 1.03 }}
//             onClick={() => setSelected(certificate)}
//           >
//             <img
//               src={certificate.image}
//               alt={certificate.title}
//             />

//             <div className="certificate-info">
//               <h3>{certificate.title}</h3>

//               <p>{certificate.issuer}</p>

//               <span>{certificate.year}</span>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {selected && (
//         <div
//           className="certificate-modal"
//           onClick={() => setSelected(null)}
//         >
//           <div
//             className="certificate-modal-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="close-btn"
//               onClick={() => setSelected(null)}
//             >
//               ✕
//             </button>

//             <img
//               src={selected.image}
//               alt={selected.title}
//             />

//             <h3>{selected.title}</h3>

//             <p>{selected.issuer}</p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Certificates;
import certificates from "../data/certificates";
import { FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {
  return (
    <section className="certificates" id="certificates">

      <h2>Certificates</h2>

      <div className="certificates-grid">

        {certificates.map((certificate, index) => (

          <div className="certificate-card" key={index}>

            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-image"
            />

            <h3>{certificate.title}</h3>

            <p>{certificate.issuer}</p>

            <span className="certificate-year">
              {certificate.year}
            </span>

            <a
              href={certificate.image}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              <FaExternalLinkAlt />
              View Certificate
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certificates;