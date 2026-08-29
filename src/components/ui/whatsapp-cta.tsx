"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink, whatsappMessages } from "@/lib/site-config";

type WhatsappCtaProps = {
  children: React.ReactNode;
  message?: keyof typeof whatsappMessages;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-gradient-to-r from-brand-blue-500 via-brand-purple-500 to-brand-pink-500 text-white shadow-soft hover:shadow-card hover:brightness-105",
  secondary:
    "bg-white text-ink border border-brand-purple-100 shadow-soft hover:border-brand-purple-300",
  ghost: "bg-white/15 text-white border border-white/40 backdrop-blur-sm hover:bg-white/25",
};

const sizes = {
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

export function WhatsappCta({
  children,
  message = "default",
  variant = "primary",
  size = "md",
  icon = true,
  className,
}: WhatsappCtaProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <MessageCircle className="h-5 w-5" aria-hidden />}
      {children}
    </a>
  );
}
