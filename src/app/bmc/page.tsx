// Import the main component
"use client"
import { Viewer, Worker } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function Home() {
  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            height: "750px",
          }}
        >
          <Viewer fileUrl="/docs/bmc.pdf" />
        </div>
      </Worker>
    </>
  );
}
