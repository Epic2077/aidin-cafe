import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 py-8 border-t border-foreground/10">
      <div className="text-center">
        <p className="text-sm text-foreground/60 animate-fade-in">
          طراحی و توسعه توسط{" "}
          <a
            href="https://github.com/Epic2077"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#13888C] hover:text-[#0f6b6f] transition-colors duration-300 hover:underline"
          >
            Epic2077
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
