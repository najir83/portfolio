import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Sk Najir. All rights reserved.
        </p>
        
        <div className="flex gap-4">
          <Link href="https://github.com/najir83" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/sk-najir-0b0177285" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
            <FaLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:sk.najir8392@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
