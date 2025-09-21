import React, { useState } from "react";
function StudentCard({ name, age, lop }) {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      {" "}
      <h3>{name}</h3>{" "}
      <button onClick={() => setShowDetail(!showDetail)}>
        {" "}
        {showDetail ? "Ẩn chi tiết" : "Xem chi tiết"}{" "}
      </button>{" "}
      {showDetail && (
        <div style={{ marginTop: "10px" }}>
          {" "}
          <p>Tuổi: {age}</p> <p>Lớp: {lop}</p>{" "}
        </div>
      )}{" "}
    </div>
  );
}
export default StudentCard;
