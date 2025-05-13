import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 mb-10 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy;{new Date().getFullYear()} Pedro Moreno. Todos los derechos
        reservados .
      </small>
    </footer>
  );
}
