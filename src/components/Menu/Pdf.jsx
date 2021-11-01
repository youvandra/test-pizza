import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "assets/nft-pizza.pdf";
export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  //   const { pdf } = props;

  return (
    <>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div
        style={{
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "white",
          }}
        >
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button
          type="button"
          style={{
            fontSize: "18px",
            padding: "8px",
            color: "white",
            backgroundColor: pageNumber <= 1 ? "gray" : "orange",
            borderRadius: "5px",
            marginRight: "5px",
            borderColor: "none !important",
            border: "unset",
          }}
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          style={{
            fontSize: "18px",
            padding: "8px",
            color: "white",
            backgroundColor: pageNumber >= numPages ? "gray" : "orange",
            borderRadius: "5px",
            borderColor: "none !important",
            border: "unset",
          }}
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
