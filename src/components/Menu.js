import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      Wellcome User
      <Link to="/:id/childRecord">add Child</Link>
    </div>
  );
}
