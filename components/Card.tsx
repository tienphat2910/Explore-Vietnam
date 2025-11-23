import React from "react";
import Image from "next/image";

type CardProps = {
  imageSrc: string;
  title: string;
  subtitle?: string;
  href?: string;
};

export default function Card({ imageSrc, title, subtitle, href }: CardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className="relative overflow-hidden w-[295px] h-[445px] transition-all duration-300 border-2 border-transparent hover:border-emerald-green"
      style={{
        borderRadius: "30px",
        background: "#e0e0e0",
        boxShadow: "15px 15px 30px #bebebe, -15px -15px 30px #ffffff"
      }}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover object-center"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
        style={{
          filter: "brightness(0.8) contrast(0.8)",
          objectPosition: "center top"
        }}
      />

      {/* Nội dung luôn hiển thị */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <h3 className="text-lg font-semibold drop-shadow-lg">{title}</h3>
        {subtitle && <p className="text-sm mt-1 drop-shadow-md">{subtitle}</p>}
      </div>
    </Wrapper>
  );
}
